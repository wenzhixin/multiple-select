# Events []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/events.md)

---

To use event syntax:

```js
$('#select').multipleSelect({
  onEventName: function (arg1, arg2, ...) {
    // ...
  }
})
```

Example: [The Event](../examples/#events.html)

## onOpen

- **Parameter:**  -

- **Detail:** Fires when the dropdown list is open.

## onClose

- **Parameter:** -

- **Detail:** Fires when the dropdown list is close.

## onCheckAll

- **Parameter:** -

- **Detail:** Fires when all the options are checked by either clicking the "Select all" checkbox or when the "checkall" method is programatically called.

## onUncheckAll

- **Parameter:** -

- **Detail:** Fires when all the options are unchecked by either clicking the "Select all" checkbox or when the "uncheckall" method is programatically called.

## onFocus

- **Parameter:** -

- **Detail:** Bind an event handler to the "focus".

## onBlur

- **Parameter:** -

- **Detail:** Bind an event handler to the "blur".

## onOptgroupClick

- **Parameter:** `view`

- **Detail:** Fires when a an optgroup label is clicked on. The `view` parameter is an object, it contains `label, checked, children`.

## onClick

- **Parameter:** `view`

- **Detail:** Fires when a checkbox is checked or unchecked. The `view` parameter is an object, it contains `label, value, checked`.

## onFilter

- **Parameter:** `text`

- **Detail:** Fires after the Multiple Select is on filter.

## onAfterCreate

- **Parameter:** -

- **Detail:** Fires after the Multiple Select is created.
