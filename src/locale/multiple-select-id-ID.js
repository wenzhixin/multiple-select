/**
 * Multiple Select id-ID translation
 * Author: AdjadTea<adjadtea@gmail.com>
 */

$.fn.multipleSelect.locales['id-ID'] = $.fn.multipleSelect.locales['id'] = {
  formatSelectAll () {
    return '[Pilih Semua]'
  },
  formatAllSelected () {
    return 'Semua Dipilih'
  },
  formatCountSelected (count, total) {
    return `${count} of ${total} dipilih`
  },
  formatNoMatchesFound () {
    return 'Tidak ditemukan'
  },
  formatFilterAll () {
    return 'Semua'
  },
  formatFilterSelected () {
    return 'Dipilih'
  },
  formatFilterUnselected () {
    return 'Tidak dipilih'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['id-ID'])
