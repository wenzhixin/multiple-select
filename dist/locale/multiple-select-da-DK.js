(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select da-DK translation
   * Author: HThuren<thuren.henrik@gmail.com>
   */

  $.fn.multipleSelect.locales['da-DK'] = $.fn.multipleSelect.locales['da'] = {
    formatSelectAll() {
      return '[Vælg/fravælg alle]';
    },
    formatAllSelected() {
      return 'Alle valgt';
    },
    formatCountSelected(count, total) {
      return `${count} af ${total} valgt`;
    },
    formatNoMatchesFound() {
      return 'Søgning uden resultat';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['da-DK']);

}));
