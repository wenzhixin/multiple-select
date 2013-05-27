$(function() { 
    new Example($('#e1'), {
        title: 'The Default',
        items: ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'],
        code: '\
<head>\n\
    <link href="multiple-select.css" rel="stylesheet"/>\n\
</head>\n\
<body>\n\
    <select id="select">\n\
        <option value="1">January</option>\n\
        ...\n\
        <option value="12">December</option>\n\
    </select>\n\
    <script src="jquery.multiple.select.js"></script>\n\
    <script>\n\
        $(function() { \n\
            $("#select").multipleSelect(); \n\
        });\n\
    </script>\n\
</body>'
    }, function($select) {
        $select.multipleSelect();
    });
    
    
    new Example($('#e6'), {
        title: 'With Optgroup',
        items: [{
        	label: 'Group 1',
        	children: ['Option 1', 'Option 2', 'Option 3']
        }, {
        	label: 'Group 2',
        	children: ['Option 4', 'Option 5', 'Option 6']
        }, {
        	label: 'Group 3',
        	children: ['Option 7', 'Option 8', 'Option 9']
        }],
        code: '\
<head>\n\
    <link href="multiple-select.css" rel="stylesheet"/>\n\
</head>\n\
<body>\n\
    <select id="select">\n\
    	<optgroup label="Group 1">\n\
        	<option value="1">Option 1</option>\n\
        	...\n\
        <optgroup>\n\
    </select>\n\
    <script src="jquery.multiple.select.js"></script>\n\
    <script>\n\
        $(function() { \n\
            $("#select").multipleSelect(); \n\
        });\n\
    </script>\n\
</body>'
    }, function($select) {
        $select.multipleSelect();
    });
    
    
    new Example($('#e2'), {
        title: 'The Hide Select All',
        items: ['First', 'Second', 'Third', 'Fourth'],
        code: '\
<head>\n\
    <link href="multiple-select.css" rel="stylesheet"/>\n\
</head>\n\
<body>\n\
    <select id="select">\n\
        <option value="1">First</option>\n\
        ...\n\
        <option value="4">Fourth</option>\n\
    </select>\n\
    <script src="jquery.multiple.select.js"></script>\n\
    <script>\n\
        $(function() { \n\
            $("#select").multipleSelect({\n\
                selectAll: false\n\
            })); \n\
        });\n\
    </script>\n\
</body>'
    }, function($select) {
        $select.multipleSelect({
            selectAll: false
        });
    });
    
    
    var days = [];
    for (var i = 0; i < 30; i++) {
        days.push(i + 1);
    }
    new Example($('#e3'), {
        title: 'The Multiple Items',
        items: days,
        code: '\
<head>\n\
    <link href="multiple-select.css" rel="stylesheet"/>\n\
</head>\n\
<body>\n\
    <select id="select">\n\
        <option value="1">1</option>\n\
        ...\n\
        <option value="31">31</option>\n\
    </select>\n\
    <script src="jquery.multiple.select.js"></script>\n\
    <script>\n\
        $(function() { \n\
            $("#select").multipleSelect({\n\
                multiple: true,\n\
                multipleWidth: 55\n\
            })); \n\
        });\n\
    </script>\n\
</body>'
    }, function($select) {
        $select.multipleSelect({
            multiple: true,
            multipleWidth: 55
        });
    });
    
    new Example($('#e7'), {
        title: 'With Optgroup',
        items: [{
        	label: 'Group 1',
        	children: ['1', '2', '3', '4', '5']
        }, {
        	label: 'Group 2',
        	children: ['6', '7', '8', '9', '10']
        }, {
        	label: 'Group 3',
        	children: ['11', '12', '13', '14', '15']
        }],
        code: '\
<head>\n\
    <link href="multiple-select.css" rel="stylesheet"/>\n\
</head>\n\
<body>\n\
    <select id="select">\n\
    	<optgroup label="Group 1">\n\
        	<option value="1">1</option>\n\
        	...\n\
        </optgroup>\n\
    </select>\n\
    <script src="jquery.multiple.select.js"></script>\n\
    <script>\n\
        $(function() { \n\
            $("#select").multipleSelect({\n\
                multiple: true,\n\
                multipleWidth: 55\n\
            })); \n\
        });\n\
    </script>\n\
</body>'
    }, function($select) {
        $select.multipleSelect({
            multiple: true,
            multipleWidth: 55
        });
    });
    
    new Example($('#e4'), {
        title: 'The Placeholder',
        items: ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'],
        code: '\
<head>\n\
    <link href="multiple-select.css" rel="stylesheet"/>\n\
</head>\n\
<body>\n\
    <select id="select">\n\
        <option value="1">January</option>\n\
        ...\n\
        <option value="12">December</option>\n\
    </select>\n\
    <script src="jquery.multiple.select.js"></script>\n\
    <script>\n\
        $(function() { \n\
            $("#select").multipleSelect({\n\
            	placeholder: "Here is the placeholder"\n\
            }); \n\
        });\n\
    </script>\n\
</body>'
    }, function($select) {
        $select.multipleSelect({
            placeholder: 'Here is the placeholder'
        });
    });
    
    new Example($('#e5'), {
        title: 'Programmatic Access',
        items: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        code: '\
<head>\n\
    <link href="multiple-select.css" rel="stylesheet"/>\n\
</head>\n\
<body>\n\
    <button id="setSelects">Set selects</button>\n\
    <button id="getSelects">Get selects</button>\n\
    <button id="enable">Enable</button>\n\
    <button id="disable">Disabled</button>\n\
    <select id="select">\n\
        <option value="1">Monday</option>\n\
        ...\n\
        <option value="7">Sunday</option>\n\
    </select>\n\
    <script src="jquery.multiple.select.js"></script>\n\
    <script>\n\
        $(function() { \n\
            $select.multipleSelect();\n\
            $("#setSelects").click(function() {\n\
                $("#select2").multipleSelect("setSelects", [1, 3]);\n\
            });\n\
            $("#getSelects").click(function() {\n\
                alert($("#select2").multipleSelect("getSelects"));\n\
                alert("Selected text is: " + $("#select2").multipleSelect("getSelects", "text"));\n\
            });\n\
            $("#enable").click(function() {\n\
               $("#select2").multipleSelect("enable");\n\
            });\n\
            $("#disable").click(function() {\n\
               $("#select2").multipleSelect("disable");\n\
            });\n\
        });\n\
    </script>\n\
</body>'
    }, function($select) {
        $select.multipleSelect();
        $('#setSelects').click(function() {
            $select.multipleSelect('setSelects', [1, 3]);
        });
        $('#getSelects').click(function() {
            alert($select.multipleSelect('getSelects'));
            alert('Selected text is: ' + $select.multipleSelect('getSelects', 'text'));
        });
        $('#enable').click(function() {
           $select.multipleSelect('enable');
        });
        $('#disable').click(function() {
           $select.multipleSelect('disable');
        });
    });
    
    $('#examples .row:odd').addClass('bcef')
});
