---
id: usage
title: Usage
---

The Multiple Select plugin displays data in a tabular format via JavaScript.

<div id="gg"></div>

## Via JavaScript

Include `multiple-select.min.css` in the head tag of your HTML document.

```html
<link rel="stylesheet" href="multiple-select.min.css">
```

Include jQuery library and `multiple-select.min.js` in the head tag or at the bottom of your document, just before the closing body tag (usually recommended for better performance).

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

Be sure to set up your pages according to the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.

Put it all together, and your pages should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, Multiple Select!</title>

    <link rel="stylesheet" href="https://unpkg.com/multiple-select@2.2.0/dist/multiple-select.min.css">
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

    <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
    <script src="https://unpkg.com/multiple-select@2.2.0/dist/multiple-select.min.js"></script>
    <script>
      $(function () {
        $('select').multipleSelect()
      })
    </script>
  </body>
</html>
```
