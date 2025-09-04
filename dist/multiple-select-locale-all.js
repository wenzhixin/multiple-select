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
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['cz-CS']);

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

  /**
   * Multiple Select de-DE translation
   * Author: Igor Clukas
   */

  $.fn.multipleSelect.locales['de-DE'] = $.fn.multipleSelect.locales['de'] = {
    formatSelectAll() {
      return '[Alle auswählen]';
    },
    formatAllSelected() {
      return 'Alle ausgewählt';
    },
    formatCountSelected(count, total) {
      return `${count} von ${total} ausgewählt`;
    },
    formatNoMatchesFound() {
      return 'Keine Treffer';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['de-DE']);

  /**
   * Multiple Select en-US translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['en-US'] = $.fn.multipleSelect.locales['en'] = {
    formatSelectAll() {
      return '[Select all]';
    },
    formatAllSelected() {
      return 'All selected';
    },
    formatCountSelected(count, total) {
      return `${count} of ${total} selected`;
    },
    formatNoMatchesFound() {
      return 'No matches found';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US']);

  /**
   * Multiple Select es-ES translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['es-ES'] = $.fn.multipleSelect.locales['es'] = {
    formatSelectAll() {
      return '[Seleccionar todo]';
    },
    formatAllSelected() {
      return 'Todos seleccionados';
    },
    formatCountSelected(count, total) {
      return `${count} de ${total} seleccionado`;
    },
    formatNoMatchesFound() {
      return 'No se encontraron coincidencias';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['es-ES']);

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

  /**
   * Multiple Select it-IT translation
   * Author: Giuseppe Lodi Rizzini
   */

  $.fn.multipleSelect.locales['it-IT'] = $.fn.multipleSelect.locales['it'] = {
    formatSelectAll() {
      return '[Seleziona tutti]';
    },
    formatAllSelected() {
      return 'Tutti selezionati';
    },
    formatCountSelected(count, total) {
      return `${count} di ${total} selezionati`;
    },
    formatNoMatchesFound() {
      return 'Nessun risultato';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['it-IT']);

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

  /**
   * Multiple Select ko-KR translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['ko-KR'] = $.fn.multipleSelect.locales['ko'] = {
    formatSelectAll() {
      return '[전체선택]';
    },
    formatAllSelected() {
      return '전체 선택됨';
    },
    formatCountSelected(count, total) {
      return `${count}/${total} 선택됨`;
    },
    formatNoMatchesFound() {
      return '검색 결과가 없습니다.';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ko-KR']);

  /**
   * Multiple Select pt-BR translation
   * Author: Lucas Aguiar<lucas99.abreu@gmail.com>
   */

  $.fn.multipleSelect.locales['pt-BR'] = $.fn.multipleSelect.locales['pt'] = {
    formatSelectAll() {
      return '[Selecionar todos]';
    },
    formatAllSelected() {
      return 'Todos selecionados';
    },
    formatCountSelected(count, total) {
      return `${count} de ${total} selecionado(s)`;
    },
    formatNoMatchesFound() {
      return 'Nenhum resultado encontrado';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['pt-BR']);

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
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['vi-VN']);

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

  /**
   * Multiple Select zh-TW translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.multipleSelect.locales['zh-TW'] = {
    formatSelectAll() {
      return '[全選]';
    },
    formatAllSelected() {
      return '已選擇所有記錄';
    },
    formatCountSelected(count, total) {
      return `已從${total}條記錄中選擇${count}條`;
    },
    formatNoMatchesFound() {
      return '沒有找到記錄';
    }
  };
  $.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['zh-TW']);

}));
