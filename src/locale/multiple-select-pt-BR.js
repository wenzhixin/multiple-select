/**
 * Multiple Select pt-BR translation
 * Author: Lucas Aguiar<lucas99.abreu@gmail.com>
 */

$.fn.multipleSelect.locales['pt-BR'] = {
  formatSelectAll () {
    return '[Selecionar todos]'
  },
  formatAllSelected () {
    return 'Todos selecionados'
  },
  formatCountSelected (count, total) {
    return `${count} de ${total} selecionado(s)`
  },
  formatNoMatchesFound () {
    return 'Nenhum resultado encontrado'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['pt-BR'])
