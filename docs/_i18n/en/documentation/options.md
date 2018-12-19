# Options []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/options.md)

---

The Options are defined in `jQuery.fn.multipleSelect.defaults`.

<div class="start-table"></div>

| Name                 | Attribute                   | Type     | Default                          | Description                                                                                          |
|----------------------|-----------------------------|----------|----------------------------------|------------------------------------------------------------------------------------------------------|
| -                    | data-toggle                 | String   | 'select'                         | Activate multiple select without writing JavaScript.                                                 |
| isOpen               | data-is-open                | Boolean  | false                            | Whether or not Multiple Select open the select dropdown.                                             |
| placeholder          | data-placeholder            | String   | ''                               | A placeholder value can be defined and will be displayed until you select an item.                   |
| selectAll            | data-select-all             | Boolean  | true                             | Whether or not Multiple Select show selects all checkbox.                                            |
| selectAllText        | data-select-all-text        | String   | 'Select all'                     | Multiple Select select all checkbox text.                                                            |
| selectAllDelimiter   | data-select-all-delimiter   | Array    | ['[', ']']                       | Multiple Select select all checkbox delimiter.                                                       |
| allSelected          | data-all-selected           | String   | 'All selected'                   | The text displays when the select all selected.                                                      |
| countSelected        | data-count-selected         | String   | '# of % selected'                | '#' is replaced with the count of selected items, '%'is replaced with total items.                   |
| minimumCountSelected | data-minimum-count-selected | Number   | 3                                | `countSelected` will be shown only if more than X items where selected.                              |
| ellipsis             | data-ellipsis               | Boolean  | false                            | Add "..." after selected options if `minimumCountSelected` is set. Overrides `countSelected` option. |
| multiple             | data-multiple               | Boolean  | false                            | Whether or not Multiple Select show multiple items in a row.                                         |
| multipleWidth        | data-multiple-width         | Number   | 80                               | Multiple Select show multiple items width.                                                           |
| single               | data-single                 | Boolean  | false                            | Whether or not Multiple Select allows you to select only one option.                                 |
| position             | data-position               | String   | 'bottom'                         | Defines the position of the select dropdown, can only be 'bottom' or 'top'.                          |
| filter               | data-filter                 | Boolean  | false                            | Whether or not Multiple Select show a search field to search through checkbox items.                 |
| width                | data-width                  | Number   | undefined                        | Define the width property of the dropdown list, support a percentage setting.                        |
| maxHeight            | data-max-height             | Number   | 250                              | Define the maximum height property of the dropdown list.                                             |
| keepOpen             | data-keep-open              | Boolean  | false                            | Keep the select dropdown always open.                                                                |
| styler               | data-styler                 | Function | `function(value) {return false}` | The item styler function, return style string to custom the item style, contains parameter: value.   |
