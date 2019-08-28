---
id: options
title: Options
---

The options API of Multiple Select.

<div id="codefund"></div>

The Options are defined in `jQuery.fn.multipleSelect.defaults`.

## name

**Type:** String

**Detail:** The name of select element.

**Default:** `''`

## placeholder

**Type:** String

**Detail:** A placeholder value can be defined and will be displayed until you select an item.

**Default:** `''`

**Example:** <a href="/examples#placeholder.html">The Placeholder</a>

## data

**Type:** Array

**Detail:** The data to be loaded.

Group format:

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

Option format:

```js
[
  {
    text: 'Option 1',
    value: 1
  }
]
```

**Default:** []

**Example:** <a href="/examples#basic-data.html">Basic Data</a> and <a href="/examples#optgroup-data.html">Optgroup Data</a>.

## locale

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

**Example:** <a href="/examples#locale.html">The Locale</a>

## selectAll

**Type:** Boolean

**Detail:** Show selects all checkbox.

**Default:** `true`

**Example:** <a href="/examples#hide-select-all.html">Hide Select All</a>

## single

**Type:** Boolean

**Detail:** Allows you to select only one option.

**Default:** `false`

**Example:** <a href="/examples#single-row.html">Single Row</a>

## singleRadio

**Type:** Boolean

**Detail:** Allows you to show the radio input when `single` is set to `true` (from v1.4.0).

**Default:** `false`

**Example:** <a href="/examples#single-radio.html">Single Radio</a>

## multiple

**Type:** Boolean

**Detail:** Show multiple items in a row.

**Default:** `false`

**Example:** <a href="/examples#multiple-items.html">Multiple Items</a>

## hideOptgroupCheckboxes

**Type:** Boolean

**Detail:** Hide the optgroup checkboxes.

**Default:** `false`

**Example:** <a href="/examples#hide-optgroup-checkboxes.html">Hide Optgroup Check</a>

## multipleWidth

**Type:** Number

**Detail:** Show multiple items width.

**Default:** `80`

**Example:** <li><a href="/examples#multiple-items.html">Multiple Items</a></li>

## width

**Type:** undefined

**Detail:** Define the width property of the select, support a percentage setting.

**Default:** `undefined`

**Example:** <a href="/examples#custom-dropdown-width.html">Custom Dropdown Width</a>

## dropWidth

**Type:** undefined

**Detail:** Define the dropdown width.

**Default:** `undefined`

**Example:** <a href="/examples#custom-dropdown-width.html">Custom Dropdown Width</a>

## maxHeight

**Type:** Number

**Detail:** Define the maximum height property of the dropdown list.

**Default:** `250`

**Example:** <a href="/examples#max-height.html">Max Height</a>

## position

**Type:** String

**Detail:** Defines the position of the select dropdown, can only be 'bottom' or 'top'.

**Default:** `bottom`

**Example:** <a href="/examples#position.html">The Position</a>

## displayValues

**Type:** Boolean

**Detail:** Display selected values instead text.

**Default:** `false`

**Example:** <a href="/examples#display-values.html">Display Values</a>

## displayTitle

**Type:** Boolean

**Detail:** Display the `title` of selected text.

**Default:** `false`

**Example:** <a href="/examples#display-title.html">Display Title</a>

## displayDelimiter

**Type:** String

**Detail:** Custom the display delimiter.

**Default:** `, `

**Example:** <a href="/examples#display-delimiter.html">Display Delimiter</a>

## minimumCountSelected

**Type:** Number

**Detail:** `formatCountSelected` will be shown only if more than `minimumCountSelected` items where selected.

**Default:** `3`

**Example:** <a href="/examples#minimum-count-selected.html">Minimum Count Selected</a>

## ellipsis

**Type:** Boolean

**Detail:** Add `'...'` after selected options if `minimumCountSelected` is set. Overrides `formatCountSelected` option.

**Default:** `false`

**Example:** <a href="/examples#ellipsis.html">The Ellipsis</a>

## isOpen

**Type:** Boolean

**Detail:** Open the select dropdown by default.

**Default:** `false`

**Example:** <a href="/examples#is-open.html">Is Open</a>

## keepOpen

**Type:** Boolean

**Detail:** Keep the select dropdown always open.

**Default:** `false`

**Example:** <a href="/examples#keep-open.html">Keep Open</a>

## openOnHover

**Type:** Boolean

**Detail:** Open the select dropdown by hover instead of click.

**Default:** `false`

**Example:** <a href="/examples#open-on-hover.html">Open On Hover</a>

## container

**Type:** object

**Detail:** Define custom container to solve the cut off problem for example parent node is `overflow: hidden`.

**Default:** `null`

**Example:** <a href="/examples#container.html">The Container</a>

## filter

**Type:** Boolean

**Detail:** Show a search field to search through checkbox items.

**Default:** `false`

**Example:** <a href="/examples#basic-filter.html">Basic Filter</a> <a href="/examples#optgroup-filter.html">Filter With Optgroup</a>

## filterGroup

**Type:** Boolean

**Detail:** Filter optgroups only and not options.

**Default:** `false`

**Example:** <a href="/examples#filter-group.html">Filter Only Optgroup</a>

## filterPlaceholder

**Type:** String

**Detail:** Set the filter placeholder.

**Default:** ``

**Example:** <a href="/examples#filter-placeholder.html">Filter Placeholder</a>

## filterAcceptOnEnter

**Type:** Boolean

**Detail:** Speed up keyboard use. Enter filter text and then hit `enter` or `space` will auto click `select all` and close the dropdown.

**Default:** `false`

**Example:** <a href="/examples#filter-accept-on-enter.html">Filter Accept On Enter</a>

## animate

**Type:** undefined

**Detail:** Define the animate of open or close the dropdown. Can be `undefined`, `'fade'` and `'slide'`.

**Default:** `undefined`

**Example:** <a href="/examples#animate.html">The Animate</a>

## styler

**Type:** function

**Detail:** The item styler function, return style string to custom the item style, contains parameter: `value`.

**Default:** `{ return false }`

**Example:** <a href="/examples#styler.html">The Styler</a>

## textTemplate

**Type:** function

**Detail:** The item textTemplate function, return string to custom the item text, contains parameter: `$elm`.

**Default:** `{ return $elm[0].innerHTML }`

**Example:** <a href="/examples#text-template.html">Text Template</a>

## labelTemplate

**Type:** function

**Detail:** The item labelTemplate function, return string to custom the optgroup label, contains parameter: `$elm`.

**Default:** `{ return $elm[0].getAttribute('label') }`

**Example:** <a href="/examples#label-template.html">Label Template</a>
