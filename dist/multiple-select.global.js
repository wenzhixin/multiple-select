(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const VERSION = '3.0.0-beta';
  const BLOCK_ROWS = 500;
  const CLUSTER_BLOCKS = 4;
  const DEFAULTS = {
    name: '',
    placeholder: '',
    classes: '',
    classPrefix: '',
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
    customFilter(_ref) {
      let {
        text,
        label,
        search
      } = _ref;
      return (label || text).includes(search);
    },
    showClear: false,
    animate: undefined,
    styler() {
      return false;
    },
    textTemplate(elm) {
      return elm.innerHTML.trim();
    },
    labelTemplate(elm) {
      return elm.getAttribute('label');
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
  const METHODS = ['getOptions', 'refreshOptions', 'getData', 'getSelects', 'setSelects', 'enable', 'disable', 'open', 'close', 'check', 'uncheck', 'checkAll', 'uncheckAll', 'checkInvert', 'focus', 'blur', 'refresh', 'destroy'];
  Object.assign(DEFAULTS, EN);
  const Constants = {
    VERSION,
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
    if (compareLength && aKeys.length !== bKeys.length) {
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
    return defaultDiacriticsRemovalMap.reduce((string, _ref) => {
      let {
        letters,
        base
      } = _ref;
      return string.replace(letters, base);
    }, str);
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
  const parseStyleValue = function (val) {
    let unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
    const v = val || 0;
    const isNumber = typeof v === 'number' || typeof v === 'string' && /^[+-]?\d+(\.\d+)?$/.test(v.trim());
    return isNumber ? v + unit : v;
  };

  /**
   * Multiple Select cz-CS translation
   * Author: Matej Puhony<info@puhony.eu>
   */

  var cz_CS = {
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

  /**
   * Multiple Select da-DK translation
   * Author: HThuren<thuren.henrik@gmail.com>
   */

  var da_DK = {
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

  /**
   * Multiple Select en-US translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  var en_US = {
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

  /**
   * Multiple Select es-ES translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  var es_ES = {
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

  /**
   * Multiple Select fr-FR translation
   * Author: Francis Perron <francis@hivetek.com>
   */

  var fr_FR = {
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

  /**
   * Multiple Select hu-HU translation
   * Author: Péter Báthory<bathory86p@gmail.com>
   */

  var hu_HU = {
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

  /**
   * Multiple Select it-IT translation
   * Author: Giuseppe Lodi Rizzini
   */

  var it_IT = {
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

  /**
   * Multiple Select ja-JP translation
   * Author: Nozomi Anzai<nozomi.anzai@gmail.com>
   */

  var ja_JP = {
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

  /**
   * Multiple Select pt-BR translation
   * Author: Lucas Aguiar<lucas99.abreu@gmail.com>
   */

  var pt_BR = {
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

  /**
   * Multiple Select ru-RU translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  var ru_RU = {
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

  /**
   * Multiple Select vi-VN translation
   * Author: hoangbaovu <ineo.vn>
   */

  var vi_VN = {
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

  /**
   * Multiple Select zh-CN translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  var zh_CN = {
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

  /**
   * Multiple Select zh-TW translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  var zh_TW = {
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

  var locales = {
    'cz-CS': cz_CS,
    'da-DK': da_DK,
    'en-US': en_US,
    'es-ES': es_ES,
    'fr-FR': fr_FR,
    'hu-HU': hu_HU,
    'it-IT': it_IT,
    'ja-JP': ja_JP,
    'pt-BR': pt_BR,
    'ru-RU': ru_RU,
    'vi-VN': vi_VN,
    'zh-CN': zh_CN,
    'zh-TW': zh_TW
  };

  class MultipleSelect {
    static Constants = {
      ...Constants
    };
    static defaultOptions = {
      ...Constants.DEFAULTS,
      LOCALES: {
        ...Constants.DEFAULTS.LOCALES,
        ...locales
      }
    };
    constructor($el, options) {
      this._events = {}; // private
      if (!($el instanceof HTMLElement) || $el.tagName !== 'SELECT') {
        throw new Error('the $el must be an HTMLElement and a select tag!');
      }
      this.$el = $el;
      this.options = {
        ...MultipleSelect.defaultOptions,
        ...options
      };
      // check existing old entry
      if ($el._MultipleSelect) {
        $el._MultipleSelect.destroy();
      }
      $el._MultipleSelect = this;
      this.init();
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
        const parts = this.options.locale.split(/-|_/);
        parts[0] = parts[0].toLowerCase();
        if (parts[1]) {
          parts[1] = parts[1].toUpperCase();
        }
        const locales = MultipleSelect.defaultOptions.LOCALES;
        const locale = locales[this.options.locale] || locales[parts.join('-')] || locales[parts[0]];
        if (locale) {
          Object.assign(this.options, locale);
        }
      }
    }
    initContainer() {
      const el = this.$el;
      const name = el.getAttribute('name') || this.options.name || '';
      if (this.options.classes) {
        el.classList.add(...this.options.classes.split(' '));
      }
      if (this.options.classPrefix) {
        el.classList.add(...this.options.classPrefix.split(' '));
        if (this.options.size) {
          el.classList.add(...`${this.options.classPrefix}-${this.options.size}`.split(' '));
        }
      }

      // config in dataset
      for (const [k, v] of Object.entries(el.dataset)) {
        if (this.options.hasOwnProperty(k)) {
          if (typeof this.options[k] === 'boolean') {
            this.options[k] = !['', '0', 'false'].includes(v.toLowerCase());
          }
          this.options[k] = v;
        }
      }

      // hide select element
      this.$el.style.display = 'none';

      // label element
      this.$label = el.closest('label');
      if (!this.$label && el.id) {
        this.$label = document.querySelector(`label[for="${el.id}"]`);
      }
      if (this.$label?.querySelector(':scope > input')) {
        this.$label = null;
      }

      // single or multiple
      if (typeof this.options.single === 'undefined') {
        this.options.single = el.getAttribute('multiple') === null;
      }

      // restore class and title from select element
      this.$parent = document.createElement('div');
      this.$parent.setAttribute('title', el.getAttribute('title') || '');
      this.$parent.className = `ms-parent ${el.getAttribute('class') || ''} ${this.options.classes}`;

      // add placeholder to choice button
      this.options.placeholder = this.options.placeholder || el.getAttribute('placeholder') || '';
      this.tabIndex = el.getAttribute('tabindex');
      el.setAttribute('tabindex', -1);
      this.$choice = document.createElement('button');
      this.$choice.className = 'ms-choice';
      this.$choice.setAttribute('type', 'button');
      if (this.tabIndex) {
        this.$choice.setAttribute('tabindex', this.tabIndex);
      }
      this.$choice.innerHTML = `<span class="placeholder">${this.options.placeholder}</span>
      ${this.options.showClear ? '<div class="icon-close"></div>' : ''}
      <div class="icon-caret"></div>`;

      // default position is bottom
      this.$drop = document.createElement('div');
      this.$drop.className = `ms-drop ${this.options.position}`;
      this.$close = this.$choice.querySelector('.icon-close');
      if (this.options.dropWidth) {
        this.$drop.style.width = parseStyleValue(this.options.dropWidth);
      }
      this.$el.insertAdjacentElement('afterend', this.$parent);
      this.$parent.append(this.$choice);
      this.$parent.append(this.$drop);
      if (el.disabled) {
        this.$choice.classList.add('disabled');
      }
      this.selectAllName = `data-name="selectAll${name}"`;
      this.selectGroupName = `data-name="selectGroup${name}"`;
      this.selectItemName = `data-name="selectItem${name}"`;
      this._events.handleClickEvent = this._events.handleClickEvent || (e => {
        if (!document.body.contains(this.$el)) {
          // destroy
          this.destroy();
        }
        if (this.options.keepOpen || e.target === this.$choice || e.target.closest('.ms-choice') === this.$choice) {
          return;
        }
        if ((e.target === this.$drop || e.target.closest('.ms-drop') !== this.$drop && e.target !== el) && this.options.isOpen) {
          this.close();
        }
      });
      document.addEventListener('click', this._events.handleClickEvent);
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
        for (const elm of this.$el.children) {
          const row = this.initRow(elm);
          if (row) {
            data.push(this.initRow(elm));
          }
        }
        this.options.data = data;
        this.data = data;
        this.fromHtml = true;
      }
      this.dataTotal = setDataKeys(this.data);
    }
    initRow(elm, groupDisabled) {
      const row = {};
      if (elm.tagName === 'OPTION') {
        row.type = 'option';
        row.text = this.options.textTemplate(elm);
        row.value = elm.value;
        row.visible = true;
        row.selected = !!elm.selected;
        row.disabled = groupDisabled || elm.disabled;
        row.classes = elm.getAttribute('class') || '';
        row.title = elm.getAttribute('title') || '';
        const _value = elm._value || elm.getAttribute('data-value') || elm.dataset.value;
        const divider = elm.getAttribute('data-divider') || elm.dataset.divider;
        if (_value) {
          row._value = _value;
        }
        if (divider) {
          row.divider = divider;
        }
        return row;
      }
      if (elm.tagName === 'OPTGROUP') {
        row.type = 'optgroup';
        row.label = this.options.labelTemplate(elm);
        row.visible = true;
        row.selected = !!elm.selected;
        row.disabled = elm.disabled;
        row.children = [];
        for (const elem of elm.children) {
          row.children.push(this.initRow(elem, row.disabled));
        }
        return row;
      }
      return null;
    }
    initSelected(ignoreTrigger) {
      let selectedTotal = 0;
      for (const row of this.data) {
        if (row.type === 'optgroup') {
          const selectedCount = row.children.filter(child => {
            return child.selected && !child.disabled && child.visible;
          }).length;
          if (row.children.length) {
            row.selected = !this.options.single && selectedCount && selectedCount === row.children.filter(child => !child.disabled && child.visible && !child.divider).length;
          }
          selectedTotal += selectedCount;
        } else {
          selectedTotal += row.selected && !row.disabled && row.visible ? 1 : 0;
        }
      }
      this.allSelected = this.data.filter(row => {
        return row.selected && !row.disabled && row.visible;
      }).length === this.data.filter(row => !row.disabled && row.visible && !row.divider).length;
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
        this._events.handleParentMouseEnter = this._events.handleParentMouseEnter || (() => {
          this.open();
        });
        this._events.handleParentMouseLeave = this._events.handleParentMouseLeave || (() => {
          this.close();
        });
        this.$parent.addEventListener('mouseenter', this._events.handleParentMouseEnter);
        this.$parent.addEventListener('mouseleave', this._events.handleParentMouseLeave);
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
      this.$drop.innerHTML = html.join('');
      this.$ul = this.$drop.querySelector(':scope > ul');
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
        const dropVisible = this.$drop.clientHeight;
        if (!dropVisible) {
          // $drop is div
          this.$drop.style.left = -10000;
          this.$drop.style.display = 'block';
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
          scrollEl: this.$ul,
          contentEl: this.$ul,
          callback: () => {
            updateDataOffset();
            this.events();
          }
        });
        updateDataOffset();
        if (!dropVisible) {
          this.$drop.style.left = 0;
          this.$drop.style.display = 'none';
        }
      } else {
        this.$ul.innerHTML = rows.join('');
        this.updateDataStart = 0;
        this.updateDataEnd = this.updateData.length;
        this.virtualScroll = null;
      }
      this.events();
    }
    getListRows() {
      const rows = [];
      if (this.options.selectAll && !this.options.single) {
        rows.push(`
        <li class="ms-select-all" tabindex="0">
        <label>
        <input type="checkbox" ${this.selectAllName}${this.allSelected ? ' checked="checked"' : ''} tabindex="-1" />
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
    initListItem(row) {
      let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
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
      classes += row.classes || '';
      if (level && this.options.single) {
        classes += `option-level-${level} `;
      }
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
        tabindex="-1"
      >
      <span>${row.text}</span>
      </label>
      </li>
    `];
    }
    events() {
      this.$searchInput = this.$drop.querySelector('.ms-search input');
      this.$selectAll = this.$drop.querySelector(`input[${this.selectAllName}]`);
      this.$selectGroups = this.$drop.querySelectorAll(`input[${this.selectGroupName}],span[${this.selectGroupName}]`);
      this.$selectItems = this.$drop.querySelectorAll(`input[${this.selectItemName}]:enabled`);
      this.$disableItems = this.$drop.querySelectorAll(`input[${this.selectItemName}]:disabled`);
      this.$noResults = this.$drop.querySelector('.ms-no-results');
      this._events.toggleOpen = this._events.toggleOpen || (e => {
        e.preventDefault();
        if (e.target.classList.contains('icon-close')) {
          return;
        }
        this[this.options.isOpen ? 'close' : 'open']();
      });
      this.$choice.addEventListener('click', this._events.toggleOpen);
      if (this.$label) {
        this._events.handleLabelClick = this._events.handleLabelClick || (e => {
          if (e.target.nodeName.toLowerCase() !== 'label') {
            return;
          }
          this._events.toggleOpen(e);
          if (!this.options.filter || !this.options.isOpen) {
            this.focus();
          }
          e.stopPropagation(); // Causes lost focus otherwise
        });

        this.$label.addEventListener('click', this._events.handleLabelClick);
      }
      this.$choice.addEventListener('focus', this.options.onFocus);
      this.$choice.addEventListener('blur', this.options.onBlur);
      this._events.handleParentKeyDown = this._events.handleParentKeyDown || (e => {
        // esc key
        if (e.which === 27 && !this.options.keepOpen) {
          this.close();
          this.$choice.focus();
        }
      });
      this.$parent.addEventListener('keydown', this._events.handleParentKeyDown);
      this._events.handleCloseClick = this._events.handleCloseClick || (e => {
        e.preventDefault();
        this._checkAll(false, true);
        this.initSelected(false);
        this.updateSelected();
        this.update();
        this.options.onClear();
      });
      this.$close?.addEventListener('click', this._events.handleCloseClick);
      this._events.handleSearchKeyDown = this._events.handleSearchKeyDown || (e => {
        // Ensure shift-tab causes lost focus from filter as with clicking away
        if (e.keyCode === 9 && e.shiftKey) {
          this.close();
        }
      });
      this.$searchInput?.addEventListener('keydown', this._events.handleSearchKeyDown);
      this._events.handleSearchKeyUp = this._events.handleSearchKeyUp || (e => {
        // enter or space
        // Avoid selecting/deselecting if no choices made
        if (this.options.filterAcceptOnEnter && [13, 32].includes(e.which) && this.$searchInput.val()) {
          if (this.options.single) {
            const item = this.$selectItems.find(x => {
              return x.closest('li').clientHeight > 0;
            });
            if (item) {
              this.setSelects([item.value]);
            }
          } else {
            this.$selectAll?.click();
          }
          this.close();
          this.focus();
          return;
        }
        this.filter();
      });
      this.$searchInput?.addEventListener('keyup', this._events.handleSearchKeyUp);
      this._events.handleSelectAllClick = this._events.handleSelectAllClick || (e => {
        this._checkAll(e.currentTarget.checked);
      });
      this.$selectAll?.addEventListener('click', this._events.handleSelectAllClick);
      this._events.handleSelectGroupsClick = this._events.handleSelectGroupsClick || (e => {
        const elem = e.currentTarget;
        const checked = elem.checked;
        const group = findByParam(this.data, '_key', elem.getAttribute('data-key'));
        this._checkGroup(group, checked);
        this.options.onOptgroupClick(removeUndefined({
          label: group.label,
          selected: group.selected,
          data: group._data,
          children: group.children.map(child => {
            return removeUndefined({
              text: child.text,
              value: child.value,
              selected: child.selected,
              disabled: child.disabled,
              data: child._data
            });
          })
        }));
      });
      this.$selectGroups.forEach(item => {
        item.addEventListener('click', this._events.handleSelectGroupsClick);
      });
      this._events.handleSelectItemsClick = this._events.handleSelectItemsClick || (e => {
        const el = e.currentTarget;
        const checked = el.checked;
        const option = findByParam(this.data, '_key', el.getAttribute('data-key'));
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
      this.$selectItems.forEach(item => {
        item.addEventListener('click', this._events.handleSelectItemsClick);
      });
      this._events.handleLiKeyDown = this._events.handleLiKeyDown || (e => {
        const el = e.currentTarget;
        let li = el;
        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault();
            while (li) {
              li = li.previousElementSibling;
              if (li && !li.classList.contains('option-divider')) {
                li.focus();
                break;
              }
            }
            break;
          case 'ArrowDown':
            e.preventDefault();
            while (li) {
              li = li.nextElementSibling;
              if (li && !li.classList.contains('option-divider')) {
                li.focus();
                break;
              }
            }
            break;
          case 'Enter':
            e.preventDefault();
            el.querySelector('input')?.click();
            if (this.options.single) {
              this.$choice.focus();
            }
            break;
          // ignore
        }
      });

      this.$ul.querySelectorAll('li').forEach(item => {
        item.addEventListener('keydown', this._events.handleLiKeyDown);
      });
    }
    initView() {
      let computedWidth = this.options.width;
      if (!computedWidth) {
        computedWidth = window.getComputedStyle(this.$el).width;
        if (computedWidth === 'auto') {
          const display = this.$drop.style.display;
          this.$drop.style.display = 'block';
          computedWidth = this.$drop.offsetWidth + 20;
          display ? this.$drop.style.display = display : this.$drop.style.removeProperty('display');
        }
      }
      this.$parent.style.width = parseStyleValue(computedWidth);
      this.$el.style.removeProperty('display');
      this.$el.classList.add('ms-offscreen');
    }
    open() {
      if (this.$choice.classList.contains('disabled')) {
        return;
      }
      this.options.isOpen = true;
      this.$parent.classList.add('ms-parent-open');
      this.$choice.querySelector(':scope > div').classList.add('open');
      // TODO:: animation showing
      // this.$drop[this.animateMethod('show')]()
      this.$drop.style.display = 'block';

      // fix filter bug: no results show
      if (this.$selectAll) {
        this.$selectAll.parentElement.style.display = this.data.length ? 'block' : 'none';
      }
      if (this.$noResults) {
        this.$noResults.style.display = this.data.length ? 'none' : 'block';
      }
      if (this.options.container) {
        const container = typeof this.options.container === 'string' ? document.querySelector(this.options.container) : this.options.container;
        container.appendChild(this.$drop);
        this.$drop.style.minWidth = 'auto';
        const parentWidth = getComputedStyle(this.$parent).width;
        const {
          top,
          left
        } = getComputedStyle(this.$drop);
        if (parentWidth && parentWidth !== '0px') {
          this.$drop.style.width = parentWidth;
        }
        if (top && top !== '0px') {
          this.$drop.style.top = top;
        }
        if (left && left !== '0px') {
          this.$drop.style.left = left;
        }
      }
      let maxHeight = this.options.maxHeight;
      if (this.options.maxHeightUnit === 'row') {
        maxHeight = (this.$drop.querySelector(':scope > ul > li')?.offsetHeight || 0) * this.options.maxHeight;
      }
      this.$drop.querySelector(':scope > ul').style.maxHeight = parseStyleValue(maxHeight);
      this.$drop.querySelectorAll('.multiple').forEach(item => {
        item.style.width = parseStyleValue(this.options.multipleWidth);
      });
      if (this.data.length && this.options.filter) {
        if (this.$searchInput) {
          this.$searchInput.value = '';
          this.$searchInput.focus();
        }
        this.filter(true);
      }
      this.options.onOpen();
    }
    close() {
      this.options.isOpen = false;
      this.$parent.classList.remove('ms-parent-open');
      this.$choice.querySelector(':scope > div')?.classList.remove('open');
      // TODO:: hide animation
      // this.$drop[this.animateMethod('hide')]()
      this.$drop.style.display = 'none';
      if (this.options.container) {
        this.$parent.append(this.$drop);
        this.$drop.style.removeProperty('top');
        this.$drop.style.removeProperty('left');
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
      const span = this.$choice.querySelector(':scope > span');
      const sl = valueSelects.length;
      let html = '';
      if (sl === 0) {
        span.classList.add('placeholder');
        span.innerHTML = this.options.placeholder;
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
        span.classList.remove('placeholder');
        span.innerHTML = html;
      }
      if (this.options.displayTitle) {
        span.setAttribute('title', this.getSelects('text'));
      }

      // set selects to select
      this.$el.value = this.getSelects();

      // trigger <select> change event
      if (!ignoreTrigger) {
        this.$el.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    }
    updateSelected() {
      for (let i = this.updateDataStart; i < this.updateDataEnd; i++) {
        const row = this.updateData[i];
        const input = this.$drop.querySelector(`input[data-key=${row._key}]`);
        if (!input) {
          continue;
        }
        input.checked = row.selected;
        input.closest('li').classList[row.selected ? 'add' : 'remove']('selected');
      }
      const noResult = !this.data.some(row => row.visible);
      if (this.$selectAll) {
        this.$selectAll.checked = this.allSelected;
        const li = this.$selectAll.closest('li');
        if (noResult) {
          li.style.display = 'none';
        } else {
          li.style.removeProperty('display');
        }
      }
      if (this.$noResults) {
        this.$noResults.style.display = noResult ? 'block' : 'none';
      }
      if (this.virtualScroll) {
        this.virtualScroll.rows = this.getListRows();
      }
    }
    getData() {
      return this.options.data;
    }
    getOptions() {
      // deep copy and remove data
      const options = {
        ...this.options
      };
      delete options.data;
      return options;
    }
    refreshOptions(options) {
      // If the objects are equivalent then avoid the call of destroy / init methods
      if (compareObjects(this.options, options, true)) {
        return;
      }
      this.options = Object.assign(this.options, options);
      this.destroy();
      this.init();
    }

    // value html, or text, default: 'value'
    getSelects() {
      let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
      const values = [];
      for (const row of this.data) {
        if (row.type === 'optgroup') {
          const selectedChildren = row.children.filter(child => child.selected);
          if (!selectedChildren.length) {
            continue;
          }
          if (type === 'value' || this.options.single) {
            values.push(...selectedChildren.map(child => {
              return type === 'value' ? child._value || child[type] : child[type];
            }));
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
    setSelects(values) {
      let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';
      let ignoreTrigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      let hasChanged = false;
      const innerText = html => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.innerText.trim();
      };
      const _setSelects = rows => {
        for (const row of rows) {
          let selected = false;
          if (type === 'text') {
            selected = values.includes(innerText(row.text));
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
      this.$choice.classList.remove('disabled');
    }
    disable() {
      this.$choice.classList.add('disabled');
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
    filter(ignoreTrigger) {
      const originalSearch = this.$searchInput?.value.trim() || '';
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
            row.visible = row.children.some(child => child.visible);
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
      document.removeEventListener('click', this._events.handleClickEvent);
      if (this.$el) {
        this.$el.classList.remove('ms-offscreen');
        if (this.tabIndex !== null) {
          this.$el.setAttribute('tabindex', this.tabIndex);
        }
      }
      if (this.$parent) {
        this.$parent.remove();
      }
      if (this.fromHtml) {
        delete this.options.data;
        this.fromHtml = false;
      }
    }
  }

  window.MultipleSelect = MultipleSelect;

}));
