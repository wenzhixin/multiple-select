# 方法 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

使用方法的语法：`$('#multiple').multipleSelect('method', parameter);`.

<div class="start-table"></div>

| Name       | Parameter | Description                                                                                                  |
|------------|-----------|--------------------------------------------------------------------------------------------------------------|
| getSelects | type      | 获取选定的值。'type'可以是'value'或'text'，默认是'value'。                                                      |
| setSelects | values    | 设置选定的值。values的类型为数组。                                                                                                |
| enable     | -         | 启用 multiple select。                                                                                       |
| disable    | -         | 禁用 multiple select。在此模式下，用户不允许操作。                                                               |
| checkAll   | -         | 选中所有复选框。                                                                                              |
| uncheckAll | -         | 取消选中所有复选框。                                                                                          |
| focus      | -         | 使 multiple select 获得焦点.                                                                                 |
| blur       | -         | 使 multiple select 失去焦点.                                                                                 |
| refresh    | -         | 重新加载 multiple select。如果您通过 AJAX 或 DOM 操作方法在原始选择上动态添加/删除选项标记，请调用refresh进行更新。      |
| destroy    | -         | 销毁  Multiple Select。如果你想删除 multiple select 的属性。                                                   |
