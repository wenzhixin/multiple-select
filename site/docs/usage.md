---
id: usage
title: Usage
---

The Multiple Select plugin displays data in a tabular format, via JavaScript.

<div id="gg"></div>

## Via JavaScript

Include `multiple-select.min.css` in the head tag your html document.

```html
<link rel="stylesheet" href="multiple-select.min.css">
```

Include jQuery library and `multiple-select.min.js` in the head tag or at the very bottom of your document, just before the closing body tag (usually recommended for better performance).

```html
<script src="jquery.min.js"></script>
<script src="multiple-select.min.js"></script>
```

Call a multiple select with id select with JavaScript.

```html
<!-- Single Select -->
<select>
    <option value="1">January</option>
    ...
    <option value="12">December</option>
</select>

<!-- Multiple Select -->
<select multiple="multiple">
    <option value="1">January</option>
    ...
    <option value="12">December</option>
</select>
```

```js
$('select').multipleSelect()
```

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.

Put it all together and your pages should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, Multiple Select!</title>

    <link rel="stylesheet" href="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.css">
  </head>
  <body>
    <!-- Single Select -->
    <select>
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

    <!-- Multiple Select -->
    <select multiple="multiple">
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

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.js"></script>
    <script>
      $(function () {
        $('select').multipleSelect()
      })
    </script>
  </body>
</html>
```
