(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select pt-BR translation
   * Author: Lucas Aguiar<lucas99.abreu@gmail.com>
   */

  $.fn.multipleSelect.locales['pt-BR'] = $.fn.multipleSelect.locales['pt'] = {
    formatSelectAll() {
      return '[Selecionar todos]';
    },
    formatAllSelected() {
      return 'Todos selecionados';
    },
    formatCountSelected(count, total) {
      return `${count} de ${total} selecionado(s)`;
    },
    formatNoMatchesFound() {
      return 'Nenhum resultado encontrado';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['pt-BR']);

}));
