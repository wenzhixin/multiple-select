/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.2.1
 *
 * http://wenzhixin.net.cn/p/multiple-select/
 */

function removeDiacritics(str) {
    return str.normalize('NFD').replace(
    // \p{Block=Combining_Diacritical_Marks}|
    // \p{Block=Combining_Diacritical_Marks_Extended}|
    // \p{Block=Combining_Diacritical_Marks_for_Symbols}|
    // \p{Block=Combining_Diacritical_Marks_Supplement}|
    // \p{Block=Combining_Half_Marks}
    /[\u0300-\u036f\u1AB0-\u1AFF\u20D0-\u20FF\u1DC0-\u1DFF\uFE20-\uFE2F]/g, '');
}

function addMultipleSelect($) {
    class MultipleSelect {
        constructor($el, options) {
            const that = this,
                  name = $el.attr('name') || options.name || '';

            this.options = options;

            // hide select element
            this.$el = $el.hide();

            // label element
            this.$label = this.$el.closest('label');
            if (this.$label.length === 0 && this.$el.attr('id')) {
                this.$label = $(`label[for="${this.$el.attr('id').replace(/:/g, '\\:')}"]`);
            }

            // restore class and title from select element
            this.$parent = $(`<div class="ms-parent ${$el.attr('class') || ''}" title="${$el.attr('title')}"/>`);

            // add placeholder to choice button
            this.$choice = $(`<button type="button" class="ms-choice">
                    <span class="placeholder">${this.options.placeholder}</span>
                    <div></div>
                </button>`);

            // default position is bottom
            this.$drop = $(`<div
                    class="ms-drop ${this.options.position}"
                    style="width: ${this.options.dropWidth}"}></div>`);

            this.$el.after(this.$parent);
            this.$parent.append(this.$choice);
            this.$parent.append(this.$drop);

            if (this.$el.prop('disabled')) {
                this.$choice.addClass('disabled');
            }
            this.$parent.css('width', this.options.width || this.$el.css('width') || this.$el.outerWidth() + 20);

            this.selectAllName = `data-name="selectAll${name}"`;
            this.selectGroupName = `data-name="selectGroup${name}"`;
            this.selectItemName = `data-name="selectItem${name}"`;

            if (!this.options.keepOpen) {
                $(document).click(function (e) {
                    if ($(e.target)[0] === that.$choice[0] || $(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
                        return;
                    }
                    if (($(e.target)[0] === that.$drop[0] || $(e.target).parents('.ms-drop')[0] !== that.$drop[0] && e.target !== $el[0]) && that.options.isOpen) {
                        that.close();
                    }
                });
            }
        }

        init() {
            const $ul = $('<ul></ul>');

            this.$drop.html('');

            if (this.options.filter) {
                this.$drop.append(`<div class="ms-search">
                        <input
                            type="text" autocomplete="off" autocorrect="off"
                            autocapitilize="off" spellcheck="false" />
                    </div>`);
            }

            if (this.options.selectAll && !this.options.single) {
                $ul.append(`<li class="ms-select-all">
                        <label>
                        <input type="checkbox" ${this.selectAllName} />
${this.options.selectAllDelimiter[0] + this.options.selectAllText + this.options.selectAllDelimiter[1]}
                        </label>
                    </li>`);
            }

            $.each(this.$el.children(), (i, elm) => {
                $ul.append(this.optionToHtml(i, elm));
            });
            $ul.append(`<li class="ms-no-results">${this.options.noMatchesFound}</li>`);
            this.$drop.append($ul);

            this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
            this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');

            this.$searchInput = this.$drop.find('.ms-search input');
            this.$selectAll = this.$drop.find(`input[${this.selectAllName}]`);
            this.$selectGroups = this.$drop.find(`input[${this.selectGroupName}]`);
            this.$selectItems = this.$drop.find(`input[${this.selectItemName}]:enabled`);
            this.$disableItems = this.$drop.find(`input[${this.selectItemName}]:disabled`);
            this.$noResults = this.$drop.find('.ms-no-results');

            this.events();
            this.updateSelectAll(true);
            this.update(true);

            if (this.options.isOpen) {
                this.open();
            }
        }

        optionToHtml(i, elm, group, groupDisabled) {
            const that = this,
                  $elm = $(elm),
                  classes = $elm.attr('class') || '',
                  title = `title="${$elm.attr('title')}"`,
                  multiple = this.options.multiple ? 'multiple' : '',
                  type = this.options.single ? 'radio' : 'checkbox';
            let disabled;

            if ($elm.is('option')) {
                const value = $elm.val(),
                      text = that.options.textTemplate($elm),
                      selected = $elm.prop('selected'),
                      style = `style="${this.options.styler(value)}"`;

                disabled = groupDisabled || $elm.prop('disabled');

                const $el = $(`<li class="${multiple} ${classes}" ${title} ${style}>
                    <label class="${disabled ? 'disabled' : ''}">
                    <input type="${type}"
                        ${this.selectItemName}
                        ${selected ? ' checked="checked"' : ''}
                        ${disabled ? ' disabled="disabled"' : ''}
                       data-group="${group}">
                    <span>${text}</span>
                    </label>
                    </li>`);
                $el.find('input').val(value);
                return $el;
            }
            if ($elm.is('optgroup')) {
                const label = that.options.labelTemplate($elm);

                group = 'group_' + i;
                disabled = $elm.prop('disabled');

                const $group = $(`<div>
                    <li class="group">
                    <label class="optgroup ${disabled ? 'disabled' : ''}" data-group="${group}">
${this.options.hideOptgroupCheckboxes || this.options.single ? '' : `<input type="checkbox" ${this.selectGroupName} ${disabled ? 'disabled="disabled"' : ''}>`}
                    ${label}
                    </label>
                    </li>
                </div>`);

                $.each($elm.children(), function (i, elm) {
                    $group.append(that.optionToHtml(i, elm, group, disabled));
                });
                return $group.html();
            }
        }

        events() {
            const that = this;
            function toggleOpen(e) {
                e.preventDefault();
                that[that.options.isOpen ? 'close' : 'open']();
            }

            if (this.$label) {
                this.$label.off('click').on('click', function (e) {
                    if (e.target.nodeName.toLowerCase() !== 'label' || e.target !== this) {
                        return;
                    }
                    toggleOpen(e);
                    if (!that.options.filter || !that.options.isOpen) {
                        that.focus();
                    }
                    e.stopPropagation(); // Causes lost focus otherwise
                });
            }

            this.$choice.off('click').on('click', toggleOpen).off('focus').on('focus', this.options.onFocus).off('blur').on('blur', this.options.onBlur);

            this.$parent.off('keydown').on('keydown', function (e) {
                switch (e.which) {
                    case 27:
                        // esc key
                        that.close();
                        that.$choice.focus();
                        break;
                }
            });

            this.$searchInput.off('keydown').on('keydown', function (e) {
                // Ensure shift-tab causes lost focus from filter as with clicking away
                if (e.keyCode === 9 && e.shiftKey) {
                    that.close();
                }
            }).off('keyup').on('keyup', function (e) {
                // enter or space
                // Avoid selecting/deselecting if no choices made
                if (that.options.filterAcceptOnEnter && (e.which === 13 || e.which === 32) && that.$searchInput.val()) {
                    that.$selectAll.click();
                    that.close();
                    that.focus();
                    return;
                }
                that.filter();
            });

            this.$selectAll.off('click').on('click', function () {
                const checked = $(this).prop('checked'),
                      $items = that.$selectItems.filter(':visible');

                if ($items.length === that.$selectItems.length) {
                    that[checked ? 'checkAll' : 'uncheckAll']();
                } else {
                    // when the filter option is true
                    that.$selectGroups.prop('checked', checked);
                    $items.prop('checked', checked);
                    that.options[checked ? 'onCheckAll' : 'onUncheckAll']();
                    that.update();
                }
            });
            this.$selectGroups.off('click').on('click', function () {
                const group = $(this).parent().attr('data-group'),
                      $items = that.$selectItems.filter(':visible'),
                      $children = $items.filter(`[data-group="${group}"]`),
                      checked = $children.length !== $children.filter(':checked').length;

                $children.prop('checked', checked);
                that.updateSelectAll();
                that.update();
                that.options.onOptgroupClick({
                    label: $(this).parent().text(),
                    checked,
                    children: $children.get(),
                    instance: that
                });
            });
            this.$selectItems.off('click').on('click', function () {
                that.updateSelectAll();
                that.update();
                that.updateOptGroupSelect();
                that.options.onClick({
                    label: $(this).parent().text(),
                    value: $(this).val(),
                    checked: $(this).prop('checked'),
                    instance: that
                });

                if (that.options.single && that.options.isOpen && !that.options.keepOpen) {
                    that.close();
                }

                if (that.options.single) {
                    const clickedVal = $(this).val();
                    that.$selectItems.filter(function () {
                        return $(this).val() !== clickedVal;
                    }).each(function () {
                        $(this).prop('checked', false);
                    });
                    that.update();
                }
            });
        }

        open() {
            if (this.$choice.hasClass('disabled')) {
                return;
            }
            this.options.isOpen = true;
            this.$choice.find('>div').addClass('open');
            this.$drop[this.animateMethod('show')]();

            // fix filter bug: no results show
            this.$selectAll.parent().show();
            this.$noResults.hide();

            // Fix #77: 'All selected' when no options
            if (!this.$el.children().length) {
                this.$selectAll.parent().hide();
                this.$noResults.show();
            }

            if (this.options.container) {
                const offset = this.$drop.offset();
                this.$drop.appendTo($(this.options.container));
                this.$drop.offset({
                    top: offset.top,
                    left: offset.left
                });
            }

            if (this.options.filter) {
                this.$searchInput.val('');
                this.$searchInput.focus();
                this.filter();
            }
            this.options.onOpen();
        }

        close() {
            this.options.isOpen = false;
            this.$choice.find('>div').removeClass('open');
            this.$drop[this.animateMethod('hide')]();
            if (this.options.container) {
                this.$parent.append(this.$drop);
                this.$drop.css({
                    top: 'auto',
                    left: 'auto'
                });
            }
            this.options.onClose();
        }

        animateMethod(method) {
            const methods = {
                show: {
                    fade: 'fadeIn',
                    slide: 'slideDown'
                },
                hide: {
                    fade: 'fadeOut',
                    slide: 'slideUp'
                }
            };

            return methods[method][this.options.animate] || method;
        }

        update(isInit) {
            const selects = this.options.displayValues ? this.getSelects() : this.getSelects('text'),
                  $span = this.$choice.find('>span'),
                  sl = selects.length;

            if (sl === 0) {
                $span.addClass('placeholder').html(this.options.placeholder);
            } else if (this.options.allSelected && sl === this.$selectItems.length + this.$disableItems.length) {
                $span.removeClass('placeholder').html(this.options.allSelected);
            } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').text(selects.slice(0, this.options.minimumCountSelected).join(this.options.delimiter) + '...');
            } else if (this.options.countSelected && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').html(this.options.countSelected.replace('#', selects.length).replace('%', this.$selectItems.length + this.$disableItems.length));
            } else {
                $span.removeClass('placeholder').text(selects.join(this.options.delimiter));
            }

            if (this.options.addTitle) {
                $span.prop('title', this.getSelects('text'));
            }

            // set selects to select
            this.$el.val(this.getSelects()).trigger('change');

            // add selected class to selected li
            this.$drop.find('li').removeClass('selected');
            this.$drop.find('input:checked').each(function () {
                $(this).parents('li').first().addClass('selected');
            });

            // trigger <select> change event
            if (!isInit) {
                this.$el.trigger('change');
            }
        }

        updateSelectAll(isInit) {
            let $items = this.$selectItems;

            if (!isInit) {
                $items = $items.filter(':visible');
            }
            this.$selectAll.prop('checked', $items.length && $items.length === $items.filter(':checked').length);
            if (!isInit && this.$selectAll.prop('checked')) {
                this.options.onCheckAll();
            }
        }

        updateOptGroupSelect() {
            const $items = this.$selectItems.filter(':visible');
            $.each(this.$selectGroups, function (i, val) {
                const group = $(val).parent().attr('data-group'),
                      $children = $items.filter(`[data-group="${group}"]`);
                $(val).prop('checked', $children.length && $children.length === $children.filter(':checked').length);
            });
        }

        // value or text, default: 'value'
        getSelects(type) {
            const that = this,
                  values = [];
            let texts = [];
            this.$drop.find(`input[${this.selectItemName}]:checked`).each(function () {
                texts.push($(this).parents('li').first().text());
                values.push($(this).val());
            });

            if (type === 'text' && this.$selectGroups.length) {
                texts = [];
                this.$selectGroups.each(function () {
                    const html = [],
                          text = $(this).parent().text().trim(),
                          group = $(this).parent().data('group'),
                          $children = that.$drop.find(`[${that.selectItemName}][data-group="${group}"]`),
                          $selected = $children.filter(':checked');

                    if (!$selected.length) {
                        return;
                    }

                    html.push('[');
                    html.push(text);
                    if ($children.length > $selected.length) {
                        const list = [];
                        $selected.each(function () {
                            list.push($(this).parent().text());
                        });
                        html.push(': ' + list.join(', '));
                    }
                    html.push(']');
                    texts.push(html.join(''));
                });
            }
            return type === 'text' ? texts : values;
        }

        setSelects(values) {
            this.$selectItems.prop('checked', false);
            this.$disableItems.prop('checked', false);
            $.each(values, (i, value) => {
                this.$selectItems.filter(`[value="${value}"]`).prop('checked', true);
                this.$disableItems.filter(`[value="${value}"]`).prop('checked', true);
            });
            this.$selectAll.prop('checked', this.$selectItems.length === this.$selectItems.filter(':checked').length + this.$disableItems.filter(':checked').length);

            $.each(this.$selectGroups, (i, val) => {
                const group = $(val).parent().attr('data-group'),
                      $children = this.$selectItems.filter('[data-group="' + group + '"]');
                $(val).prop('checked', $children.length && $children.length === $children.filter(':checked').length);
            });

            this.update();
        }

        enable() {
            this.$choice.removeClass('disabled');
        }

        disable() {
            this.$choice.addClass('disabled');
        }

        checkAll() {
            this.$selectItems.prop('checked', true);
            this.$selectGroups.prop('checked', true);
            this.$selectAll.prop('checked', true);
            this.update();
            this.options.onCheckAll();
        }

        uncheckAll() {
            this.$selectItems.prop('checked', false);
            this.$selectGroups.prop('checked', false);
            this.$selectAll.prop('checked', false);
            this.update();
            this.options.onUncheckAll();
        }

        focus() {
            this.$choice.focus();
            this.options.onFocus();
        }

        blur() {
            this.$choice.blur();
            this.options.onBlur();
        }

        refresh() {
            this.init();
        }

        destroy() {
            this.$el.show();
            this.$parent.remove();
            this.$el.data('multipleSelect', null);
        }

        filter() {
            const that = this,
                  text = this.$searchInput.val().trim().toLowerCase();

            if (text.length === 0) {
                this.$selectAll.parent().show();
                this.$selectItems.parent().show();
                this.$disableItems.parent().show();
                this.$selectGroups.parent().show();
                this.$noResults.hide();
            } else {
                this.$selectItems.each(function () {
                    const $parent = $(this).parent();
                    const strippedParent = removeDiacritics($parent.text().toLowerCase());
                    $parent[strippedParent.includes(removeDiacritics(text)) ? 'show' : 'hide']();
                });
                this.$disableItems.parent().hide();
                this.$selectGroups.each(function () {
                    const $parent = $(this).parent();
                    const group = $parent.attr('data-group'),
                          $items = that.$selectItems.filter(':visible');
                    const groupItemsLength = $items.filter(`[data-group="${group}"]`).length;
                    $parent[groupItemsLength ? 'show' : 'hide']();
                });

                // Check if no matches found
                if (this.$selectItems.parent().filter(':visible').length) {
                    this.$selectAll.parent().show();
                    this.$noResults.hide();
                } else {
                    this.$selectAll.parent().hide();
                    this.$noResults.show();
                }
            }
            this.updateOptGroupSelect();
            this.updateSelectAll();
            this.options.onFilter(text);
        }
    }
    function multipleSelect(option, method, ...args) {
        const allowedMethods = ['getSelects', 'setSelects', 'enable', 'disable', 'open', 'close', 'checkAll', 'uncheckAll', 'focus', 'blur', 'refresh', 'destroy'];
        let value;

        this.each(function () {
            const $this = $(this),
                  options = $.extend({}, $.fn.multipleSelect.defaults, $this.data(), typeof option === 'object' && option);
            let data = $this.data('multipleSelect');

            if (!data) {
                data = new MultipleSelect($this, options);
                $this.data('multipleSelect', data);
            }

            if (typeof option === 'string') {
                if (!allowedMethods.includes(option)) {
                    throw new TypeError('Unknown method: ' + option);
                }
                value = data[option](method, ...args);
            } else {
                data.init();
                if (method) {
                    value = data[method](...args);
                }
            }
        });

        return typeof value !== 'undefined' ? value : this;
    }

    multipleSelect.defaults = {
        name: '',
        isOpen: false,
        placeholder: '',
        selectAll: true,
        selectAllDelimiter: ['[', ']'],
        minimumCountSelected: 3,
        ellipsis: false,
        multiple: false,
        multipleWidth: 80,
        single: false,
        filter: false,
        width: undefined,
        dropWidth: undefined,
        maxHeight: 250,
        container: null,
        position: 'bottom',
        keepOpen: false,
        animate: 'none', // 'none', 'fade', 'slide'
        displayValues: false,
        delimiter: ', ',
        addTitle: false,
        filterAcceptOnEnter: false,
        hideOptgroupCheckboxes: false,

        selectAllText: 'Select all',
        allSelected: 'All selected',
        countSelected: '# of % selected',
        noMatchesFound: 'No matches found',

        styler: () => false,

        textTemplate($elm) {
            return $elm.html();
        },
        labelTemplate($elm) {
            return $elm.attr('label');
        },

        onOpen: () => false,
        onClose: () => false,
        onCheckAll: () => false,
        onUncheckAll: () => false,
        onFocus: () => false,
        onBlur: () => false,
        onOptgroupClick: () => false,
        onClick: () => false,
        onFilter: () => false
    };

    $.fn.multipleSelect = multipleSelect;
}

export default addMultipleSelect;
