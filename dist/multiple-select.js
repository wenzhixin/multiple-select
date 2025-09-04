(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  const BLOCK_ROWS = 500;
  const CLUSTER_BLOCKS = 4;
  const DEFAULTS = {
    name: '',
    placeholder: '',
    classes: '',
    classPrefix: '',
    classInput: '',
    data: undefined,
    locale: undefined,
    selectAll: true,
    single: undefined,
    singleRadio: false,
    multiple: false,
    hideOptgroupCheckboxes: false,
    multipleWidth: 80,
    width: undefined,
    size: undefined,
    dropWidth: undefined,
    maxHeight: 250,
    maxHeightUnit: 'px',
    position: 'bottom',
    displayValues: false,
    displayTitle: false,
    displayDelimiter: ', ',
    minimumCountSelected: 3,
    ellipsis: false,
    isOpen: false,
    keepOpen: false,
    openOnHover: false,
    container: null,
    filter: false,
    filterGroup: false,
    filterPlaceholder: '',
    filterAcceptOnEnter: false,
    filterByDataLength: undefined,
    filterSelectAll: true,
    customFilter({
      text,
      label,
      search
    }) {
      return (label || text).includes(search);
    },
    showClear: false,
    animate: undefined,
    styler() {
      return false;
    },
    textTemplate($elm) {
      return $elm[0].innerHTML.trim();
    },
    labelTemplate($elm) {
      return $elm[0].getAttribute('label');
    },
    onOpen() {
      return false;
    },
    onClose() {
      return false;
    },
    onCheckAll() {
      return false;
    },
    onUncheckAll() {
      return false;
    },
    onFocus() {
      return false;
    },
    onBlur() {
      return false;
    },
    onOptgroupClick() {
      return false;
    },
    onBeforeClick() {
      return true;
    },
    onClick() {
      return false;
    },
    onFilter() {
      return false;
    },
    onClear() {
      return false;
    },
    onAfterCreate() {
      return false;
    }
  };
  const EN = {
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
  const METHODS = ['getOptions', 'refreshOptions', 'getData', 'getSelects', 'setSelects', 'enable', 'disable', 'open', 'close', 'check', 'uncheck', 'checkAll', 'uncheckAll', 'checkInvert', 'focus', 'blur', 'refresh', 'resetFilter', 'destroy'];
  Object.assign(DEFAULTS, EN);
  const Constants = {
    BLOCK_ROWS,
    CLUSTER_BLOCKS,
    DEFAULTS,
    METHODS,
    LOCALES: {
      en: EN,
      'en-US': EN
    }
  };

  class VirtualScroll {
    constructor(options) {
      this.rows = options.rows;
      this.scrollEl = options.scrollEl;
      this.contentEl = options.contentEl;
      this.callback = options.callback;
      this.cache = {};
      this.scrollTop = this.scrollEl.scrollTop;
      this.initDOM(this.rows);
      this.scrollEl.scrollTop = this.scrollTop;
      this.lastCluster = 0;
      const onScroll = () => {
        if (this.lastCluster !== (this.lastCluster = this.getNum())) {
          this.initDOM(this.rows);
          this.callback();
        }
      };
      this.scrollEl.addEventListener('scroll', onScroll, false);
      this.destroy = () => {
        this.contentEl.innerHtml = '';
        this.scrollEl.removeEventListener('scroll', onScroll, false);
      };
    }
    initDOM(rows) {
      if (typeof this.clusterHeight === 'undefined') {
        this.cache.scrollTop = this.scrollEl.scrollTop;
        this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0];
        this.getRowsHeight(rows);
      }
      const data = this.initData(rows, this.getNum());
      const thisRows = data.rows.join('');
      const dataChanged = this.checkChanges('data', thisRows);
      const topOffsetChanged = this.checkChanges('top', data.topOffset);
      const bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset);
      const html = [];
      if (dataChanged && topOffsetChanged) {
        if (data.topOffset) {
          html.push(this.getExtra('top', data.topOffset));
        }
        html.push(thisRows);
        if (data.bottomOffset) {
          html.push(this.getExtra('bottom', data.bottomOffset));
        }
        this.contentEl.innerHTML = html.join('');
      } else if (bottomOffsetChanged) {
        this.contentEl.lastChild.style.height = `${data.bottomOffset}px`;
      }
    }
    getRowsHeight() {
      if (typeof this.itemHeight === 'undefined') {
        const nodes = this.contentEl.children;
        const node = nodes[Math.floor(nodes.length / 2)];
        this.itemHeight = node.offsetHeight;
      }
      this.blockHeight = this.itemHeight * Constants.BLOCK_ROWS;
      this.clusterRows = Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS;
      this.clusterHeight = this.blockHeight * Constants.CLUSTER_BLOCKS;
    }
    getNum() {
      this.scrollTop = this.scrollEl.scrollTop;
      return Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0;
    }
    initData(rows, num) {
      if (rows.length < Constants.BLOCK_ROWS) {
        return {
          topOffset: 0,
          bottomOffset: 0,
          rowsAbove: 0,
          rows
        };
      }
      const start = Math.max((this.clusterRows - Constants.BLOCK_ROWS) * num, 0);
      const end = start + this.clusterRows;
      const topOffset = Math.max(start * this.itemHeight, 0);
      const bottomOffset = Math.max((rows.length - end) * this.itemHeight, 0);
      const thisRows = [];
      let rowsAbove = start;
      if (topOffset < 1) {
        rowsAbove++;
      }
      for (let i = start; i < end; i++) {
        rows[i] && thisRows.push(rows[i]);
      }
      this.dataStart = start;
      this.dataEnd = end;
      return {
        topOffset,
        bottomOffset,
        rowsAbove,
        rows: thisRows
      };
    }
    checkChanges(type, value) {
      const changed = value !== this.cache[type];
      this.cache[type] = value;
      return changed;
    }
    getExtra(className, height) {
      const tag = document.createElement('li');
      tag.className = `virtual-scroll-${className}`;
      if (height) {
        tag.style.height = `${height}px`;
      }
      return tag.outerHTML;
    }
  }

  const compareObjects = (objectA, objectB, compareLength) => {
    const aKeys = Object.keys(objectA);
    const bKeys = Object.keys(objectB);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (const key of aKeys) {
      if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
        return false;
      }
    }
    return true;
  };
  const findByParam = (data, param, value) => {
    for (const row of data) {
      if (row[param] === value || row[param] === `${+row[param]}` && +row[param] === value) {
        return row;
      }
      if (row.type === 'optgroup') {
        for (const child of row.children) {
          if (child[param] === value || child[param] === `${+child[param]}` && +child[param] === value) {
            return child;
          }
        }
      }
    }
  };
  const getDocumentClickEvent = (id = '') => {
    id = id || `${+new Date()}${~~(Math.random() * 1000000)}`;
    return `click.multiple-select-${id}`;
  };
  const removeDiacritics = str => {
    if (str.normalize) {
      return str.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
    }
    const defaultDiacriticsRemovalMap = [{
      base: 'A',
      letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
    }, {
      base: 'AA',
      letters: /[\uA732]/g
    }, {
      base: 'AE',
      letters: /[\u00C6\u01FC\u01E2]/g
    }, {
      base: 'AO',
      letters: /[\uA734]/g
    }, {
      base: 'AU',
      letters: /[\uA736]/g
    }, {
      base: 'AV',
      letters: /[\uA738\uA73A]/g
    }, {
      base: 'AY',
      letters: /[\uA73C]/g
    }, {
      base: 'B',
      letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
    }, {
      base: 'C',
      letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
    }, {
      base: 'D',
      letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
    }, {
      base: 'DZ',
      letters: /[\u01F1\u01C4]/g
    }, {
      base: 'Dz',
      letters: /[\u01F2\u01C5]/g
    }, {
      base: 'E',
      letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
    }, {
      base: 'F',
      letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
    }, {
      base: 'G',
      letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
    }, {
      base: 'H',
      letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
    }, {
      base: 'I',
      letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
    }, {
      base: 'J',
      letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
    }, {
      base: 'K',
      letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
    }, {
      base: 'L',
      letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
    }, {
      base: 'LJ',
      letters: /[\u01C7]/g
    }, {
      base: 'Lj',
      letters: /[\u01C8]/g
    }, {
      base: 'M',
      letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
    }, {
      base: 'N',
      letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
    }, {
      base: 'NJ',
      letters: /[\u01CA]/g
    }, {
      base: 'Nj',
      letters: /[\u01CB]/g
    }, {
      base: 'O',
      letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
    }, {
      base: 'OI',
      letters: /[\u01A2]/g
    }, {
      base: 'OO',
      letters: /[\uA74E]/g
    }, {
      base: 'OU',
      letters: /[\u0222]/g
    }, {
      base: 'P',
      letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
    }, {
      base: 'Q',
      letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
    }, {
      base: 'R',
      letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
    }, {
      base: 'S',
      letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
    }, {
      base: 'T',
      letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
    }, {
      base: 'TZ',
      letters: /[\uA728]/g
    }, {
      base: 'U',
      letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
    }, {
      base: 'V',
      letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
    }, {
      base: 'VY',
      letters: /[\uA760]/g
    }, {
      base: 'W',
      letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
    }, {
      base: 'X',
      letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
    }, {
      base: 'Y',
      letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
    }, {
      base: 'Z',
      letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
    }, {
      base: 'a',
      letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
    }, {
      base: 'aa',
      letters: /[\uA733]/g
    }, {
      base: 'ae',
      letters: /[\u00E6\u01FD\u01E3]/g
    }, {
      base: 'ao',
      letters: /[\uA735]/g
    }, {
      base: 'au',
      letters: /[\uA737]/g
    }, {
      base: 'av',
      letters: /[\uA739\uA73B]/g
    }, {
      base: 'ay',
      letters: /[\uA73D]/g
    }, {
      base: 'b',
      letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
    }, {
      base: 'c',
      letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
    }, {
      base: 'd',
      letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
    }, {
      base: 'dz',
      letters: /[\u01F3\u01C6]/g
    }, {
      base: 'e',
      letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
    }, {
      base: 'f',
      letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
    }, {
      base: 'g',
      letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
    }, {
      base: 'h',
      letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
    }, {
      base: 'hv',
      letters: /[\u0195]/g
    }, {
      base: 'i',
      letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
    }, {
      base: 'j',
      letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
    }, {
      base: 'k',
      letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
    }, {
      base: 'l',
      letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
    }, {
      base: 'lj',
      letters: /[\u01C9]/g
    }, {
      base: 'm',
      letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
    }, {
      base: 'n',
      letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
    }, {
      base: 'nj',
      letters: /[\u01CC]/g
    }, {
      base: 'o',
      letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
    }, {
      base: 'oi',
      letters: /[\u01A3]/g
    }, {
      base: 'ou',
      letters: /[\u0223]/g
    }, {
      base: 'oo',
      letters: /[\uA74F]/g
    }, {
      base: 'p',
      letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
    }, {
      base: 'q',
      letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
    }, {
      base: 'r',
      letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
    }, {
      base: 's',
      letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
    }, {
      base: 't',
      letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
    }, {
      base: 'tz',
      letters: /[\uA729]/g
    }, {
      base: 'u',
      letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
    }, {
      base: 'v',
      letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
    }, {
      base: 'vy',
      letters: /[\uA761]/g
    }, {
      base: 'w',
      letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
    }, {
      base: 'x',
      letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
    }, {
      base: 'y',
      letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
    }, {
      base: 'z',
      letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
    }];
    return defaultDiacriticsRemovalMap.reduce((string, {
      letters,
      base
    }) => string.replace(letters, base), str);
  };
  const removeUndefined = obj => {
    Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : '');
    return obj;
  };
  const setDataKeys = data => {
    let total = 0;
    data.forEach((row, i) => {
      if (row.type === 'optgroup') {
        row._key = `group_${i}`;
        row.visible = typeof row.visible === 'undefined' ? true : row.visible;
        row.children.forEach((child, j) => {
          child.visible = typeof child.visible === 'undefined' ? true : child.visible;
          if (!child.divider) {
            child._key = `option_${i}_${j}`;
            total += 1;
          }
        });
      } else {
        row.visible = typeof row.visible === 'undefined' ? true : row.visible;
        if (!row.divider) {
          row._key = `option_${i}`;
          total += 1;
        }
      }
    });
    return total;
  };
  const toRaw = proxy => {
    if (proxy && typeof proxy === 'object' && proxy.__v_raw) {
      return proxy.__v_raw;
    }
    return proxy;
  };

  class MultipleSelect {
    constructor($el, options) {
      this.$el = $el;
      this.options = $.extend({}, Constants.DEFAULTS, options);
    }
    init() {
      this.initLocale();
      this.initContainer();
      this.initData();
      this.initSelected(true);
      this.initFilter();
      this.initDrop();
      this.initView();
      this.options.onAfterCreate();
    }
    initLocale() {
      if (this.options.locale) {
        const {
          locales
        } = $.fn.multipleSelect;
        const parts = this.options.locale.split(/-|_/);
        parts[0] = parts[0].toLowerCase();
        if (parts[1]) {
          parts[1] = parts[1].toUpperCase();
        }
        let localesToExtend = {};
        if (locales[this.options.locale]) {
          localesToExtend = locales[this.options.locale];
        } else if (locales[parts.join('-')]) {
          localesToExtend = locales[parts.join('-')];
        } else if (locales[parts[0]]) {
          localesToExtend = locales[parts[0]];
        }
        this._defaultLocales = this._defaultLocales || {};
        for (const [formatName, func] of Object.entries(localesToExtend)) {
          const defaultLocale = Object.prototype.hasOwnProperty.call(this._defaultLocales, formatName) ? this._defaultLocales[formatName] : Constants.DEFAULTS[formatName];
          if (this.options[formatName] !== defaultLocale) {
            continue;
          }
          this.options[formatName] = func;
          this._defaultLocales[formatName] = func;
        }
      }
    }
    initContainer() {
      const el = this.$el[0];
      const name = el.getAttribute('name') || this.options.name || '';
      if (this.options.classes) {
        this.$el.addClass(this.options.classes);
      }
      if (this.options.classPrefix) {
        this.$el.addClass(this.options.classPrefix);
        if (this.options.size) {
          this.$el.addClass(`${this.options.classPrefix}-${this.options.size}`);
        }
      }

      // hide select element
      this.$el.hide();

      // label element
      this.$label = this.$el.closest('label');
      if (!this.$label.length && this.$el.attr('id')) {
        this.$label = $(`label[for="${this.$el.attr('id')}"]`);
      }
      if (this.$label.find('>input').length) {
        this.$label = null;
      }

      // single or multiple
      if (typeof this.options.single === 'undefined') {
        this.options.single = el.getAttribute('multiple') === null;
      }

      // restore class and title from select element
      this.$parent = $(`
      <div class="ms-parent ${el.getAttribute('class') || ''} ${this.options.classes}"
      title="${el.getAttribute('title') || ''}" />
    `);

      // add placeholder to choice button
      this.options.placeholder = this.options.placeholder || el.getAttribute('placeholder') || '';
      this.tabIndex = el.getAttribute('tabindex');
      let tabIndex = '';
      if (this.tabIndex !== null) {
        tabIndex = this.tabIndex && `tabindex="${this.tabIndex}"`;
      }
      this.$el.attr('tabindex', -1);
      this.$choice = $(`
      <button type="button" class="ms-choice"${tabIndex}>
      <span class="ms-placeholder">${this.options.placeholder}</span>
      ${this.options.showClear ? '<div class="icon-close"></div>' : ''}
      <div class="icon-caret"></div>
      </button>
    `);

      // default position is bottom
      this.$drop = $(`<div class="ms-drop ${this.options.position}" />`);
      this.$close = this.$choice.find('.icon-close');
      if (this.options.dropWidth) {
        this.$drop.css('width', this.options.dropWidth);
      }
      this.$el.after(this.$parent);
      this.$parent.append(this.$choice);
      this.$parent.append(this.$drop);
      if (el.disabled) {
        this.$choice.addClass('disabled');
      }
      this.selectAllName = `data-name="selectAll${name}"`;
      this.selectGroupName = `data-name="selectGroup${name}"`;
      this.selectItemName = `data-name="selectItem${name}"`;
      if (!this.options.keepOpen) {
        const clickEvent = getDocumentClickEvent(this.$el.attr('id'));
        $(document).off(clickEvent).on(clickEvent, e => {
          if ($(e.target)[0] === this.$choice[0] || $(e.target).parents('.ms-choice')[0] === this.$choice[0]) {
            return;
          }
          if (($(e.target)[0] === this.$drop[0] || $(e.target).parents('.ms-drop')[0] !== this.$drop[0] && e.target !== el) && this.options.isOpen) {
            this.close();
          }
        });
      }
    }
    initData() {
      const data = [];
      if (this.options.data) {
        if (Array.isArray(this.options.data)) {
          this.data = this.options.data.map(it => {
            if (typeof it === 'string' || typeof it === 'number') {
              return {
                text: it,
                value: it
              };
            }
            if (it.children?.length) {
              return {
                ...it,
                children: it.children.map(it => ({
                  ...it
                }))
              };
            }
            return {
              ...it
            };
          });
        } else if (typeof this.options.data === 'object') {
          for (const [value, text] of Object.entries(this.options.data)) {
            data.push({
              value,
              text
            });
          }
          this.data = data;
        }
      } else {
        $.each(this.$el.children(), (i, elm) => {
          const row = this.initRow(i, elm);
          if (row) {
            data.push(this.initRow(i, elm));
          }
        });
        this.options.data = data;
        this.data = data;
        this.fromHtml = true;
      }
      this.dataTotal = setDataKeys(this.data);
    }
    initRow(i, elm, groupDisabled) {
      const row = {};
      const $elm = $(elm);
      if ($elm.is('option')) {
        row.type = 'option';
        row.text = this.options.textTemplate($elm);
        row.value = elm.value;
        row.visible = true;
        row.selected = !!elm.selected;
        row.disabled = groupDisabled || elm.disabled;
        row.classes = elm.getAttribute('class') || '';
        row.title = elm.getAttribute('title') || '';
        if (elm._value || $elm.data('value')) {
          row._value = elm._value || $elm.data('value'); // value for object
        }
        if (Object.keys($elm.data()).length) {
          row._data = $elm.data();
          if (row._data.divider) {
            row.divider = row._data.divider;
          }
        }
        return row;
      }
      if ($elm.is('optgroup')) {
        row.type = 'optgroup';
        row.label = this.options.labelTemplate($elm);
        row.visible = true;
        row.selected = !!elm.selected;
        row.disabled = elm.disabled;
        row.children = [];
        if (Object.keys($elm.data()).length) {
          row._data = $elm.data();
        }
        $.each($elm.children(), (j, elem) => {
          row.children.push(this.initRow(j, elem, row.disabled));
        });
        return row;
      }
      return null;
    }
    initSelected(ignoreTrigger) {
      let selectedTotal = 0;
      for (const row of this.data) {
        if (row.type === 'optgroup') {
          const selectedCount = row.children.filter(child => child.selected && !child.disabled && child.visible).length;
          if (row.children.length) {
            row.selected = !this.options.single && selectedCount && selectedCount === row.children.filter(child => !child.disabled && child.visible && !child.divider).length;
          }
          selectedTotal += selectedCount;
        } else {
          selectedTotal += row.selected && !row.disabled && row.visible ? 1 : 0;
        }
      }
      this.allSelected = this.data.filter(row => row.selected && !row.disabled && row.visible).length === this.data.filter(row => !row.disabled && row.visible && !row.divider).length;
      if (!ignoreTrigger) {
        if (this.allSelected) {
          this.options.onCheckAll();
        } else if (selectedTotal === 0) {
          this.options.onUncheckAll();
        }
      }
    }
    initFilter() {
      this.filterText = '';
      if (this.options.filter || !this.options.filterByDataLength) {
        return;
      }
      let length = 0;
      for (const option of this.data) {
        if (option.type === 'optgroup') {
          length += option.children.length;
        } else {
          length += 1;
        }
      }
      this.options.filter = length > this.options.filterByDataLength;
    }
    initDrop() {
      this.initList();
      this.update(true);
      if (this.options.isOpen) {
        setTimeout(() => {
          this.open();
        }, 50);
      }
      if (this.options.openOnHover) {
        this.$parent.hover(() => {
          this.open();
        }, () => {
          this.close();
        });
      }
    }
    initList() {
      const html = [];
      if (this.options.filter) {
        html.push(`
        <div class="ms-search">
          <input type="text" autocomplete="off" autocorrect="off"
            autocapitalize="off" spellcheck="false"
            placeholder="${this.options.filterPlaceholder}">
        </div>
      `);
      }
      html.push('<ul></ul>');
      this.$drop.html(html.join(''));
      this.$ul = this.$drop.find('>ul');
      this.initListItems();
    }
    initListItems() {
      const rows = this.getListRows();
      let offset = 0;
      if (this.options.selectAll && !this.options.single) {
        offset = -1;
      }
      if (rows.length > Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS) {
        if (this.virtualScroll) {
          this.virtualScroll.destroy();
        }
        const dropVisible = this.$drop.is(':visible');
        if (!dropVisible) {
          this.$drop.css('left', -1e4).show();
        }
        const updateDataOffset = () => {
          this.updateDataStart = this.virtualScroll.dataStart + offset;
          this.updateDataEnd = this.virtualScroll.dataEnd + offset;
          if (this.updateDataStart < 0) {
            this.updateDataStart = 0;
          }
          if (this.updateDataEnd > this.data.length) {
            this.updateDataEnd = this.data.length;
          }
        };
        this.virtualScroll = new VirtualScroll({
          rows,
          scrollEl: this.$ul[0],
          contentEl: this.$ul[0],
          callback: () => {
            updateDataOffset();
            this.events();
          }
        });
        updateDataOffset();
        if (!dropVisible) {
          this.$drop.css('left', 0).hide();
        }
      } else {
        this.$ul.html(rows.join(''));
        this.updateDataStart = 0;
        this.updateDataEnd = this.updateData.length;
        this.virtualScroll = null;
      }
      this.events();
    }
    getListRows() {
      const rows = [];
      if (this.options.selectAll && !this.options.single && (this.options.filterSelectAll || !this.filterText)) {
        rows.push(`
        <li class="ms-select-all" tabindex="0">
        <label>
        <input
          type="checkbox" ${this.selectAllName}
          ${this.allSelected ? ' checked="checked"' : ''}
          ${this.options.classInput ? `class="${this.options.classInput}"` : ''}
          tabindex="-1"
        />
        <span>${this.options.formatSelectAll()}</span>
        </label>
        </li>
      `);
      }
      this.updateData = [];
      this.data.forEach(row => {
        rows.push(...this.initListItem(row));
      });
      rows.push(`<li class="ms-no-results">${this.options.formatNoMatchesFound()}</li>`);
      return rows;
    }
    initListItem(row, level = 0) {
      const title = row.title ? `title="${row.title}"` : '';
      const multiple = this.options.multiple ? 'multiple' : '';
      const type = this.options.single ? 'radio' : 'checkbox';
      let classes = '';
      if (!row.visible) {
        return [];
      }
      this.updateData.push(row);
      if (this.options.single && !this.options.singleRadio) {
        classes = 'hide-radio ';
      }
      if (row.selected) {
        classes += 'selected ';
      }
      if (row.type === 'optgroup') {
        const customStyle = this.options.styler(row);
        const style = customStyle ? `style="${customStyle}"` : '';
        const html = [];
        const group = this.options.hideOptgroupCheckboxes || this.options.single ? `<span ${this.selectGroupName} data-key="${row._key}"></span>` : `<input type="checkbox"
          ${this.selectGroupName}
          data-key="${row._key}"
          ${row.selected ? ' checked="checked"' : ''}
          ${row.disabled ? ' disabled="disabled"' : ''}
          ${this.options.classInput ? `class="${this.options.classInput}"` : ''}
          tabindex="-1"
        >`;
        if (!classes.includes('hide-radio') && (this.options.hideOptgroupCheckboxes || this.options.single)) {
          classes += 'hide-radio ';
        }
        html.push(`
        <li class="group ${classes}" ${style} tabindex="${classes.includes('hide-radio') || row.disabled ? -1 : 0}">
        <label class="optgroup${this.options.single || row.disabled ? ' disabled' : ''}">
        ${group}${row.label}
        </label>
        </li>
      `);
        row.children.forEach(child => {
          html.push(...this.initListItem(child, 1));
        });
        return html;
      }
      const customStyle = this.options.styler(row);
      const style = customStyle ? `style="${customStyle}"` : '';
      classes += `${row.classes || ''} option-level-${level} `;
      if (row.divider) {
        return '<li class="option-divider"/>';
      }
      return [`
      <li class="${multiple} ${classes}" ${title} ${style} tabindex="${row.disabled ? -1 : 0}">
      <label class="${row.disabled ? 'disabled' : ''}">
      <input type="${type}"
        value="${row.value}"
        data-key="${row._key}"
        ${this.selectItemName}
        ${row.selected ? ' checked="checked"' : ''}
        ${row.disabled ? ' disabled="disabled"' : ''}
        ${this.options.classInput ? `class="${this.options.classInput}"` : ''}
        tabindex="-1"
      >
      <span>${row.text}</span>
      </label>
      </li>
    `];
    }
    events() {
      this.$searchInput = this.$drop.find('.ms-search input');
      this.$selectAll = this.$drop.find(`input[${this.selectAllName}]`);
      this.$selectGroups = this.$drop.find(`input[${this.selectGroupName}],span[${this.selectGroupName}]`);
      this.$selectItems = this.$drop.find(`input[${this.selectItemName}]:enabled`);
      this.$disableItems = this.$drop.find(`input[${this.selectItemName}]:disabled`);
      this.$noResults = this.$drop.find('.ms-no-results');
      const toggleOpen = e => {
        e.preventDefault();
        if ($(e.target).hasClass('icon-close')) {
          return;
        }
        this[this.options.isOpen ? 'close' : 'open']();
      };
      if (this.$label && this.$label.length) {
        this.$label.off('click').on('click', e => {
          if (e.target.nodeName.toLowerCase() !== 'label') {
            return;
          }
          toggleOpen(e);
          if (!this.options.filter || !this.options.isOpen) {
            this.focus();
          }
          e.stopPropagation(); // Causes lost focus otherwise
        });
      }
      this.$choice.off('click').on('click', toggleOpen).off('focus').on('focus', this.options.onFocus).off('blur').on('blur', this.options.onBlur);
      this.$parent.off('keydown').on('keydown', e => {
        // esc key
        if (e.which === 27 && !this.options.keepOpen) {
          this.close();
          this.$choice.focus();
        }
      });
      this.$close.off('click').on('click', e => {
        e.preventDefault();
        this._checkAll(false, true);
        this.initSelected(false);
        this.updateSelected();
        this.update();
        this.options.onClear();
      });
      this.$searchInput.off('keydown').on('keydown', e => {
        // Ensure shift-tab causes lost focus from filter as with clicking away
        if (e.keyCode === 9 && e.shiftKey) {
          this.close();
        }
      }).off('keyup').on('keyup', e => {
        // enter or space
        // Avoid selecting/deselecting if no choices made
        if (this.options.filterAcceptOnEnter && [13, 32].includes(e.which) && this.$searchInput.val()) {
          if (this.options.single) {
            const $items = this.$selectItems.closest('li').filter(':visible');
            if ($items.length) {
              this.setSelects([$items.first().find(`input[${this.selectItemName}]`).val()]);
            }
          } else {
            this.$selectAll.click();
          }
          this.close();
          this.focus();
          return;
        }
        this.filter();
      });
      this.$selectAll.off('click').on('click', e => {
        this._checkAll($(e.currentTarget).prop('checked'));
      });
      this.$selectGroups.off('click').on('click', e => {
        const $this = $(e.currentTarget);
        const checked = $this.prop('checked');
        const group = findByParam(this.data, '_key', $this.data('key'));
        this._checkGroup(group, checked);
        this.options.onOptgroupClick(removeUndefined({
          label: group.label,
          selected: group.selected,
          data: group._data,
          children: group.children.map(child => removeUndefined({
            text: child.text,
            value: child.value,
            selected: child.selected,
            disabled: child.disabled,
            data: child._data
          }))
        }));
      });
      this.$selectItems.off('click').on('click', e => {
        const $this = $(e.currentTarget);
        const checked = $this.prop('checked');
        const option = findByParam(this.data, '_key', $this.data('key'));
        const close = () => {
          if (this.options.single && this.options.isOpen && !this.options.keepOpen) {
            this.close();
          }
        };
        if (this.options.onBeforeClick(option) === false) {
          close();
          return;
        }
        this._check(option, checked);
        this.options.onClick(removeUndefined({
          text: option.text,
          value: option.value,
          selected: option.selected,
          data: option._data
        }));
        close();
      });
      this.$ul.find('li').off('keydown').on('keydown', e => {
        const $this = $(e.currentTarget);
        let $divider;
        let $li;
        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault();
            $divider = $this.prev('li.option-divider');
            $li = $divider.length ? $divider : $this;
            $li.prev().trigger('focus');
            break;
          case 'ArrowDown':
            e.preventDefault();
            $divider = $this.next('li.option-divider');
            $li = $divider.length ? $divider : $this;
            $li.next().trigger('focus');
            break;
          case 'Enter':
            e.preventDefault();
            $this.find('input').trigger('click');
            if (this.options.single) {
              this.$choice.trigger('focus');
            }
            break;
          // ignore
        }
      });
    }
    initView() {
      let computedWidth;
      if (window.getComputedStyle) {
        computedWidth = window.getComputedStyle(this.$el[0]).width;
        if (computedWidth === 'auto') {
          computedWidth = this.$drop.outerWidth() + 20;
        }
      } else {
        computedWidth = this.$el.outerWidth() + 20;
      }
      this.$parent.css('width', this.options.width || computedWidth);
      this.$el.show().addClass('ms-offscreen');
    }
    open() {
      if (this.$choice.hasClass('disabled')) {
        return;
      }
      this.options.isOpen = true;
      this.$parent.addClass('ms-parent-open');
      this.$choice.find('>div').addClass('open');
      this.$drop[this.animateMethod('show')]();

      // fix filter bug: no results show
      this.$selectAll.parent().show();
      this.$noResults.hide();

      // Fix #77: 'All selected' when no options
      if (!this.data.length) {
        this.$selectAll.parent().hide();
        this.$noResults.show();
      }
      if (this.options.container) {
        const offset = this.$drop.offset();
        this.$drop.appendTo($(this.options.container));
        this.$drop.offset({
          top: offset.top,
          left: offset.left
        }).css('min-width', 'auto').outerWidth(this.$parent.outerWidth());
      }
      let maxHeight = this.options.maxHeight;
      if (this.options.maxHeightUnit === 'row') {
        maxHeight = this.$drop.find('>ul>li').first().outerHeight() * this.options.maxHeight;
      }
      this.$drop.find('>ul').css('max-height', `${maxHeight}px`);
      this.$drop.find('.multiple').css('width', `${this.options.multipleWidth}px`);
      if (this.data.length && this.options.filter) {
        this.$searchInput.val('');
        this.$searchInput.focus();
        this.filter(true);
      }
      this.options.onOpen();
    }
    close() {
      this.options.isOpen = false;
      this.$parent.removeClass('ms-parent-open');
      this.$choice.find('>div').removeClass('open');
      this.$drop[this.animateMethod('hide')]();
      if (this.options.container) {
        this.$parent.append(this.$drop);
        this.$drop.css({
          top: 'auto',
          left: 'auto'
        });
      }
      this.options.onClose();
    }
    animateMethod(method) {
      const methods = {
        show: {
          fade: 'fadeIn',
          slide: 'slideDown'
        },
        hide: {
          fade: 'fadeOut',
          slide: 'slideUp'
        }
      };
      return methods[method][this.options.animate] || method;
    }
    update(ignoreTrigger) {
      const valueSelects = this.getSelects();
      let textSelects = this.getSelects('text');
      if (this.options.displayValues) {
        textSelects = valueSelects;
      }
      const $span = this.$choice.find('>span');
      const sl = valueSelects.length;
      let html = '';
      if (sl === 0) {
        $span.addClass('ms-placeholder').html(this.options.placeholder);
      } else if (sl < this.options.minimumCountSelected) {
        html = textSelects.join(this.options.displayDelimiter);
      } else if (this.options.formatAllSelected() && sl === this.dataTotal) {
        html = this.options.formatAllSelected();
      } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
        html = `${textSelects.slice(0, this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`;
      } else if (this.options.formatCountSelected() && sl > this.options.minimumCountSelected) {
        html = this.options.formatCountSelected(sl, this.dataTotal);
      } else {
        html = textSelects.join(this.options.displayDelimiter);
      }
      if (html) {
        $span.removeClass('ms-placeholder').html(html);
      }
      if (this.options.displayTitle) {
        $span.prop('title', this.getSelects('text'));
      }

      // set selects to select
      this.$el.val(this.getSelects());

      // trigger <select> change event
      if (!ignoreTrigger) {
        this.$el.trigger('change');
      }
    }
    updateSelected() {
      const inputMap = {};
      this.$drop.find('input[data-key]').each((i, el) => {
        const $el = $(el);
        inputMap[$el.data('key')] = $el;
      });
      for (let i = this.updateDataStart; i < this.updateDataEnd; i++) {
        const row = this.updateData[i];
        const $el = inputMap[row._key];
        if ($el) {
          $el.prop('checked', row.selected);
          $el.closest('li').toggleClass('selected', row.selected);
        }
      }
      const noResult = !this.data.some(row => row.visible);
      if (this.$selectAll.length) {
        this.$selectAll.prop('checked', this.allSelected).closest('li').toggleClass('selected', this.allSelected).toggle(!noResult);
      }
      this.$noResults.toggle(noResult);
      if (this.virtualScroll) {
        this.virtualScroll.rows = this.getListRows();
      }
    }
    getData() {
      return this.options.data;
    }
    getOptions() {
      // deep copy and remove data
      const options = $.extend({}, this.options);
      delete options.data;
      return $.extend(true, {}, options);
    }
    refreshOptions(options) {
      // If the objects are equivalent then avoid the call of destroy / init methods
      if (compareObjects(this.options, options)) {
        return;
      }
      this.options = $.extend(this.options, options);
      this.destroy();
      this.init();
    }

    // value html, or text, default: 'value'
    getSelects(type = 'value') {
      const values = [];
      for (const row of this.data) {
        if (row.type === 'optgroup') {
          const selectedChildren = row.children.filter(child => child.selected);
          if (!selectedChildren.length) {
            continue;
          }
          if (type === 'value' || this.options.single) {
            values.push(...selectedChildren.map(child => type === 'value' ? child._value || child[type] : child[type]));
          } else {
            const value = [];
            value.push('[');
            value.push(row.label);
            value.push(`: ${selectedChildren.map(child => child[type]).join(', ')}`);
            value.push(']');
            values.push(value.join(''));
          }
        } else if (row.selected) {
          values.push(type === 'value' ? row._value || row[type] : row[type]);
        }
      }
      return values;
    }
    setSelects(values, type = 'value', ignoreTrigger = false) {
      let hasChanged = false;
      const _setSelects = rows => {
        for (const row of rows) {
          let selected = false;
          if (type === 'text') {
            selected = values.includes($('<div>').html(row.text).text().trim());
          } else {
            const value = toRaw(row._value || row.value);
            selected = values.some(item => toRaw(item) === value);
            if (!selected && row.value === `${+row.value}`) {
              selected = values.includes(+row.value);
            }
          }
          if (row.selected !== selected) {
            hasChanged = true;
          }
          row.selected = selected;
        }
      };
      for (const row of this.data) {
        if (row.type === 'optgroup') {
          _setSelects(row.children);
        } else {
          _setSelects([row]);
        }
      }
      if (hasChanged) {
        this.initSelected(ignoreTrigger);
        this.updateSelected();
        this.update(ignoreTrigger);
      }
    }
    enable() {
      this.$choice.removeClass('disabled');
    }
    disable() {
      this.$choice.addClass('disabled');
    }
    check(value) {
      const option = findByParam(this.data, 'value', value);
      if (!option) {
        return;
      }
      this._check(option, true);
    }
    uncheck(value) {
      const option = findByParam(this.data, 'value', value);
      if (!option) {
        return;
      }
      this._check(option, false);
    }
    _check(option, checked) {
      if (this.options.single) {
        this._checkAll(false, true);
      }
      option.selected = checked;
      this.initSelected();
      this.updateSelected();
      this.update();
    }
    checkAll() {
      this._checkAll(true);
    }
    uncheckAll() {
      this._checkAll(false);
    }
    _checkAll(checked, ignoreUpdate) {
      for (const row of this.data) {
        if (row.type === 'optgroup') {
          this._checkGroup(row, checked, true);
        } else if (!row.disabled && !row.divider && (ignoreUpdate || row.visible)) {
          row.selected = checked;
        }
      }
      if (!ignoreUpdate) {
        this.initSelected();
        this.updateSelected();
        this.update();
      }
    }
    _checkGroup(group, checked, ignoreUpdate) {
      group.selected = checked;
      group.children.forEach(row => {
        if (!row.disabled && !row.divider && (ignoreUpdate || row.visible)) {
          row.selected = checked;
        }
      });
      if (!ignoreUpdate) {
        this.initSelected();
        this.updateSelected();
        this.update();
      }
    }
    checkInvert() {
      if (this.options.single) {
        return;
      }
      for (const row of this.data) {
        if (row.type === 'optgroup') {
          for (const child of row.children) {
            if (!child.divider) {
              child.selected = !child.selected;
            }
          }
        } else if (!row.divider) {
          row.selected = !row.selected;
        }
      }
      this.initSelected();
      this.updateSelected();
      this.update();
    }
    focus() {
      this.$choice.focus();
      this.options.onFocus();
    }
    blur() {
      this.$choice.blur();
      this.options.onBlur();
    }
    refresh() {
      this.destroy();
      this.init();
    }
    resetFilter() {
      if (this.options.filter) {
        this.$searchInput.val('');
        this.filter(true);
      }
    }
    filter(ignoreTrigger) {
      const originalSearch = this.$searchInput.val().trim();
      const search = originalSearch.toLowerCase();
      if (this.filterText === search) {
        return;
      }
      this.filterText = search;
      for (const row of this.data) {
        if (row.type === 'optgroup') {
          if (this.options.filterGroup) {
            const visible = this.options.customFilter({
              label: removeDiacritics(row.label.toString().toLowerCase()),
              search: removeDiacritics(search),
              originalLabel: row.label,
              originalSearch,
              row
            });
            row.visible = visible;
            for (const child of row.children) {
              child.visible = visible;
            }
          } else {
            for (const child of row.children) {
              child.visible = this.options.customFilter({
                text: removeDiacritics(child.text.toString().toLowerCase()),
                search: removeDiacritics(search),
                originalText: child.text,
                originalSearch,
                row: child,
                parent: row
              });
            }
            row.visible = row.children.filter(child => child.visible).length > 0;
          }
        } else {
          row.visible = this.options.customFilter({
            text: removeDiacritics(row.text.toString().toLowerCase()),
            search: removeDiacritics(search),
            originalText: row.text,
            originalSearch,
            row
          });
        }
      }
      this.initListItems();
      this.initSelected(ignoreTrigger);
      this.updateSelected();
      if (!ignoreTrigger) {
        this.options.onFilter(originalSearch);
      }
    }
    destroy() {
      if (!this.$parent) {
        return;
      }
      this.$el.before(this.$parent).removeClass('ms-offscreen');
      if (this.tabIndex !== null) {
        this.$el.attr('tabindex', this.tabIndex);
      }
      this.$parent.remove();
      if (this.fromHtml) {
        delete this.options.data;
        this.fromHtml = false;
      }
    }
  }

  $.fn.multipleSelect = function (option, ...args) {
    let value;
    this.each((i, el) => {
      const $this = $(el);
      let data = $this.data('multipleSelect');
      const options = $.extend({}, $this.data(), typeof option === 'object' && option);
      if (!data) {
        data = new MultipleSelect($this, options);
        $this.data('multipleSelect', data);
      }
      if (typeof option === 'string') {
        if ($.inArray(option, Constants.METHODS) < 0) {
          throw new Error(`Unknown method: ${option}`);
        }
        value = data[option](...args);
        if (option === 'destroy') {
          $this.removeData('multipleSelect');
        }
      } else {
        data.init();
      }
    });
    return typeof value !== 'undefined' ? value : this;
  };
  $.fn.multipleSelect.Constructor = MultipleSelect;
  $.fn.multipleSelect.defaults = Constants.DEFAULTS;
  $.fn.multipleSelect.locales = Constants.LOCALES;
  $.fn.multipleSelect.methods = Constants.METHODS;

}));
