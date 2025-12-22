/**
 * Multiple Select en-US translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.multipleSelect.locales['en-US'] = $.fn.multipleSelect.locales['en'] = {
  formatSelectAll () {
    return '[Select all]'
  },
  formatAllSelected () {
    return 'All selected'
  },
  formatCountSelected (count, total) {
    return `${count} of ${total} selected`
  },
  formatNoMatchesFound () {
    return 'No matches found'
  },
  formatFilterAll () {
    return 'All'
  },
  formatFilterSelected () {
    return 'Selected'
  },
  formatFilterUnselected () {
    return 'Unselected'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US'])
