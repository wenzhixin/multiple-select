/**
 * Multiple Select da-DK translation
 * Author: HThuren<thuren.henrik@gmail.com>
 */

$.fn.multipleSelect.locales['da-DK'] = $.fn.multipleSelect.locales['da'] = {
  formatSelectAll () {
    return '[Vælg/fravælg alle]'
  },
  formatAllSelected () {
    return 'Alle valgt'
  },
  formatCountSelected (count, total) {
    return `${count} af ${total} valgt`
  },
  formatNoMatchesFound () {
    return 'Søgning uden resultat'
  },
  formatFilterAll () {
    return 'Alle'
  },
  formatFilterSelected () {
    return 'Valgt'
  },
  formatFilterUnselected () {
    return 'Ikke valgt'
  },
  formatFilterOnly () {
    return 'Kun denne'
  },
  formatExpand () {
    return 'Vis mere'
  },
  formatCollapse () {
    return 'Vis mindre'
  },
  formatShowingCount (visible, total) {
    return `Viser ${visible} af ${total}`
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['da-DK'])
