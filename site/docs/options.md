---
id: options
title: Options
---

The options API of Multiple Select.

<div id="gg"></div>

The Options are defined in `jQuery.fn.multipleSelect.defaults`.

## name

- **Attribute:** `name`

- **Type:** String

- **Detail:** The name of select element.

- **Default:** `''`

- **Example:** <a href="/examples#submit-select.html">Submit Select</a>

## placeholder

- **Attribute:** `placeholder`

- **Type:** String

- **Detail:** A placeholder value can be defined and will be displayed until you select an item.

- **Default:** `''`

- **Example:** <a href="/examples#placeholder.html">The Placeholder</a>

## data

- **Attribute:** `-`

- **Type:** Array

- **Detail:** The data to be loaded.

  The optgroup object contains these parameters:

  * `type`: `'optgroup'`.
  * `label`: the label of optgroup.
  * `visible`: where to display this optgroup.
  * `selected`: where to select this optgroup.
  * `disabled`: where to disable this optgroup.
  * `children`: the options of this optgroup.

  Examples:

  ```html
  <optgroup label="group1">
    <option value="1">option 1</option>
  </optgroup>
  ```

  ```js
  [
    {
      type: 'optgroup',
      label: 'Group 1',
      children: [
        {
          text: 'Option 1',
          value: 1
        }
      ]
    }
  ]
  ```

  The option object contains these parameters:

  * `text`: the text of option.
  * `value`: the value of option.
  * `visible`: where to display this option.
  * `selected`: where to select this option.
  * `disabled`: where to disable this option.
  * `classes`: the class of the option.
  * `title`: the title of the option.
  * `divider`: display this option as a divider.

  Examples:

  ```html
  <option value="1">Option 1</option>
  <option data-divider="true"></option>
  <option value="2">Option 2</option>
  ```

  ```js
  [
    {
      text: 'Option 1',
      value: 1
    },
    {
      divider: true
    },
    {
      text: 'Option 2',
      value: 2
    }
  ]
  ```

  Or Object:

  ```js
  {
    1: 'Option 1'
  }
  ```

  Or String/Number Array:

  ```js
  ['option1']


  [1]
  ```

- **Default:** []

- **Example:** <a href="/examples#data.html">The Data</a>.

## locale

- **Attribute:** `data-locale`

- **Type:** `String`

- **Detail:**

  Sets the locale to use (i.e. `'zh-CN'`). Locale files must be pre-loaded.
  Allows for fallback locales, if loaded, in the following order:

  * First tries for the locale as specified,
  * Then tries the locale with '_' translated to '-' and the region code upper cased,
  * Then tries the short locale code (i.e. `'zh'` instead of `'zh-CN'`),
  * And finally will use the last locale file loaded (or the default locale if no locales loaded).

  If left `undefined` or an empty string, use the last locale loaded (or `'en-US'` if no locale files loaded).

- **Default:** `undefined`

- **Example:** <a href="/examples#locale.html">The Locale</a>

## selectAll

- **Attribute:** `data-select-all`

- **Type:** Boolean

- **Detail:** Show selects all checkbox.

- **Default:** `true`

- **Example:** <a href="/examples#hide-select-all.html">Hide Select All</a>

## single

- **Attribute:** `data-single`

- **Type:** Boolean

- **Detail:** Allows you to select only one option, if the select has not multiple attribute, this option will auto set to `true`.

- **Default:** `undefined`

- **Example:** <a href="/examples#single-row.html">Single Row</a>

## singleRadio

- **Attribute:** `data-single-radio`

- **Type:** Boolean

- **Detail:** Allows you to show the radio input when `single` is set to `true` (from v1.4.0).

- **Default:** `false`

- **Example:** <a href="/examples#single-radio.html">Single Radio</a>

## multiple

- **Attribute:** `data-multiple`

- **Type:** Boolean

- **Detail:** Show multiple items in a row.

- **Default:** `false`

- **Example:** <a href="/examples#multiple-items.html">Multiple Items</a>

## hideOptgroupCheckboxes

- **Attribute:** `data-hide-optgroup-checkboxes`

- **Type:** Boolean

- **Detail:** Hide the optgroup checkboxes.

- **Default:** `false`

- **Example:** <a href="/examples#hide-optgroup-checkboxes.html">Hide Optgroup Check</a>

## multipleWidth

- **Attribute:** `data-multiple-width`

- **Type:** Number

- **Detail:** Show multiple items width.

- **Default:** `80`

- **Example:** <li><a href="/examples#multiple-items.html">Multiple Items</a></li>

## width

- **Attribute:** `data-width`

- **Type:** undefined

- **Detail:** Define the width property of the select, support a percentage setting.

- **Default:** `undefined`

- **Example:** <a href="/examples#custom-dropdown-width.html">Custom Dropdown Width</a>

## dropWidth

- **Attribute:** `data-drop-width`

- **Type:** undefined

- **Detail:** Define the dropdown width.

- **Default:** `undefined`

- **Example:** <a href="/examples#custom-dropdown-width.html">Custom Dropdown Width</a>

## maxHeight

- **Attribute:** `data-max-height`

- **Type:** Number

- **Detail:** Define the maximum height property of the dropdown list.

- **Default:** `250`

- **Example:** <a href="/examples#max-height.html">Max Height</a>

## maxHeightUnit

- **Attribute:** `data-max-height-unit`

- **Type:** String

- **Detail:** Define the unit of the `maxHeight` option, can only be 'px' or 'row'.

- **Default:** `px`

- **Example:** <a href="/examples#max-height-unit.html">Max Height Unit</a>

## position

- **Attribute:** `data-position`

- **Type:** String

