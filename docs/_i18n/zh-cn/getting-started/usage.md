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

通过 JavaScript 来启用 Multiple Select 插件，显示丰富的功能。

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

---

## 入门模板

确保您的页面设置了最新的设计和开发标准，这意味着使用 HTML5 文档类型并包含 viewport meta 以获得正确的响应行为。

把它们放在一起，你的页面应该是这样的：

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, Multiple Select!</title>

    <link rel="stylesheet" href="https://unpkg.com/multiple-select@{{ site.current_version }}/dist/multiple-select.min.css">
  </head>
  <body>
    <select id="select" multiple="multiple">
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://unpkg.com/multiple-select@{{ site.current_version }}/dist/multiple-select.min.js"></script>
    <script>
      $(function () {
        $('#select').multipleSelect({
          width: 500
        })
      })
    </script>
  </body>
</html>
```
