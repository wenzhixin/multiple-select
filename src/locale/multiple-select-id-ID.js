/**
 * Multiple Select id-ID translation
 * Author: AdjadTea<adjadtea@gmail.com>
 */

$.fn.multipleSelect.locales['id-ID'] = {
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
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['id-ID'])
