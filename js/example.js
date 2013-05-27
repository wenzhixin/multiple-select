(function(window) {
	
	function Example($el, options, callback) {
		this.$el = $el;
		this.options = options;
		this.callback = callback;
		this.init();
	}
	
	Example.prototype = {
		constructor: Example,
		
		init: function() {
			var html = [], 
				value = 1;
				$desc = this.$el.find('div'),
				code = this.options.code;
			html.push(
				'<div class="span4">',
					'<h3>' + this.options.title + '</h3>',
					'<select class="w300">');
			$.each(this.options.items, function(i, item) {
				if (typeof item === 'object') {
					html.push('<optgroup label="' + item.label + '">');
					$.each(item.children, function(i, child) {
						html.push('<option value="' + (value++) + '">' + child + '</option>');
					});
					html.push('</optgroup>');
				} else {
					html.push('<option value="' + (value++) + '">' + item + '</option>');
				}
			});
			html.push(
					'</select>',
				'</div>',
				'<div class="span8">',
	            	'<h3>Example Code</h3>',
	            	'<pre></pre>',
	            '</div>');
	        this.$el.html(html.join(''));
	        this.$el.find('.span4 h3').after($desc);
	        code = code.replace(/</g, '&lt;');
	        code = code.replace(/>/g, '&gt;');
	        code = code.replace(/\n/g, '<br>');
	        this.$el.find('pre').html(code);
	        this.callback(this.$el.find('select'));
		}
	};
	
	window.Example = Example;
})(window);
