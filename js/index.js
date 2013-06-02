$(function() {
	Flatdoc.run({
		fetcher : Flatdoc.file('README.md')
	});
	$(document).on('flatdoc:ready', function() {
		$('#e1_t, #e2_t, #e3_t, #e4_t, #e5_t').each(function() {
			var $this = $(this);
			$this.html($('#' + $this.attr('id').replace('t', 'f')).html()).find('select').multipleSelect();
		});
		$('#e6').find('select').multipleSelect({
        	placeholder: 'Here is the placeholder'
        });
        $('#e7, #e8').find('select').multipleSelect({
        	multiple: true,
            multipleWidth: 55
        });
        $('#e9').find('select').multipleSelect({
        	selectAll: false
        });
        
        $('#e10, #e11, #e12').find('select').multipleSelect();
        $('#setSelects').click(function() {
        	$('#e10').find('select').multipleSelect('setSelects', [1, 3]);
        });
        $('#getSelects').click(function() {
        	alert('Selected values: ' + $('#e10').find('select').multipleSelect('getSelects'));
            alert('Selected texts: ' + $('#e10').find('select').multipleSelect('getSelects', 'text'));
        });
        $('#enable').click(function() {
        	$('#e11').find('select').multipleSelect('enable');
        });
        $('#disable').click(function() {
        	$('#e11').find('select').multipleSelect('disable');
        });
        $('#checkAll').click(function() {
        	$('#e12').find('select').multipleSelect('checkAll');
        });
        $('#uncheckAll').click(function() {
        	$('#e12').find('select').multipleSelect('uncheckAll');
        });
	});
}); 