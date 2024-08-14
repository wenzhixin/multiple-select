import Constants from './constants/index.js'
import VirtualScroll from './virtual-scroll/index.js'
import {
  compareObjects,
  findByParam,
  removeDiacritics,
  removeUndefined,
  setDataKeys,
  toRaw,
  parseStyleValue
} from './utils/index.js'
import locales from './locale/index.js'

class MultipleSelect {
  static Constants = { ...Constants }

  static defaultOptions = {
    ...Constants.DEFAULTS,
    LOCALES: {
      ...Constants.DEFAULTS.LOCALES,
      ...locales
    }
  }

  constructor ($el, options) {
    this._events = {} // private
    if (
      !($el instanceof HTMLElement) ||
      $el.tagName !== 'SELECT'
    ) {
      throw new Error('the $el must be an HTMLElement and a select tag!')
    }
    this.$el = $el
    this.options = {
      ...MultipleSelect.defaultOptions,
      ...options
    }
    // check existing old entry
    if ($el._MultipleSelect) {
      $el._MultipleSelect.destroy()
    }
    $el._MultipleSelect = this
    this.init()
  }

  init () {
    this.initLocale()
    this.initContainer()
    this.initData()
    this.initSelected(true)
    this.initFilter()
    this.initDrop()
    this.initView()
    this.options.onAfterCreate()
  }

  initLocale () {
    if (this.options.locale) {
      const parts = this.options.locale.split(/-|_/)

      parts[0] = parts[0].toLowerCase()
      if (parts[1]) {
        parts[1] = parts[1].toUpperCase()
      }
      const locales = MultipleSelect.defaultOptions.LOCALES
      const locale = locales[this.options.locale] || locales[parts.join('-')] || locales[parts[0]]

      if (locale) {
        Object.assign(this.options, locale)
      }
    }
  }

  initContainer () {
    const el = this.$el
    const name = el.getAttribute('name') || this.options.name || ''

    if (this.options.classes) {
      el.classList.add(...this.options.classes.split(' '))
    }
    if (this.options.classPrefix) {
      el.classList.add(...this.options.classPrefix.split(' '))

      if (this.options.size) {
        el.classList.add(...`${this.options.classPrefix}-${this.options.size}`.split(' '))
      }
    }

    // config in dataset
    for (const [k, v] of Object.entries(el.dataset)) {
      if (this.options.hasOwnProperty(k)) {
        if (typeof this.options[k] === 'boolean') {
          this.options[k] = !['', '0', 'false'].includes(v.toLowerCase())
        }
        this.options[k] = v
      }
    }

    // hide select element
    this.$el.style.display = 'none'

    // label element
    this.$label = el.closest('label')
    if (!this.$label && el.id) {
      this.$label = document.querySelector(`label[for="${el.id}"]`)
    }
    if (this.$label?.querySelector(':scope > input')) {
      this.$label = null
    }

    // single or multiple
    if (typeof this.options.single === 'undefined') {
      this.options.single = el.getAttribute('multiple') === null
    }

    // restore class and title from select element
    this.$parent = document.createElement('div')
    this.$parent.setAttribute('title', el.getAttribute('title') || '')
    this.$parent.className = `ms-parent ${el.getAttribute('class') || ''} ${this.options.classes}`

    // add placeholder to choice button
    this.options.placeholder = this.options.placeholder ||
      el.getAttribute('placeholder') || ''

    this.tabIndex = el.getAttribute('tabindex')
    el.setAttribute('tabindex', -1)

    this.$choice = document.createElement('button')
    this.$choice.className = 'ms-choice'
    this.$choice.setAttribute('type', 'button')
    if (this.tabIndex) {
      this.$choice.setAttribute('tabindex', this.tabIndex)
    }
    this.$choice.innerHTML = `<span class="placeholder">${this.options.placeholder}</span>
      ${this.options.showClear ? '<div class="icon-close"></div>' : ''}
      <div class="icon-caret"></div>`

    // default position is bottom
    this.$drop = document.createElement('div')
    this.$drop.className = `ms-drop ${this.options.position}`
    this.$close = this.$choice.querySelector('.icon-close')

    if (this.options.dropWidth) {
      this.$drop.style.width = parseStyleValue(this.options.dropWidth)
    }

    this.$el.insertAdjacentElement('afterend', this.$parent)
    this.$parent.append(this.$choice)
    this.$parent.append(this.$drop)

    if (el.disabled) {
      this.$choice.classList.add('disabled')
    }

    this.selectAllName = `data-name="selectAll${name}"`
    this.selectGroupName = `data-name="selectGroup${name}"`
    this.selectItemName = `data-name="selectItem${name}"`

    this._events.handleClickEvent = this._events.handleClickEvent || (e => {
      if (!document.body.contains(this.$el)) {
        // destroy
        this.destroy()
      }
      if (
        this.options.keepOpen ||
        e.target === this.$choice ||
        e.target.closest('.ms-choice') === this.$choice
      ) {
        return
      }
      if (
        (
          e.target === this.$drop ||
          e.target.closest('.ms-drop') !== this.$drop &&
          e.target !== el
        ) &&
        this.options.isOpen
      ) {
        this.close()
      }
    })
    document.addEventListener('click', this._events.handleClickEvent)
  }

