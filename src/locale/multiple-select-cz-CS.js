/**
 * Multiple Select cz-CS translation
 * Author: Matej Puhony<info@puhony.eu>
 */

$.fn.multipleSelect.locales['cz-CS'] = {
  formatSelectAll () {
    return '[Vybrat vše]'
  },
  formatAllSelected () {
    return 'Vše vybráno'
  },
  formatCountSelected (count, total) {
    return `${count} z ${total} vybráno`
  },
  formatNoMatchesFound () {
    return 'Nebylo nalezeno'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['cz-CS'])
