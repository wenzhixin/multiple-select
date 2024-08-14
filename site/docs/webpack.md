---
id: webpack
title: Webpack
---

<div id="gg"></div>

## Importing JavaScript

Import Multiple Select’s JavaScript by adding this line to your app’s entry point (usually `index.js` or `app.js`):

```js
import 'multiple-select/dist/multiple-select.js'
```

## Importing CSS

Import Multiple Select’s CSS by adding this line to your app’s entry point:

```js
import 'multiple-select/dist/multiple-select.min.css'
```

## Usage

```vue
<template>
  <div class="hello">
    <MultipleSelect
      v-model="months"
      name="months"
      width="200"
      :options="options"
      @change="onChange"
    >
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
    </MultipleSelect>
  </div>
</template>

<script>
export default {
  data () {
    return {
      months: [],
      options: {
        filter: true
      }
    }
  },
  methods: {
    onChange () {
      console.log(this.months)
    }
  }
}
</script>
```

## Starter template

There is an [vue-starter](https://github.com/wenzhixin/multiple-select/tree/develop/vue-starter) example in our project.

`plugins/select.js`

```js
import 'multiple-select/dist/multiple-select.min.css'

import Vue from 'vue'
import MultipleSelect from 'multiple-select/dist/multiple-select-vue.js'

Vue.component('MultipleSelect', MultipleSelect)
```

`main.js`

```js
import './plugins/select.js'
```

`View.vue`

```vue
<template>
  <div class="hello">
    <MultipleSelect
      v-model="months"
      multiple
      name="months"
      width="200"
      :options="options"
      @change="onChange"
    >
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
    </MultipleSelect>
  </div>
</template>

<script>
export default {
  data () {
    return {
      months: [],
      options: {
        filter: true
      }
    }
  },
  methods: {
    onChange () {
      console.log(this.months)
    }
  }
}
</script>
```
