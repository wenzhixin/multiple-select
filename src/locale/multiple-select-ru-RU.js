/**
 * Multiple Select ru-RU translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.multipleSelect.locales['ru-RU'] = $.fn.multipleSelect.locales['ru'] = {
  formatSelectAll () {
    return '[Выбрать все]'
  },
  formatAllSelected () {
    return 'Выбрано все'
  },
  formatCountSelected (count, total) {
    return `${count} из ${total} выбрано`
  },
  formatNoMatchesFound () {
    return 'Совпадений не найдено'
  },
  formatFilterAll () {
    return 'Все'
  },
  formatFilterSelected () {
    return 'Выбрано'
  },
  formatFilterUnselected () {
    return 'Не выбрано'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ru-RU'])
