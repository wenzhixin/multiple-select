## Multiple Select

Multiple select 是一个通过复选框来选择多元素的 jQuery 插件:).

*当前版本: 1.0.9*

## Requirements

* jQuery >= 1.7.0

## Features

* 默认选项允许显示复选框。
* 支持分组显示元素。
* 支持在一行中显示多个选项。
* 支持全选。
* 支持显示默认提示信息。

## Browser Compatibility

* IE 7+
* Chrome 8+
* Firefox 10+
* Safari 3+
* Opera 10.6+

## Examples

### The Basics1

Multiple Select 可以将标准的复选框：

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

转换为：

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

Multiple Select 可以将标准的复选框：

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

转换为：

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

Multiple Select 可以将标准的复选框：

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

转换为：

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

Multiple Select 可以将标准的复选框：

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

转换为：

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

Multiple Select 可以将标准的复选框：

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

转换为：

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

Multiple Select 支持在一行中显示多个选项：

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

Multiple Select 支持在一行中显示多个选项以及支持分组。

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

设置下拉列表显示在上方。

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
	<select multiple="multiple" disabled="disabled">
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
        	$("select").multipleSelect("checkAll");
        });
        $("#getSelectsBtn").click(function() {
        	$("select").multipleSelect("uncheckAll");
        });
    </script>
</body>
```

### The Refresh

重新加载 Multiple Select：
假如你是通过 AJAX 或者 DOM 来手动添加或者删除 option 选项，可以通过 refresh 方法来重新加载 Multiple Select。

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

<p id="eventResult" style="color: #444; background-color: #ddd;">这里显示事件的结果。</p>

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

类型: boolean	

是否打开下拉列表。

默认值为 ```false```。

#### placeholder

类型: string	

显示默认的提示信息。

默认值为 ```''```。

#### selectAll

类型: boolean	

是否显示全选复选框。

默认值为 ```true```。

#### selectAllText

类型: string	

全选复选框的显示内容。

默认值为 ```Select all```。

#### multiple

类型: boolean	

是否在一行中显示多个选项。

默认值为 ```false```。

#### multipleWidth

类型: integer	

一行中每个选项的宽度。

默认值为 ```80```。

#### single

类型: boolean

是否只允许你选择一行。

默认值为 ```false```。

#### position

类型: string

定义下拉列表的位置，只能是 ```bottom``` 或者 ```top```。

默认值为 ```bottom```.

#### filter

类型: boolean

是否开启过滤功能。

默认值为 ```false```。

#### width

类型: integer

定义下拉列表的宽度。

默认值为 ```undefined```。 默认与 select 的宽度相同。

#### maxHeight

类型: integer

下拉列表的最大高度。

默认值为 ```250```。

### Events

#### onOpen

当下拉列表被打开时触发。

#### onClose

当下拉列表被关闭时触发。

#### onCheckAll

点击全选或者调用 "checkall" 方法时触发。

#### onUncheckAll

点击全不选或者调用 "uncheckall" 方法时触发。 

#### onOptgroupClick

点击分组时触发。

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

点击一个复选框时触发。

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

获取 Multiple Select 选择内容。

参数: type

类型: string
	
选择内容的类型，value 或者 text。

默认值为 ```value```。

``` javascript
alert('Selected values: ' + $('select').multipleSelect('getSelects'));
alert('Selected texts: ' + $('select').multipleSelect('getSelects', 'text'));
```

#### setSelects

设置 Multiple Select 的内容。

参数: values

类型: array
	
选择框的内容信息。

``` javascript
$('select').multipleSelect('setSelects', [1, 3]);
```

#### enable

启用 Multiple Select。

``` javascript
$('select').multipleSelect('enable');
```

#### disable

禁用 Multiple Select。在这种模式下，不允许用户操作。

``` javascript
$('select').multipleSelect('disable');
```

#### checkAll

全选所有的复选框。

``` javascript
$('select').multipleSelect('checkAll');
```

#### uncheckAll

全不选所有的复选框。

``` javascript
$('select').multipleSelect('uncheckAll');
```

#### refresh

重新加载 Multiple Select。

假如你是通过 AJAX 或者 DOM 来手动添加或者删除 option 选项，可以通过 refresh 方法来重新加载 Multiple Select。

``` javascript
$('select').multipleSelect('refresh');
```

## About

[博客](http://wenzhixin.net.cn)

[scutech](http://www.scutech.com)

## Acknowledgements

© 2012-2014, Multiple Selected is licensed under the The MIT License. Coded by wenzhixin.

我的网站 ([wenzhixin.net.cn](http://wenzhixin.net.cn))

Github ([@wenzhixin](https://github.com/wenzhixin))

微博 ([@_文翼_](http://weibo.com/2292826740))

邮件 (wenzhixin2010@gmail.com)
