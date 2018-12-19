# 事件 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/events.md)

---

使用事件语法为：

```js
$('#select').multipleSelect({
  onEventName: function (arg1, arg2, ...) {
    // ...
  }
});

$('#select').on('event-name.multile.select', function (e, arg1, arg2, ...) {
  // ...
});
```

<div class="start-table"></div>

| Option 事件     | jQuery 事件                   | 参数 | 描述                                                                        |
|-----------------|-------------------------------|------|---------------------------------------------------------------------------|
| onOpen          | open.multile.select           | -    | 当下拉列表被打开时触发。                                                     |
| onClose         | close.multile.select          | -    | 当下拉列表被关闭时触发。                                                     |
| onCheckAll      | check-all.multile.select      | -    | 通过点击“全选”复选框或以编程方式调用“checkall”方法选中所有选项时触发。       |
| onUncheckAll    | uncheck-all.multile.select    | -    | 通过点击“全选”复选框或以编程方式调用“uncheckall”方法取消选中所有选项时触发。 |
| onFocus         | focus.multile.select          | -    | 将事件处理程序绑定到“focus”。                                                |
| onBlur          | blur.multile.select           | -    | 将事件处理程序绑定到"blur"。                                                 |
| onOptgroupClick | optgroup-click.multile.select | view | 点击optgroup标签时触发。                                                     |
| onClick         | click.multile.select          | view | 选中或取消选中复选框时触发。                                                 |
