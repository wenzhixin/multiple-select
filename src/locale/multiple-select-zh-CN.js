/**
 * Multiple Select zh-CN translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.multipleSelect.locales['zh-CN'] = {
  formatSelectAll () {
    return '[全选]'
  },
  formatAllSelected () {
    return '已选择所有记录'
  },
  formatCountSelected (count, total) {
    return '已从' + total + '条记录中选择' + count + '条'
  },
  formatNoMatchesFound () {
    return '没有找到记录'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['zh-CN'])
