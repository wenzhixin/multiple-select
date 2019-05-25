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

- **参数：**  -

- **说明：** 当下拉列表被打开时触发。

## onClose

- **参数：**  -

- **说明：** 当下拉列表被关闭时触发。

## onCheckAll

- **参数：**  -

- **说明：** 通过点击“全选”复选框或以编程方式调用“checkall”方法选中所有选项时触发。

## onUncheckAll

- **参数：**  -

- **说明：** 通过点击“全选”复选框或以编程方式调用“uncheckall”方法取消选中所有选项时触发。

## onFocus

- **参数：**  -

- **说明：** 将事件处理程序绑定到“focus”。

## onBlur

- **参数：**  -

- **说明：** 将事件处理程序绑定到"blur"。

## onOptgroupClick

- **参数：** `view`

- **说明：** 点击optgroup标签时触发。`view` 参数是一个对象，它包含 `label, checked, children`。

## onClick

- **参数：** `view`

- **说明：** 选中或取消选中复选框时触发。`view` 参数是一个对象，它包含 `label, value, checked`。

## onFilter

- **参数：** `text`

- **说明：** Multiple Select 进行过滤的时候触发。

## onAfterCreate

- **参数：**  -

- **说明：** Multiple Select 创建完成后触发。
