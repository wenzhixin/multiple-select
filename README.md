## Multiple Select

Multiple select is a jQuery plugin to select multiple elements with checkboxes :).

*Current version: 1.0.1*

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
	<select multiple="multiple" disabled="disabled">
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
		<optgroup label="Group 2">
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
            multipleWidth: 55
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

### SetSelects/GetSelects

<p>
	<button id="setSelects" class="button">SetSelects</button>
	<button id="getSelects" class="button">GetSelects</button>
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
	<button id="setSelects">SetSelects</button>
	<button id="getSelects">GetSelects</button>
    <select multiple="multiple">
        <option value="1">Monday</option>
        ...
        <option value="7">Sunday</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect();
        $("#setSelects").click(function() {
        	$("select").multipleSelect("setSelects", [1, 3]);
        });
        $("#getSelects").click(function() {
        	alert("Selected values: " + $("select").multipleSelect("getSelects"));
            alert("Selected texts: " + $("select").multipleSelect("getSelects", "text"));
        });
    </script>
</body>
```

### Enable/Disable

<p>
	<button id="enable" class="button">Enable</button>
	<button id="disable" class="button">Disable</button>
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
	<button id="enable"">Enable</button>
	<button id="disable"">Disabled</button>
    <select multiple="multiple">
        <option value="1">Monday</option>
        ...
        <option value="7">Sunday</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect();
        $("#setSelects").click(function() {
        	$("select").multipleSelect("enable");
        });
        $("#getSelects").click(function() {
        	$("select").multipleSelect("disable");
        });
    </script>
</body>
```

### CheckAll/UncheckAll

<p>
	<button id="checkAll" class="button">CheckAll</button>
	<button id="uncheckAll" class="button">UncheckAll</button>
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
	<button id="enable"">Enable</button>
	<button id="disable"">Disabled</button>
    <select multiple="multiple">
        <option value="1">Monday</option>
        ...
        <option value="7">Sunday</option>
    </select>
    <script src="jquery.multiple.select.js"></script>
    <script>
        $("select").multipleSelect();
        $("#setSelects").click(function() {
        	$("select").multipleSelect("checkAll");
        });
        $("#getSelects").click(function() {
        	$("select").multipleSelect("uncheckAll");
        });
    </script>
</body>
```

## Documentation

### Constructor

#### isopen

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

By default this option is set to Select all.

#### multiple

Type: boolean	

Whether or not Multiple Select show multiple items in a row.

By default this option is set to ```false```.

#### multipleWidth

Type: integer	

Multiple Select show multiple items width.

By default this option is set to ```80```.

### getSelects

Gets the selected values.

Parameter: type

Type: string
	
The type of selected items. value or text

The default is ```value```.

``` javascript
alert('Selected values: ' + $('select').multipleSelect('getSelects'));
alert('Selected texts: ' + $('select').multipleSelect('getSelects', 'text'));
```

### setSelects

Sets the selected values.

Parameter: values

Type: array
	
The values of selected items.

``` javascript
$('select').multipleSelect('setSelects', [1, 3]);
```

### enable

Enables Select.

``` javascript
$('select').multipleSelect('enable');
```

### disable

Disables Select. During this mode the user is not allowed to manipulate the selection.

``` javascript
$('select').multipleSelect('disable');
```

### checkAll

Check all checkboxes.

``` javascript
$('select').multipleSelect('checkAll');
```

### uncheckAll

Uncheck all checkboxes.

``` javascript
$('select').multipleSelect('uncheckAll');
```

## About

[blog](http://wenzhixin.net.cn)

[scutech](http://www.scutech.com)

## Acknowledgements

© 2013, Multiple Selected is licensed under the Apache Software Foundation License Version 2.0 and GPL Version 2.0. Coded by wenzhixin.

My website ([wenzhixin.net.cn](http://wenzhixin.net.cn))

Github ([@wenzhixin](https://github.com/wenzhixin))

Weibo ([@_文翼_](http://weibo.com/2292826740))

Email (wenzhixin2010@gmail.com)
