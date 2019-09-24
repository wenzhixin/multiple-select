/**
 * Multiple Select en-US translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.multipleSelect.locales['en-US'] = {
  formatSelectAll () {
    return '[Select all]'
  },
  formatAllSelected () {
    return 'All selected'
  },
  formatCountSelected (count, total) {
    return count + ' of ' + total + ' selected'
  },
  formatNoMatchesFound () {
    return 'No matches found'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US'])
