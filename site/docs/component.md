---
id: component
title: Component
---

<div id="gg"></div>

## Usage Example

```vue
<MultipleSelect
  ref="select"
  v-model="select"
  width="200"
  :data="data"
  :options="options"
  @change="onChange"
/>
```

## Props

### v-model

- **Type:** `Number | String | Array | Object`

- **Detail:**

  The v-model of Multiple Select.

- **Default:** `undefined`

### name

- **Type:** `String`

- **Detail:**

  The name of select.

- **Default:** `undefined`

### multiple

- **Type:** `Boolean | String`

- **Detail:**

  Single or multiple select.

- **Default:** `false`

### disabled

- **Type:** `Boolean`

- **Detail:**

  The disabled attribute of select.

- **Default:** `false`

### width

- **Type:** `Number | String`

- **Detail:**

  Define the width property of the select, support a percentage setting.

- **Default:** `undefined`

### data

- **Type:** `Array`

- **Detail:**

  The data to be loaded.

  Group format:

```js
[
  {
    type: 'optgroup',
    label: 'Group 1',
    children: [
      {
        text: 'Option 1',
        value: 1
      }
    ]
  }
]
```

Option format:

```js
[
  {
    text: 'Option 1',
    value: 1
  }
]
```

Or Object:

```js
{
  1: 'Option 1'
}
```

Or String/Number Array:

```js
['option1']


[1]
```

- **Default:** `undefined`

### options

- **Type:** `Object`

- **Detail:**

  The [Options API](/docs/en/options) of Multiple Select.

- **Default:** `{}`

## Events

### change

The original change event of select.

```
@change="onChange"
```

### other events

The calling method syntax: `@on-event="onEvent"`.

All events are defined in [Events API](/docs/en/events/).

**Note:** you need to convert event name to lowercase + hyphen format, for example: `onClick` should be `on-click`.

## Methods

The calling method syntax: `this.$refs.select.methodName(parameter)`.

Example: `this.$refs.select.getOptions()`.

All methods are defined in [Methods API](/docs/en/methods/).
