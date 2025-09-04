(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select id-ID translation
   * Author: AdjadTea<adjadtea@gmail.com>
   */

  $.fn.multipleSelect.locales['id-ID'] = $.fn.multipleSelect.locales['id'] = {
    formatSelectAll() {
      return '[Pilih Semua]';
    },
    formatAllSelected() {
      return 'Semua Dipilih';
    },
    formatCountSelected(count, total) {
      return `${count} of ${total} dipilih`;
    },
    formatNoMatchesFound() {
      return 'Tidak ditemukan';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['id-ID']);

}));
