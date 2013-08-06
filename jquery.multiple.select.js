/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.0.4
 * 
 * http://wenzhixin.net.cn/p/multiple-select/
 */

(function($) {
			
	'use strict';

	function MultipleSelect($el, options) {
		var that = this;
		var elWidth = $el.width();
		this.$el = $el.hide();
		this.options = options;
		
		this.$parent = $('<div class="ms-parent"></div>');
		this.$choice = $('<div class="ms-choice"><span class="placeholder">' + 
			options.placeholder + '</span><div></div></div>');
		this.$drop = $('<div class="ms-drop"></div>');
		this.$el.after(this.$parent);
		this.$parent.append(this.$choice);
		this.$parent.append(this.$drop);
		
		if (this.$el.prop('disabled')) {
			this.$choice.addClass('disabled');
		}
		this.$choice.css('width', elWidth + 'px')
			.find('span').css('width', (elWidth - 28) + 'px');
		this.$drop.css({
			width: (options.width || elWidth) + 'px'
		});
		
		$('body').click(function(e) {
			if ($(e.target)[0] === that.$choice[0] ||
					$(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
				return;
			}
			if ($(e.target)[0] === that.$drop[0] ||
					$(e.target).parents('.ms-drop')[0] !== that.$drop[0]) {
				that.close();
			}
		});
		
		if (this.options.isopen) {
			this.open();
		}
	}

	MultipleSelect.prototype = {
		constructor : MultipleSelect,
		
		init: function() {
			var that = this,
				html = [];
			if (this.options.filter) {
				html.push(
					'<div class="ms-search">',
						'<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">',
					'</div>'
				);
			}
			html.push('<ul>');
			if (this.options.selectAll) {
				html.push(
					'<li>',
						'<label>',
							'<input type="checkbox" name="selectAll" /> ',
							'[' + this.options.selectAllText + ']',
						'</label>',
					'</li>'
				);
			}
			$.each(this.$el.children(), function(i, elm) {
				html.push(that.optionToHtml(i, elm));
			});
			html.push('</ul>');
			this.$drop.html(html.join(''));
			this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
			this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');
			
			this.$searchInput = this.$drop.find('.ms-search input');
			this.$selectAll = this.$drop.find('input[name="selectAll"]');
			this.$selectGroups = this.$drop.find('label.optgroup');
			this.$selectItems = this.$drop.find('input[name="selectItem"]:enabled');
			this.$disableItems = this.$drop.find('input[name="selectItem"]:disabled');
			this.events();
			this.update();
		},
		
		optionToHtml: function(i, elm, group, groupDisabled) {
			var that = this,
				$elm = $(elm),
				html = [],
				multiple = this.options.multiple;
			if ($elm.is('option')) {
				var value = $elm.val(),
					text = $elm.text(),
					selected = $elm.prop('selected'),
					disabled = groupDisabled || $elm.prop('disabled');
				html.push(
					'<li' + (multiple ? ' class="multiple"' : '') + '>',
						'<label' + (disabled ? ' class="disabled"' : '') + '>',
							'<input type="checkbox" name="selectItem" value="' + value + '"' + 
								(selected ? ' checked="checked"' : '') +
								(disabled ? ' disabled="disabled"' : '') +
								(group ? ' data-group="' + group + '"' : '') + 
								'/> ',
							text,
						'</label>',
					'</li>'
				);
			} else if (!group && $elm.is('optgroup')) {
				var _group = 'group_' + i,
					label = $elm.attr('label'),
					disabled = $elm.prop('disabled');
				html.push(
					'<li class="group">',
						'<label class="optgroup' + (disabled ? ' disabled' : '') + '" data-group="' + _group + '">', 
							label,
						'</label>',
					'</li>');
				$.each($elm.children(), function(i, elm) {
					html.push(that.optionToHtml(i, elm, _group, disabled));
				});
			}
			return html.join('');
		},
		
		events: function() {
			var that = this;
			this.$choice.off('click').on('click', function() {
				that[that.options.isopen ? 'close' : 'open']();
			});
			this.$searchInput.off('keyup').on('keyup', function() {
				that.filter();
			});
			this.$selectAll.off('click').on('click', function() {
				var checked = $(this).prop('checked'),
					$items = that.$selectItems.filter(':visible');
				if ($items.length === that.$selectItems.length) {
					that[checked ? 'checkAll' : 'uncheckAll']();
				} else { // when the filter option is true
					$items.prop('checked', checked);
					that.update();
				}
			});
			this.$selectGroups.off('click').on('click', function() {
				var group = $(this).attr('data-group'),
					$items = that.$selectItems.filter(':visible'),
					$children = $items.filter('[data-group="' + group + '"]'),
					checked = $children.length !== $children.filter(':checked').length;
				$children.prop('checked', checked);
				that.updateSelectAll();
				that.update();
				that.options.onOptgroupClick({
					label: $(this).text(),
					checked: checked,
					children: $children.get()
				});
			});
			this.$selectItems.off('click').on('click', function() {
				that.updateSelectAll();
				that.update();
				that.options.onClick({
					label: $(this).parent().text(),
					value: $(this).val(),
					checked: $(this).prop('checked')
				});
			});
		},
		
		open: function() {
			if (this.$choice.hasClass('disabled')) {
				return;
			}
			this.options.isopen = true;
			this.$choice.find('>div').addClass('open');
			this.$drop.show();
			if (this.options.filter) {
				this.$searchInput.val('');
				this.filter();
			}
			this.options.onOpen();
		},
		
		close: function() {
			this.options.isopen = false;
			this.$choice.find('>div').removeClass('open');
			this.$drop.hide();
			this.options.onClose();
		},
		
		update: function() {
			var selects = this.getSelects('text'),
				$span = this.$choice.find('>span');
			if (selects.length) {
				$span.removeClass('placeholder').html(selects.join(','));
			} else {
				$span.addClass('placeholder').html(this.options.placeholder);
			}
			// set selects to select
			this.$el.val(this.getSelects());
		},
		
		updateSelectAll: function() {
			var $items = this.$selectItems.filter(':visible');
			this.$selectAll.prop('checked', $items.length && 
				$items.length === $items.filter(':checked').length);
		},

		//value or text, default: 'value'
		getSelects: function(type) {
			var values = [];
			this.$drop.find('input[name="selectItem"]:checked').each(function() {
				values.push(type === 'text' ? $(this).parent().text() : $(this).val());
			});
			return values;
		},
		
		setSelects: function(values) {
			var that = this;
			this.$selectItems.prop('checked', false);
			$.each(values, function(i, value) {
				that.$selectItems.filter('[value="' + value + '"]').prop('checked', true);
			});
			this.$selectAll.prop('checked', this.$selectItems.length === 
				this.$selectItems.filter(':checked').length);
			this.update();
		},
		
		enable: function() {
			this.$choice.removeClass('disabled');
		},
		
		disable: function() {
			this.$choice.addClass('disabled');
		},
		
		checkAll: function() {
			this.$selectItems.prop('checked', true);
			this.$selectAll.prop('checked', true);
			this.update();
			this.options.onCheckAll();
		},
		
		uncheckAll: function() {
			this.$selectItems.prop('checked', false);
			this.$selectAll.prop('checked', false);
			this.update();
			this.options.onUncheckAll();
		},
		
		refresh: function() {
			this.init();
		},
		
		filter: function() {
			var that = this,
				text = $.trim(this.$searchInput.val()).toLowerCase();
			if (text.length === 0) {
				this.$selectItems.parent().show();
				this.$disableItems.parent().show();
				this.$selectGroups.show();
			} else {
				this.$selectItems.each(function() {
					var $parent = $(this).parent();
					$parent[$parent.text().toLowerCase().indexOf(text) < 0 ? 'hide' : 'show']();
				});
				this.$disableItems.parent().hide();
				this.$selectGroups.each(function() {
					var group = $(this).attr('data-group'),
						$items = that.$selectItems.filter(':visible');
					$(this)[$items.filter('[data-group="' + group + '"]').length === 0 ? 'hide' : 'show']();
				});
			}
			this.updateSelectAll();
		}
	};

	$.fn.multipleSelect = function() {
		var option = arguments[0],
			args = arguments,
			
			value,
			allowedMethods = ['getSelects', 'setSelects', 'enable', 'disable', 'checkAll', 'uncheckAll', 'refresh'];

		this.each(function() {
			var $this = $(this),
				data = $this.data('multipleSelect'),
				options = $.extend({}, $.fn.multipleSelect.defaults, typeof option === 'object' && option);

			if (!data) {
				data = new MultipleSelect($this, options);
				$this.data('multipleSelect', data);
			}

			if (typeof option === 'string') {
				if ($.inArray(option, allowedMethods) < 0) {
					throw "Unknown method: " + option;
				}
				value = data[option](args[1]);
			} else {
				data.init();
			}
		});
		
		return value ? value : this;
	};
	
	$.fn.multipleSelect.defaults = {
		isopen: false,
		placeholder: '',
		selectAll: true,
		selectAllText: 'Select all',
		multiple: false,
		multipleWidth: 80,
		filter: false,
		width: undefined,
		maxHeight: 250,
		
		onOpen: function() {return false;},
		onClose: function() {return false;},
		onCheckAll: function() {return false;},
		onUncheckAll: function() {return false;},
		onOptgroupClick: function() {return false;},
		onClick: function() {return false;}
	};
})(jQuery);
