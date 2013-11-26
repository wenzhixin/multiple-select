$(function() {
	var readme = 'README.md';
	if (location.href.indexOf('locale=zh_CN') !== -1) {
		readme = 'README-ZH-CN.md';
	}
	Flatdoc.run({
		fetcher : Flatdoc.file(readme)
	});
	$(document).on('flatdoc:ready', function() {
		$('#e1_t, #e2_t, #e3_t, #e4_t, #e5_t').each(function() {
			var $this = $(this);
			$this.html($('#' + $this.attr('id').replace('t', 'f')).html()).find('select').multipleSelect();
		});
		$('#e6').find('select').multipleSelect({
			placeholder: 'Here is the placeholder'
        });
        $('#e7').find('select').multipleSelect({
			width: 460,
			multiple: true,
            multipleWidth: 55
        });
        $('#e8').find('select').multipleSelect({
			multiple: true,
            multipleWidth: 55
        });
        $('#e9').find('select').multipleSelect({
			selectAll: false
        });
        
        $('#e10, #e11, #e12, #e13').find('select').multipleSelect();
        $('#setSelectsBtn').click(function() {
			$('#e10').find('select').multipleSelect('setSelects', [1, 3]);
        });
        $('#getSelectsBtn').click(function() {
			alert('Selected values: ' + $('#e10').find('select').multipleSelect('getSelects'));
            alert('Selected texts: ' + $('#e10').find('select').multipleSelect('getSelects', 'text'));
        });
        $('#enableBtn').click(function() {
			$('#e11').find('select').multipleSelect('enable');
        });
        $('#disableBtn').click(function() {
			$('#e11').find('select').multipleSelect('disable');
        });
        $('#checkAllBtn').click(function() {
			$('#e12').find('select').multipleSelect('checkAll');
        });
        $('#uncheckAllBtn').click(function() {
			$('#e12').find('select').multipleSelect('uncheckAll');
        });
        $('#refreshAdd').click(function() {
			var $select = $('#e13').find('select'),
				$input = $('#refreshInput'),
				$selected = $('#refreshSelected'),
				$disabled = $('#refreshDisabled'),
			value = $.trim($input.val()),
				$opt = $('<option />', {
					value: value,
					text: value
				});
			if (!value) {
				$input.focus();
				return;
			}
			if ($selected.is(':checked')){
				$opt.prop('selected', true);
			}
			if($disabled.is(':checked')){
				$opt.attr('disabled', true);
			}
			$input.val('');
			$select.append($opt).multipleSelect('refresh');
        });
        $('#e14').find('select').multipleSelect({
			filter: true,
			onCheckAll: function() {
				console.log('Check all clicked!');
			},
			onUncheckAll: function() {
				console.log('Uncheck all clicked!');
			}
        });
        $('#e15').find('select').multipleSelect({
			filter: true,
			multiple: true
        });
        var $eventResult = $('#eventResult');
        $('#e16').find('select').multipleSelect({
			onOpen: function() {
				$eventResult.text('Select opened!');
			},
			onClose: function() {
				$eventResult.text('Select closed!');
			},
			onCheckAll: function() {
				$eventResult.text('Check all clicked!');
			},
			onUncheckAll: function() {
				$eventResult.text('Uncheck all clicked!');
			},
			onOptgroupClick: function(view) {
				var values = $.map(view.children, function(child){
					return child.value;
				}).join(', ');
				$eventResult.text('Optgroup ' + view.label + ' ' + (view.checked ? 'checked' : 'unchecked') + ': ' + values);
			},
			onClick: function(view) {
				$eventResult.text(view.label + '(' + view.value + ') ' + (view.checked ? 'checked' : 'unchecked'));
			}
        });
	});
}); 