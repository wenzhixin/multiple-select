/**
 * Multiple Select fr-FR translation
 * Author: Francis Perron <francis@hivetek.com>
 */

$.fn.multipleSelect.locales['fr-FR'] = $.fn.multipleSelect.locales['fr'] = {
  formatSelectAll () {
    return '[Tout sélectionner]'
  },
  formatAllSelected () {
    return 'Tous sélectionnés'
  },
  formatCountSelected (count, total) {
    return `${count} de ${total} sélectionnés`
  },
  formatNoMatchesFound () {
    return 'Aucun résultat'
  },
  formatFilterAll () {
    return 'Tous'
  },
  formatFilterSelected () {
    return 'Sélectionnés'
  },
  formatFilterUnselected () {
    return 'Non sélectionnés'
  },
  formatFilterOnly () {
    return 'Uniquement ceci'
  },
  formatExpand () {
    return 'Afficher plus'
  },
  formatCollapse () {
    return 'Réduire'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['fr-FR'])
