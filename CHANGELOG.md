## Changelog

### 1.2.2

* [bug] Fix #264: updated the default of textTemplate to .html().
* [enh] Added wrap span to label text.
* [enh] Added `destroy` method.
* [enh] Added `openOnHover` option.
* [bug] Fix #377: rebuild docs and use gh-pages.
* [bug] Fix #362: update multiple-select.css.

### 1.2.1

* [bug] Fix #84: single select with Optgroups bug.
* [bug] Fix #154: special character problem.
* [enh] Added `dropWidth` option.
* [enh] Added `open` and `close` methods.
* [enh] Fix #139: Added onFilter event.
* [enh] Fix #144: added `animate` option to support fade and slide animates.
* [bug] Fix #257: <label> element detection.
* [bug] Fix jQuery dependency.
* [bug] Fixed disable issue.
* [enh] Add selected class to 'select all' option.
* [enh] Added logic to perform accent insensitive compare when filtering values.
* [bug] Fix #264: updated the default of textTemplate to .html().

### 1.2.0

* [enh] Update `jquery.multiple.select.js` to `multiple-select.js`.
* [bug] Fix filter not match bug.
* [enh] Trigger change for select after set of new value.
* [bug] Prevents `updateSelectAll()` from calling `options.onCheckAll()` on init.
* [enh] Added `labelTemplate` option.
* [bug] Fix #188: Automatically set Group when all child was selected.
* [bug] Fixed filter functionality with 'no-results' label behavior.
* [bug] Fix #184: prevented the dropdown handle error.
* [enh] INPUT tags should be nameless.
* [bug] Fix #48: auto hide when the single option is set to true.
* [bug] Fix #65: show selectAll and hide noResults when open.
* [bug] Fix #45, #64: update width option to support a percentage setting.
* [bug] Trigger the checkbox on the entire line.
* [bug] Added `noMatchesFound` option.
* [bug] Update `seperator` to `separator`.
* [enh] Allow object of options along with initial method.
* [enh] Add a `filterAcceptOnEnter` option.
* [enh] Put class on ms-parent div instead of ul.
* [bug] Fixed #99: connect select back to its label.
* [enh] Added `hideOptgroupCheckboxes` option to hide optgroup checkboxes.
* [enh] Added `displayValues` and `delimiter` options.
* [enh] Added `textTemplate` option to custom the text.
* [enh] Added `selectAllDelimiter` option.
* [enh] Added `ellipsis` option.
* [enh] Get percentage width, if used.
* [bug] Fix #134: spelling error.
* [bug] Fixed the error when element id's contain colons.
* [bug] Fix current selected element not displayed in newer jquery versions.
* [bug] Fix #148 plain text stored to HTML.
* [bug] Update multiple-select.png.
* [enh] Added 'close' to allowedMethods.
* [bug] Prevent dropdown from closing occasionally when clicking on checkbox.
* [bug] Fixed dropdown not closing when focus was lost.
* [enh] Support for add title (tooltip) on the select list.

### 1.1.0

* Fix #63: Add ```keepOpen``` option.
* Fix #62: Fix ```isOpen``` and ```filter``` options are both true bug.
* Fix #57: Fire onCheckAll event when literally select.
* Add data attributes for support.
* Fix #55: Add ```name``` option.

### 1.0.9

* Fix #42: Add ```styler``` option to custom item style.
* Fix firefox click bug.
* Add ```allSelected```, ```minimumCountSelected``` and ```countSelected``` options.
* Fix #35: Add ```onFocus``` and ```onBlur``` events.
* Fix #25: Add ```focus``` and ```blur``` methods.
* Fix #31: Trigger the onCheckAll & onUncheckAll events when use filter to select all.

### 1.0.8

* Update the license to The MIT License.
* Fix #47: Add ```No matches found``` message when there are no results found.
* Fix #43: Add ```position``` option.

### 1.0.7

* Fix #44: The filters not working bugs.

### 1.0.6

* Fix #21: Add ```single``` option.
* Add ```override``` option.
* Add ```container``` option.
* Fix #29: Update the optgroups select text.
* Fix #30: Image is not shown in Firefox 25.0.1.
* Fix #22: fix group filter problem.

### 1.0.5

* Update the button text witdh.
* Add keyboard support.

### 1.0.4

* Fix #12: Add ```width``` option.
* Fix #11: Add callback events.
* Add ```maxHeight``` option.

### 1.0.3

* Fix #4: Add ```filter``` option.
* Support mobile devices.
* Fix #6: Add ```refresh``` method.

### 1.0.2

* Fix #7: Add ```selected``` and ```disabled``` options.
* Fix #5: Add ```checkAll``` and ```uncheckAll``` methods.

### 1.0.1

* Fix #3: Add optgroups support.
* Add ```placeholder``` option.
* Fix #2: use prop method instead of attr.

### 1.0.0

* Initial release
