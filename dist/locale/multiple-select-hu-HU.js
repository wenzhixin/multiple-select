(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select hu-HU translation
   * Author: Péter Báthory<bathory86p@gmail.com>
   */

  $.fn.multipleSelect.locales['hu-HU'] = $.fn.multipleSelect.locales['hu'] = {
    formatSelectAll() {
      return '[Összes kiválasztása]';
    },
    formatAllSelected() {
      return 'Összes kiválasztva';
    },
    formatCountSelected(count, total) {
      return `${count} / ${total} kiválasztva`;
    },
    formatNoMatchesFound() {
      return 'Nincs találat';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['hu-HU']);

}));
