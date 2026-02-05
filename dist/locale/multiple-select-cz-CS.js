(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select cz-CS translation
   * Author: Matej Puhony<info@puhony.eu>
   */

  $.fn.multipleSelect.locales['cz-CS'] = $.fn.multipleSelect.locales['cs'] = {
    formatSelectAll() {
      return '[Vybrat vše]';
    },
    formatAllSelected() {
      return 'Vše vybráno';
    },
    formatCountSelected(count, total) {
      return `${count} z ${total} vybráno`;
    },
    formatNoMatchesFound() {
      return 'Nebylo nalezeno';
    },
    formatFilterAll() {
      return 'Vše';
    },
    formatFilterSelected() {
      return 'Vybráno';
    },
    formatFilterUnselected() {
      return 'Nevybráno';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['cz-CS']);

}));
