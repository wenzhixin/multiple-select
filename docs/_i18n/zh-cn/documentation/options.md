# Options []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/options.md)

---

选项定义于 `jQuery.fn.multipleSelect.defaults`。

## name

**Type:** String

**Detail:** select 元素的 name 属性。

**Default:** `''`

## placeholder

**Type:** String

**Detail:** 可以定义 placeholder 值，并在您选择项目之前显示 placeholder 值。

**Default:** `''`

**Example:** <a href="../examples#placeholder.html">The Placeholder</a>

## selectAll

**Type:** Boolean

**Detail:** 显示选中所有复选框。

**Default:** `true`

**Example:** <a href="../examples#hide-select-all.html">Hide Select All</a>

## single

**Type:** Boolean

**Detail:** 允许您只选择一个选项。

**Default:** `false`

**Example:** <a href="../examples#single-row.html">Single Row</a>

## multiple

**Type:** Boolean

**Detail:** 在一行中显示多个项目。

**Default:** `false`

**Example:** <a href="../examples#multiple-items.html">Multiple Items</a>

## hideOptgroupCheckboxes

**Type:** Boolean

**Detail:** 隐藏 optgroup 复选框。

**Default:** `false`

**Example:** <a href="../examples#hide-optgroup-checkboxes.html">Hide Optgroup Check</a>

## multipleWidth

**Type:** Number

**Detail:** 显示多个项目的宽度。

**Default:** `80`

**Example:** <li><a href="../examples#multiple-items.html">Multiple Items</a></li>

## width

**Type:** undefined

**Detail:** 定义 select 的 width 属性，支持百分比设置。

**Default:** `undefined`

**Example:** <a href="../examples#custom-dropdown-width.html">Custom Dropdown Width</a>

## dropWidth

**Type:** undefined

**Detail:** 定义下拉框的宽度。

**Default:** `undefined`

**Example:** <a href="../examples#custom-dropdown-width.html">Custom Dropdown Width</a>

## maxHeight

**Type:** Number

**Detail:** 定义下拉列表的最大高度属性。

**Default:** `250`

**Example:** <a href="../examples#max-height.html">Max Height</a>

## position

**Type:** String

**Detail:** 定义选择下拉列表的位置，只能是 'bottom' 或 'top'。

**Default:** `bottom`

**Example:** <a href="../examples#position.html">The Position</a>

## displayValues

**Type:** Boolean

**Detail:** 显示所选值而不是文本。

**Default:** `false`

**Example:** <a href="../examples#display-values.html">Display Values</a>

## displayTitle

**Type:** Boolean

**Detail:** 显示所选文本的 `title`。

**Default:** `false`

**Example:** <a href="../examples#display-title.html">Display Title</a>

## displayDelimiter

**Type:** String

**Detail:** 自定义显示分隔符。

**Default:** `, `

**Example:** <a href="../examples#display-delimiter.html">Display Delimiter</a>

## minimumCountSelected

**Type:** Number

**Detail:** 仅当选择了多于 `minimumCountSelected` 项时，才会显示
 `formatCountSelected`。

**Default:** `3`

**Example:** <a href="../examples#minimum-count-selected.html">Minimum Count Selected</a>

## ellipsis

**Type:** Boolean

**Detail:** 如果设置了 `minimumCountSelected`，则在所选选项后添加 `'...'`。覆盖 `formatCountSelected` 选项。

**Default:** `false`

**Example:** <a href="../examples#ellipsis.html">The Ellipsis</a>

## isOpen

**Type:** Boolean

**Detail:** 默认情况下打开选择下拉列表。

**Default:** `false`

**Example:** <a href="../examples#is-open.html">Is Open</a>

## keepOpen

**Type:** Boolean

**Detail:** 始终打开选择下拉列表。

**Default:** `false`

**Example:** <a href="../examples#keep-open.html">Keep Open</a>

## openOnHover

**Type:** Boolean

**Detail:** 通过鼠标经过而不是点击来打开选择下拉列表。

**Default:** `false`

**Example:** <a href="../examples#open-on-hover.html">Open On Hover</a>

## container

**Type:** object

**Detail:** 定义自定义容器以解决显示错误问题，例如父节点是 `overflow: hidden`.

**Default:** `null`

**Example:** <a href="../examples#container.html">The Container</a>

## filter

**Type:** Boolean

**Detail:** 显示搜索字段以显示搜索框项。

**Default:** `false`

**Example:** <a href="../examples#basic-filter.html">Basic Filter</a> <a href="../examples#optgroup-filter.html">Filter With Optgroup</a>

## filterGroup

**Type:** Boolean

**Detail:** 仅筛选 optgroups 而不筛选选项。

**Default:** `false`

**Example:** <a href="../examples#filter-group.html">Filter Only Optgroup</a>

## filterPlaceholder

**Type:** String

**Detail:** 设置过滤器的 placeholder.

**Default:** ``

**Example:** <a href="../examples#filter-placeholder.html">Filter Placeholder</a>

## filterAcceptOnEnter

**Type:** Boolean

**Detail:** 加快键盘使用。输入过滤器文本然后按 `Enter` 或空格将自动单击全选并关闭下拉列表。

**Default:** `false`

**Example:** <a href="../examples#filter-accept-on-enter.html">Filter Accept On Enter</a>

## animate

**Type:** undefined

**Detail:** 定义打开或关闭下拉列表的动画。可以是 `undefined`，`'fade'` 和 `'slide'`。

**Default:** `undefined`

**Example:** <a href="../examples#animate.html">The Animate</a>

## styler

**Type:** function

**Detail:** 项目样式器函数，返回样式字符串以自定义项样式，包含参数： `value`。

**Default:** `{ return false }`

**Example:** <a href="../examples#styler.html">The Styler</a>

## textTemplate

**Type:** function

**Detail:** 项目 textTemplate 函数，返回字符串以自定义项目文本，包含参数：`$elm`。

**Default:** `{ return $elm[0].innerHTML }`

**Example:** <a href="../examples#text-template.html">Text Template</a>

## labelTemplate

**Type:** function

**Detail:** 项目 labelTemplate 函数，返回自定义 optgroup 标签的字符串，包含参数：`$elm`。

**Default:** `{ return $elm[0].getAttribute('label') }`

**Example:** <a href="../examples#label-template.html">Label Template</a>
