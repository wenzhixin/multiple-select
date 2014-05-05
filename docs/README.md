## Multiple Select

Multiple select is a jQuery plugin to select multiple elements with checkboxes :).

**Multiple Selected is licensed under the The MIT License. Completely free, you can arbitrarily use and modify this plugin. If you like this plugin, you can give me a <a href="https://github.com/wenzhixin/multiple-select/">star</a>, and I will do better, thanks.**

*Current version: 1.1.0*

## Requirements

* jQuery >= 1.7.0

## Features

* Default option allows to show checkbox.
* Ability to grouping elements.
* Supports to show multiple items in single row.
* Select all options.
* Feature to show placeholder.

## Browser Compatibility

* IE 7+
* Chrome 8+
* Firefox 10+
* Safari 3+
* Opera 10.6+

## Examples

### The Basics1

Multiple Select can take a regular select box like this:

<p id="e1_f">
	<select class="w300" multiple="multiple">
		<option value="1">January</option>
		<option value="2">February</option>
	    <option value="3">March</option>
	    <option value="4">April</option>
	    <option value="5">May</option>
	    <option value="6">June</option>
	    <option value="7">July</option>
	    <option value="8">August</option>
	    <option value="9">September</option>
	    <option value="10">October</option>
	    <option value="11">November</option>
	    <option value="12">December</option>
	</select>
</p>

and turns it into:

<p id="e1_t"></p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<select multiple="multiple">
	    <option value="1">January</option>
	    ...
	    <option value="12">December</option>
	</select>
	<script src="jquery.multiple.select.js"></script>
	<script>
		$('select').multipleSelect();
	</script>
</body>
```

### The Basics2

Multiple Select can take a regular select box like this:

<p id="e2_f">
	<select class="w300" multiple="multiple" disabled="disabled">
	    <option value="1">January</option>
		<option value="2">February</option>
	    <option value="3">March</option>
	    <option value="4">April</option>
	    <option value="5">May</option>
	    <option value="6">June</option>
	    <option value="7">July</option>
	    <option value="8">August</option>
	    <option value="9">September</option>
	    <option value="10">October</option>
	    <option value="11">November</option>
	    <option value="12">December</option>
	</select>
</p>

and turns it into:

<p id="e2_t"></p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<select multiple="multiple" disabled="disabled">
	    <option value="1">January</option>
	    ...
	    <option value="12">December</option>
	</select>
	<script src="jquery.multiple.select.js"></script>
	<script>
		$('select').multipleSelect();
	</script>
</body>
```

### The Basics3

Multiple Select can take a regular select box like this:

<p id="e3_f">
	<select class="w300" multiple="multiple">
	    <option value="1" selected="selected">January</option>
		<option value="2" disabled="disabled">February</option>
	    <option value="3" selected="selected" disabled="disabled">March</option>
	    <option value="4">April</option>
	    <option value="5">May</option>
	    <option value="6">June</option>
	    <option value="7">July</option>
	    <option value="8">August</option>
	    <option value="9">September</option>
	    <option value="10">October</option>
	    <option value="11">November</option>
	    <option value="12">December</option>
	</select>
</p>

and turns it into:

<p id="e3_t"></p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<select multiple="multiple">
	    <option value="1" selected="selected">January</option>
		<option value="2" disabled="disabled">February</option>
	    <option value="3" selected="selected" disabled="disabled">March</option>
	    ...
	</select>
	<script src="jquery.multiple.select.js"></script>
	<script>
		$('select').multipleSelect();
	</script>
</body>
```

### With Optgroups1

Multiple Select can take a regular select box like this:

<p id="e4_f">
	<select class="w300" multiple="multiple">
		<optgroup label="Group 1">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</optgroup>
		<optgroup label="Group 2">
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
		</optgroup>
		<optgroup label="Group 3">
			<option value="7">Option 7</option>
			<option value="8">Option 8</option>
			<option value="9">Option 9</option>
		</optgroup>
	</select>
</p>

and turns it into:

<p id="e4_t"></p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<select multiple="multiple">
	    <optgroup label="Group 1">
			<option value="1">Option 1</option>
			...
		</optgroup>
		...
		<optgroup label="Group 3">
			...
			<option value="9">Option 9</option>
		</optgroup>
	</select>
	<script src="jquery.multiple.select.js"></script>
	<script>
		$('select').multipleSelect();
	</script>
</body>
```

