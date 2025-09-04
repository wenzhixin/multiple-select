(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select fr-FR translation
   * Author: Francis Perron <francis@hivetek.com>
   */

  $.fn.multipleSelect.locales['fr-FR'] = $.fn.multipleSelect.locales['fr'] = {
    formatSelectAll() {
      return '[Tout sélectionner]';
    },
    formatAllSelected() {
      return 'Tous sélectionnés';
    },
    formatCountSelected(count, total) {
      return `${count} de ${total} sélectionnés`;
    },
    formatNoMatchesFound() {
      return 'Aucun résultat';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['fr-FR']);

}));