  initData () {
    const data = []

    if (this.options.data) {
      if (Array.isArray(this.options.data)) {
        this.data = this.options.data.map(it => {
          if (typeof it === 'string' || typeof it === 'number') {
            return {
              text: it,
              value: it
            }
          }
          return { ...it }
        })
      } else if (typeof this.options.data === 'object') {
        for (const [value, text] of Object.entries(this.options.data)) {
          data.push({
            value,
            text
          })
        }
        this.data = data
      }
    } else {
      for (const elm of this.$el.children) {
        const row = this.initRow(elm)

        if (row) {
          data.push(this.initRow(elm))
        }
      }

      this.options.data = data
      this.data = data
      this.fromHtml = true
    }

    this.dataTotal = setDataKeys(this.data)
  }

  initRow (elm, groupDisabled) {
    const row = {}

    if (elm.tagName === 'OPTION') {
      row.type = 'option'
      row.text = this.options.textTemplate(elm)
      row.value = elm.value
      row.visible = true
      row.selected = !!elm.selected
      row.disabled = groupDisabled || elm.disabled
      row.classes = elm.getAttribute('class') || ''
      row.title = elm.getAttribute('title') || ''

      const _value = elm._value || elm.getAttribute('data-value') || elm.dataset.value
      const divider = elm.getAttribute('data-divider') || elm.dataset.divider

      if (_value) {
        row._value = _value
      }
      if (divider) {
        row.divider = divider
      }

      return row
    }

    if (elm.tagName === 'OPTGROUP') {
      row.type = 'optgroup'
      row.label = this.options.labelTemplate(elm)
      row.visible = true
      row.selected = !!elm.selected
      row.disabled = elm.disabled
      row.children = []

      for (const elem of elm.children) {
        row.children.push(this.initRow(elem, row.disabled))
      }

      return row
    }

    return null
  }

  initSelected (ignoreTrigger) {
    let selectedTotal = 0

    for (const row of this.data) {
      if (row.type === 'optgroup') {
        const selectedCount = row.children.filter(child => {
          return child.selected && !child.disabled && child.visible
        }).length

        if (row.children.length) {
          row.selected = !this.options.single && selectedCount && selectedCount ===
            row.children.filter(child => !child.disabled && child.visible && !child.divider).length
        }

        selectedTotal += selectedCount
      } else {
        selectedTotal += row.selected && !row.disabled && row.visible ? 1 : 0
      }
    }

    this.allSelected = this.data.filter(row => {
      return row.selected && !row.disabled && row.visible
    }).length === this.data.filter(row => !row.disabled && row.visible && !row.divider).length

    if (!ignoreTrigger) {
      if (this.allSelected) {
        this.options.onCheckAll()
      } else if (selectedTotal === 0) {
        this.options.onUncheckAll()
      }
    }
  }

