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
  },
  formatFilterOnly () {
    return 'Hanya ini'
  },
  formatExpand () {
    return 'Tampilkan lebih'
  },
  formatCollapse () {
    return 'Sembunyikan'
  },
  formatShowingCount (visible, total) {
    return `Menampilkan ${visible} dari ${total}`
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['id-ID'])
