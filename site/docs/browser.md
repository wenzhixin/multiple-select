---
id: browser
title: Browser
---

<div id="gg"></div>

## VueJS JavaScript

In addition to the files mentioned by [Usage](/docs/en/usage), you need to include our vue component file.

```html
<script src="https://unpkg.com/multiple-select@2.2.0/dist/multiple-select-vue.min.js"></script>
```

## Usage

```html
<div id="select">
  <multiple-select
    v-model="select"
    @change="onChange"
  >
    <option value="1">January</option>
    ...
    <option value="12">December</option>
  </multiple-select>
</div>

<script>
  new Vue({
    el: '#select',
    components: {
      'MultipleSelect': MultipleSelect
    },
    data: {
      select: 1
    },
    methods: {
      onChange () {

      }
    }
  })
</script>
```

## Starter template

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
    <div id="select">
      <multiple-select>
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
      </multiple-select>

      <multiple-select multiple>
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
      </multiple-select>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
    <script src="https://unpkg.com/multiple-select@2.2.0/dist/multiple-select.min.js"></script>
    <script src="https://unpkg.com/multiple-select@2.2.0/dist/multiple-select-vue.min.js"></script>
    <script>
      new Vue({
        el: '#select',
        components: {
          'MultipleSelect': MultipleSelect
        }
      })
    </script>
  </body>
</html>
```