  initFilter () {
    this.filterText = ''

    if (this.options.filter || !this.options.filterByDataLength) {
      return
    }

    let length = 0

    for (const option of this.data) {
      if (option.type === 'optgroup') {
        length += option.children.length
      } else {
        length += 1
      }
    }

    this.options.filter = length > this.options.filterByDataLength
  }

  initDrop () {
    this.initList()
    this.update(true)

    if (this.options.isOpen) {
      setTimeout(() => {
        this.open()
      }, 50)
    }

    if (this.options.openOnHover) {
      this._events.handleParentMouseEnter = this._events.handleParentMouseEnter || (() => {
        this.open()
      })
      this._events.handleParentMouseLeave = this._events.handleParentMouseLeave || (() => {
        this.close()
      })
      this.$parent.addEventListener('mouseenter', this._events.handleParentMouseEnter)
      this.$parent.addEventListener('mouseleave', this._events.handleParentMouseLeave)
    }
  }

  initList () {
    const html = []

    if (this.options.filter) {
      html.push(`
        <div class="ms-search">
          <input type="text" autocomplete="off" autocorrect="off"
            autocapitalize="off" spellcheck="false"
            placeholder="${this.options.filterPlaceholder}">
        </div>
      `)
    }

    html.push('<ul></ul>')

    this.$drop.innerHTML = html.join('')
    this.$ul = this.$drop.querySelector(':scope > ul')

    this.initListItems()
  }

  initListItems () {
    const rows = this.getListRows()
    let offset = 0

    if (this.options.selectAll && !this.options.single) {
      offset = -1
    }

    if (rows.length > Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS) {
      if (this.virtualScroll) {
        this.virtualScroll.destroy()
      }

      const dropVisible = this.$drop.clientHeight

      if (!dropVisible) {
        // $drop is div
        this.$drop.style.left = -10000
        this.$drop.style.display = 'block'
      }

      const updateDataOffset = () => {
        this.updateDataStart = this.virtualScroll.dataStart + offset
        this.updateDataEnd = this.virtualScroll.dataEnd + offset
        if (this.updateDataStart < 0) {
          this.updateDataStart = 0
        }
        if (this.updateDataEnd > this.data.length) {
          this.updateDataEnd = this.data.length
        }
      }

      this.virtualScroll = new VirtualScroll({
        rows,
        scrollEl: this.$ul,
        contentEl: this.$ul,
        callback: () => {
          updateDataOffset()
          this.events()
        }
      })

      updateDataOffset()

      if (!dropVisible) {
        this.$drop.style.left = 0
        this.$drop.style.display = 'none'
      }
    } else {
      this.$ul.innerHTML = rows.join('')
      this.updateDataStart = 0
      this.updateDataEnd = this.updateData.length
      this.virtualScroll = null
    }
    this.events()
  }

  getListRows () {
    const rows = []

    if (this.options.selectAll && !this.options.single) {
      rows.push(`
        <li class="ms-select-all" tabindex="0">
        <label>
        <input type="checkbox" ${this.selectAllName}${this.allSelected ? ' checked="checked"' : ''} tabindex="-1" />
        <span>${this.options.formatSelectAll()}</span>
        </label>
        </li>
      `)
    }

    this.updateData = []
    this.data.forEach(row => {
      rows.push(...this.initListItem(row))
    })

    rows.push(`<li class="ms-no-results">${this.options.formatNoMatchesFound()}</li>`)

    return rows
  }

