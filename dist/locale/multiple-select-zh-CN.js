(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  /**
   * Multiple Select zh-CN translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['zh-CN'] = $.fn.multipleSelect.locales['zh'] = {
    formatSelectAll() {
      return '[全选]';
    },
    formatAllSelected() {
      return '已选择所有记录';
    },
    formatCountSelected(count, total) {
      return `已从${total}条记录中选择${count}条`;
    },
    formatNoMatchesFound() {
      return '没有找到记录';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['zh-CN']);

}));
