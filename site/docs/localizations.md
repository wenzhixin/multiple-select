---
id: localizations
title: Localizations
---

The localizations API of Multiple Select.

<div id="gg"></div>

The localizations syntax:

```js
$('#multiple').multipleSelect({
  formatMessage: function () {
    return 'Format message'
  }
})
```

Example: [The i18n](/examples#i18n.html)

## formatSelectAll

- **Parameter:** `undefined`

- **Default:** `'[Select all]'`

## formatAllSelected

- **Parameter:** `undefined`

- **Default:** `'All selected'`

## formatCountSelected

- **Parameter:** `count, total`

- **Default:** `count + ' of ' + total + ' selected'`

## formatNoMatchesFound

- **Parameter:** `undefined`

- **Default:** `'No matches found'`
