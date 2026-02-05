/**
 * Multiple Select hu-HU translation
 * Author: Péter Báthory<bathory86p@gmail.com>
 */

$.fn.multipleSelect.locales['hu-HU'] = $.fn.multipleSelect.locales['hu'] = {
  formatSelectAll () {
    return '[Összes kiválasztása]'
  },
  formatAllSelected () {
    return 'Összes kiválasztva'
  },
  formatCountSelected (count, total) {
    return `${count} / ${total} kiválasztva`
  },
  formatNoMatchesFound () {
    return 'Nincs találat'
  },
  formatFilterAll () {
    return 'Összes'
  },
  formatFilterSelected () {
    return 'Kiválasztva'
  },
  formatFilterUnselected () {
    return 'Nincs kiválasztva'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['hu-HU'])
