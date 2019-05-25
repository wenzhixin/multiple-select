# Localizations []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/localizations.md)

---

The localizations syntax:

```js
$('#multiple').multipleSelect({
  formatMessage: function () {
    return 'Format message'
  }
})
```

Example: [The i18n](../examples/#i18n.html)

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
