# 使用 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/usage.md)

---

引入 `multiple-select.min.css` 到 head 标签下。

```html
<link rel="stylesheet" href="multiple-select.min.css">
```

引入 jQuery 库和 `multiple-select.min.js` 到 head 标签下或者在 body 标签关闭之前（一般建议这么做）。

```html
<script src="jquery.min.js"></script>
<script src="multiple-select.min.js"></script>
```

---

通过 data 属性或者 JavaScript 来启用 Multiple Select 插件，显示丰富的功能。

## 通过 data 属性的方式

无需编写 JavaScript 启用 multiple select，我们对普通的 select 设置 `data-toggle="select"` 即可。

```html
<select multiple="multiple" data-toggle="select">
    <option value="1">January</option>
    ...
    <option value="12">December</option>
</select>
```

我们也可以通过设置远程的 url 如  `data-url="data1.json"` 来加载数据。

```html
<select data-toggle="select" data-url="data1.json"></select>
```

## 通过 JavaScript 的方式

通过 select id 来启用 multiple select。

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

我们也可以通过设置远程的 url 如  `url: 'data1.json'` 来加载数据。

```html
<select id="select" multiple="multiple"></select>
```

```js
$('#select').multipleSelect({
    url: 'data1.json'
});
```