### With Optgroups2

Multiple Select can take a regular select box like this:

<p id="e5_f">
	<select class="w300" multiple="multiple">
		<optgroup label="Group 1" disabled="disabled">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</optgroup>
		<optgroup label="Group 2">
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
		</optgroup>
		<optgroup label="Group 3">
			<option value="7">Option 7</option>
			<option value="8">Option 8</option>
			<option value="9">Option 9</option>
		</optgroup>
	</select>
</p>

and turns it into:

<p id="e5_t"></p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<select multiple="multiple">
	    <optgroup label="Group 1" disabled="disabled">
			<option value="1">Option 1</option>
			...
		</optgroup>
		...
		<optgroup label="Group 3">
			...
			<option value="9">Option 9</option>
		</optgroup>
	</select>
	<script src="jquery.multiple.select.js"></script>
	<script>
		$('select').multipleSelect();
	</script>
</body>
```

### The Placeholder

<p id="e6">
	<select class="w300" multiple="multiple">
		<option value="1">January</option>
		<option value="2">February</option>
	    <option value="3">March</option>
	    <option value="4">April</option>
	    <option value="5">May</option>
	    <option value="6">June</option>
	    <option value="7">July</option>
	    <option value="8">August</option>
	    <option value="9">September</option>
	    <option value="10">October</option>
	    <option value="11">November</option>
	    <option value="12">December</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
    <select multiple="multiple">
        <option value="1">January</option>
        ...
        <option value="12">December</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect({
        	placeholder: "Here is the placeholder"
        });
    </script>
</body>
```

### The Multiple Items

Multiple Select supports to show multiple items in single row.

<p id="e7">
	<select class="w300" multiple="multiple">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
		<option value="8">8</option>
		<option value="9">9</option>
		<option value="10">10</option>
		<option value="11">11</option>
		<option value="12">12</option>
		<option value="13">13</option>
		<option value="14">14</option>
		<option value="15">15</option>
		<option value="16">16</option>
		<option value="17">17</option>
		<option value="18">18</option>
		<option value="19">19</option>
		<option value="20">20</option>
		<option value="21">21</option>
		<option value="22">22</option>
		<option value="23">23</option>
		<option value="24">24</option>
		<option value="25">25</option>
		<option value="26">26</option>
		<option value="27">27</option>
		<option value="28">28</option>
		<option value="29">29</option>
		<option value="30">30</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
    <select multiple="multiple">
        <option value="1">1</option>
        ...
        <option value="30">30</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect({
        	width: 460,
        	multiple: true,
            multipleWidth: 55
        });
    </script>
</body>
```

### With Optgroups

Multiple Select supports to show multiple items in single row with optgroups.

<p id="e8">
	<select class="w300" multiple="multiple">
		<optgroup label="Group 1">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</optgroup>
		<optgroup label="Group 2">
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
		</optgroup>
		<optgroup label="Group 3">
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
		</optgroup>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
    <select multiple="multiple">
        <optgroup label="Group 1">
			<option value="1">1</option>
			...
		</optgroup>
        ...
        <optgroup label="Group 3">
			<option value="15">15</option>
		</optgroup>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect({
        	multiple: true,
            multipleWidth: 55,
            width: '100%'
        });
    </script>
</body>
```

### The Hide Select All

<p id="e9">
	<select class="w300" multiple="multiple">
		<option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
    <select multiple="multiple">
        <option value="1">First</option>
        ...
        <option value="4">Fourth</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect({
        	selectAll: false
        });
    </script>
</body>
```

### The Single Row

<p id="e17">
	<select class="w300" multiple="multiple">
		<option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4" selected="selected">Fourth</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
    <select multiple="multiple">
        <option value="1">First</option>
        ...
        <option value="4" selected="selected">Fourth</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect({
        	single: true
        });
    </script>
</body>
```

### The Position

Set the select dropdown in top position.

