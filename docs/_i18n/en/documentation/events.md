# Events []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/events.md)

---

To use event syntax:

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

| Option Event    | jQuery Event                  | Parameter | Description                                                                                                                                      |
|-----------------|-------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| onOpen          | open.multile.select           | -         | Fires when the dropdown list is open.                                                                                                            |
| onClose         | close.multile.select          | -         | Fires when the dropdown list is close.                                                                                                           |
| onCheckAll      | check-all.multile.select      | -         | Fires when all the options are checked by either clicking the "Select all" checkbox or when the "checkall" method is programatically called.     |
| onUncheckAll    | uncheck-all.multile.select    | -         | Fires when all the options are unchecked by either clicking the "Select all" checkbox or when the "uncheckall" method is programatically called. |
| onFocus         | focus.multile.select          | -         | Bind an event handler to the "focus".                                                                                                            |
| onBlur          | blur.multile.select           | -         | Bind an event handler to the "blur".                                                                                                             |
| onOptgroupClick | optgroup-click.multile.select | view      | Fires when a an optgroup label is clicked on.                                                                                                    |
| onClick         | click.multile.select          | view      | Fires when a checkbox is checked or unchecked.                                                                                                   |
