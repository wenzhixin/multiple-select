---
id: component
title: Component
---

<div id="codefund"></div>

## Usage Example

```vue
<MultipleSelect
  ref="select"
  v-model="select"
  width="200"
  :options="options"
  @change="onChange"
/>
```

## Props

### v-model

- **Type:** `String | Array`

- **Detail:**

  The v-model of Multiple Select.

- **Default:** `undefined`

### name

- **Type:** `String`

- **Detail:**

  The name of select.

- **Default:** `undefined`

### single

- **Type:** `Boolean`

- **Detail:**

  Allows you to select only one option.

- **Default:** `false`

### width

- **Type:** `Number | String`

- **Detail:**

  Define the width property of the select, support a percentage setting.

- **Default:** `undefined`

### options

- **Type:** `Object`

- **Detail:**

  The [table options](/docs/en/options) of Multiple Select.

- **Default:** `{}`

## Events

### change

The original change event of select.

```
@change="onChange"
```

### other events

The calling method syntax: `@onEvent="onEvent"`.

All events are defined in [Events API](/docs/en/events/).

## Methods

The calling method syntax: `this.$refs.select.methodName(parameter)`.

Example: `this.$refs.select.getOptions()`.

All methods are defined in [Methods API](/docs/en/methods/).