<p id="e18">
	<select class="w300" multiple="multiple">
	    <option value="1">January</option>
		<option value="2">February</option>
	    <option value="3">March</option>
	    <option value="4">April</option>
	    <option value="5">May</option>
	    <option value="6">June</option>
	    <option value="7">July</option>
	    <option value="8">August</option>
	    <option value="9">September</option>
	    <option value="10">October</option>
	    <option value="11">November</option>
	    <option value="12">December</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<select multiple="multiple">
	    <option value="1">January</option>
	    ...
	    <option value="12">December</option>
	</select>
	<script src="jquery.multiple.select.js"></script>
	<script>
		$('select').multipleSelect({
		    position: 'top'
		});
	</script>
</body>
```

### The Filter1

<p id="e14">
	<select class="w300" multiple="multiple">
		<option value="1">abc</option>
		<option value="2">bcd</option>
		<option value="3">cde</option>
		<option value="4">def</option>
		<option value="5">efg</option>
		<option value="6">fgh</option>
		<option value="7">ghi</option>
		<option value="8">hij</option>
		<option value="9">ijk</option>
		<option value="10">jkl</option>
		<option value="11">klm</option>
		<option value="12">lmn</option>
		<option value="13">mno</option>
		<option value="14">nop</option>
		<option value="15">opq</option>
		<option value="16">pqr</option>
		<option value="17">qrs</option>
		<option value="18">rst</option>
		<option value="19">stu</option>
		<option value="20">tuv</option>
		<option value="21">uvw</option>
		<option value="22">vwx</option>
		<option value="23">wxy</option>
		<option value="24">xyz</option>
		<option value="25">123</option>
		<option value="26">234</option>
		<option value="27">345</option>
		<option value="28">456</option>
		<option value="29">567</option>
		<option value="30">678</option>
		<option value="31">789</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
    <select multiple="multiple">
        <option value="1">abc</option>
        ...
        <option value="31">789</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect({
        	filter: true
        });
    </script>
</body>
```

### The Filter2

<p id="e15">
	<select class="w300" multiple="multiple">
		<optgroup label="Group 1">
			<option value="1">000</option>
			<option value="2">111</option>
			<option value="3">222</option>
			<option value="4">333</option>
			<option value="5">444</option>
			<option value="6">555</option>
			<option value="7">666</option>
			<option value="8">777</option>
			<option value="9">888</option>
			<option value="10">999</option>
		</optgroup>
		<optgroup label="Group 2">
			<option value="11">210</option>
			<option value="12">321</option>
			<option value="13">432</option>
			<option value="14">543</option>
			<option value="15">654</option>
			<option value="16">765</option>
			<option value="17">876</option>
			<option value="18">987</option>
			<option value="19">098</option>
		</optgroup>
		<optgroup label="Group 3">
			<option value="20">012</option>
			<option value="21">123</option>
			<option value="22">234</option>
			<option value="23">345</option>
			<option value="24">456</option>
			<option value="25">567</option>
			<option value="26">678</option>
			<option value="27">789</option>
			<option value="28">890</option>
		</optgroup>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
    <select multiple="multiple">
		<optgroup label="Group 1">
			<option value="1">000</option>
			...
		...
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect({
        	filter: true,
        	multiple: true
        });
    </script>
</body>
```

### The Keep Open

<p id="e21">
	<select class="w300" multiple="multiple">
	    <option value="1">January</option>
		<option value="2">February</option>
	    <option value="3">March</option>
	    <option value="4">April</option>
	    <option value="5">May</option>
	    <option value="6">June</option>
	    <option value="7">July</option>
	    <option value="8">August</option>
	    <option value="9">September</option>
	    <option value="10">October</option>
	    <option value="11">November</option>
	    <option value="12">December</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<select multiple="multiple">
	    <option value="1">January</option>
	    ...
	    <option value="12">December</option>
	</select>
	<script src="jquery.multiple.select.js"></script>
	<script>
		$('select').multipleSelect({
		    isOpen: true,
		    keeyOpen: true
		});
	</script>
</body>
```

### The Styler

Custom the item style.

<p id="e20">
	<select class="w300" multiple="multiple">
	    <option value="1">January</option>
		<option value="2">February</option>
	    <option value="3">March</option>
	    <option value="4">April</option>
	    <option value="5">May</option>
	    <option value="6">June</option>
	    <option value="7">July</option>
	    <option value="8">August</option>
	    <option value="9">September</option>
	    <option value="10">October</option>
	    <option value="11">November</option>
	    <option value="12">December</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<select multiple="multiple">
	    <option value="1">January</option>
	    ...
	    <option value="12">December</option>
	</select>
	<script src="jquery.multiple.select.js"></script>
	<script>
		$('select').multipleSelect({
		    styler: function(value) {
		        if (value == '1') {
                    return 'background-color: #ffee00; color: #ff0000;';
                }
                if (value == '6') {
                    return 'background-color: #000; color: #fff;';
                }
		    }
		});
	</script>
