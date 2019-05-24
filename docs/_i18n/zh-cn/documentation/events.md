# 事件 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/events.md)

---

使用事件语法为：

```js
$('#select').multipleSelect({
  onEventName: function (arg1, arg2, ...) {
    // ...
  }
})
```

例子：[The Event](../examples/#events.html)

## onOpen

- **Parameter:**  -

- **Detail:** 当下拉列表被打开时触发。

## onClose

- **Parameter:**  -

- **Detail:** 当下拉列表被关闭时触发。

## onCheckAll

- **Parameter:**  -

- **Detail:** 通过点击“全选”复选框或以编程方式调用“checkall”方法选中所有选项时触发。

## onUncheckAll

- **Parameter:**  -

- **Detail:** 通过点击“全选”复选框或以编程方式调用“uncheckall”方法取消选中所有选项时触发。

## onFocus

- **Parameter:**  -

- **Detail:** 将事件处理程序绑定到“focus”。

## onBlur

- **Parameter:**  -

- **Detail:** 将事件处理程序绑定到"blur"。

## onOptgroupClick

- **Parameter:** `view`

- **Detail:** 点击optgroup标签时触发。`view` 参数是一个对象，它包含 `label, checked, children`。

## onClick

- **Parameter:** `view`

- **Detail:** 选中或取消选中复选框时触发。`view` 参数是一个对象，它包含 `label, value, checked`。

## onFilter

- **Parameter:** `text`

- **Detail:** Multiple Select 进行过滤的时候触发。

## onAfterCreate

- **Parameter:**  -

- **Detail:** Multiple Select 创建完成后触发。
