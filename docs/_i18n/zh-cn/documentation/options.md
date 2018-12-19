# 属性 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/options.md)

---

选项定义于 `jQuery.fn.multipleSelect.defaults`。

<div class="start-table"></div>

| 名称                 | 标签                        | 类型     | 默认                             | 描述                                                                              |
|----------------------|-----------------------------|----------|----------------------------------|---------------------------------------------------------------------------------|
| -                    | data-toggle                 | String   | 'select'                         | 不使用 JavaScript 启用 multiple select。                                           |
| isOpen               | data-is-open                | Boolean  | false                            | 是否打开下拉列表。                                                                 |
| placeholder          | data-placeholder            | String   | ''                               | 显示默认的提示信息。                                                               |
| selectAll            | data-select-all             | Boolean  | true                             | 是否显示全选复选框。                                                               |
| selectAllText        | data-select-all-text        | String   | 'Select all'                     | 全选复选框的显示内容。                                                             |
| selectAllDelimiter   | data-select-all-delimiter   | Array    | ['[', ']']                       | Multiple Select 全选复选框分隔符。                                                 |
| allSelected          | data-all-selected           | String   | 'All selected'                   | 全部选中时显示的文本。                                                             |
| countSelected        | data-count-selected         | String   | '# of % selected'                | '＃'将替换为所选项目的计数，'％'将替换为总数目。                                      |
| minimumCountSelected | data-minimum-count-selected | Number   | 3                                | 只有选择了多于X个项目时才会显示`countSelected`。                                   |
| ellipsis             | data-ellipsis               | Boolean  | false                            | 如果设置了`minimumCountSelected`，则在选定选项后添加”...”。覆盖`countSelected`选项。 |
| multiple             | data-multiple               | Boolean  | false                            | 是否在一行中显示多个选项。                                                         |
| multipleWidth        | data-multiple-width         | Number   | 80                               | 一行中每个选项的宽度。                                                             |
| single               | data-single                 | Boolean  | false                            | 是否只允许你选择一行。                                                             |
| position             | data-position               | String   | 'bottom'                         | 定义下拉列表的位置，只能是 'bottom' 或者 'top'.                                    |
| filter               | data-filter                 | Boolean  | false                            | 是否开启过滤功能。                                                                 |
| width                | data-width                  | Number   | undefined                        | 定义下拉列表的宽度，支持百分比，默认与 select 的宽度相同。                           |
| maxHeight            | data-max-height             | Number   | 250                              | 下拉列表的最大高度。                                                               |
| keepOpen             | data-keep-open              | Boolean  | false                            | 保持选择下拉列表始终打开。                                                         |
| styler               | data-styler                 | Function | `function(value) {return false}` | 项目样式器函数，返回样式字符串以自定义项目样式，包含一个参数：value。                 |