</body>
```

### SetSelects/GetSelects

<p>
	<button id="setSelectsBtn" class="button">SetSelects</button>
	<button id="getSelectsBtn" class="button">GetSelects</button>
</p>
<p id="e10">
	<select class="w300" multiple="multiple">
		<option value="1">Monday</option>
		<option value="2">Tuesday</option>
		<option value="3">Wednesday</option>
		<option value="4">Thursday</option>
		<option value="5">Friday</option>
		<option value="6">Saturday</option>
		<option value="7">Sunday</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<button id="setSelectsBtn">SetSelects</button>
	<button id="getSelectsBtn">GetSelects</button>
    <select multiple="multiple">
        <option value="1">Monday</option>
        ...
        <option value="7">Sunday</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect();
        $("#setSelectsBtn").click(function() {
        	$("select").multipleSelect("setSelects", [1, 3]);
        });
        $("#getSelectsBtn").click(function() {
        	alert("Selected values: " + $("select").multipleSelect("getSelects"));
            alert("Selected texts: " + $("select").multipleSelect("getSelects", "text"));
        });
    </script>
</body>
```

### Enable/Disable

<p>
	<button id="enableBtn" class="button">Enable</button>
	<button id="disableBtn" class="button">Disable</button>
</p>
<p id="e11">
	<select class="w300" multiple="multiple">
		<option value="1">Monday</option>
		<option value="2">Tuesday</option>
		<option value="3">Wednesday</option>
		<option value="4">Thursday</option>
		<option value="5">Friday</option>
		<option value="6">Saturday</option>
		<option value="7">Sunday</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<button id="enableBtn">Enable</button>
	<button id="disableBtn">Disabled</button>
    <select multiple="multiple">
        <option value="1">Monday</option>
        ...
        <option value="7">Sunday</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect();
        $("#setSelectsBtn").click(function() {
        	$("select").multipleSelect("enable");
        });
        $("#getSelectsBtn").click(function() {
        	$("select").multipleSelect("disable");
        });
    </script>
</body>
```

### CheckAll/UncheckAll

<p>
	<button id="checkAllBtn" class="button">CheckAll</button>
	<button id="uncheckAllBtn" class="button">UncheckAll</button>
</p>
<p id="e12">
	<select class="w300" multiple="multiple">
		<option value="1">Monday</option>
		<option value="2">Tuesday</option>
		<option value="3">Wednesday</option>
		<option value="4">Thursday</option>
		<option value="5">Friday</option>
		<option value="6">Saturday</option>
		<option value="7">Sunday</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<button id="checkAllBtn" class="button">CheckAll</button>
    <button id="uncheckAllBtn" class="button">UncheckAll</button>
    <select multiple="multiple">
        <option value="1">Monday</option>
        ...
        <option value="7">Sunday</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect();
        $("#setSelectsBtn").click(function() {
        	$("select").multipleSelect("checkAll");
        });
        $("#getSelectsBtn").click(function() {
        	$("select").multipleSelect("uncheckAll");
        });
    </script>
</body>
```

### Focus/Blur

<p>
	<button id="focusBtn" class="button">Focus</button>
	<button id="blurBtn" class="button">Blur</button>
</p>
<p id="e19">
	<select class="w300" multiple="multiple">
		<option value="1">Monday</option>
		<option value="2">Tuesday</option>
		<option value="3">Wednesday</option>
		<option value="4">Thursday</option>
		<option value="5">Friday</option>
		<option value="6">Saturday</option>
		<option value="7">Sunday</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<button id="focusBtn" class="button">Focus</button>
	<button id="blurBtn" class="button">Blur</button>
    <select multiple="multiple">
        <option value="1">Monday</option>
        ...
        <option value="7">Sunday</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect();
        $("#focusBtn").click(function() {
        	$("select").multipleSelect("focus");
        });
        $("#blurBtn").click(function() {
        	$("select").multipleSelect("blur");
        });
    </script>
