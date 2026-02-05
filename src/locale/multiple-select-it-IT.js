/**
 * Multiple Select it-IT translation
 * Author: Giuseppe Lodi Rizzini
 */

$.fn.multipleSelect.locales['it-IT'] = $.fn.multipleSelect.locales['it'] = {
  formatSelectAll () {
    return '[Seleziona tutti]'
  },
  formatAllSelected () {
    return 'Tutti selezionati'
  },
  formatCountSelected (count, total) {
    return `${count} di ${total} selezionati`
  },
  formatNoMatchesFound () {
    return 'Nessun risultato'
  },
  formatFilterAll () {
    return 'Tutti'
  },
  formatFilterSelected () {
    return 'Selezionati'
  },
  formatFilterUnselected () {
    return 'Non selezionati'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['it-IT'])
