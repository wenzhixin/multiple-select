/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.2.0
 *
 * http://wenzhixin.net.cn/p/multiple-select/
 */

(function ($) {

    'use strict';

    // it only does '%s', and return '' when arguments are undefined
    var sprintf = function (str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function () {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    };

    function MultipleSelect($el, options) {
        var that = this,
            name = $el.attr('name') || options.name || '';

        this.options = options;

        // hide select element
        this.$el = $el.hide();

        // label element
        this.$label = this.$el.closest('label') ||
            this.$el.attr('id') && $(sprintf('label[for="%s"]', this.$el.attr('id').replace(/:/g, '\\:')));

        // restore class and title from select element
        this.$parent = $(sprintf(
            '<div class="ms-parent %s" %s/>',
            $el.attr('class') || '',
            sprintf('title="%s"', $el.attr('title'))));

        // add placeholder to choice button
        this.$choice = $(sprintf([
                '<button type="button" class="ms-choice">',
                '<span class="placeholder">%s</span>',
                '<div></div>',
                '</button>'
            ].join(''),
            this.options.placeholder));

        // default position is bottom
        this.$drop = $(sprintf('<div class="ms-drop %s"></div>', this.options.position));

        this.$el.after(this.$parent);
        this.$parent.append(this.$choice);
        this.$parent.append(this.$drop);

        if (this.$el.prop('disabled')) {
            this.$choice.addClass('disabled');
        }
        this.$parent.css('width',
            this.options.width ||
            this.$el.css('width') ||
            this.$el.outerWidth() + 20);

        this.selectAllName = 'data-name="selectAll' + name + '"';
        this.selectGroupName = 'data-name="selectGroup' + name + '"';
        this.selectItemName = 'data-name="selectItem' + name + '"';

        if (!this.options.keepOpen) {
            $(document).click(function (e) {
                if ($(e.target)[0] === that.$choice[0] ||
                    $(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
                    return;
                }
                if (($(e.target)[0] === that.$drop[0] ||
                    $(e.target).parents('.ms-drop')[0] !== that.$drop[0] && e.target !== $el[0]) &&
                    that.options.isOpen) {
                    that.close();
                }
            });
        }
    }

    MultipleSelect.prototype = {
        constructor: MultipleSelect,

        init: function () {
            var that = this,
                $ul = $('<ul></ul>');

            if (this.options.filter) {
                this.$drop.append([
                    '<div class="ms-search">',
                    '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">',
                    '</div>'].join('')
                );
            }

            if (this.options.selectAll && !this.options.single) {
                $ul.append([
                    '<li class="ms-select-all">',
                    '<label>',
                    sprintf('<input type="checkbox" %s /> ', this.selectAllName),
                    this.options.selectAllDelimiter[0],
                    this.options.selectAllText,
                    this.options.selectAllDelimiter[1],
                    '</label>',
                    '</li>'
                ].join(''));
            }

            $.each(this.$el.children(), function (i, elm) {
                $ul.append(that.optionToHtml(i, elm));
            });
            $ul.append(sprintf('<li class="ms-no-results">%s</li>', this.options.noMatchesFound));
            this.$drop.html('').append($ul);

            this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
            this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');

            this.$searchInput = this.$drop.find('.ms-search input');
            this.$selectAll = this.$drop.find('input[' + this.selectAllName + ']');
            this.$selectGroups = this.$drop.find('input[' + this.selectGroupName + ']');
            this.$selectItems = this.$drop.find('input[' + this.selectItemName + ']:enabled');
            this.$disableItems = this.$drop.find('input[' + this.selectItemName + ']:disabled');
            this.$noResults = this.$drop.find('.ms-no-results');

            this.events();
            this.updateSelectAll(true);
            this.update(true);

            if (this.options.isOpen) {
                this.open();
            }
        },

        optionToHtml: function (i, elm, group, groupDisabled) {
            var that = this,
                $elm = $(elm),
                classes = $elm.attr('class') || '',
                title = sprintf('title="%s"', $elm.attr('title')),
                multiple = this.options.multiple ? 'multiple' : '',
                disabled,
                type = this.options.single ? 'radio' : 'checkbox';

            if ($elm.is('option')) {
                var value = $elm.val(),
                    text = that.options.textTemplate($elm),
                    selected = $elm.prop('selected'),
                    style = sprintf('style="%s"', this.options.styler(value));

                disabled = groupDisabled || $elm.prop('disabled');

                return $([
                    sprintf('<li class="%s %s" %s %s>', multiple, classes, title, style),
                    sprintf('<label class="%s">', disabled ? 'disabled' : ''),
                    sprintf('<input type="%s" %s%s%s%s value="%s">',
                        type, this.selectItemName,
                        selected ? ' checked="checked"' : '',
                        disabled ? ' disabled="disabled"' : '',
                        sprintf(' data-group="%s"', group),
                        value),
                    text,
                    '</label>',
                    '</li>'
                ].join(''));
            }
            if ($elm.is('optgroup')) {
                var group = 'group_' + i,
                    label = that.options.labelTemplate($elm),
                    $group = $('<div/>');

                disabled = $elm.prop('disabled');

                $group.append([
                    '<li class="group">',
                    sprintf('<label class="optgroup %s" data-group="%s">', disabled ? 'disabled' : '', group),
                    this.options.hideOptgroupCheckboxes ? '' : sprintf('<input type="checkbox" %s %s>',
                        this.selectGroupName, disabled ? 'disabled="disabled"' : ''),
                    label,
                    '</label>',
                    '</li>'
                ].join(''));

                $.each($elm.children(), function (i, elm) {
                    $group.append(that.optionToHtml(i, elm, group, disabled));
                });
                return $group.html();
            }
        },

        events: function () {
            var that = this,
                toggleOpen = function (e) {
                    e.preventDefault();
                    that[that.options.isOpen ? 'close' : 'open']();
                };

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

            this.$choice.off('click').on('click', toggleOpen)
                .off('focus').on('focus', this.options.onFocus)
                .off('blur').on('blur', this.options.onBlur);

            this.$parent.off('keydown').on('keydown', function (e) {
                switch (e.which) {
                    case 27: // esc key
                        that.close();
                        that.$choice.focus();
                        break;
                }
            });

            this.$searchInput.off('keydown').on('keydown',function (e) {
                // Ensure shift-tab causes lost focus from filter as with clicking away
                if (e.keyCode === 9 && e.shiftKey) {
                    that.close();
                }
            }).off('keyup').on('keyup', function (e) {
                // enter or space
                // Avoid selecting/deselecting if no choices made
                if (that.options.filterAcceptOnEnter && (e.which === 13 || e.which == 32) && that.$searchInput.val()) {
                    that.$selectAll.click();
                    that.close();
                    that.focus();
                    return;
                }
                that.filter();
            });

            this.$selectAll.off('click').on('click', function () {
                var checked = $(this).prop('checked'),
                    $items = that.$selectItems.filter(':visible');

                if ($items.length === that.$selectItems.length) {
                    that[checked ? 'checkAll' : 'uncheckAll']();
                } else { // when the filter option is true
                    that.$selectGroups.prop('checked', checked);
                    $items.prop('checked', checked);
                    that.options[checked ? 'onCheckAll' : 'onUncheckAll']();
                    that.update();
                }
            });
            this.$selectGroups.off('click').on('click', function () {
                var group = $(this).parent().attr('data-group'),
                    $items = that.$selectItems.filter(':visible'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group)),
                    checked = $children.length !== $children.filter(':checked').length;

                $children.prop('checked', checked);
                that.updateSelectAll();
                that.update();
                that.options.onOptgroupClick({
                    label: $(this).parent().text(),
                    checked: checked,
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
            });
        },

        open: function () {
            if (this.$choice.hasClass('disabled')) {
                return;
            }
            this.options.isOpen = true;
            this.$choice.find('>div').addClass('open');
            this.$drop.show();

            // fix filter bug: no results show
            this.$selectAll.parent().show();
            this.$noResults.hide();

            // Fix #77: 'All selected' when no options
            if (!this.$el.children().length) {
                this.$selectAll.parent().hide();
                this.$noResults.show();
            }

            if (this.options.container) {
                var offset = this.$drop.offset();
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
        },

        close: function () {
            this.options.isOpen = false;
            this.$choice.find('>div').removeClass('open');
            this.$drop.hide();
            if (this.options.container) {
                this.$parent.append(this.$drop);
                this.$drop.css({
                    'top': 'auto',
                    'left': 'auto'
                });
            }
            this.options.onClose();
        },

        update: function (isInit) {
            var selects = this.options.displayValues ? this.getSelects() : this.getSelects('text'),
                $span = this.$choice.find('>span'),
                sl = selects.length;

            if (sl === 0) {
                $span.addClass('placeholder').html(this.options.placeholder);
            } else if (this.options.allSelected && sl === this.$selectItems.length + this.$disableItems.length) {
                $span.removeClass('placeholder').html(this.options.allSelected);
            } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').text(selects.slice(0, this.options.minimumCountSelected)
                    .join(this.options.delimiter) + '...');
            } else if (this.options.countSelected && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').html(this.options.countSelected
                    .replace('#', selects.length)
                    .replace('%', this.$selectItems.length + this.$disableItems.length));
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
            this.$drop.find(sprintf('input[%s]:checked', this.selectItemName)).each(function () {
                $(this).parents('li').first().addClass('selected');
            });

            // trigger <select> change event
            if (!isInit) {
                this.$el.trigger('change');
            }
        },

        updateSelectAll: function (isInit) {
            var $items = this.$selectItems;

            if (!isInit) {
                $items = $items.filter(':visible');
            }
            this.$selectAll.prop('checked', $items.length &&
                $items.length === $items.filter(':checked').length);
            if (!isInit && this.$selectAll.prop('checked')) {
                this.options.onCheckAll();
            }
        },

        updateOptGroupSelect: function () {
            var $items = this.$selectItems.filter(':visible');
            $.each(this.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group));
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });
        },

        //value or text, default: 'value'
        getSelects: function (type) {
            var that = this,
                texts = [],
                values = [];
            this.$drop.find(sprintf('input[%s]:checked', this.selectItemName)).each(function () {
                texts.push($(this).parents('li').first().text());
                values.push($(this).val());
            });

            if (type === 'text' && this.$selectGroups.length) {
                texts = [];
                this.$selectGroups.each(function () {
                    var html = [],
                        text = $.trim($(this).parent().text()),
                        group = $(this).parent().data('group'),
                        $children = that.$drop.find(sprintf('[%s][data-group="%s"]', that.selectItemName, group)),
                        $selected = $children.filter(':checked');

                    if (!$selected.length) {
                        return;
                    }

                    html.push('[');
                    html.push(text);
                    if ($children.length > $selected.length) {
                        var list = [];
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
        },

        setSelects: function (values) {
            var that = this;
            this.$selectItems.prop('checked', false);
            $.each(values, function (i, value) {
                that.$selectItems.filter(sprintf('[value="%s"]', value)).prop('checked', true);
            });
            this.$selectAll.prop('checked', this.$selectItems.length ===
                this.$selectItems.filter(':checked').length);
				
            $.each(that.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = that.$selectItems.filter('[data-group="' + group + '"]');
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });		
			
            this.update();
        },

        enable: function () {
            this.$choice.removeClass('disabled');
        },

        disable: function () {
            this.$choice.addClass('disabled');
        },

        checkAll: function () {
            this.$selectItems.prop('checked', true);
            this.$selectGroups.prop('checked', true);
            this.$selectAll.prop('checked', true);
            this.update();
            this.options.onCheckAll();
        },

        uncheckAll: function () {
            this.$selectItems.prop('checked', false);
            this.$selectGroups.prop('checked', false);
            this.$selectAll.prop('checked', false);
            this.update();
            this.options.onUncheckAll();
        },

        focus: function () {
            this.$choice.focus();
            this.options.onFocus();
        },

        blur: function () {
            this.$choice.blur();
            this.options.onBlur();
        },

        refresh: function () {
            this.init();
        },
        
        refreshAll: function () {
            this.$drop.html('');
            this.init();
        },

        filter: function () {
            var that = this,
                text = $.trim(this.$searchInput.val()).toLowerCase();
            if (text.length === 0) {
                this.$selectItems.parent().show();
                this.$disableItems.parent().show();
                this.$selectGroups.parent().show();
            } else {
                this.$selectItems.each(function () {
                    var $parent = $(this).parent();
                    $parent[$parent.text().toLowerCase().indexOf(text) < 0 ? 'hide' : 'show']();
                });
                this.$disableItems.parent().hide();
                this.$selectGroups.each(function () {
                    var $parent = $(this).parent();
                    var group = $parent.attr('data-group'),
                        $items = that.$selectItems.filter(':visible');
                    $parent[$items.filter('[data-group="' + group + '"]').length === 0 ? 'hide' : 'show']();
                });

                //Check if no matches found
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
        }
    };

    $.fn.multipleSelect = function () {
        var option = arguments[0],
            args = arguments,

            value,
            allowedMethods = [
                'getSelects', 'setSelects',
                'enable', 'disable',
                'checkAll', 'uncheckAll',
                'focus', 'blur',
                'refresh', 'refreshAll', 'close'
            ];

        this.each(function () {
            var $this = $(this),
                data = $this.data('multipleSelect'),
                options = $.extend({}, $.fn.multipleSelect.defaults,
                    $this.data(), typeof option === 'object' && option);

            if (!data) {
                data = new MultipleSelect($this, options);
                $this.data('multipleSelect', data);
            }

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw 'Unknown method: ' + option;
                }
                value = data[option](args[1]);
            } else {
                data.init();
                if (args[1]) {
                    value = data[args[1]].apply(data, [].slice.call(args, 2));
                }
            }
        });

        return typeof value !== 'undefined' ? value : this;
    };

    $.fn.multipleSelect.defaults = {
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
        maxHeight: 250,
        container: null,
        position: 'bottom',
        keepOpen: false,
        displayValues: false,
        delimiter: ', ',
        addTitle: false,
        filterAcceptOnEnter: false,
        hideOptgroupCheckboxes: false,

        selectAllText: 'Select all',
        allSelected: 'All selected',
        countSelected: '# of % selected',
        noMatchesFound: 'No matches found',

        styler: function () {
            return false;
        },
        textTemplate: function ($elm) {
            return $elm.text();
        },
        labelTemplate: function ($elm) {
            return $elm.attr('label');
        },

        onOpen: function () {
            return false;
        },
        onClose: function () {
            return false;
        },
        onCheckAll: function () {
            return false;
        },
        onUncheckAll: function () {
            return false;
        },
        onFocus: function () {
            return false;
        },
        onBlur: function () {
            return false;
        },
        onOptgroupClick: function () {
            return false;
        },
        onClick: function () {
            return false;
        }
    };
})(jQuery);
