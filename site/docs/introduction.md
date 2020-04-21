---
id: introduction
title: Introduction
---

We have a Multiple Select Component for [Vue.js 2.0+](https://vuejs.org), and it should be able to work with the full [API](/docs/en/options/).

<div id="gg"></div>

## Installation

### Dependencies

* [Vue.js](https://vuejs.org) (2.0+)
* [jQuery](http://jquery.com)

### NPM

Install and manage CSS, JavaScript, locales of Multiple Select using [npm](https://www.npmjs.com/package/multiple-select).

```sh
npm install multiple-select
```

### UNPKG

The folks over at [UNPKG](https://unpkg.com/multiple-select@1.5.2/dist/) graciously provide CDN support for CSS and JavaScript of Multiple Select. Just use these links.

```html
https://unpkg.com/multiple-select@1.5.2
```

## Build Files

`dist/` folder includes the following vue component files:

```
multiple-select/
└── dist/
    ├── multiple-select-vue.js
    ├── multiple-select-vue.min.js
    ├── multiple-select-vue-es.js
    └── multiple-select-vue-es.min.js
```

* **multiple-select-vue.js:** UMD builds can be used directly in the browser via a `<script>` tag.
* **multiple-select-vue.es.js** ES module builds are intended for use with modern bundlers like [webpack 2](https://webpack.js.org/) or [rollup](http://rollupjs.org/).
