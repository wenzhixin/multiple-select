/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 0.0.1
 * @blog http://wenzhixin.net.cn
 */

(function($) {
	
	'use strict';

	function MultipleSelect($el, options) {
		this.$el = $el.hide();
		this.options = options;
		
		this.$choice = $('<div class="ms-choice"><span></span><div></div></div>');
		this.$drop = $('<div class="ms-drop"></div>');
		this.$el.after(this.$choice);
		this.$choice.after(this.$drop);
		
		this.$choice.css('width', $el.width() + 'px')
			.find('span').css('width', ($el.width() - 20) + 'px');
		this.$drop.css({
			width: $el.width() + 'px',
			top: (this.$choice.offset().top + this.$choice.outerHeight()) + 'px',
			left: this.$choice.offset().left + 'px'
		});
		if (this.options.isopen) {
			this.open();
		}
	}

	MultipleSelect.prototype = {
		constructor : MultipleSelect,
		
		init: function() {
			var html = ['<ul>'];
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
				var value = $(this).attr('value'),
					text = $(this).text();
				html.push(
					'<li>',
						'<label>',
						'<input type="checkbox" name="selectItem" value="' + value + '" /> ',
						text,
						'</label>',
					'</li>'
				);
			});
			html.push('</ul>');
			this.$drop.html(html.join(''));
			this.events();
		},
		
		events: function() {
			var that = this;
			this.$choice.off('click').click(function() {
				that[that.isopen ? 'close' : 'open']();
				that.isopen = !that.isopen;
			});
			this.$drop.find('input[name="selectAll"]').off('click').click(function() {
				var checked = $(this).attr('checked') ? true : false;
				that.$drop.find('input[name="selectItem"]').attr('checked', checked);
			});
		},
		
		open: function() {
			this.$choice.find('>div').addClass('open');
			this.$drop.show();
		},
		
		close: function() {
			this.$choice.find('>div').removeClass('open');
			this.$drop.hide();
			this.$choice.find('>span').text(this.getSelects('text').join(', '));
		},
		
		//value or text, default: 'value'
		getSelects: function(type) {
			var values = [];
			this.$drop.find('input[name="selectItem"]:checked').each(function() {
				values.push(type === 'text' ? $(this).parent().text() : $(this).val());
			});
			return values;
		}
	};

	$.fn.multipleSelect = function() {
		var option = arguments[0], 
			args = arguments,
			
			value, 
			allowedMethods = ['open', 'close', 'getSelects'];

		this.each(function() {
			var $this = $(this), 
				data = $this.data('multipleSelect'), 
				options = $.extend($.fn.multipleSelect.defaults, typeof option === 'object' && option);

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
		selectAllText: 'Select all'
	};
})(jQuery); 