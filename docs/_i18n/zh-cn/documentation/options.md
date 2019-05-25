# 选项 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/options.md)

---

选项定义于 `jQuery.fn.multipleSelect.defaults`。

## name

**类型：** String

**说明：** select 元素的 name 属性。

**默认：** `''`

## placeholder

**类型：** String

**说明：** 可以定义 placeholder 值，并在您选择项目之前显示 placeholder 值。

**默认：** `''`

**例子：** <a href="../examples#placeholder.html">The Placeholder</a>

## selectAll

**类型：** Boolean

**说明：** 显示选中所有复选框。

**默认：** `true`

**例子：** <a href="../examples#hide-select-all.html">Hide Select All</a>

## single

**类型：** Boolean

**说明：** 允许您只选择一个选项。

**默认：** `false`

**例子：** <a href="../examples#single-row.html">Single Row</a>

## multiple

**类型：** Boolean

**说明：** 在一行中显示多个项目。

**默认：** `false`

**例子：** <a href="../examples#multiple-items.html">Multiple Items</a>

## hideOptgroupCheckboxes

**类型：** Boolean

**说明：** 隐藏 optgroup 复选框。

**默认：** `false`

**例子：** <a href="../examples#hide-optgroup-checkboxes.html">Hide Optgroup Check</a>

## multipleWidth

**类型：** Number

**说明：** 显示多个项目的宽度。

**默认：** `80`

**例子：** <li><a href="../examples#multiple-items.html">Multiple Items</a></li>

## width

**类型：** undefined

**说明：** 定义 select 的 width 属性，支持百分比设置。

**默认：** `undefined`

**例子：** <a href="../examples#custom-dropdown-width.html">Custom Dropdown Width</a>

## dropWidth

**类型：** undefined

**说明：** 定义下拉框的宽度。

**默认：** `undefined`

**例子：** <a href="../examples#custom-dropdown-width.html">Custom Dropdown Width</a>

## maxHeight

**类型：** Number

**说明：** 定义下拉列表的最大高度属性。

**默认：** `250`

**例子：** <a href="../examples#max-height.html">Max Height</a>

## position

**类型：** String

**说明：** 定义选择下拉列表的位置，只能是 'bottom' 或 'top'。

**默认：** `bottom`

**例子：** <a href="../examples#position.html">The Position</a>

## displayValues

**类型：** Boolean

**说明：** 显示所选值而不是文本。

**默认：** `false`

**例子：** <a href="../examples#display-values.html">Display Values</a>

## displayTitle

**类型：** Boolean

**说明：** 显示所选文本的 `title`。

**默认：** `false`

**例子：** <a href="../examples#display-title.html">Display Title</a>

## displayDelimiter

**类型：** String

**说明：** 自定义显示分隔符。

**默认：** `, `

**例子：** <a href="../examples#display-delimiter.html">Display Delimiter</a>

## minimumCountSelected

**类型：** Number

**说明：** 仅当选择了多于 `minimumCountSelected` 项时，才会显示
 `formatCountSelected`。

**默认：** `3`

**例子：** <a href="../examples#minimum-count-selected.html">Minimum Count Selected</a>

## ellipsis

**类型：** Boolean

**说明：** 如果设置了 `minimumCountSelected`，则在所选选项后添加 `'...'`。覆盖 `formatCountSelected` 选项。

**默认：** `false`

**例子：** <a href="../examples#ellipsis.html">The Ellipsis</a>

## isOpen

**类型：** Boolean

**说明：** 默认情况下打开选择下拉列表。

**默认：** `false`

**例子：** <a href="../examples#is-open.html">Is Open</a>

## keepOpen

**类型：** Boolean

**说明：** 始终打开选择下拉列表。

**默认：** `false`

**例子：** <a href="../examples#keep-open.html">Keep Open</a>

## openOnHover

**类型：** Boolean

**说明：** 通过鼠标经过而不是点击来打开选择下拉列表。

**默认：** `false`

**例子：** <a href="../examples#open-on-hover.html">Open On Hover</a>

## container

**类型：** object

**说明：** 定义自定义容器以解决显示错误问题，例如父节点是 `overflow: hidden`.

**默认：** `null`

**例子：** <a href="../examples#container.html">The Container</a>

## filter

**类型：** Boolean

**说明：** 显示搜索字段以显示搜索框项。

**默认：** `false`

**例子：** <a href="../examples#basic-filter.html">Basic Filter</a> <a href="../examples#optgroup-filter.html">Filter With Optgroup</a>

## filterGroup

**类型：** Boolean

**说明：** 仅筛选 optgroups 而不筛选选项。

**默认：** `false`

**例子：** <a href="../examples#filter-group.html">Filter Only Optgroup</a>

## filterPlaceholder

**类型：** String

**说明：** 设置过滤器的 placeholder.

**默认：** ``

**例子：** <a href="../examples#filter-placeholder.html">Filter Placeholder</a>

## filterAcceptOnEnter

**类型：** Boolean

**说明：** 加快键盘使用。输入过滤器文本然后按 `Enter` 或空格将自动单击全选并关闭下拉列表。

**默认：** `false`

**例子：** <a href="../examples#filter-accept-on-enter.html">Filter Accept On Enter</a>

## animate

**类型：** undefined

**说明：** 定义打开或关闭下拉列表的动画。可以是 `undefined`，`'fade'` 和 `'slide'`。

**默认：** `undefined`

**例子：** <a href="../examples#animate.html">The Animate</a>

## styler

**类型：** function

**说明：** 项目样式器函数，返回样式字符串以自定义项样式，包含参数： `value`。

**默认：** `{ return false }`

**例子：** <a href="../examples#styler.html">The Styler</a>

## textTemplate

**类型：** function

**说明：** 项目 textTemplate 函数，返回字符串以自定义项目文本，包含参数：`$elm`。

**默认：** `{ return $elm[0].innerHTML }`

**例子：** <a href="../examples#text-template.html">Text Template</a>

## labelTemplate

**类型：** function

**说明：** 项目 labelTemplate 函数，返回自定义 optgroup 标签的字符串，包含参数：`$elm`。

**默认：** `{ return $elm[0].getAttribute('label') }`

**例子：** <a href="../examples#label-template.html">Label Template</a>
