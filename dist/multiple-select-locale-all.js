(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

/**
 * Multiple Select da-DK translation
 * Author: HThuren<thuren.henrik@gmail.com>
 */

$.fn.multipleSelect.locales['da-DK'] = {
  formatSelectAll () {
    return '[Vælg alle]'
  },
  formatAllSelected () {
    return 'Alle valgt'
  },
  formatCountSelected (count, total) {
    return count + ' af ' + total + ' valgt'
  },
  formatNoMatchesFound () {
    return 'Søgning uden resultat'
  }
}
$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['da-DK'])

/**
   * Multiple Select es-ES translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['es-ES'] = {
    formatSelectAll: function formatSelectAll() {
      return '[Seleccionar todo]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'Todos seleccionados';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' de ' + total + ' seleccionado';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'No se encontraron coincidencias';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['es-ES']);

/**
 * Multiple Select fr-FR translation
 * Author: Francis Perron <francis@hivetek.com>
 */

$.fn.multipleSelect.locales['fr-FR'] = {
  formatSelectAll () {
    return '[Tout sélectionner]'
  },
  formatAllSelected () {
    return 'Tous sélectionnés'
  },
  formatCountSelected (count, total) {
    return count + ' de ' + total + ' sélectionnés'
  },
  formatNoMatchesFound () {
    return 'Aucun résultat'
  }
}
$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['fr-FR'])

/**
 * Multiple Select hu-HU translation
 * Author: Péter Báthory<bathory86p@gmail.com>
 */

$.fn.multipleSelect.locales['hu-HU'] = {
  formatSelectAll () {
    return '[Összes kiválasztása]'
  },
  formatAllSelected () {
    return 'Összes kiválasztva'
  },
  formatCountSelected (count, total) {
    return count + ' / ' + total + ' kiválasztva'
  },
  formatNoMatchesFound () {
    return 'Nincs találat'
  }
}
$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['hu-HU'])

  /**
   * Multiple Select it-IT translation
   * Author: Giuseppe Lodi Rizzini
   */

  $.fn.multipleSelect.locales['it-IT'] = {
    formatSelectAll: function formatSelectAll() {
      return '[Seleziona tutti]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'Tutti selezionati';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' di ' + total + ' selezionati';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'Nessun risultato';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['it-IT']);

/**
 * Multiple Select ru-RU translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.multipleSelect.locales['ru-RU'] = {
  formatSelectAll () {
    return '[Выбрать все]'
  },
  formatAllSelected () {
    return 'Выбрано все'
  },
  formatCountSelected (count, total) {
    return count + ' из ' + total + ' выбрано'
  },
  formatNoMatchesFound () {
    return 'Совпадений не найдено'
  }
}
$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ru-RU'])

/**
 * Multiple Select vi-VN translation
 * Author: hoangbaovu <ineo.vn>
 */

$.fn.multipleSelect.locales['vi-VN'] = {
  formatSelectAll () {
    return '[Tất cả]'
  },
  formatAllSelected () {
    return 'Chọn tất cả'
  },
  formatCountSelected (count, total) {
    return 'Đã chọn ' + count + ' trong ' + total
  },
  formatNoMatchesFound () {
    return 'Không tìm thấy kết quả.'
  }
}
$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['vi-VN'])

  /**
   * Multiple Select zh-CN translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['zh-CN'] = {
    formatSelectAll: function formatSelectAll() {
      return '[全选]';
    },
    formatAllSelected: function formatAllSelected() {
      return '已选择所有记录';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return '已从' + total + '条记录中选择' + count + '条';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return '没有找到记录';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['zh-CN']);

  /**
   * Multiple Select zh-TW translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['zh-TW'] = {
    formatSelectAll: function formatSelectAll() {
      return '[全選]';
    },
    formatAllSelected: function formatAllSelected() {
      return '已選擇所有記錄';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return '已從' + total + '條記錄中選擇' + count + '條';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return '沒有找到記錄';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['zh-TW']);

    /**
   * Multiple Select en-US translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

    $.fn.multipleSelect.locales['en-US'] = {
      formatSelectAll: function formatSelectAll() {
        return '[Select all]';
      },
      formatAllSelected: function formatAllSelected() {
        return 'All selected';
      },
      formatCountSelected: function formatCountSelected(count, total) {
        return count + ' of ' + total + ' selected';
      },
      formatNoMatchesFound: function formatNoMatchesFound() {
        return 'No matches found';
      }
    };
    $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US']);
    
}));
