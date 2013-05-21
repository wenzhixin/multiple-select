/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 0.0.1
 * @blog http://wenzhixin.net.cn
 */

(function($) {
			
	'use strict';

	function MultipleSelect($el, options) {
		var that = this;
		this.$el = $el.hide();
		this.options = options;
		
		this.$parent = $('<div class="ms-parent"></div>');
		this.$choice = $('<div class="ms-choice"><span></span><div></div></div>');
		this.$drop = $('<div class="ms-drop"></div>');
		this.$el.after(this.$parent);
		this.$parent.append(this.$choice);
		this.$parent.append(this.$drop);
		
		if (this.$el.prop('disabled')) {
			this.$choice.addClass('disabled');
		}
		this.$choice.css('width', $el.width() + 'px')
			.find('span').css('width', ($el.width() - 20) + 'px');
		this.$drop.css({
			width: $el.width() + 'px'
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
			var html = ['<ul>'],
				multiple = this.options.multiple;
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
			this.$el.find('option').each(function() {
				var value = $(this).val(),
					text = $(this).text();
				html.push(
					'<li' + (multiple ? ' class="multiple"' : '') + '>',
						'<label>',
						'<input type="checkbox" name="selectItem" value="' + value + '" /> ',
						text,
						'</label>',
					'</li>'
				);
			});
			html.push('</ul>');
			this.$drop.html(html.join(''));
			this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');
			
			this.$selectAll = this.$drop.find('input[name="selectAll"]');
			this.$selectItems = this.$drop.find('input[name="selectItem"]');
			this.events();
		},
		
		events: function() {
			var that = this;
			this.$choice.on('click', function() {
				that[that.options.isopen ? 'close' : 'open']();
			});
			this.$selectAll.on('click', function() {
				that.$selectItems.prop('checked', $(this).prop('checked'));
				that.update();
			});
			this.$selectItems.on('click', function() {
				that.$selectAll.prop('checked', that.$selectItems.length === 
					that.$selectItems.filter(':checked').length);
				that.update();
			});
		},
		
		open: function() {
			if (this.$choice.hasClass('disabled')) {
				return;
			}
			this.options.isopen = true;
			this.$choice.find('>div').addClass('open');
			this.$drop.show();
		},
		
		close: function() {
			this.options.isopen = false;
			this.$choice.find('>div').removeClass('open');
			this.$drop.hide();
		},
		
		update: function() {
			this.$choice.find('>span').html(this.getSelects('text').join(','));
		},

		//value or text, default: 'value'
		getSelects: function(type) {
			var values = [];
			this.$selectItems.filter(':checked').each(function() {
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
			this.$selectAll.prop('checked', that.$selectItems.length === 
				this.$selectItems.filter(':checked').length);
			this.update();
		},
		
		enable: function() {
			this.$choice.removeClass('disabled');
		},
		
		disable: function() {
			this.$choice.addClass('disabled');
		}
	};

	$.fn.multipleSelect = function() {
		var option = arguments[0],
			args = arguments,
			
			value,
			allowedMethods = ['getSelects', 'setSelects', 'enable', 'disable'];

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
		selectAll: true,
		selectAllText: 'Select all',
		multiple: false,
		multipleWidth: 80
	};
})(jQuery);
