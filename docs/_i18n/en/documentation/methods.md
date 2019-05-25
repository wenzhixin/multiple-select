# Methods []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

The calling method syntax:

```js
$('#multiple').multipleSelect('method', parameter)
```

## getSelects

- **Parameter:** `type`

- **Detail:** Gets the selected values. The `type` can be `'value'` or `'text'`, default is `'value'`.

- **Example:** [setSelects-getSelects](../examples/#setSelects-getSelects.html)

## setSelects

- **Parameter:**  `values`

- **Detail:** Sets the selected values. The `values` should be an array.

- **Example:** [setSelects-getSelects](../examples/#setSelects-getSelects.html)

## enable

- **Parameter:**  -

- **Detail:** Enables multiple select.

- **Example:** [enable-disable](../examples/#enable-disable.html)

## disable

- **Parameter:**  -

- **Detail:** Disables multiple select. During this mode, the user is not allowed to manipulate the selection.

- **Example:** [enable-disable](../examples/#enable-disable.html)

## open

- **Parameter:**  -

- **Detail:** Open multiple select.

- **Example:** [open-close](../examples/#open-close.html)

## close

- **Parameter:**  -

- **Detail:** Close multiple select.

- **Example:** [open-close](../examples/#open-close.html)

## checkAll

- **Parameter:**  -

- **Detail:** Check all checkboxes.

- **Example:** [checkAll-uncheckAll](../examples/#checkAll-uncheckAll.html)

## uncheckAll

- **Parameter:**  -

- **Detail:** Uncheck all checkboxes.

- **Example:** [checkAll-uncheckAll](../examples/#checkAll-uncheckAll.html)

## focus

- **Parameter:**  -

- **Detail:** Focus the multiple select.

- **Example:** [focus-blur](../examples/#focus-blur.html)

## blur

- **Parameter:**  -

- **Detail:** Blur the multiple select.

- **Example:** [focus-blur](../examples/#focus-blur.html)

## refresh

- **Parameter:**  -

- **Detail:** Reloads the Multiple Select. If you're dynamically adding/removing option tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.

- **Example:** [refresh](../examples/#refresh.html)

## destroy

- **Parameter:**  -

- **Detail:** Destroy the Multiple Select. If you want remove the multiple select properties.

- **Example:** [destroy](../examples/#destroy.html)