- **Detail:** Defines the position of the select dropdown, can only be 'bottom' or 'top'.

- **Default:** `bottom`

- **Example:** <a href="/examples#position.html">The Position</a>

## displayValues

- **Attribute:** `data-display-values`

- **Type:** Boolean

- **Detail:** Display selected values instead text.

- **Default:** `false`

- **Example:** <a href="/examples#display-values.html">Display Values</a>

## displayTitle

- **Attribute:** `data-display-title`

- **Type:** Boolean

- **Detail:** Display the `title` of selected text.

- **Default:** `false`

- **Example:** <a href="/examples#display-title.html">Display Title</a>

## displayDelimiter

- **Attribute:** `data-display-delimiter`

- **Type:** String

- **Detail:** Custom the display delimiter.

- **Default:** `, `

- **Example:** <a href="/examples#display-delimiter.html">Display Delimiter</a>

## minimumCountSelected

- **Attribute:** `data-minimum-count-selected`

- **Type:** Number

- **Detail:** `formatCountSelected` will be shown only if more than `minimumCountSelected` items where selected.

- **Default:** `3`

- **Example:** <a href="/examples#minimum-count-selected.html">Minimum Count Selected</a>

## ellipsis

- **Attribute:** `data-ellipsis`

- **Type:** Boolean

- **Detail:** Add `'...'` after selected options if `minimumCountSelected` is set. Overrides `formatCountSelected` option.

- **Default:** `false`

- **Example:** <a href="/examples#ellipsis.html">The Ellipsis</a>

## isOpen

- **Attribute:** `data-is-open`

- **Type:** Boolean

- **Detail:** Open the select dropdown by default.

- **Default:** `false`

- **Example:** <a href="/examples#is-open.html">Is Open</a>

## keepOpen

- **Attribute:** `data-keep-open`

- **Type:** Boolean

- **Detail:** Keep the select dropdown always open.

- **Default:** `false`

- **Example:** <a href="/examples#keep-open.html">Keep Open</a>

## openOnHover

- **Attribute:** `data-open-on-hover`

- **Type:** Boolean

- **Detail:** Open the select dropdown by hover instead of click.

- **Default:** `false`

- **Example:** <a href="/examples#open-on-hover.html">Open On Hover</a>

## container

- **Attribute:** `data-container`

- **Type:** object

- **Detail:** Define custom container to solve the cut off problem for example parent node is `overflow: hidden`.

- **Default:** `null`

- **Example:** <a href="/examples#container.html">The Container</a>

## filter

- **Attribute:** `data-filter`

- **Type:** Boolean

- **Detail:** Show a search field to search through checkbox items.

- **Default:** `false`

- **Example:** <a href="/examples#filter.html">The Filter</a>

## filterGroup

- **Attribute:** `data-group`

- **Type:** Boolean

- **Detail:** Filter optgroups only and not options.

- **Default:** `false`

- **Example:** <a href="/examples#filter-group.html">Filter Only Optgroup</a>

## filterPlaceholder

- **Attribute:** `data-filter-placeholder`

- **Type:** String

- **Detail:** Set the filter placeholder.

- **Default:** ``

- **Example:** <a href="/examples#filter-placeholder.html">Filter Placeholder</a>

## filterAcceptOnEnter

- **Attribute:** `data-filter-accept-on-enter`

- **Type:** Boolean

- **Detail:** Speed up keyboard use. Enter filter text and then hit `enter` or `space` will auto click `select all` and close the dropdown.

- **Default:** `false`

- **Example:** <a href="/examples#filter-accept-on-enter.html">Filter Accept On Enter</a>

## filterByDataLength

- **Attribute:** `data-filter-by-data-length`

- **Type:** Number

- **Detail:** Auto enable filter when the data(options) length is more than the set number (from 1.4.1).

- **Default:** `undefined`

- **Example:** <a href="/examples#filter-by-data-length.html">Filter By Data Length</a>

## customFilter

- **Attribute:** `-`

- **Type:** function

- **Detail:** The custom filter function, return boolean to filter or not, contains parameter: `label, text, originalLabel, originalText` (from 1.4.1).

- **Default:** `{ return label.includes(text) }`

- **Example:** <a href="/examples#custom-filter.html">Custom Filter</a>

## showClear

- **Attribute:** `data-show-clear`

- **Type:** undefined

- **Detail:** Show the clear icon to uncheck all selected items.

- **Default:** `false`

- **Example:** <a href="/examples#show-clear.html">Show Clear</a>

## animate

- **Attribute:** `data-animate`

- **Type:** undefined

- **Detail:** Define the animate of open or close the dropdown. Can be `undefined`, `'fade'` and `'slide'`.

- **Default:** `undefined`

- **Example:** <a href="/examples#animate.html">The Animate</a>

## styler

- **Attribute:** `-`

- **Type:** function

- **Detail:** The item styler function, return style string to custom the item style, contains parameter: `row`. (updated 1.4.1)

- **Default:** `{ return false }`

- **Example:** <a href="/examples#styler.html">The Styler</a>

## textTemplate

- **Attribute:** `-`

- **Type:** function

- **Detail:** The item textTemplate function, return string to custom the item text, contains parameter: `$elm`.

- **Default:** `{ return $elm[0].innerHTML }`

- **Example:** <a href="/examples#text-template.html">Text Template</a>

## labelTemplate

- **Attribute:** `-`

- **Type:** function

- **Detail:** The item labelTemplate function, return string to custom the optgroup label, contains parameter: `$elm`.

- **Default:** `{ return $elm[0].getAttribute('label') }`

- **Example:** <a href="/examples#label-template.html">Label Template</a>