  initListItem (row, level = 0) {
    const title = row.title ? `title="${row.title}"` : ''
    const multiple = this.options.multiple ? 'multiple' : ''
    const type = this.options.single ? 'radio' : 'checkbox'
    let classes = ''

    if (!row.visible) {
      return []
    }

    this.updateData.push(row)

    if (this.options.single && !this.options.singleRadio) {
      classes = 'hide-radio '
    }

    if (row.selected) {
      classes += 'selected '
    }

    if (row.type === 'optgroup') {
      const customStyle = this.options.styler(row)
      const style = customStyle ? `style="${customStyle}"` : ''
      const html = []
      const group = this.options.hideOptgroupCheckboxes || this.options.single ?
        `<span ${this.selectGroupName} data-key="${row._key}"></span>` :
        `<input type="checkbox"
          ${this.selectGroupName}
          data-key="${row._key}"
          ${row.selected ? ' checked="checked"' : ''}
          ${row.disabled ? ' disabled="disabled"' : ''}
          tabindex="-1"
        >`

      if (
        !classes.includes('hide-radio') &&
        (this.options.hideOptgroupCheckboxes || this.options.single)
      ) {
        classes += 'hide-radio '
      }

      html.push(`
        <li class="group ${classes}" ${style} tabindex="${classes.includes('hide-radio') || row.disabled ? -1 : 0}">
        <label class="optgroup${this.options.single || row.disabled ? ' disabled' : ''}">
        ${group}${row.label}
        </label>
        </li>
      `)

      row.children.forEach(child => {
        html.push(...this.initListItem(child, 1))
      })

      return html
    }

    const customStyle = this.options.styler(row)
    const style = customStyle ? `style="${customStyle}"` : ''

    classes += row.classes || ''

    if (level && this.options.single) {
      classes += `option-level-${level} `
    }

    if (row.divider) {
      return '<li class="option-divider"/>'
    }

    return [`
      <li class="${multiple} ${classes}" ${title} ${style} tabindex="${row.disabled ? -1 : 0}">
      <label class="${row.disabled ? 'disabled' : ''}">
      <input type="${type}"
        value="${row.value}"
        data-key="${row._key}"
        ${this.selectItemName}
        ${row.selected ? ' checked="checked"' : ''}
        ${row.disabled ? ' disabled="disabled"' : ''}
        tabindex="-1"
      >
      <span>${row.text}</span>
      </label>
      </li>
    `]
  }

