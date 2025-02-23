/**
 * Multiple Select en-US translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
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
