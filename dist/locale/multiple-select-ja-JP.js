(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select ja-JP translation
   * Author: Nozomi Anzai<nozomi.anzai@gmail.com>
   */

  $.fn.multipleSelect.locales['ja-JP'] = $.fn.multipleSelect.locales['ja'] = {
    formatSelectAll() {
      return '[すべて選択]';
    },
    formatAllSelected() {
      return 'すべて選択';
    },
    formatCountSelected(count, total) {
      return `${total} 件中 ${count} 件選択`;
    },
    formatNoMatchesFound() {
      return '見つかりません';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ja-JP']);

}));
