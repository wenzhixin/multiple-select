# 多语言 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/localizations.md)

---

多语言的使用语法：

```js
$('#multiple').multipleSelect({
  formatMessage: function () {
    return 'Format message'
  }
})
```

例子：[The i18n](../examples/#i18n.html)

## formatSelectAll

**参数：** `undefined`

**默认：** `'[Select all]'`

## formatAllSelected

**参数：** `undefined`

**默认：** `'All selected'`

## formatCountSelected

**参数：** `count, total`

**默认：** `count + ' of ' + total + ' selected'`

## formatNoMatchesFound

**参数：** `undefined`

**默认：** `'No matches found'`
