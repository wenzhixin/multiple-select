/**
 * Multiple Select de-DE translation
 * Author: Igor Clukas
 */

$.fn.multipleSelect.locales['de-DE'] = $.fn.multipleSelect.locales['de'] = {
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
  },
  formatFilterAll () {
    return 'Alle'
  },
  formatFilterSelected () {
    return 'Ausgewählt'
  },
  formatFilterUnselected () {
    return 'Nicht ausgewählt'
  },
  formatFilterOnly () {
    return 'Nur diese'
  },
  formatExpand () {
    return 'Mehr anzeigen'
  },
  formatCollapse () {
    return 'Weniger anzeigen'
  },
  formatShowingCount (visible, total) {
    return `${visible} von ${total} angezeigt`
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['de-DE'])
