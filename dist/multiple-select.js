(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery'), require('core-js/modules/es.array.filter'), require('core-js/modules/es.array.find'), require('core-js/modules/es.array.includes'), require('core-js/modules/es.array.join'), require('core-js/modules/es.array.map'), require('core-js/modules/es.array.slice'), require('core-js/modules/es.function.name'), require('core-js/modules/es.string.includes'), require('core-js/modules/es.string.trim'), require('core-js/modules/es.string.replace')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'core-js/modules/es.array.filter', 'core-js/modules/es.array.find', 'core-js/modules/es.array.includes', 'core-js/modules/es.array.join', 'core-js/modules/es.array.map', 'core-js/modules/es.array.slice', 'core-js/modules/es.function.name', 'core-js/modules/es.string.includes', 'core-js/modules/es.string.trim', 'core-js/modules/es.string.replace'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var css_escape = createCommonjsModule(function (module, exports) {
  (function(root, factory) {
  	// https://github.com/umdjs/umd/blob/master/returnExports.js
  	{
  		// For Node.js.
  		module.exports = factory(root);
  	}
  }(typeof commonjsGlobal != 'undefined' ? commonjsGlobal : commonjsGlobal, function(root) {

  	if (root.CSS && root.CSS.escape) {
  		return root.CSS.escape;
  	}

  	// https://drafts.csswg.org/cssom/#serialize-an-identifier
  	var cssEscape = function(value) {
  		if (arguments.length == 0) {
  			throw new TypeError('`CSS.escape` requires an argument.');
  		}
  		var string = String(value);
  		var length = string.length;
  		var index = -1;
  		var codeUnit;
  		var result = '';
  		var firstCodeUnit = string.charCodeAt(0);
  		while (++index < length) {
  			codeUnit = string.charCodeAt(index);
  			// Note: there’s no need to special-case astral symbols, surrogate
  			// pairs, or lone surrogates.

  			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
  			// (U+FFFD).
  			if (codeUnit == 0x0000) {
  				result += '\uFFFD';
  				continue;
  			}

  			if (
  				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
  				// U+007F, […]
  				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
  				// If the character is the first character and is in the range [0-9]
  				// (U+0030 to U+0039), […]
  				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
  				// If the character is the second character and is in the range [0-9]
  				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
  				(
  					index == 1 &&
  					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
  					firstCodeUnit == 0x002D
  				)
  			) {
  				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
  				result += '\\' + codeUnit.toString(16) + ' ';
  				continue;
  			}

  			if (
  				// If the character is the first character and is a `-` (U+002D), and
  				// there is no second character, […]
  				index == 0 &&
  				length == 1 &&
  				codeUnit == 0x002D
  			) {
  				result += '\\' + string.charAt(index);
  				continue;
  			}

  			// If the character is not handled by one of the above rules and is
  			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
  			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
  			// U+005A), or [a-z] (U+0061 to U+007A), […]
  			if (
  				codeUnit >= 0x0080 ||
  				codeUnit == 0x002D ||
  				codeUnit == 0x005F ||
  				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
  				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
  				codeUnit >= 0x0061 && codeUnit <= 0x007A
  			) {
  				// the character itself
  				result += string.charAt(index);
  				continue;
  			}

  			// Otherwise, the escaped character.
  			// https://drafts.csswg.org/cssom/#escape-a-character
  			result += '\\' + string.charAt(index);

  		}
  		return result;
  	};

  	if (!root.CSS) {
  		root.CSS = {};
  	}

  	root.CSS.escape = cssEscape;
  	return cssEscape;

  }));
  });

  /**
   * Strips diacritics.
   * @param {string} str
   * @returns {string}
   */
  function removeDiacritics(str) {
    // A polyfill for `normalize` will be even larger than our code below, so
    //   not practical to embed
    if (str.normalize) {
      return str.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
    }

    var defaultDiacriticsRemovalMap = [{
      'base': 'A',
      'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
    }, {
      'base': 'AA',
      'letters': /[\uA732]/g
    }, {
      'base': 'AE',
      'letters': /[\u00C6\u01FC\u01E2]/g
    }, {
      'base': 'AO',
      'letters': /[\uA734]/g
    }, {
      'base': 'AU',
      'letters': /[\uA736]/g
    }, {
      'base': 'AV',
      'letters': /[\uA738\uA73A]/g
    }, {
      'base': 'AY',
      'letters': /[\uA73C]/g
    }, {
      'base': 'B',
      'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
    }, {
      'base': 'C',
      'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
    }, {
      'base': 'D',
      'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
    }, {
      'base': 'DZ',
      'letters': /[\u01F1\u01C4]/g
    }, {
      'base': 'Dz',
      'letters': /[\u01F2\u01C5]/g
    }, {
      'base': 'E',
      'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
    }, {
      'base': 'F',
      'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
    }, {
      'base': 'G',
      'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
    }, {
      'base': 'H',
      'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
    }, {
      'base': 'I',
      'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
    }, {
      'base': 'J',
      'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g
    }, {
      'base': 'K',
      'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
    }, {
      'base': 'L',
      'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
    }, {
      'base': 'LJ',
      'letters': /[\u01C7]/g
    }, {
      'base': 'Lj',
      'letters': /[\u01C8]/g
    }, {
      'base': 'M',
      'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
    }, {
      'base': 'N',
      'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
    }, {
      'base': 'NJ',
      'letters': /[\u01CA]/g
    }, {
      'base': 'Nj',
      'letters': /[\u01CB]/g
    }, {
      'base': 'O',
      'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
    }, {
      'base': 'OI',
      'letters': /[\u01A2]/g
    }, {
      'base': 'OO',
      'letters': /[\uA74E]/g
    }, {
      'base': 'OU',
      'letters': /[\u0222]/g
    }, {
      'base': 'P',
      'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
    }, {
      'base': 'Q',
      'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
    }, {
      'base': 'R',
      'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
    }, {
      'base': 'S',
      'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
    }, {
      'base': 'T',
      'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
    }, {
      'base': 'TZ',
      'letters': /[\uA728]/g
    }, {
      'base': 'U',
      'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
    }, {
      'base': 'V',
      'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
    }, {
      'base': 'VY',
      'letters': /[\uA760]/g
    }, {
      'base': 'W',
      'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
    }, {
      'base': 'X',
      'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
    }, {
      'base': 'Y',
      'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
    }, {
      'base': 'Z',
      'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
    }, {
      'base': 'a',
      'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
    }, {
      'base': 'aa',
      'letters': /[\uA733]/g
    }, {
      'base': 'ae',
      'letters': /[\u00E6\u01FD\u01E3]/g
    }, {
      'base': 'ao',
      'letters': /[\uA735]/g
    }, {
      'base': 'au',
      'letters': /[\uA737]/g
    }, {
      'base': 'av',
      'letters': /[\uA739\uA73B]/g
    }, {
      'base': 'ay',
      'letters': /[\uA73D]/g
    }, {
      'base': 'b',
      'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
    }, {
      'base': 'c',
      'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
    }, {
      'base': 'd',
      'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
    }, {
      'base': 'dz',
      'letters': /[\u01F3\u01C6]/g
    }, {
      'base': 'e',
      'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
    }, {
      'base': 'f',
      'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
    }, {
      'base': 'g',
      'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
    }, {
      'base': 'h',
      'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
    }, {
      'base': 'hv',
      'letters': /[\u0195]/g
    }, {
      'base': 'i',
      'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
    }, {
      'base': 'j',
      'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
    }, {
      'base': 'k',
      'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
    }, {
      'base': 'l',
      'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
    }, {
      'base': 'lj',
      'letters': /[\u01C9]/g
    }, {
      'base': 'm',
      'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
    }, {
      'base': 'n',
      'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
    }, {
      'base': 'nj',
      'letters': /[\u01CC]/g
    }, {
      'base': 'o',
      'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
    }, {
      'base': 'oi',
      'letters': /[\u01A3]/g
    }, {
      'base': 'ou',
      'letters': /[\u0223]/g
    }, {
      'base': 'oo',
      'letters': /[\uA74F]/g
    }, {
      'base': 'p',
      'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
    }, {
      'base': 'q',
      'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
    }, {
      'base': 'r',
      'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
    }, {
      'base': 's',
      'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
    }, {
      'base': 't',
      'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
    }, {
      'base': 'tz',
      'letters': /[\uA729]/g
    }, {
      'base': 'u',
      'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
    }, {
      'base': 'v',
      'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
    }, {
      'base': 'vy',
      'letters': /[\uA761]/g
    }, {
      'base': 'w',
      'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
    }, {
      'base': 'x',
      'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
    }, {
      'base': 'y',
      'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
    }, {
      'base': 'z',
      'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
    }];
    return defaultDiacriticsRemovalMap.reduce(function (s, _ref) {
      var letters = _ref.letters,
          base = _ref.base;
      return s.replace(letters, base);
    }, str);
  }

  // sprintf format specifiers
  var s = 's'; // it only does '%s', and return '' when arguments are undefined

  var sprintf = function sprintf(strings) {
    for (var _len = arguments.length, formats = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      formats[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var retStr = '';
      return strings.slice(0, -1).some(function (str, i) {
        switch (formats[i]) {
          default:
            throw new TypeError('Unrecognized sprintf format');

          case 's':
            {
              var arg = args[i];

              if (arg === null || arg === undefined) {
                return true;
              }

              retStr += str + arg;
              return false;
            }
        }
      }) ? '' : retStr + strings.slice(-1);
    };
  };

  function _templateObject24() {
    var data = _taggedTemplateLiteral(["[data-group=\"", "\"]"]);

    _templateObject24 = function _templateObject24() {
      return data;
    };

    return data;
  }

  function _templateObject23() {
    var data = _taggedTemplateLiteral(["[value=\"", "\"]"]);

    _templateObject23 = function _templateObject23() {
      return data;
    };

    return data;
  }

  function _templateObject22() {
    var data = _taggedTemplateLiteral(["[value=\"", "\"]"]);

    _templateObject22 = function _templateObject22() {
      return data;
    };

    return data;
  }

  function _templateObject21() {
    var data = _taggedTemplateLiteral(["[", "][data-group=\"", "\"]"]);

    _templateObject21 = function _templateObject21() {
      return data;
    };

    return data;
  }

  function _templateObject20() {
    var data = _taggedTemplateLiteral(["input[", "]:checked"]);

    _templateObject20 = function _templateObject20() {
      return data;
    };

    return data;
  }

  function _templateObject19() {
    var data = _taggedTemplateLiteral(["[data-group=\"", "\"]"]);

    _templateObject19 = function _templateObject19() {
      return data;
    };

    return data;
  }

  function _templateObject18() {
    var data = _taggedTemplateLiteral(["[data-group=\"", "\"]"]);

    _templateObject18 = function _templateObject18() {
      return data;
    };

    return data;
  }

  function _templateObject17() {
    var data = _taggedTemplateLiteral(["<input type=\"checkbox\" ", " ", ">"]);

    _templateObject17 = function _templateObject17() {
      return data;
    };

    return data;
  }

  function _templateObject16() {
    var data = _taggedTemplateLiteral(["<label class=\"optgroup ", "\" data-group=\"", "\">"]);

    _templateObject16 = function _templateObject16() {
      return data;
    };

    return data;
  }

  function _templateObject15() {
    var data = _taggedTemplateLiteral(["<span>", "</span>"]);

    _templateObject15 = function _templateObject15() {
      return data;
    };

    return data;
  }

  function _templateObject14() {
    var data = _taggedTemplateLiteral([" data-group=\"", "\""]);

    _templateObject14 = function _templateObject14() {
      return data;
    };

    return data;
  }

  function _templateObject13() {
    var data = _taggedTemplateLiteral(["<input type=\"", "\" ", "", "", "", ">"]);

    _templateObject13 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12() {
    var data = _taggedTemplateLiteral(["<label class=\"", "\">"]);

    _templateObject12 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11() {
    var data = _taggedTemplateLiteral(["<li class=\"", " ", "\" ", " ", ">"]);

    _templateObject11 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10() {
    var data = _taggedTemplateLiteral(["style=\"", "\""]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    var data = _taggedTemplateLiteral(["title=\"", "\""]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteral(["<li class=\"ms-no-results\">", "</li>"]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["<input type=\"checkbox\" ", " />"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["placeholder=\"", "\""]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["<div class=\"ms-drop ", "\"></div>"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n      <button type=\"button\" class=\"ms-choice\">\n      <span class=\"placeholder\">", "</span>\n      <div></div>\n      </button>\n    "]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["title=\"", "\""]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["<div class=\"ms-parent ", "\" ", "/>"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["label[for=\"", "\"]"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var MultipleSelect =
  /*#__PURE__*/
  function () {
    function MultipleSelect($el, options) {
      var _this = this;

      _classCallCheck(this, MultipleSelect);

      var el = $el[0];
      var name = el.getAttribute('name') || options.name || '';
      this.options = $.extend({}, defaults, options); // hide select element

      this.$el = $el.hide(); // label element

      this.$label = this.$el.closest('label');

      if (this.$label.length === 0 && el.getAttribute('id')) {
        this.$label = $(sprintf(_templateObject(), s)(css_escape(el.getAttribute('id'))));
      } // restore class and title from select element


      this.$parent = $(sprintf(_templateObject2(), s, s)(el.getAttribute('class') || '', sprintf(_templateObject3(), s)(el.getAttribute('title')))); // add placeholder to choice button

      this.options.placeholder = this.options.placeholder || el.getAttribute('placeholder') || '';
      this.$choice = $(sprintf(_templateObject4(), s)(this.options.placeholder)); // default position is bottom

      this.$drop = $(sprintf(_templateObject5(), s)(this.options.position));

      if (this.options.dropWidth) {
        this.$drop.css('width', this.options.dropWidth);
      }

      this.$el.after(this.$parent);
      this.$parent.append(this.$choice);
      this.$parent.append(this.$drop);

      if (el.disabled) {
        this.$choice.addClass('disabled');
      }

      this.$parent.css('width', this.options.width || this.$el.css('width') || this.$el.outerWidth() + 20);
      this.selectAllName = "data-name=\"selectAll".concat(name, "\"");
      this.selectGroupName = "data-name=\"selectGroup".concat(name, "\"");
      this.selectItemName = "data-name=\"selectItem".concat(name, "\"");

      if (!this.options.keepOpen) {
        $(document).click(function (e) {
          if ($(e.target)[0] === _this.$choice[0] || $(e.target).parents('.ms-choice')[0] === _this.$choice[0]) {
            return;
          }

          if (($(e.target)[0] === _this.$drop[0] || $(e.target).parents('.ms-drop')[0] !== _this.$drop[0] && e.target !== el) && _this.options.isOpen) {
            _this.close();
          }
        });
      }

      this.options.onAfterCreate();
    }

    _createClass(MultipleSelect, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        var $ul = $('<ul></ul>');
        this.$drop.html('');

        if (this.options.filter) {
          this.$drop.append("\n        <div class=\"ms-search\">\n          <input type=\"text\" autocomplete=\"off\" autocorrect=\"off\"\n            autocapitalize=\"off\" spellcheck=\"false\"\n            ".concat(sprintf(_templateObject6(), s)(this.options.filterPlaceholder), ">\n        </div>\n      "));
        }

        if (this.options.selectAll && !this.options.single) {
          $ul.append(['<li class="ms-select-all">', '<label>', sprintf(_templateObject7(), s)(this.selectAllName), "<span>".concat(this.options.formatSelectAll(), "</span>"), '</label>', '</li>'].join(''));
        }

        $.each(this.$el.children(), function (i, elm) {
          $ul.append(_this2.optionToHtml(i, elm));
        });
        $ul.append(sprintf(_templateObject8(), s)(this.options.formatNoMatchesFound()));
        this.$drop.append($ul);
        this.$drop.find('ul').css('max-height', "".concat(this.options.maxHeight, "px"));
        this.$drop.find('.multiple').css('width', "".concat(this.options.multipleWidth, "px"));
        this.$searchInput = this.$drop.find('.ms-search input');
        this.$selectAll = this.$drop.find("input[".concat(this.selectAllName, "]"));
        this.$selectGroups = this.$drop.find("input[".concat(this.selectGroupName, "]"));
        this.$selectItems = this.$drop.find("input[".concat(this.selectItemName, "]:enabled"));
        this.$disableItems = this.$drop.find("input[".concat(this.selectItemName, "]:disabled"));
        this.$noResults = this.$drop.find('.ms-no-results');
        this.events();
        this.updateSelectAll(true);
        this.update(true);
        this.updateOptGroupSelect(true);

        if (this.options.isOpen) {
          this.open();
        }

        if (this.options.openOnHover) {
          this.$parent.hover(function () {
            _this2.open();
          }, function () {
            _this2.close();
          });
        }
      }
    }, {
      key: "optionToHtml",
      value: function optionToHtml(i, elm, group, groupDisabled) {
        var _this3 = this;

        var $elm = $(elm);
        var el = $elm[0];
        var classes = el.getAttribute('class') || '';
        var title = sprintf(_templateObject9(), s)(el.getAttribute('title'));
        var multiple = this.options.multiple ? 'multiple' : '';
        var disabled;
        var type = this.options.single ? 'radio' : 'checkbox';

        if ($elm.is('option')) {
          var text = this.options.textTemplate($elm);
          var value = el.value,
              selected = el.selected;
          var customStyle = this.options.styler(value);
          var style = customStyle ? sprintf(_templateObject10(), s)(customStyle) : '';
          disabled = groupDisabled || el.disabled;
          var $el = $([sprintf(_templateObject11(), s, s, s, s)(multiple, classes, title, style), sprintf(_templateObject12(), s)(disabled ? 'disabled' : ''), sprintf(_templateObject13(), s, s, s, s, s)(type, this.selectItemName, selected ? ' checked="checked"' : '', disabled ? ' disabled="disabled"' : '', sprintf(_templateObject14(), s)(group)), sprintf(_templateObject15(), s)(text), '</label>', '</li>'].join(''));
          $el.find('input').val(value);
          return $el;
        }

        if ($elm.is('optgroup')) {
          var label = this.options.labelTemplate($elm);
          var $group = $('<div/>');
          group = "group_".concat(i);
          disabled = el.disabled;
          $group.append(['<li class="group">', sprintf(_templateObject16(), s, s)(disabled ? 'disabled' : '', group), this.options.hideOptgroupCheckboxes || this.options.single ? '' : sprintf(_templateObject17(), s, s)(this.selectGroupName, disabled ? 'disabled="disabled"' : ''), label, '</label>', '</li>'].join(''));
          $.each($elm.children(), function (j, elem) {
            $group.append(_this3.optionToHtml(j, elem, group, disabled));
          });
          return $group.html();
        } // Append nothing


        return undefined;
      }
    }, {
      key: "events",
      value: function events() {
        var _this4 = this;

        var toggleOpen = function toggleOpen(e) {
          e.preventDefault();

          _this4[_this4.options.isOpen ? 'close' : 'open']();
        };

        if (this.$label) {
          this.$label.off('click').on('click', function (e) {
            if (e.target.nodeName.toLowerCase() !== 'label' || e.target !== _this4) {
              return;
            }

            toggleOpen(e);

            if (!_this4.options.filter || !_this4.options.isOpen) {
              _this4.focus();
            }

            e.stopPropagation(); // Causes lost focus otherwise
          });
        }

        this.$choice.off('click').on('click', toggleOpen).off('focus').on('focus', this.options.onFocus).off('blur').on('blur', this.options.onBlur);
        this.$parent.off('keydown').on('keydown', function (e) {
          // esc key
          if (e.which === 27) {
            _this4.close();

            _this4.$choice.focus();
          }
        });
        this.$searchInput.off('keydown').on('keydown', function (e) {
          // Ensure shift-tab causes lost focus from filter as with clicking away
          if (e.keyCode === 9 && e.shiftKey) {
            _this4.close();
          }
        }).off('keyup').on('keyup', function (e) {
          // enter or space
          // Avoid selecting/deselecting if no choices made
          if (_this4.options.filterAcceptOnEnter && [13, 32].includes(e.which) && _this4.$searchInput.val()) {
            _this4.$selectAll.click();

            _this4.close();

            _this4.focus();

            return;
          }

          _this4.filter();
        });
        this.$selectAll.off('click').on('click', function (e) {
          var checked = $(e.currentTarget).prop('checked');

          var $items = _this4.$selectItems.filter(':visible');

          if ($items.length === _this4.$selectItems.length) {
            _this4[checked ? 'checkAll' : 'uncheckAll']();
          } else {
            // when the filter option is true
            _this4.$selectGroups.prop('checked', checked);

            $items.prop('checked', checked);

            _this4.options[checked ? 'onCheckAll' : 'onUncheckAll']();

            _this4.update();
          }
        });
        this.$selectGroups.off('click').on('click', function (e) {
          var $this = $(e.currentTarget);
          var group = $this.parent()[0].getAttribute('data-group');

          var $items = _this4.$selectItems.filter(':visible');

          var $children = $items.filter(sprintf(_templateObject18(), s)(group));
          var checked = $children.length !== $children.filter(':checked').length;
          $children.prop('checked', checked);

          _this4.updateSelectAll();

          _this4.update();

          _this4.options.onOptgroupClick({
            label: $this.parent().text(),
            checked: checked,
            children: $children.get().map(function (el) {
              return {
                label: $(el).parent().text(),
                value: $(el).val(),
                check: $(el).prop('checked')
              };
            })
          });
        });
        this.$selectItems.off('click').on('click', function (e) {
          var $this = $(e.currentTarget);

          if (_this4.options.single) {
            var clickedVal = $(e.currentTarget).val();

            _this4.$selectItems.filter(function (i, el) {
              return $(el).val() !== clickedVal;
            }).each(function (i, el) {
              $(el).prop('checked', false);
            });
          }

          _this4.updateSelectAll();

          _this4.update();

          _this4.updateOptGroupSelect();

          _this4.options.onClick({
            label: $this.parent().text(),
            value: $this.val(),
            checked: $this.prop('checked')
          });

          if (_this4.options.single && _this4.options.isOpen && !_this4.options.keepOpen) {
            _this4.close();
          }
        });
      }
    }, {
      key: "open",
      value: function open() {
        if (this.$choice.hasClass('disabled')) {
          return;
        }

        this.options.isOpen = true;
        this.$choice.find('>div').addClass('open');
        this.$drop[this.animateMethod('show')](); // fix filter bug: no results show

        this.$selectAll.parent().show();
        this.$noResults.hide(); // Fix #77: 'All selected' when no options

        if (!this.$el.children().length) {
          this.$selectAll.parent().hide();
          this.$noResults.show();
        }

        if (this.options.container) {
          var offset = this.$drop.offset();
          this.$drop.appendTo($(this.options.container));
          this.$drop.offset({
            top: offset.top,
            left: offset.left
          });
          this.$drop.outerWidth(this.$parent.outerWidth());
        }

        if (this.$el.children().length && this.options.filter) {
          this.$searchInput.val('');
          this.$searchInput.focus();
          this.filter();
        }

        this.options.onOpen();
      }
    }, {
      key: "close",
      value: function close() {
        this.options.isOpen = false;
        this.$choice.find('>div').removeClass('open');
        this.$drop[this.animateMethod('hide')]();

        if (this.options.container) {
          this.$parent.append(this.$drop);
          this.$drop.css({
            'top': 'auto',
            'left': 'auto'
          });
        }

        this.options.onClose();
      }
    }, {
      key: "animateMethod",
      value: function animateMethod(method) {
        var methods = {
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
    }, {
      key: "update",
      value: function update(ignoreTrigger) {
        var valueSelects = this.getSelects();
        var textSelects = this.options.displayValues ? valueSelects : this.getSelects('text');
        var $span = this.$choice.find('>span');
        var sl = valueSelects.length;

        if (sl === 0) {
          $span.addClass('placeholder').html(this.options.placeholder);
        } else if (this.options.formatAllSelected() && sl === this.$selectItems.length + this.$disableItems.length) {
          $span.removeClass('placeholder').html(this.options.formatAllSelected());
        } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
          $span.removeClass('placeholder').text("".concat(textSelects.slice(0, this.options.minimumCountSelected).join(this.options.displayDelimiter), "..."));
        } else if (this.options.formatCountSelected() && sl > this.options.minimumCountSelected) {
          $span.removeClass('placeholder').html(this.options.formatCountSelected(sl, this.$selectItems.length + this.$disableItems.length));
        } else {
          $span.removeClass('placeholder').text(textSelects.join(this.options.displayDelimiter));
        }

        if (this.options.displayTitle) {
          $span.prop('title', this.getSelects('text'));
        } // set selects to select


        this.$el.val(this.getSelects()); // add selected class to selected li

        this.$drop.find('li').removeClass('selected');
        this.$drop.find('input:checked').each(function (i, el) {
          $(el).parents('li').first().addClass('selected');
        }); // trigger <select> change event

        if (!ignoreTrigger) {
          this.$el.trigger('change');
        }
      }
    }, {
      key: "updateSelectAll",
      value: function updateSelectAll(isInit) {
        var $items = this.$selectItems;

        if (!isInit) {
          $items = $items.filter(':visible');
        }

        this.$selectAll.prop('checked', $items.length && $items.length === $items.filter(':checked').length);

        if (!isInit && this.$selectAll.prop('checked')) {
          this.options.onCheckAll();
        }
      }
    }, {
      key: "updateOptGroupSelect",
      value: function updateOptGroupSelect(isInit) {
        var $items = this.$selectItems;

        if (!isInit) {
          $items = $items.filter(':visible');
        }

        $.each(this.$selectGroups, function (i, val) {
          var group = $(val).parent()[0].getAttribute('data-group');
          var $children = $items.filter(sprintf(_templateObject19(), s)(group));
          $(val).prop('checked', $children.length && $children.length === $children.filter(':checked').length);
        });
      } // value or text, default: 'value'

    }, {
      key: "getSelects",
      value: function getSelects(type) {
        var _this5 = this;

        var texts = [];
        var values = [];
        this.$drop.find(sprintf(_templateObject20(), s)(this.selectItemName)).each(function (i, el) {
          texts.push($(el).parents('li').first().text());
          values.push($(el).val());
        });

        if (type === 'text' && this.$selectGroups.length) {
          texts = [];
          this.$selectGroups.each(function (i, el) {
            var html = [];
            var text = $.trim($(el).parent().text());
            var group = $(el).parent().data('group');

            var $children = _this5.$drop.find(sprintf(_templateObject21(), s, s)(_this5.selectItemName, group));

            var $selected = $children.filter(':checked');

            if (!$selected.length) {
              return;
            }

            html.push('[');
            html.push(text);

            if ($children.length > $selected.length) {
              var list = [];
              $selected.each(function (j, elem) {
                list.push($(elem).parent().text());
              });
              html.push(": ".concat(list.join(', ')));
            }

            html.push(']');
            texts.push(html.join(''));
          });
        }

        return type === 'text' ? texts : values;
      }
    }, {
      key: "setSelects",
      value: function setSelects(values) {
        var _this6 = this;

        this.$selectItems.prop('checked', false);
        this.$disableItems.prop('checked', false);
        $.each(values, function (i, value) {
          _this6.$selectItems.filter(sprintf(_templateObject22(), s)(value)).prop('checked', true);

          _this6.$disableItems.filter(sprintf(_templateObject23(), s)(value)).prop('checked', true);
        });
        this.$selectAll.prop('checked', this.$selectItems.length === this.$selectItems.filter(':checked').length + this.$disableItems.filter(':checked').length);
        $.each(this.$selectGroups, function (i, val) {
          var group = $(val).parent()[0].getAttribute('data-group');

          var $children = _this6.$selectItems.filter("[data-group=\"".concat(group, "\"]"));

          $(val).prop('checked', $children.length && $children.length === $children.filter(':checked').length);
        });
        this.update(false);
      }
    }, {
      key: "enable",
      value: function enable() {
        this.$choice.removeClass('disabled');
      }
    }, {
      key: "disable",
      value: function disable() {
        this.$choice.addClass('disabled');
      }
    }, {
      key: "checkAll",
      value: function checkAll() {
        this.$selectItems.prop('checked', true);
        this.$selectGroups.prop('checked', true);
        this.$selectAll.prop('checked', true);
        this.update();
        this.options.onCheckAll();
      }
    }, {
      key: "uncheckAll",
      value: function uncheckAll() {
        this.$selectItems.prop('checked', false);
        this.$selectGroups.prop('checked', false);
        this.$selectAll.prop('checked', false);
        this.update();
        this.options.onUncheckAll();
      }
    }, {
      key: "focus",
      value: function focus() {
        this.$choice.focus();
        this.options.onFocus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.$choice.blur();
        this.options.onBlur();
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this.init();
      }
    }, {
      key: "filter",
      value: function filter() {
        var _this7 = this;

        var text = $.trim(this.$searchInput.val()).toLowerCase();

        if (text.length === 0) {
          this.$selectAll.closest('li').show();
          this.$selectItems.closest('li').show();
          this.$disableItems.closest('li').show();
          this.$selectGroups.closest('li').show();
          this.$noResults.hide();
        } else {
          if (!this.options.filterGroup) {
            this.$selectItems.each(function (i, el) {
              var $parent = $(el).parent();
              var hasText = removeDiacritics($parent.text().toLowerCase()).includes(removeDiacritics(text));
              $parent.closest('li')[hasText ? 'show' : 'hide']();
            });
          }

          this.$disableItems.parent().hide();
          this.$selectGroups.each(function (i, el) {
            var $parent = $(el).parent();
            var group = $parent[0].getAttribute('data-group');

            if (_this7.options.filterGroup) {
              var hasText = removeDiacritics($parent.text().toLowerCase()).includes(removeDiacritics(text));
              var func = hasText ? 'show' : 'hide';
              $parent.closest('li')[func]();

              _this7.$selectItems.filter("[data-group=\"".concat(group, "\"]")).closest('li')[func]();
            } else {
              var $items = _this7.$selectItems.filter(':visible');

              var _hasText = $items.filter(sprintf(_templateObject24(), s)(group)).length;
              $parent.closest('li')[_hasText ? 'show' : 'hide']();
            }
          }); // Check if no matches found

          if (this.$selectItems.parent().filter(':visible').length) {
            this.$selectAll.closest('li').show();
            this.$noResults.hide();
          } else {
            this.$selectAll.closest('li').hide();
            this.$noResults.show();
          }
        }

        this.updateOptGroupSelect();
        this.updateSelectAll();
        this.options.onFilter(text);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$el.before(this.$parent).show();
        this.$parent.remove();
      }
    }]);

    return MultipleSelect;
  }();

  var defaults = {
    name: '',
    placeholder: '',
    selectAll: true,
    single: false,
    multiple: false,
    hideOptgroupCheckboxes: false,
    multipleWidth: 80,
    width: undefined,
    dropWidth: undefined,
    maxHeight: 250,
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
    animate: undefined,
    styler: function styler() {
      return false;
    },
    textTemplate: function textTemplate($elm) {
      return $elm[0].innerHTML;
    },
    labelTemplate: function labelTemplate($elm) {
      return $elm[0].getAttribute('label');
    },
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
    },
    onOpen: function onOpen() {
      return false;
    },
    onClose: function onClose() {
      return false;
    },
    onCheckAll: function onCheckAll() {
      return false;
    },
    onUncheckAll: function onUncheckAll() {
      return false;
    },
    onFocus: function onFocus() {
      return false;
    },
    onBlur: function onBlur() {
      return false;
    },
    onOptgroupClick: function onOptgroupClick() {
      return false;
    },
    onClick: function onClick() {
      return false;
    },
    onFilter: function onFilter() {
      return false;
    },
    onAfterCreate: function onAfterCreate() {
      return false;
    }
  };

  $.fn.multipleSelect = function (option) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var value;
    var allowedMethods = ['getSelects', 'setSelects', 'enable', 'disable', 'open', 'close', 'checkAll', 'uncheckAll', 'focus', 'blur', 'refresh', 'destroy'];
    this.each(function (i, el) {
      var $this = $(el);
      var data = $this.data('multipleSelect');
      var options = $.extend({}, $this.data(), _typeof(option) === 'object' && option);

      if (!data) {
        data = new MultipleSelect($this, options);
        $this.data('multipleSelect', data);
      }

      if (typeof option === 'string') {
        var _data;

        if ($.inArray(option, allowedMethods) < 0) {
          throw new Error("Unknown method: ".concat(option));
        }

        value = (_data = data)[option].apply(_data, args);

        if (option === 'destroy') {
          $this.removeData('multipleSelect');
        }
      } else {
        data.init();
      }
    });
    return typeof value !== 'undefined' ? value : this;
  };

}));
