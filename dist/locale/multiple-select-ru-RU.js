(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select ru-RU translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['ru-RU'] = $.fn.multipleSelect.locales['ru'] = {
    formatSelectAll() {
      return '[Выбрать все]';
    },
    formatAllSelected() {
      return 'Выбрано все';
    },
    formatCountSelected(count, total) {
      return `${count} из ${total} выбрано`;
    },
    formatNoMatchesFound() {
      return 'Совпадений не найдено';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ru-RU']);

}));
