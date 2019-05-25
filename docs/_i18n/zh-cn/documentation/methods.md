# 方法 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

使用方法的语法：

```js
$('#multiple').multipleSelect('method', parameter)
```

## getSelects

- **参数：** `type`

- **说明：** 获取选定的值。`type` 可以是 `'value'` 或 `'text'`，默认是 `'value'`。

- **例子：** [setSelects-getSelects](../examples/#setSelects-getSelects.html)

## setSelects

- **参数：**  `values`

- **说明：** 设置选定的值。`values` 的类型为数组。

- **例子：** [setSelects-getSelects](../examples/#setSelects-getSelects.html)

## enable

- **参数：**  -

- **说明：** 启用 multiple select。

- **例子：** [enable-disable](../examples/#enable-disable.html)

## disable

- **参数：**  -

- **说明：** 禁用 multiple select。在此模式下，用户不允许操作。

- **例子：** [enable-disable](../examples/#enable-disable.html)

## open

- **参数：**  -

- **说明：** 打开 multiple select。

- **例子：** [open-close](../examples/#open-close.html)

## close

- **参数：**  -

- **说明：** 关闭 multiple select。

- **例子：** [open-close](../examples/#open-close.html)

## checkAll

- **参数：**  -

- **说明：** 选中所有复选框。

- **例子：** [checkAll-uncheckAll](../examples/#checkAll-uncheckAll.html)

## uncheckAll

- **参数：**  -

- **说明：** 取消选中所有复选框。

- **例子：** [checkAll-uncheckAll](../examples/#checkAll-uncheckAll.html)

## focus

- **参数：**  -

- **说明：** 使 multiple select 获得焦点。

- **例子：** [focus-blur](../examples/#focus-blur.html)

## blur

- **参数：**  -

- **说明：** 使 multiple select 失去焦点。

- **例子：** [focus-blur](../examples/#focus-blur.html)

## refresh

- **参数：**  -

- **说明：** 重新加载 multiple select。如果您通过 AJAX 或 DOM 操作方法在原始选择上动态添加/删除选项标记，请调用 refresh 进行更新。

- **例子：** [refresh](../examples/#refresh.html)

## destroy

- **参数：**  -

- **说明：** 销毁 Multiple Select。如果你想删除 multiple select 的属性。

- **例子：** [destroy](../examples/#destroy.html)
