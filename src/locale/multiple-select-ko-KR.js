/**
 * Multiple Select ko-KR translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.multipleSelect.locales['ko-KR'] = $.fn.multipleSelect.locales['ko'] = {
  formatSelectAll () {
    return '[전체선택]'
  },
  formatAllSelected () {
    return '전체 선택됨'
  },
  formatCountSelected (count, total) {
    return `${count}/${total} 선택됨`
  },
  formatNoMatchesFound () {
    return '검색 결과가 없습니다.'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ko-KR'])
