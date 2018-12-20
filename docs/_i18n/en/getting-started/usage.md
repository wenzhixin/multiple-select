# Usage []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/usage.md)

---

Include `multiple-select.min.css` in the head tag your html document.

```html
<link rel="stylesheet" href="multiple-select.min.css">
```

Include jQuery library and `multiple-select.min.js` in the head tag or at the very bottom of your document, just before the closing body tag (usually recommended for better performance).

```html
<script src="jquery.min.js"></script>
<script src="multiple-select.min.js"></script>
```

---

The Multiple Select plugin displays data in a tabular format, via data attributes or JavaScript.

## Via data attributes

Activate Multiple Select without writing JavaScript. Set `data-toggle="select"` on a normal select.

```html
<select multiple="multiple" data-toggle="select">
    <option value="1">January</option>
    ...
    <option value="12">December</option>
</select>
```

We can also use remote url data by setting `data-url="data1.json"` on a normal select.

```html
<select data-toggle="select" data-url="data1.json"></select>
```

## Via JavaScript

Call a multiple select with id select with JavaScript.

```html
<select id="select" multiple="multiple">
    <option value="1">January</option>
    ...
    <option value="12">December</option>
</select>
```

```js
$('#select').multipleSelect();
```

We can also use remote url data by setting `url: 'data1.json'`.

```html
<select id="select" multiple="multiple"></select>
```

```js
$('#select').multipleSelect({
    url: 'data1.json'
});
```
