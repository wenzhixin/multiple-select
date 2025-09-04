(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select es-ES translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['es-ES'] = $.fn.multipleSelect.locales['es'] = {
    formatSelectAll() {
      return '[Seleccionar todo]';
    },
    formatAllSelected() {
      return 'Todos seleccionados';
    },
    formatCountSelected(count, total) {
      return `${count} de ${total} seleccionado`;
    },
    formatNoMatchesFound() {
      return 'No se encontraron coincidencias';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['es-ES']);

}));