  events () {
    this.$searchInput = this.$drop.querySelector('.ms-search input')
    this.$selectAll = this.$drop.querySelector(`input[${this.selectAllName}]`)
    this.$selectGroups = this.$drop.querySelectorAll(`input[${this.selectGroupName}],span[${this.selectGroupName}]`)
    this.$selectItems = this.$drop.querySelectorAll(`input[${this.selectItemName}]:enabled`)
    this.$disableItems = this.$drop.querySelectorAll(`input[${this.selectItemName}]:disabled`)
    this.$noResults = this.$drop.querySelector('.ms-no-results')

    this._events.toggleOpen = this._events.toggleOpen || (e => {
      e.preventDefault()
      if (e.target.classList.contains('icon-close')) {
        return
      }
      this[this.options.isOpen ? 'close' : 'open']()
    })
    this.$choice.addEventListener('click', this._events.toggleOpen)

    if (this.$label) {
      this._events.handleLabelClick = this._events.handleLabelClick || (e => {
        if (e.target.nodeName.toLowerCase() !== 'label') {
          return
        }
        this._events.toggleOpen(e)
        if (!this.options.filter || !this.options.isOpen) {
          this.focus()
        }
        e.stopPropagation() // Causes lost focus otherwise
      })
      this.$label.addEventListener('click', this._events.handleLabelClick)
    }

    this.$choice.addEventListener('focus', this.options.onFocus)
    this.$choice.addEventListener('blur', this.options.onBlur)

    this._events.handleParentKeyDown = this._events.handleParentKeyDown || (e => {
      // esc key
      if (e.which === 27 && !this.options.keepOpen) {
        this.close()
        this.$choice.focus()
      }
    })
    this.$parent.addEventListener('keydown', this._events.handleParentKeyDown)

    this._events.handleCloseClick = this._events.handleCloseClick || (e => {
      e.preventDefault()
      this._checkAll(false, true)
      this.initSelected(false)
      this.updateSelected()
      this.update()
      this.options.onClear()
    })
    this.$close?.addEventListener('click', this._events.handleCloseClick)

    this._events.handleSearchKeyDown = this._events.handleSearchKeyDown || (e => {
      // Ensure shift-tab causes lost focus from filter as with clicking away
      if (e.keyCode === 9 && e.shiftKey) {
        this.close()
      }
    })
    this.$searchInput?.addEventListener('keydown', this._events.handleSearchKeyDown)
    this._events.handleSearchKeyUp = this._events.handleSearchKeyUp || (e => {
      // enter or space
      // Avoid selecting/deselecting if no choices made
      if (
        this.options.filterAcceptOnEnter &&
        [13, 32].includes(e.which) &&
        this.$searchInput.val()
      ) {
        if (this.options.single) {
          const item = this.$selectItems.find(x => {
            return x.closest('li').clientHeight > 0
          })

          if (item) {
            this.setSelects([item.value])
          }
        } else {
          this.$selectAll?.click()
        }
        this.close()
        this.focus()
        return
      }
      this.filter()
    })
    this.$searchInput?.addEventListener('keyup', this._events.handleSearchKeyUp)

    this._events.handleSelectAllClick = this._events.handleSelectAllClick || (e => {
      this._checkAll(e.currentTarget.checked)
    })
    this.$selectAll?.addEventListener('click', this._events.handleSelectAllClick)

    this._events.handleSelectGroupsClick = this._events.handleSelectGroupsClick || (e => {
      const elem = e.currentTarget
      const checked = elem.checked
      const group = findByParam(this.data, '_key', elem.getAttribute('data-key'))

      this._checkGroup(group, checked)
      this.options.onOptgroupClick(removeUndefined({
        label: group.label,
        selected: group.selected,
        data: group._data,
        children: group.children.map(child => {
          return removeUndefined({
            text: child.text,
            value: child.value,
            selected: child.selected,
            disabled: child.disabled,
            data: child._data
          })
        })
      }))
    })
    this.$selectGroups.forEach(item => {
      item.addEventListener('click', this._events.handleSelectGroupsClick)
    })

    this._events.handleSelectItemsClick = this._events.handleSelectItemsClick || (e => {
      const el = e.currentTarget
      const checked = el.checked
      const option = findByParam(this.data, '_key', el.getAttribute('data-key'))
      const close = () => {
        if (this.options.single && this.options.isOpen && !this.options.keepOpen) {
          this.close()
        }
      }

      if (this.options.onBeforeClick(option) === false) {
        close()
        return
      }

      this._check(option, checked)
      this.options.onClick(removeUndefined({
        text: option.text,
        value: option.value,
        selected: option.selected,
        data: option._data
      }))

      close()
    })
    this.$selectItems.forEach(item => {
      item.addEventListener('click', this._events.handleSelectItemsClick)
    })

    this._events.handleLiKeyDown = this._events.handleLiKeyDown || (e => {
      const el = e.currentTarget
      let li = el

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          while (li) {
            li = li.previousElementSibling
            if (li && !li.classList.contains('option-divider')) {
              li.focus()
              break
            }
          }
          break
        case 'ArrowDown':
          e.preventDefault()
          while (li) {
            li = li.nextElementSibling
            if (li && !li.classList.contains('option-divider')) {
              li.focus()
              break
            }
          }
          break
        case 'Enter':
          e.preventDefault()
          el.querySelector('input')?.click()
          if (this.options.single) {
            this.$choice.focus()
          }
          break
        default:
          // ignore
      }
    })
    this.$ul.querySelectorAll('li').forEach(item => {
      item.addEventListener('keydown', this._events.handleLiKeyDown)
    })
  }

  initView () {
    let computedWidth = this.options.width

    if (!computedWidth) {
      computedWidth = window.getComputedStyle(this.$el).width

      if (computedWidth === 'auto') {
        const display = this.$drop.style.display

        this.$drop.style.display = 'block'
        computedWidth = this.$drop.offsetWidth + 20
        display ? this.$drop.style.display = display : this.$drop.style.removeProperty('display')
      }
    }
    this.$parent.style.width = parseStyleValue(computedWidth)

    this.$el.style.removeProperty('display')
    this.$el.classList.add('ms-offscreen')
  }

  open () {
    if (this.$choice.classList.contains('disabled')) {
      return
    }
    this.options.isOpen = true
    this.$parent.classList.add('ms-parent-open')
    this.$choice.querySelector(':scope > div').classList.add('open')
    // TODO:: animation showing
    // this.$drop[this.animateMethod('show')]()
    this.$drop.style.display = 'block'

    // fix filter bug: no results show
    if (this.$selectAll) {
      this.$selectAll.parentElement.style.display = this.data.length ? 'block' : 'none'
    }
    if (this.$noResults) {
      this.$noResults.style.display = this.data.length ? 'none' : 'block'
    }

    if (this.options.container) {
      const container = typeof this.options.container === 'string' ?
        document.querySelector(this.options.container) : this.options.container

      container.appendChild(this.$drop)
      this.$drop.style.minWidth = 'auto'

      const parentWidth = getComputedStyle(this.$parent).width
      const { top, left } = getComputedStyle(this.$drop)

      if (parentWidth && parentWidth !== '0px') {
        this.$drop.style.width = parentWidth
      }
      if (top && top !== '0px') {
        this.$drop.style.top = top
      }
      if (left && left !== '0px') {
        this.$drop.style.left = left
      }
    }

    let maxHeight = this.options.maxHeight

    if (this.options.maxHeightUnit === 'row') {
      maxHeight = (this.$drop.querySelector(':scope > ul > li')?.offsetHeight || 0) *
        this.options.maxHeight
    }
    this.$drop.querySelector(':scope > ul').style.maxHeight = parseStyleValue(maxHeight)
    this.$drop.querySelectorAll('.multiple').forEach(item => {
      item.style.width = parseStyleValue(this.options.multipleWidth)
    })

    if (this.data.length && this.options.filter) {
      if (this.$searchInput) {
        this.$searchInput.value = ''
        this.$searchInput.focus()
      }
      this.filter(true)
    }
    this.options.onOpen()
  }

  close () {
    this.options.isOpen = false
    this.$parent.classList.remove('ms-parent-open')
    this.$choice.querySelector(':scope > div')?.classList.remove('open')
    // TODO:: hide animation
    // this.$drop[this.animateMethod('hide')]()
    this.$drop.style.display = 'none'
    if (this.options.container) {
      this.$parent.append(this.$drop)
      this.$drop.style.removeProperty('top')
      this.$drop.style.removeProperty('left')
    }
    this.options.onClose()
  }

  animateMethod (method) {
    const methods = {
      show: {
        fade: 'fadeIn',
        slide: 'slideDown'
      },
      hide: {
        fade: 'fadeOut',
        slide: 'slideUp'
      }
    }

    return methods[method][this.options.animate] || method
  }

  update (ignoreTrigger) {
    const valueSelects = this.getSelects()
    let textSelects = this.getSelects('text')

    if (this.options.displayValues) {
      textSelects = valueSelects
    }

    const span = this.$choice.querySelector(':scope > span')
    const sl = valueSelects.length
    let html = ''

    if (sl === 0) {
      span.classList.add('placeholder')
      span.innerHTML = this.options.placeholder
    } else if (sl < this.options.minimumCountSelected) {
      html = textSelects.join(this.options.displayDelimiter)
    } else if (this.options.formatAllSelected() && sl === this.dataTotal) {
      html = this.options.formatAllSelected()
    } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
      html = `${textSelects.slice(0, this.options.minimumCountSelected)
        .join(this.options.displayDelimiter)}...`
    } else if (this.options.formatCountSelected() && sl > this.options.minimumCountSelected) {
      html = this.options.formatCountSelected(sl, this.dataTotal)
    } else {
      html = textSelects.join(this.options.displayDelimiter)
    }

    if (html) {
      span.classList.remove('placeholder')
      span.innerHTML = html
    }

    if (this.options.displayTitle) {
      span.setAttribute('title', this.getSelects('text'))
    }

    // set selects to select
    this.$el.value = this.getSelects()

    // trigger <select> change event
    if (!ignoreTrigger) {
      this.$el.dispatchEvent(new Event('change', {
        bubbles: true
      }))
    }
  }

  updateSelected () {
    for (let i = this.updateDataStart; i < this.updateDataEnd; i++) {
      const row = this.updateData[i]
      const input = this.$drop.querySelector(`input[data-key=${row._key}]`)

      if (!input) {
        continue
      }
      input.checked = row.selected
      input.closest('li').classList[row.selected ? 'add' : 'remove']('selected')
    }

    const noResult = !this.data.some(row => row.visible)

    if (this.$selectAll) {
      this.$selectAll.checked = this.allSelected
      const li = this.$selectAll.closest('li')

      if (noResult) {
        li.style.display = 'none'
      } else {
        li.style.removeProperty('display')
      }
    }
    if (this.$noResults) {
      this.$noResults.style.display = noResult ? 'block' : 'none'
    }

    if (this.virtualScroll) {
      this.virtualScroll.rows = this.getListRows()
    }
  }

  getData () {
    return this.options.data
  }

  getOptions () {
    // deep copy and remove data
    const options = {
      ...this.options
    }

    delete options.data
    return options
  }

  refreshOptions (options) {
    // If the objects are equivalent then avoid the call of destroy / init methods
    if (compareObjects(this.options, options, true)) {
      return
    }
    this.options = Object.assign(this.options, options)
    this.destroy()
    this.init()
  }

  // value html, or text, default: 'value'
  getSelects (type = 'value') {
    const values = []

    for (const row of this.data) {
      if (row.type === 'optgroup') {
        const selectedChildren = row.children.filter(child => child.selected)

        if (!selectedChildren.length) {
          continue
        }

        if (type === 'value' || this.options.single) {
          values.push(...selectedChildren.map(child => {
            return type === 'value' ? child._value || child[type] : child[type]
          }))
        } else {
          const value = []

          value.push('[')
          value.push(row.label)
          value.push(`: ${selectedChildren.map(child => child[type]).join(', ')}`)
          value.push(']')
          values.push(value.join(''))
        }
      } else if (row.selected) {
        values.push(type === 'value' ? row._value || row[type] : row[type])
      }
    }
    return values
  }

  setSelects (values, type = 'value', ignoreTrigger = false) {
    let hasChanged = false
    const innerText = html => {
      const div = document.createElement('div')

      div.innerHTML = html
      return div.innerText.trim()
    }
    const _setSelects = rows => {
      for (const row of rows) {
        let selected = false

        if (type === 'text') {
          selected = values.includes(innerText(row.text))
        } else {
          const value = toRaw(row._value || row.value)

          selected = values.some(item => toRaw(item) === value)
          if (!selected && row.value === `${+row.value}`) {
            selected = values.includes(+row.value)
          }
        }
        if (row.selected !== selected) {
          hasChanged = true
        }
        row.selected = selected
      }
    }

    for (const row of this.data) {
      if (row.type === 'optgroup') {
        _setSelects(row.children)
      } else {
        _setSelects([row])
      }
    }

    if (hasChanged) {
      this.initSelected(ignoreTrigger)
      this.updateSelected()
      this.update(ignoreTrigger)
    }
  }

  enable () {
    this.$choice.classList.remove('disabled')
  }

  disable () {
    this.$choice.classList.add('disabled')
  }

  check (value) {
    const option = findByParam(this.data, 'value', value)

    if (!option) {
      return
    }
    this._check(option, true)
  }

  uncheck (value) {
    const option = findByParam(this.data, 'value', value)

    if (!option) {
      return
    }
    this._check(option, false)
  }

  _check (option, checked) {
    if (this.options.single) {
      this._checkAll(false, true)
    }
    option.selected = checked
    this.initSelected()
    this.updateSelected()
    this.update()
  }

  checkAll () {
    this._checkAll(true)
  }

  uncheckAll () {
    this._checkAll(false)
  }

  _checkAll (checked, ignoreUpdate) {
    for (const row of this.data) {
      if (row.type === 'optgroup') {
        this._checkGroup(row, checked, true)
      } else if (!row.disabled && !row.divider && (ignoreUpdate || row.visible)) {
        row.selected = checked
      }
    }

    if (!ignoreUpdate) {
      this.initSelected()
      this.updateSelected()
      this.update()
    }
  }

  _checkGroup (group, checked, ignoreUpdate) {
    group.selected = checked
    group.children.forEach(row => {
      if (!row.disabled && !row.divider && (ignoreUpdate || row.visible)) {
        row.selected = checked
      }
    })

    if (!ignoreUpdate) {
      this.initSelected()
      this.updateSelected()
      this.update()
    }
  }

  checkInvert () {
    if (this.options.single) {
      return
    }
    for (const row of this.data) {
      if (row.type === 'optgroup') {
        for (const child of row.children) {
          if (!child.divider) {
            child.selected = !child.selected
          }
        }
      } else if (!row.divider) {
        row.selected = !row.selected
      }
    }
    this.initSelected()
    this.updateSelected()
    this.update()
  }

  focus () {
    this.$choice.focus()
    this.options.onFocus()
  }

  blur () {
    this.$choice.blur()
    this.options.onBlur()
  }

  refresh () {
    this.destroy()
    this.init()
  }

  filter (ignoreTrigger) {
    const originalSearch = this.$searchInput?.value.trim() || ''
    const search = originalSearch.toLowerCase()

    if (this.filterText === search) {
      return
    }
    this.filterText = search

    for (const row of this.data) {
      if (row.type === 'optgroup') {
        if (this.options.filterGroup) {
          const visible = this.options.customFilter({
            label: removeDiacritics(row.label.toString().toLowerCase()),
            search: removeDiacritics(search),
            originalLabel: row.label,
            originalSearch,
            row
          })

          row.visible = visible
          for (const child of row.children) {
            child.visible = visible
          }
        } else {
          for (const child of row.children) {
            child.visible = this.options.customFilter({
              text: removeDiacritics(child.text.toString().toLowerCase()),
              search: removeDiacritics(search),
              originalText: child.text,
              originalSearch,
              row: child,
              parent: row
            })
          }
          row.visible = row.children.some(child => child.visible)
        }
      } else {
        row.visible = this.options.customFilter({
          text: removeDiacritics(row.text.toString().toLowerCase()),
          search: removeDiacritics(search),
          originalText: row.text,
          originalSearch,
          row
        })
      }
    }

    this.initListItems()
    this.initSelected(ignoreTrigger)
    this.updateSelected()

    if (!ignoreTrigger) {
      this.options.onFilter(originalSearch)
    }
  }

  destroy () {
    document.removeEventListener('click', this._events.handleClickEvent)

    if (this.$el) {
      this.$el.classList.remove('ms-offscreen')

      if (this.tabIndex !== null) {
        this.$el.setAttribute('tabindex', this.tabIndex)
      }
    }
    if (this.$parent) {
      this.$parent.remove()
    }
    if (this.fromHtml) {
      delete this.options.data
      this.fromHtml = false
    }
  }
}

export default MultipleSelect
