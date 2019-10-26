/**
 * Multiple Select it-IT translation
 * Author: Giuseppe Lodi Rizzini
 */

$.fn.multipleSelect.locales['it-IT'] = {
  formatSelectAll () {
    return '[Seleziona tutti]'
  },
  formatAllSelected () {
    return 'Tutti selezionati'
  },
  formatCountSelected (count, total) {
    return count + ' di ' + total + ' selezionati'
  },
  formatNoMatchesFound () {
    return 'Nessun risultato'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['it-IT'])
