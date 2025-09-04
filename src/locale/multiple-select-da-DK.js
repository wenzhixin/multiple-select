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
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['da-DK'])