</body>
```

### The Refresh

Reloads the Multiple Select. 
If you're dynamically adding/removing option tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.

<p>
	<input id="refreshInput" type="text" required="required" />
	<button id="refreshAdd" class="button">Add + Refresh</button>
	<br />
	<label><input id="refreshSelected" type="checkbox" />Selected?</label>
	<label><input id="refreshDisabled" type="checkbox" />Disabled?</label>
</p>
<p id="e13">
	<select class="w300" multiple="multiple">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<input id="refreshInput" type="text" required="required" />
	<button id="refreshAdd">Add + Refresh</button>
	<br />
	<label><input id="refreshSelected" type="checkbox" />Selected?</label>
	<label><input id="refreshDisabled" type="checkbox" />Disabled?</label>
    <select multiple="multiple">
        <option value="1">1</option>
        ...
        <option value="3">3</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect();
        $("#refreshAdd").click(function() {
        	var $select = $("select"),
        		$input = $("#refreshInput"),
        		$selected = $("#refreshSelected"),
        		$disabled = $("#refreshDisabled"),
        		value = $.trim($input.val()),
        		$opt = $("<option />", {
					value: value,
					text: value
				});
        	if (!value) {
        		$input.focus();
        		return;
        	}
			if ($selected.is(":checked")){
				$opt.prop("selected", true);
			}
			if($disabled.is(":checked")){
				$opt.attr("disabled", true);
			}
			$input.val("");
			$select.append($opt).multipleSelect("refresh");
        });
    </script>
</body>
```

### The Callbacks/Events

<p id="eventResult" style="color: #444; background-color: #ddd;">Here is the result of event.</p>

<p id="e16">
	<select class="w300" multiple="multiple">
		<optgroup label="Group 1">
			<option value="1">000</option>
			<option value="2">111</option>
			<option value="3">222</option>
			<option value="4">333</option>
			<option value="5">444</option>
			<option value="6">555</option>
			<option value="7">666</option>
			<option value="8">777</option>
			<option value="9">888</option>
			<option value="10">999</option>
		</optgroup>
		<optgroup label="Group 2">
			<option value="11">210</option>
			<option value="12">321</option>
			<option value="13">432</option>
			<option value="14">543</option>
			<option value="15">654</option>
			<option value="16">765</option>
			<option value="17">876</option>
			<option value="18">987</option>
			<option value="19">098</option>
		</optgroup>
		<optgroup label="Group 3">
			<option value="20">012</option>
			<option value="21">123</option>
			<option value="22">234</option>
			<option value="23">345</option>
			<option value="24">456</option>
			<option value="25">567</option>
			<option value="26">678</option>
			<option value="27">789</option>
			<option value="28">890</option>
		</optgroup>
	</select>
</p>

``` html
<head>
	<link href="multiple-select.css" rel="stylesheet"/>
</head>
<body>
	<p id="eventResult">Here is the result of event.</p>
    <select multiple="multiple">
        <optgroup label="Group 1">
			<option value="1">000</option>
			...
		...
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect({
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
        	onFocus: function() {
        		$eventResult.text('focus!');
        	},
        	onBlur: function() {
        		$eventResult.text('blur!');
        	},
        	onOptgroupClick: function(view) {
				var values = $.map(view.children, function(child){
					return child.value;
				}).join(', ');
				$eventResult.text('Optgroup ' + view.label + ' ' + 
					(view.checked ? 'checked' : 'unchecked') + ': ' + values);
			},
			onClick: function(view) {
				$eventResult.text(view.label + '(' + view.value + ') ' + 
					(view.checked ? 'checked' : 'unchecked'));
			}
        });
    </script>
</body>
```

## Documentation

### Constructor

#### isOpen

Type: boolean	

Whether or not Multiple Select open the select dropdown.

By default this option is set to ```false```.

#### placeholder

Type: string	

A placeholder value can be defined and will be displayed until you select a item.

By default this option is set to ```''```.

#### selectAll

Type: boolean	

Whether or not Multiple Select show select all checkbox.

By default this option is set to ```true```.

#### selectAllText

Type: string	

Multiple Select select all checkbox text.

By default this option is set to ```Select all```.

