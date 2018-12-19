# Methods []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

The calling method syntax: `$('#multiple').multipleSelect('method', parameter);`.

<div class="start-table"></div>

| Name       | Parameter | Description                                                                                                                                                                      |
|------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getSelects | type      | Gets the selected values. The 'type' can be 'value' or 'text', default is 'value'.                                                                                               |
| setSelects | values    | Sets the selected values. The 'type' should be an array of 'value's.                                                                                                                                                    |
| enable     | -         | Enables multiple select.                                                                                                                                                                  |
| disable    | -         | Disables multiple select. During this mode, the user is not allowed to manipulate the selection.                                                                                          |
| checkAll   | -         | Check all checkboxes.                                                                                                                                                            |
| uncheckAll | -         | Uncheck all checkboxes.                                                                                                                                                          |
| focus      | -         | Focus the multiple select.                                                                                                                                                       |
| blur       | -         | Blur the multiple select.                                                                                                                                                        |
| refresh    | -         | Reloads the Multiple Select. If you're dynamically adding/removing option tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes. |
| destroy    | -         | Destroy the Multiple Select. If you want remove the multiple select properties.                                                                                                    |
