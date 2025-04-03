/**
 * Multiple Select de-DE translation
 * Author: Igor Clukas
 */

$.fn.multipleSelect.locales['de-DE'] = {
  formatSelectAll () {
    return '[Alle auswählen]'
  },
  formatAllSelected () {
    return 'Alle ausgewählt'
  },
  formatCountSelected (count, total) {
    return `${count} von ${total} ausgewählt`
  },
  formatNoMatchesFound () {
    return 'Keine Treffer'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['de-DE'])
