---
id: browser
title: Browser
---

<div id="gg"></div>

## VueJS JavaScript

In addition to the files that [Usage](/docs/en/usage) mentions, you also need to include our vue component file.

```html
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js",
      "multiple-select": "https://unpkg.com/multiple-select@3/dist/multiple-select-vue.min.js"
    }
  }
</script>
```

## Usage

```html
<div id="app">
  <multiple-select
    v-model="select"
    @change="onChange"
  >
    <option value="1">January</option>
    ...
    <option value="12">December</option>
  </multiple-select>
</div>

<script type="module">
  import { createApp, ref } from 'vue'
  import MultipleSelect from 'multiple-select'

  const app = createApp({
    setup () {
      const select = ref(1)

      return {
        select,
        onChange () {
          console.log('changed')
        }
      }
    }
  })
  app.component('MultipleSelect', MultipleSelect)
  app.mount('#app')
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

    <link rel="stylesheet" href="https://unpkg.com/multiple-select@3/dist/multiple-select.min.css">
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

    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js",
          "multiple-select": "https://unpkg.com/multiple-select@3/dist/multiple-select-vue.min.js"
        }
      }
    </script>
    <script type="module">
      import { createApp, ref } from 'vue'
      import MultipleSelect from 'multiple-select'

      const app = createApp({
        setup () {
          return {}
        }
      })
      app.component('MultipleSelect', MultipleSelect)
      app.mount('#app')
    </script>
  </body>
</html>
```
