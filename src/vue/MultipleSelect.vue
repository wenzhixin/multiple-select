<template>
  <select
    :name="name"
    :multiple="multiple"
    :disabled="disabled"
  >
    <slot />
  </select>
</template>

<script>
const $ = window.jQuery
const deepCopy = arg => {
  if (!arg) {
    return arg
  }
  return $.extend(true, Array.isArray(arg) ? [] : {}, arg)
}

const getEventNames = () => {
  const events = []

  for (const event in $.fn.multipleSelect.defaults) {
    if (/^on[A-Z]/.test(event)) {
      events.push(event.replace(/([A-Z])/g, '-$1').toLowerCase())
    }
  }
  return events
}

export default {
  name: 'MultipleSelect',

  props: {
    modelValue: {
      type: [String, Number, Array, Object],
      default: undefined
    },
    value: {
      type: [String, Number, Array, Object],
      default: undefined
    },
    name: {
      type: String,
      default: undefined
    },
    multiple: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: undefined
    },
    size: {
      type: String,
      default: undefined
    },
    data: {
      type: [Array, Object],
      default () {
        return undefined
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  emits: ['update:modelValue', 'change', ...getEventNames()],

  data () {
    return {
      currentValue: this.value === undefined ? this.modelValue : this.value,
      children: []
    }
  },

  watch: {
    modelValue (val) {
      if (this.currentValue === val) {
        return
      }
      this.currentValue = val
      this._initDefaultValue()
    },
    value (val) {
      if (this.currentValue === val) {
        return
      }
      this.currentValue = val
      this._initDefaultValue()
    },
    multiple () {
      this._initSelect()
    },
    disabled () {
      this.$nextTick(() => {
        if (this.disabled) {
          this.disable()
        } else {
          this.enable()
        }
      })
    },
    width () {
      this._initSelectValue()
    },
    options: {
      handler () {
        this._initSelectValue()
      },
      deep: true
    },

    data: {
      handler () {
        this._initSelectValue()
      },
      deep: true
    }
  },

  updated () {
    const children = this.$el.querySelectorAll('option,optgroup')

    if (
      children.length !== this.children.length ||
      !Array.prototype.every.call(children, (item, index) => item === this.children[index])
    ) {
      this._update()
      this.observer.disconnect()

      for (const child of children) {
        this.observer.observe(child, {
          attributes: true,
          childList: true,
          subtree: true
        })
      }
      this.children = children
    }
  },

  unmounted () {
    this.destroy(true)
    this.observer.disconnect()
  },

  mounted () {
    this._refresh()

    this.$select = $(this.$el).change(() => {
      const selects = this.getSelects()

      if (Array.isArray(this.currentValue)) {
        this.currentValue = selects
      } else if (typeof this.currentValue === 'number') {
        this.currentValue = selects.length ? +selects[0] : undefined
      } else {
        this.currentValue = selects.length ? selects[0] : undefined
      }

      this.$emit('update:modelValue', this.currentValue)
      this.$emit('change', this.currentValue)
    })

    this.observer = new MutationObserver(() => {
      this._update()
    })

    if (
      this._hasInit &&
      this.$select.val() &&
      (typeof this.currentValue === 'undefined' ||
      Array.isArray(this.currentValue) && !this.currentValue.length)
    ) {
      this.currentValue = this.$select.val()

      this.$emit('update:modelValue', this.currentValue)
      this.$emit('change', this.currentValue)
    }

    for (const event in $.fn.multipleSelect.defaults) {
      if (/^on[A-Z]/.test(event)) {
        $.fn.multipleSelect.defaults[event] = (...args) => {
          this.$emit(event.replace(/([A-Z])/g, '-$1').toLowerCase(), ...args)
        }
      }
    }

    this._initSelectValue()
  },

  methods: {
    _update () {
      this.$nextTick(() => {
        this._refresh()
        this._initSelectValue()
      })
    },

    _initSelectValue () {
      this._initSelect()

      if (
        typeof this.currentValue === 'undefined' ||
        Array.isArray(this.currentValue) && !this.currentValue.length
      ) {
        return
      }

      this._initDefaultValue()
    },

    _initSelect () {
      if (!this.$select) {
        // before mounted
        return
      }
      const options = {
        ...deepCopy(this.options),
        single: !this.multiple,
        width: this.width,
        size: this.size,
        data: deepCopy(this.data)
      }

      if (!this._hasInit) {
        this.$select.multipleSelect(options)
        this._hasInit = true
      } else {
        this.refreshOptions(options)
      }
    },

    _initDefaultValue () {
      this.$nextTick(() => {
        try {
          this.setSelects(Array.isArray(this.currentValue) ?
            this.currentValue : [this.currentValue], null, true)
        } catch (e) {
          // ignore error
        }
      })
    },

    ...(() => {
      const res = {}

      for (const method of $.fn.multipleSelect.methods) {
        res[method] = function (...args) {
          return this.$select.multipleSelect(method, ...args)
        }
      }
      return res
    })(),

    _refresh () {
      this.$el.querySelectorAll('option').forEach(el => {
        if (el.value) {
          $(el).data('value', el.value)
        }
      })
    },

    refresh () {
      this._refresh()
      this.$select.multipleSelect('refresh')
    }
  }
}
</script>
