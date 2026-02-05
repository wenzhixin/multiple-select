(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select vi-VN translation
   * Author: hoangbaovu <ineo.vn>
   */

  $.fn.multipleSelect.locales['vi-VN'] = $.fn.multipleSelect.locales['vi'] = {
    formatSelectAll() {
      return '[Tất cả]';
    },
    formatAllSelected() {
      return 'Chọn tất cả';
    },
    formatCountSelected(count, total) {
      return `Đã chọn ${count} trong ${total}`;
    },
    formatNoMatchesFound() {
      return 'Không tìm thấy kết quả.';
    },
    formatFilterAll() {
      return 'Tất cả';
    },
    formatFilterSelected() {
      return 'Đã chọn';
    },
    formatFilterUnselected() {
      return 'Chưa chọn';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['vi-VN']);

}));
