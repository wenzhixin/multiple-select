/**
 * Multiple Select fr-FR translation
 * Author: Francis Perron <francis@hivetek.com>
 */

$.fn.multipleSelect.locales['fr-FR'] = {
  formatSelectAll () {
    return '[Tout sélectionner]'
  },
  formatAllSelected () {
    return 'Tous sélectionnés'
  },
  formatCountSelected (count, total) {
    return count + ' de ' + total + ' sélectionnés'
  },
  formatNoMatchesFound () {
    return 'Aucun résultat'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['fr-FR'])