#### allSelected

Type: false or string

The text displays when the select all selected.

By default this option is set to ```All selected```.

#### minumimCountSelected

Type: int

```countSelected``` will be shown only if more than X items where selected.

By default this option is set to ```3```.

#### countSelected

Type: false or string

'#' is replaced with the count of selected items, '%' is replaces with total items.

By default this option is set to ```# of % selected```.

#### multiple

Type: boolean	

Whether or not Multiple Select show multiple items in a row.

By default this option is set to ```false```.

#### multipleWidth

Type: integer	

Multiple Select show multiple items width.

By default this option is set to ```80```.

#### single

Type: boolean

Whether or not Multiple Select allows you to select only one option.

By default this option is set to ```false```.

#### position

Type: string

Defines the position of select dropdown, can only be ```bottom``` or ```top```.

By default this option is set to ```bottom```.

#### filter

Type: boolean

Whether or not Multiple Select show a search field to search through checkbox items.

By default this option is set to ```false```.

#### width

Type: integer/string

Define the width property of the dropdown list, support a percentage setting.

By default this option is set to ```undefined```. Which is the same as the select input field.

#### maxHeight

Type: integer

Define the maximum height property of the dropdown list.

By default this option is set to ```250```.

#### keepOpen

Type: boolean

Keep the select dropdown always open.

By default this option is set to ```false```.

#### styler

Type: function

The item styler function, return style string to custom the item style such as ```background: red```.
The function take one parameter: value.

```javascript
styler: function(value) {
    if (value == '1') {
        return 'background-color: #ffee00; color: red;';
    }
}
```

### Events

#### onOpen

Fires when the dropdown list is open.

#### onClose

Fires when the dropdown list is close.

#### onCheckAll

Fires when all the options are checked by either clicking the "Select all" checkbox, or when the "checkall" method is programatically called.

#### onUncheckAll

#### onFocus

Bind an event handler to the "focus".

#### onBlur

Bind an event handler to the "blur"

#### onOptgroupClick

Fires when a an optgroup label is clicked on. 

```javascript
onOptgroupClick: function(view) {
	/*
	view.label: the text of the optgroup
	view.checked: the checked of the optgroup
	view.children: an array of the checkboxes (DOM elements) inside the optgroup
	*/
}
```

#### onClick

Fires when a checkbox is checked or unchecked. 

```javascript
onOptgroupClick: function(view) {
	/*
	view.label: the text of the checkbox item
	view.checked: the checked of the checkbox item
	*/
}
```

### Methods

#### getSelects

Gets the selected values.

Parameter: type

Type: string
	
The type of selected items. value or text

The default is ```value```.

``` javascript
alert('Selected values: ' + $('select').multipleSelect('getSelects'));
alert('Selected texts: ' + $('select').multipleSelect('getSelects', 'text'));
```

#### setSelects

Sets the selected values.

Parameter: values

Type: array
	
The values of selected items.

``` javascript
$('select').multipleSelect('setSelects', [1, 3]);
```

#### enable

Enables Select.

``` javascript
$('select').multipleSelect('enable');
```

#### disable

Disables Select. During this mode the user is not allowed to manipulate the selection.

``` javascript
$('select').multipleSelect('disable');
```

#### checkAll

Check all checkboxes.

``` javascript
$('select').multipleSelect('checkAll');
```

#### uncheckAll

Uncheck all checkboxes.

``` javascript
$('select').multipleSelect('uncheckAll');
```

#### focus

Focus the multiple select.

``` javascript
$('select').multipleSelect('focus');
```

#### blur

Blur the multiple select.

``` javascript
$('select').multipleSelect('blur');
```

#### refresh

Reloads the Multiple Select. 

If you're dynamically adding/removing option tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.

``` javascript
$('select').multipleSelect('refresh');
```

## About

[blog](http://wenzhixin.net.cn)

[scutech](http://www.scutech.com)

## Acknowledgements

© 2012-2014, Multiple Selected is licensed under the The MIT License. Coded by wenzhixin.

My website ([wenzhixin.net.cn](http://wenzhixin.net.cn))

Github ([@wenzhixin](https://github.com/wenzhixin))

Weibo ([@_文翼_](http://weibo.com/2292826740))

Email (wenzhixin2010@gmail.com)
