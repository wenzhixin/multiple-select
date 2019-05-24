# 方法 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

使用方法的语法：

```js
$('#multiple').multipleSelect('method', parameter)
```

## getSelects

- **Parameter:** `type`

- **Detail:** 获取选定的值。`type` 可以是 `'value'` 或 `'text'`，默认是 `'value'`。

- **Example:** [setSelects-getSelects](../examples/#setSelects-getSelects.html)

## setSelects

- **Parameter:**  `values`

- **Detail:** 设置选定的值。`values` 的类型为数组。

- **Example:** [setSelects-getSelects](../examples/#setSelects-getSelects.html)

## enable

- **Parameter:**  -

- **Detail:** 启用 multiple select。

- **Example:** [enable-disable](../examples/#enable-disable.html)

## disable

- **Parameter:**  -

- **Detail:** 禁用 multiple select。在此模式下，用户不允许操作。

- **Example:** [enable-disable](../examples/#enable-disable.html)

## open

- **Parameter:**  -

- **Detail:** 打开 multiple select。

- **Example:** [open-close](../examples/#open-close.html)

## close

- **Parameter:**  -

- **Detail:** 关闭 multiple select。

- **Example:** [open-close](../examples/#open-close.html)

## checkAll

- **Parameter:**  -

- **Detail:** 选中所有复选框。

- **Example:** [checkAll-uncheckAll](../examples/#checkAll-uncheckAll.html)

## uncheckAll

- **Parameter:**  -

- **Detail:** 取消选中所有复选框。

- **Example:** [checkAll-uncheckAll](../examples/#checkAll-uncheckAll.html)

## focus

- **Parameter:**  -

- **Detail:** 使 multiple select 获得焦点。

- **Example:** [focus-blur](../examples/#focus-blur.html)

## blur

- **Parameter:**  -

- **Detail:** 使 multiple select 失去焦点。

- **Example:** [focus-blur](../examples/#focus-blur.html)

## refresh

- **Parameter:**  -

- **Detail:** 重新加载 multiple select。如果您通过 AJAX 或 DOM 操作方法在原始选择上动态添加/删除选项标记，请调用 refresh 进行更新。

- **Example:** [refresh](../examples/#refresh.html)

## destroy

- **Parameter:**  -

- **Detail:** 销毁 Multiple Select。如果你想删除 multiple select 的属性。

- **Example:** [destroy](../examples/#destroy.html)
