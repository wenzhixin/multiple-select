/**
 * Multiple Select es-ES translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.multipleSelect.locales['es-ES'] = {
  formatSelectAll () {
    return '[Seleccionar todo]'
  },
  formatAllSelected () {
    return 'Todos seleccionados'
  },
  formatCountSelected (count, total) {
    return count + ' de ' + total + ' seleccionado'
  },
  formatNoMatchesFound () {
    return 'No se encontraron coincidencias'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['es-ES'])
