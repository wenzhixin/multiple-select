/**
 * Multiple Select ja-JP translation
 * Author: Nozomi Anzai<nozomi.anzai@gmail.com>
 */

$.fn.multipleSelect.locales['ja-JP'] = {
  formatSelectAll () {
    return '[すべて選択]'
  },
  formatAllSelected () {
    return 'すべて選択'
  },
  formatCountSelected (count, total) {
    return `${total} 件中 ${count} 件選択`
  },
  formatNoMatchesFound () {
    return '見つかりません'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ja-JP'])
