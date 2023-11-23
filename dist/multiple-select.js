(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$e) { 'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
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
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$f =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || commonjsGlobal || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$n = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$m = fails$n;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$m(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var fails$l = fails$n;

  var functionBindNative = !fails$l(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var call$c = Function.prototype.call;

  var functionCall = NATIVE_BIND$3 ? call$c.bind(call$c) : function () {
    return call$c.apply(call$c, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var createPropertyDescriptor$3 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var NATIVE_BIND$2 = functionBindNative;

  var FunctionPrototype$3 = Function.prototype;
  var call$b = FunctionPrototype$3.call;
  var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$3.bind.bind(call$b, call$b);

  var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$b.apply(fn, arguments);
    };
  };

  var uncurryThis$p = functionUncurryThis;

  var toString$a = uncurryThis$p({}.toString);
  var stringSlice$6 = uncurryThis$p(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$6(toString$a(it), 8, -1);
  };

  var uncurryThis$o = functionUncurryThis;
  var fails$k = fails$n;
  var classof$8 = classofRaw$2;

  var $Object$3 = Object;
  var split = uncurryThis$o(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$k(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$3('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$8(it) == 'String' ? split(it, '') : $Object$3(it);
  } : $Object$3;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$6 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$5 = isNullOrUndefined$6;

  var $TypeError$a = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$8 = function (it) {
    if (isNullOrUndefined$5(it)) throw $TypeError$a("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$4 = indexedObject;
  var requireObjectCoercible$7 = requireObjectCoercible$8;

  var toIndexedObject$7 = function (it) {
    return IndexedObject$4(requireObjectCoercible$7(it));
  };

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;

  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$e = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$d = isCallable$e;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$9 = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$d(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$d(it);
  };

  var global$e = global$f;
  var isCallable$c = isCallable$e;

  var aFunction = function (argument) {
    return isCallable$c(argument) ? argument : undefined;
  };

  var getBuiltIn$4 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$e[namespace]) : global$e[namespace] && global$e[namespace][method];
  };

  var uncurryThis$n = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$n({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$d = global$f;
  var userAgent = engineUserAgent;

  var process$1 = global$d.process;
  var Deno = global$d.Deno;
  var versions = process$1 && process$1.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION$2 = engineV8Version;
  var fails$j = fails$n;
  var global$c = global$f;

  var $String$4 = global$c.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$j(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$4(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$3 = getBuiltIn$4;
  var isCallable$b = isCallable$e;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$b($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$2(it));
  };

  var $String$3 = String;

  var tryToString$2 = function (argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$a = isCallable$e;
  var tryToString$1 = tryToString$2;

  var $TypeError$9 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$3 = function (argument) {
    if (isCallable$a(argument)) return argument;
    throw $TypeError$9(tryToString$1(argument) + ' is not a function');
  };

  var aCallable$2 = aCallable$3;
  var isNullOrUndefined$4 = isNullOrUndefined$6;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$4 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$4(func) ? undefined : aCallable$2(func);
  };

  var call$a = functionCall;
  var isCallable$9 = isCallable$e;
  var isObject$8 = isObject$9;

  var $TypeError$8 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$8(val = call$a(fn, input))) return val;
    if (isCallable$9(fn = input.valueOf) && !isObject$8(val = call$a(fn, input))) return val;
    if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$8(val = call$a(fn, input))) return val;
    throw $TypeError$8("Can't convert object to primitive value");
  };

  var shared$4 = {exports: {}};

  var global$b = global$f;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$4 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$4(global$b, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$b[key] = value;
    } return value;
  };

  var global$a = global$f;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$a[SHARED] || defineGlobalProperty$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$4.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.2',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedExports = shared$4.exports;

  var requireObjectCoercible$6 = requireObjectCoercible$8;

  var $Object$1 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$7 = function (argument) {
    return $Object$1(requireObjectCoercible$6(argument));
  };

  var uncurryThis$m = functionUncurryThis;
  var toObject$6 = toObject$7;

  var hasOwnProperty = uncurryThis$m({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$6(it), key);
  };

  var uncurryThis$l = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$9 = uncurryThis$l(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$9(++id + postfix, 36);
  };

  var global$9 = global$f;
  var shared$3 = sharedExports;
  var hasOwn$7 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$1 = global$9.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$d = function (name) {
    if (!hasOwn$7(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$7(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$9 = functionCall;
  var isObject$7 = isObject$9;
  var isSymbol$1 = isSymbol$2;
  var getMethod$3 = getMethod$4;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$c = wellKnownSymbol$d;

  var $TypeError$7 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$7(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$9(exoticToPrim, input, pref);
      if (!isObject$7(result) || isSymbol$1(result)) return result;
      throw $TypeError$7("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$3 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var global$8 = global$f;
  var isObject$6 = isObject$9;

  var document$1 = global$8.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$a = descriptors;
  var fails$i = fails$n;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$a && !fails$i(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$9 = descriptors;
  var call$8 = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;
  var toIndexedObject$6 = toIndexedObject$7;
  var toPropertyKey$2 = toPropertyKey$3;
  var hasOwn$6 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$6(O);
    P = toPropertyKey$2(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$8(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$8 = descriptors;
  var fails$h = fails$n;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$h(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$5 = isObject$9;

  var $String$2 = String;
  var $TypeError$6 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$b = function (argument) {
    if (isObject$5(argument)) return argument;
    throw $TypeError$6($String$2(argument) + ' is not an object');
  };

  var DESCRIPTORS$7 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$a = anObject$b;
  var toPropertyKey$1 = toPropertyKey$3;

  var $TypeError$5 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$a(O);
    P = toPropertyKey$1(P);
    anObject$a(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$a(O);
    P = toPropertyKey$1(P);
    anObject$a(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$5('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$6 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$4 = DESCRIPTORS$6 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$5 = descriptors;
  var hasOwn$5 = hasOwnProperty_1;

  var FunctionPrototype$2 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$5(FunctionPrototype$2, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype$2, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$k = functionUncurryThis;
  var isCallable$8 = isCallable$e;
  var store$1 = sharedStore;

  var functionToString$1 = uncurryThis$k(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$8(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString$1(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var global$7 = global$f;
  var isCallable$7 = isCallable$e;

  var WeakMap$1 = global$7.WeakMap;

  var weakMapBasicDetection = isCallable$7(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var shared$2 = sharedExports;
  var uid = uid$2;

  var keys = shared$2('keys');

  var sharedKey$2 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$6 = global$f;
  var isObject$4 = isObject$9;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
  var hasOwn$4 = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$1 = sharedKey$2;
  var hiddenKeys$3 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$6.TypeError;
  var WeakMap = global$6.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store = shared$1.state || (shared$1.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey$1('state');
    hiddenKeys$3[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$4(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$3(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$4(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$4(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$j = functionUncurryThis;
  var fails$g = fails$n;
  var isCallable$6 = isCallable$e;
  var hasOwn$3 = hasOwnProperty_1;
  var DESCRIPTORS$4 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$2;
  var InternalStateModule = internalState;

  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState$1 = InternalStateModule.get;
  var $String$1 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$3 = Object.defineProperty;
  var stringSlice$5 = uncurryThis$j(''.slice);
  var replace$3 = uncurryThis$j(''.replace);
  var join = uncurryThis$j([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$g(function () {
    return defineProperty$3(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$5($String$1(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$3($String$1(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (DESCRIPTORS$4) defineProperty$3(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
      defineProperty$3(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$3(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$4) defineProperty$3(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$3(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$6(this) && getInternalState$1(this).source || inspectSource$1(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$3.exports;

  var isCallable$5 = isCallable$e;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$4 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$5(value)) makeBuiltIn$1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule$3.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var objectGetOwnPropertyNames = {};

  var ceil = Math.ceil;
  var floor$1 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$1 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

  var max$3 = Math.max;
  var min$3 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$3 = function (index, length) {
    var integer = toIntegerOrInfinity$3(index);
    return integer < 0 ? max$3(integer + length, 0) : min$3(integer, length);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var min$2 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$3 = function (argument) {
    return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$2 = toLength$3;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$6 = function (obj) {
    return toLength$2(obj.length);
  };

  var toIndexedObject$5 = toIndexedObject$7;
  var toAbsoluteIndex$2 = toAbsoluteIndex$3;
  var lengthOfArrayLike$5 = lengthOfArrayLike$6;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$5 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$5($this);
      var length = lengthOfArrayLike$5(O);
      var index = toAbsoluteIndex$2(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$5(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$5(false)
  };

  var uncurryThis$i = functionUncurryThis;
  var hasOwn$2 = hasOwnProperty_1;
  var toIndexedObject$4 = toIndexedObject$7;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$4 = uncurryThis$i([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$4(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$2(hiddenKeys$2, key) && hasOwn$2(O, key) && push$4(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$2(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$4(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$1);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$2 = getBuiltIn$4;
  var uncurryThis$h = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$9 = anObject$b;

  var concat$2 = uncurryThis$h([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$9(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$1 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$f = fails$n;
  var isCallable$4 = isCallable$e;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$4(detection) ? fails$f(detection)
      : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';

  var isForced_1 = isForced$1;

  var global$5 = global$f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
  var defineBuiltIn$3 = defineBuiltIn$4;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$5;
    } else if (STATIC) {
      target = global$5[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$5[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$2(sourceProperty, 'sham', true);
      }
      defineBuiltIn$3(target, key, sourceProperty, options);
    }
  };

  var wellKnownSymbol$b = wellKnownSymbol$d;

  var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');
  var test = {};

  test[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$3 = isCallable$e;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$a = wellKnownSymbol$d;

  var TO_STRING_TAG = wellKnownSymbol$a('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) == 'Object' && isCallable$3(O.callee) ? 'Arguments' : result;
  };

  var classof$6 = classof$7;

  var $String = String;

  var toString$8 = function (argument) {
    if (classof$6(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  var anObject$8 = anObject$b;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$8(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$e = fails$n;
  var global$4 = global$f;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$4.RegExp;

  var UNSUPPORTED_Y$2 = fails$e(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$e(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$e(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y$2
  };

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$3 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$3 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$1 = objectDefineProperty;
  var anObject$7 = anObject$b;
  var toIndexedObject$3 = toIndexedObject$7;
  var objectKeys$2 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$3 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$7(O);
    var props = toIndexedObject$3(Properties);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$1 = getBuiltIn$4;

  var html$1 = getBuiltIn$1('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */

  var anObject$6 = anObject$b;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey = sharedKey$2;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$6(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var fails$d = fails$n;
  var global$3 = global$f;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$3.RegExp;

  var regexpUnsupportedDotAll = fails$d(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$c = fails$n;
  var global$2 = global$f;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$2.RegExp;

  var regexpUnsupportedNcg = fails$c(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$7 = functionCall;
  var uncurryThis$g = functionUncurryThis;
  var toString$7 = toString$8;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared = sharedExports;
  var create$1 = objectCreate;
  var getInternalState = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$3 = uncurryThis$g(''.charAt);
  var indexOf = uncurryThis$g(''.indexOf);
  var replace$2 = uncurryThis$g(''.replace);
  var stringSlice$4 = uncurryThis$g(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$7(nativeExec, re1, 'a');
    call$7(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString$7(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$7(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = call$7(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$2(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$4(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = call$7(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$4(match.input, charsAdded);
          match[0] = stringSlice$4(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$7(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$1(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$3 = patchedExec;

  var $$d = _export;
  var exec$2 = regexpExec$3;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$d({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
    exec: exec$2
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$f = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$f(fn);
  };

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$e = functionUncurryThisClause;
  var defineBuiltIn$2 = defineBuiltIn$4;
  var regexpExec$2 = regexpExec$3;
  var fails$b = fails$n;
  var wellKnownSymbol$9 = wellKnownSymbol$d;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;

  var SPECIES$4 = wellKnownSymbol$9('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$9(KEY);

    var DELEGATES_TO_SYMBOL = !fails$b(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$b(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$4] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var uncurriedNativeRegExpMethod = uncurryThis$e(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$e(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$2 || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
          }
          return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn$2(String.prototype, KEY, methods[0]);
      defineBuiltIn$2(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  // `SameValue` abstract operation
  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es/no-object-is -- safe
  var sameValue$1 = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  var call$6 = functionCall;
  var anObject$5 = anObject$b;
  var isCallable$2 = isCallable$e;
  var classof$5 = classofRaw$2;
  var regexpExec$1 = regexpExec$3;

  var $TypeError$4 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$2(exec)) {
      var result = call$6(exec, R, S);
      if (result !== null) anObject$5(result);
      return result;
    }
    if (classof$5(R) === 'RegExp') return call$6(regexpExec$1, R, S);
    throw $TypeError$4('RegExp#exec called on incompatible receiver');
  };

  var call$5 = functionCall;
  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var anObject$4 = anObject$b;
  var isNullOrUndefined$3 = isNullOrUndefined$6;
  var requireObjectCoercible$5 = requireObjectCoercible$8;
  var sameValue = sameValue$1;
  var toString$6 = toString$8;
  var getMethod$2 = getMethod$4;
  var regExpExec$2 = regexpExecAbstract;

  // @@search logic
  fixRegExpWellKnownSymbolLogic$2('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [
      // `String.prototype.search` method
      // https://tc39.es/ecma262/#sec-string.prototype.search
      function search(regexp) {
        var O = requireObjectCoercible$5(this);
        var searcher = isNullOrUndefined$3(regexp) ? undefined : getMethod$2(regexp, SEARCH);
        return searcher ? call$5(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$6(O));
      },
      // `RegExp.prototype[@@search]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
      function (string) {
        var rx = anObject$4(this);
        var S = toString$6(string);
        var res = maybeCallNative(nativeSearch, rx, S);

        if (res.done) return res.value;

        var previousLastIndex = rx.lastIndex;
        if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
        var result = regExpExec$2(rx, S);
        if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
        return result === null ? -1 : result.index;
      }
    ];
  });

  var wellKnownSymbol$8 = wellKnownSymbol$d;
  var create = objectCreate;
  var defineProperty$2 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$8('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    defineProperty$2(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$c = _export;
  var $includes = arrayIncludes.includes;
  var fails$a = fails$n;
  var addToUnscopables$1 = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$a(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$c({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('includes');

  var isObject$3 = isObject$9;
  var classof$4 = classofRaw$2;
  var wellKnownSymbol$7 = wellKnownSymbol$d;

  var MATCH$1 = wellKnownSymbol$7('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$3(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) == 'RegExp');
  };

  var isRegExp$1 = isRegexp;

  var $TypeError$3 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp$1(it)) {
      throw $TypeError$3("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$6 = wellKnownSymbol$d;

  var MATCH = wellKnownSymbol$6('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var $$b = _export;
  var uncurryThis$d = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible$4 = requireObjectCoercible$8;
  var toString$5 = toString$8;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf$1 = uncurryThis$d(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$b({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf$1(
        toString$5(requireObjectCoercible$4(this)),
        toString$5(notARegExp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$c = functionUncurryThis;
  var requireObjectCoercible$3 = requireObjectCoercible$8;
  var toString$4 = toString$8;
  var whitespaces$1 = whitespaces$2;

  var replace$1 = uncurryThis$c(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$4 = function (TYPE) {
    return function ($this) {
      var string = toString$4(requireObjectCoercible$3($this));
      if (TYPE & 1) string = replace$1(string, ltrim, '');
      if (TYPE & 2) string = replace$1(string, rtrim, '$1');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$4(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$4(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$4(3)
  };

  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var fails$9 = fails$n;
  var whitespaces = whitespaces$2;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$9(function () {
      return !!whitespaces[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $$a = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$a({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var classof$3 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$3 = Array.isArray || function isArray(argument) {
    return classof$3(argument) == 'Array';
  };

  var $TypeError$2 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$2('Maximum allowed index exceeded');
    return it;
  };

  var toPropertyKey = toPropertyKey$3;
  var definePropertyModule = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$3;

  var createProperty$3 = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var uncurryThis$b = functionUncurryThis;
  var fails$8 = fails$n;
  var isCallable$1 = isCallable$e;
  var classof$2 = classof$7;
  var getBuiltIn = getBuiltIn$4;
  var inspectSource = inspectSource$2;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$b(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$1(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$1(argument)) return false;
    switch (classof$2(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$3 = !construct || fails$8(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$2 = isArray$3;
  var isConstructor$2 = isConstructor$3;
  var isObject$2 = isObject$9;
  var wellKnownSymbol$5 = wellKnownSymbol$d;

  var SPECIES$3 = wellKnownSymbol$5('species');
  var $Array$2 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$2(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$2(C) && (C === $Array$2 || isArray$2(C.prototype))) C = undefined;
      else if (isObject$2(C)) {
        C = C[SPECIES$3];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$2 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$2 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var fails$7 = fails$n;
  var wellKnownSymbol$4 = wellKnownSymbol$d;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES$2 = wellKnownSymbol$4('species');

  var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$7(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$2] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$9 = _export;
  var fails$6 = fails$n;
  var isArray$1 = isArray$3;
  var isObject$1 = isObject$9;
  var toObject$5 = toObject$7;
  var lengthOfArrayLike$4 = lengthOfArrayLike$6;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty$2 = createProperty$3;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
  var wellKnownSymbol$3 = wellKnownSymbol$d;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$3('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$6(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$1(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$1(O);
  };

  var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$9({ target: 'Array', proto: true, arity: 1, forced: FORCED$2 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$5(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$4(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty$2(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var DESCRIPTORS$2 = descriptors;
  var uncurryThis$a = functionUncurryThis;
  var call$4 = functionCall;
  var fails$5 = fails$n;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$4 = toObject$7;
  var IndexedObject$3 = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$1 = Object.defineProperty;
  var concat$1 = uncurryThis$a([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$5(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$2 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$1(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$4(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject$3(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$2 || call$4(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$8 = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$8({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
    assign: assign
  });

  var VERSION = '1.7.0';
  var BLOCK_ROWS = 500;
  var CLUSTER_BLOCKS = 4;
  var DEFAULTS = {
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
    customFilter: function customFilter(_ref) {
      var text = _ref.text,
        label = _ref.label,
        search = _ref.search;
      return (label || text).includes(search);
    },
    showClear: false,
    animate: undefined,
    styler: function styler() {
      return false;
    },
    textTemplate: function textTemplate($elm) {
      return $elm[0].innerHTML.trim();
    },
    labelTemplate: function labelTemplate($elm) {
      return $elm[0].getAttribute('label');
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
    onBeforeClick: function onBeforeClick() {
      return true;
    },
    onClick: function onClick() {
      return false;
    },
    onFilter: function onFilter() {
      return false;
    },
    onClear: function onClear() {
      return false;
    },
    onAfterCreate: function onAfterCreate() {
      return false;
    }
  };
  var EN = {
    formatSelectAll: function formatSelectAll() {
      return '[Select all]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'All selected';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return "".concat(count, " of ").concat(total, " selected");
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'No matches found';
    }
  };
  var METHODS = ['getOptions', 'refreshOptions', 'getData', 'getSelects', 'setSelects', 'enable', 'disable', 'open', 'close', 'check', 'uncheck', 'checkAll', 'uncheckAll', 'checkInvert', 'focus', 'blur', 'refresh', 'destroy'];
  Object.assign(DEFAULTS, EN);
  var Constants = {
    VERSION: VERSION,
    BLOCK_ROWS: BLOCK_ROWS,
    CLUSTER_BLOCKS: CLUSTER_BLOCKS,
    DEFAULTS: DEFAULTS,
    METHODS: METHODS,
    LOCALES: {
      en: EN,
      'en-US': EN
    }
  };

  var NATIVE_BIND$1 = functionBindNative;

  var FunctionPrototype$1 = Function.prototype;
  var apply$2 = FunctionPrototype$1.apply;
  var call$3 = FunctionPrototype$1.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$3.bind(apply$2) : function () {
    return call$3.apply(apply$2, arguments);
  });

  var isConstructor$1 = isConstructor$3;
  var tryToString = tryToString$2;

  var $TypeError$1 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor$1(argument)) return argument;
    throw $TypeError$1(tryToString(argument) + ' is not a constructor');
  };

  var anObject$3 = anObject$b;
  var aConstructor = aConstructor$1;
  var isNullOrUndefined$2 = isNullOrUndefined$6;
  var wellKnownSymbol$2 = wellKnownSymbol$d;

  var SPECIES$1 = wellKnownSymbol$2('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$3(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined$2(S = anObject$3(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
  };

  var uncurryThis$9 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$3 = toString$8;
  var requireObjectCoercible$2 = requireObjectCoercible$8;

  var charAt$2 = uncurryThis$9(''.charAt);
  var charCodeAt = uncurryThis$9(''.charCodeAt);
  var stringSlice$3 = uncurryThis$9(''.slice);

  var createMethod$3 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$3(requireObjectCoercible$2($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$2(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$3(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$3(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$3(true)
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$2 = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  var toAbsoluteIndex$1 = toAbsoluteIndex$3;
  var lengthOfArrayLike$3 = lengthOfArrayLike$6;
  var createProperty$1 = createProperty$3;

  var $Array$1 = Array;
  var max$2 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$3(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
    var result = $Array$1(max$2(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
    result.length = n;
    return result;
  };

  var apply$1 = functionApply;
  var call$2 = functionCall;
  var uncurryThis$8 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$2 = anObject$b;
  var isNullOrUndefined$1 = isNullOrUndefined$6;
  var isRegExp = isRegexp;
  var requireObjectCoercible$1 = requireObjectCoercible$8;
  var speciesConstructor = speciesConstructor$1;
  var advanceStringIndex$1 = advanceStringIndex$2;
  var toLength$1 = toLength$3;
  var toString$2 = toString$8;
  var getMethod$1 = getMethod$4;
  var arraySlice$1 = arraySliceSimple;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var stickyHelpers = regexpStickyHelpers;
  var fails$4 = fails$n;

  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$1 = Math.min;
  var $push = [].push;
  var exec = uncurryThis$8(/./.exec);
  var push$3 = uncurryThis$8($push);
  var stringSlice$2 = uncurryThis$8(''.slice);

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$4(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  // @@split logic
  fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = toString$2(requireObjectCoercible$1(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) {
          return call$2(nativeSplit, string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = call$2(regexpExec, separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            push$3(output, stringSlice$2(string, lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) apply$1($push, output, arraySlice$1(match, 1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !exec(separatorCopy, '')) push$3(output, '');
        } else push$3(output, stringSlice$2(string, lastLastIndex));
        return output.length > lim ? arraySlice$1(output, 0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : call$2(nativeSplit, this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible$1(this);
        var splitter = isNullOrUndefined$1(separator) ? undefined : getMethod$1(separator, SPLIT);
        return splitter
          ? call$2(splitter, separator, O, limit)
          : call$2(internalSplit, toString$2(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (string, limit) {
        var rx = anObject$2(this);
        var S = toString$2(string);
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

        if (res.done) return res.value;

        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (UNSUPPORTED_Y ? 'g' : 'y');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
          var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
          var e;
          if (
            z === null ||
            (e = min$1(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
          ) {
            q = advanceStringIndex$1(S, q, unicodeMatching);
          } else {
            push$3(A, stringSlice$2(S, p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              push$3(A, z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        push$3(A, stringSlice$2(S, p));
        return A;
      }
    ];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  var fails$3 = fails$n;

  var arrayMethodIsStrict$3 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$3(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $$7 = _export;
  var uncurryThis$7 = functionUncurryThis;
  var IndexedObject$2 = indexedObject;
  var toIndexedObject$2 = toIndexedObject$7;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;

  var nativeJoin = uncurryThis$7([].join);

  var ES3_STRINGS = IndexedObject$2 != Object;
  var FORCED$1 = ES3_STRINGS || !arrayMethodIsStrict$2('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$7({ target: 'Array', proto: true, forced: FORCED$1 }, {
    join: function join(separator) {
      return nativeJoin(toIndexedObject$2(this), separator === undefined ? ',' : separator);
    }
  });

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty = objectDefineProperty;

  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty.f(target, name, descriptor);
  };

  var DESCRIPTORS$1 = descriptors;
  var FUNCTION_NAME_EXISTS = functionName.EXISTS;
  var uncurryThis$6 = functionUncurryThis;
  var defineBuiltInAccessor = defineBuiltInAccessor$1;

  var FunctionPrototype = Function.prototype;
  var functionToString = uncurryThis$6(FunctionPrototype.toString);
  var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
  var regExpExec$1 = uncurryThis$6(nameRE.exec);
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (DESCRIPTORS$1 && !FUNCTION_NAME_EXISTS) {
    defineBuiltInAccessor(FunctionPrototype, NAME, {
      configurable: true,
      get: function () {
        try {
          return regExpExec$1(nameRE, functionToString(this))[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var uncurryThis$5 = functionUncurryThisClause;
  var aCallable$1 = aCallable$3;
  var NATIVE_BIND = functionBindNative;

  var bind$1 = uncurryThis$5(uncurryThis$5.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$1(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var bind = functionBindContext;
  var uncurryThis$4 = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$3 = toObject$7;
  var lengthOfArrayLike$2 = lengthOfArrayLike$6;
  var arraySpeciesCreate = arraySpeciesCreate$2;

  var push$2 = uncurryThis$4([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$3($this);
      var self = IndexedObject$1(O);
      var boundFunction = bind(callbackfn, that);
      var length = lengthOfArrayLike$2(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$2(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$2(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$2(7)
  };

  var $$6 = _export;
  var $find = arrayIteration.find;
  var addToUnscopables = addToUnscopables$2;

  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-find -- testing
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$6({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$1 = classof$7;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$1(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$1 = defineBuiltIn$4;
  var toString$1 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$1(Object.prototype, 'toString', toString$1, { unsafe: true });
  }

  var $$5 = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$5({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var DESCRIPTORS = descriptors;
  var uncurryThis$3 = functionUncurryThis;
  var objectKeys = objectKeys$3;
  var toIndexedObject$1 = toIndexedObject$7;
  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

  var propertyIsEnumerable = uncurryThis$3($propertyIsEnumerable);
  var push$1 = uncurryThis$3([].push);

  // `Object.{ entries, values }` methods implementation
  var createMethod$1 = function (TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject$1(it);
      var keys = objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) {
        key = keys[i++];
        if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
          push$1(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }
      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$1(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$1(false)
  };

  var $$4 = _export;
  var $entries = objectToArray.entries;

  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  $$4({ target: 'Object', stat: true }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var $$3 = _export;
  var toObject$2 = toObject$7;
  var nativeKeys = objectKeys$3;
  var fails$2 = fails$n;

  var FAILS_ON_PRIMITIVES = fails$2(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$3({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return nativeKeys(toObject$2(it));
    }
  });

  var $$2 = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$2({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$3;

  var STRICT_METHOD = arrayMethodIsStrict$1('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$1 = global$f;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty = createNonEnumerableProperty$4;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    if (DOMIterables[COLLECTION_NAME]) {
      handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(DOMTokenListPrototype);

  var uncurryThis$2 = functionUncurryThis;

  var arraySlice = uncurryThis$2([].slice);

  var $$1 = _export;
  var isArray = isArray$3;
  var isConstructor = isConstructor$3;
  var isObject = isObject$9;
  var toAbsoluteIndex = toAbsoluteIndex$3;
  var lengthOfArrayLike$1 = lengthOfArrayLike$6;
  var toIndexedObject = toIndexedObject$7;
  var createProperty = createProperty$3;
  var wellKnownSymbol$1 = wellKnownSymbol$d;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;
  var nativeSlice = arraySlice;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

  var SPECIES = wellKnownSymbol$1('species');
  var $Array = Array;
  var max$1 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$1({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike$1(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array || Constructor === undefined) {
          return nativeSlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var call$1 = functionCall;
  var hasOwn = hasOwnProperty_1;
  var isPrototypeOf = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$1 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype$1, R)
      ? call$1(regExpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var defineBuiltIn = defineBuiltIn$4;
  var anObject$1 = anObject$b;
  var $toString = toString$8;
  var fails$1 = fails$n;
  var getRegExpFlags = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails$1(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$1(this);
      var pattern = $toString(R.source);
      var flags = $toString(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
  }

  var VirtualScroll = /*#__PURE__*/function () {
    function VirtualScroll(options) {
      var _this = this;
      _classCallCheck(this, VirtualScroll);
      this.rows = options.rows;
      this.scrollEl = options.scrollEl;
      this.contentEl = options.contentEl;
      this.callback = options.callback;
      this.cache = {};
      this.scrollTop = this.scrollEl.scrollTop;
      this.initDOM(this.rows);
      this.scrollEl.scrollTop = this.scrollTop;
      this.lastCluster = 0;
      var onScroll = function onScroll() {
        if (_this.lastCluster !== (_this.lastCluster = _this.getNum())) {
          _this.initDOM(_this.rows);
          _this.callback();
        }
      };
      this.scrollEl.addEventListener('scroll', onScroll, false);
      this.destroy = function () {
        _this.contentEl.innerHtml = '';
        _this.scrollEl.removeEventListener('scroll', onScroll, false);
      };
    }
    _createClass(VirtualScroll, [{
      key: "initDOM",
      value: function initDOM(rows) {
        if (typeof this.clusterHeight === 'undefined') {
          this.cache.scrollTop = this.scrollEl.scrollTop;
          this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0];
          this.getRowsHeight(rows);
        }
        var data = this.initData(rows, this.getNum());
        var thisRows = data.rows.join('');
        var dataChanged = this.checkChanges('data', thisRows);
        var topOffsetChanged = this.checkChanges('top', data.topOffset);
        var bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset);
        var html = [];
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
          this.contentEl.lastChild.style.height = "".concat(data.bottomOffset, "px");
        }
      }
    }, {
      key: "getRowsHeight",
      value: function getRowsHeight() {
        if (typeof this.itemHeight === 'undefined') {
          var nodes = this.contentEl.children;
          var node = nodes[Math.floor(nodes.length / 2)];
          this.itemHeight = node.offsetHeight;
        }
        this.blockHeight = this.itemHeight * Constants.BLOCK_ROWS;
        this.clusterRows = Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS;
        this.clusterHeight = this.blockHeight * Constants.CLUSTER_BLOCKS;
      }
    }, {
      key: "getNum",
      value: function getNum() {
        this.scrollTop = this.scrollEl.scrollTop;
        return Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0;
      }
    }, {
      key: "initData",
      value: function initData(rows, num) {
        if (rows.length < Constants.BLOCK_ROWS) {
          return {
            topOffset: 0,
            bottomOffset: 0,
            rowsAbove: 0,
            rows: rows
          };
        }
        var start = Math.max((this.clusterRows - Constants.BLOCK_ROWS) * num, 0);
        var end = start + this.clusterRows;
        var topOffset = Math.max(start * this.itemHeight, 0);
        var bottomOffset = Math.max((rows.length - end) * this.itemHeight, 0);
        var thisRows = [];
        var rowsAbove = start;
        if (topOffset < 1) {
          rowsAbove++;
        }
        for (var i = start; i < end; i++) {
          rows[i] && thisRows.push(rows[i]);
        }
        this.dataStart = start;
        this.dataEnd = end;
        return {
          topOffset: topOffset,
          bottomOffset: bottomOffset,
          rowsAbove: rowsAbove,
          rows: thisRows
        };
      }
    }, {
      key: "checkChanges",
      value: function checkChanges(type, value) {
        var changed = value !== this.cache[type];
        this.cache[type] = value;
        return changed;
      }
    }, {
      key: "getExtra",
      value: function getExtra(className, height) {
        var tag = document.createElement('li');
        tag.className = "virtual-scroll-".concat(className);
        if (height) {
          tag.style.height = "".concat(height, "px");
        }
        return tag.outerHTML;
      }
    }]);
    return VirtualScroll;
  }();

  var uncurryThis$1 = functionUncurryThis;
  var toObject$1 = toObject$7;

  var floor = Math.floor;
  var charAt = uncurryThis$1(''.charAt);
  var replace = uncurryThis$1(''.replace);
  var stringSlice$1 = uncurryThis$1(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$1(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$1(str, 0, position);
        case "'": return stringSlice$1(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$1(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var apply = functionApply;
  var call = functionCall;
  var uncurryThis = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails = fails$n;
  var anObject = anObject$b;
  var isCallable = isCallable$e;
  var isNullOrUndefined = isNullOrUndefined$6;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var toLength = toLength$3;
  var toString = toString$8;
  var requireObjectCoercible = requireObjectCoercible$8;
  var advanceStringIndex = advanceStringIndex$2;
  var getMethod = getMethod$4;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol = wellKnownSymbol$d;

  var REPLACE = wellKnownSymbol('replace');
  var max = Math.max;
  var min = Math.min;
  var concat = uncurryThis([].concat);
  var push = uncurryThis([].push);
  var stringIndexOf = uncurryThis(''.indexOf);
  var stringSlice = uncurryThis(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? call(replacer, searchValue, O, replaceValue)
          : call(nativeReplace, toString(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          push(results, result);
          if (!global) break;

          var matchStr = toString(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            var replacement = toString(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var aCallable = aCallable$3;
  var toObject = toObject$7;
  var IndexedObject = indexedObject;
  var lengthOfArrayLike = lengthOfArrayLike$6;

  var $TypeError = TypeError;

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable(callbackfn);
      var O = toObject(that);
      var self = IndexedObject(O);
      var length = lengthOfArrayLike(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw $TypeError('Reduce of empty array with no initial value');
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
  };

  var classof = classofRaw$2;

  var engineIsNode = typeof process != 'undefined' && classof(process) == 'process';

  var $ = _export;
  var $reduce = arrayReduce.left;
  var arrayMethodIsStrict = arrayMethodIsStrict$3;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE = engineIsNode;

  // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
  var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  $({ target: 'Array', proto: true, forced: FORCED }, {
    reduce: function reduce(callbackfn /* , initialValue */) {
      var length = arguments.length;
      return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
  });

  var compareObjects = function compareObjects(objectA, objectB, compareLength) {
    var aKeys = Object.keys(objectA);
    var bKeys = Object.keys(objectB);
    if (compareLength && aKeys.length !== bKeys.length) {
      return false;
    }
    for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
      var key = _aKeys[_i];
      if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
        return false;
      }
    }
    return true;
  };
  var removeDiacritics = function removeDiacritics(str) {
    if (str.normalize) {
      return str.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
    }
    var defaultDiacriticsRemovalMap = [{
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
    return defaultDiacriticsRemovalMap.reduce(function (string, _ref) {
      var letters = _ref.letters,
        base = _ref.base;
      return string.replace(letters, base);
    }, str);
  };
  var setDataKeys = function setDataKeys(data) {
    var total = 0;
    data.forEach(function (row, i) {
      if (row.type === 'optgroup') {
        row._key = "group_".concat(i);
        row.visible = typeof row.visible === 'undefined' ? true : row.visible;
        row.children.forEach(function (child, j) {
          child.visible = typeof child.visible === 'undefined' ? true : child.visible;
          if (!child.divider) {
            child._key = "option_".concat(i, "_").concat(j);
            total += 1;
          }
        });
      } else {
        row.visible = typeof row.visible === 'undefined' ? true : row.visible;
        if (!row.divider) {
          row._key = "option_".concat(i);
          total += 1;
        }
      }
    });
    return total;
  };
  var findByParam = function findByParam(data, param, value) {
    var _iterator = _createForOfIteratorHelper(data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;
        if (row[param] === value || row[param] === "".concat(+row[param]) && +row[param] === value) {
          return row;
        }
        if (row.type === 'optgroup') {
          var _iterator2 = _createForOfIteratorHelper(row.children),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;
              if (child[param] === value || child[param] === "".concat(+child[param]) && +child[param] === value) {
                return child;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  var removeUndefined = function removeUndefined(obj) {
    Object.keys(obj).forEach(function (key) {
      return obj[key] === undefined ? delete obj[key] : '';
    });
    return obj;
  };
  var getDocumentClickEvent = function getDocumentClickEvent() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    id = id || "".concat(+new Date()).concat(~~(Math.random() * 1000000));
    return "click.multiple-select-".concat(id);
  };

  var MultipleSelect = /*#__PURE__*/function () {
    function MultipleSelect($el, options) {
      _classCallCheck(this, MultipleSelect);
      this.$el = $el;
      this.options = $$e.extend({}, Constants.DEFAULTS, options);
    }
    _createClass(MultipleSelect, [{
      key: "init",
      value: function init() {
        this.initLocale();
        this.initContainer();
        this.initData();
        this.initSelected(true);
        this.initFilter();
        this.initDrop();
        this.initView();
        this.options.onAfterCreate();
      }
    }, {
      key: "initLocale",
      value: function initLocale() {
        if (this.options.locale) {
          var locales = $$e.fn.multipleSelect.locales;
          var parts = this.options.locale.split(/-|_/);
          parts[0] = parts[0].toLowerCase();
          if (parts[1]) {
            parts[1] = parts[1].toUpperCase();
          }
          if (locales[this.options.locale]) {
            $$e.extend(this.options, locales[this.options.locale]);
          } else if (locales[parts.join('-')]) {
            $$e.extend(this.options, locales[parts.join('-')]);
          } else if (locales[parts[0]]) {
            $$e.extend(this.options, locales[parts[0]]);
          }
        }
      }
    }, {
      key: "initContainer",
      value: function initContainer() {
        var _this = this;
        var el = this.$el[0];
        var name = el.getAttribute('name') || this.options.name || '';
        if (this.options.classes) {
          this.$el.addClass(this.options.classes);
        }
        if (this.options.classPrefix) {
          this.$el.addClass(this.options.classPrefix);
          if (this.options.size) {
            this.$el.addClass("".concat(this.options.classPrefix, "-").concat(this.options.size));
          }
        }

        // hide select element
        this.$el.hide();

        // label element
        this.$label = this.$el.closest('label');
        if (!this.$label.length && this.$el.attr('id')) {
          this.$label = $$e("label[for=\"".concat(this.$el.attr('id'), "\"]"));
        }
        if (this.$label.find('>input').length) {
          this.$label = null;
        }

        // single or multiple
        if (typeof this.options.single === 'undefined') {
          this.options.single = el.getAttribute('multiple') === null;
        }

        // restore class and title from select element
        this.$parent = $$e("\n      <div class=\"ms-parent ".concat(el.getAttribute('class') || '', " ").concat(this.options.classes, "\"\n      title=\"").concat(el.getAttribute('title') || '', "\" />\n    "));

        // add placeholder to choice button
        this.options.placeholder = this.options.placeholder || el.getAttribute('placeholder') || '';
        this.tabIndex = el.getAttribute('tabindex');
        var tabIndex = '';
        if (this.tabIndex !== null) {
          tabIndex = this.tabIndex && "tabindex=\"".concat(this.tabIndex, "\"");
        }
        this.$el.attr('tabindex', -1);
        this.$choice = $$e("\n      <button type=\"button\" class=\"ms-choice\"".concat(tabIndex, ">\n      <span class=\"placeholder\">").concat(this.options.placeholder, "</span>\n      ").concat(this.options.showClear ? '<div class="icon-close"></div>' : '', "\n      <div class=\"icon-caret\"></div>\n      </button>\n    "));

        // default position is bottom
        this.$drop = $$e("<div class=\"ms-drop ".concat(this.options.position, "\" />"));
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
        this.selectAllName = "data-name=\"selectAll".concat(name, "\"");
        this.selectGroupName = "data-name=\"selectGroup".concat(name, "\"");
        this.selectItemName = "data-name=\"selectItem".concat(name, "\"");
        if (!this.options.keepOpen) {
          var clickEvent = getDocumentClickEvent(this.$el.attr('id'));
          $$e(document).off(clickEvent).on(clickEvent, function (e) {
            if ($$e(e.target)[0] === _this.$choice[0] || $$e(e.target).parents('.ms-choice')[0] === _this.$choice[0]) {
              return;
            }
            if (($$e(e.target)[0] === _this.$drop[0] || $$e(e.target).parents('.ms-drop')[0] !== _this.$drop[0] && e.target !== el) && _this.options.isOpen) {
              _this.close();
            }
          });
        }
      }
    }, {
      key: "initData",
      value: function initData() {
        var _this2 = this;
        var data = [];
        if (this.options.data) {
          if (Array.isArray(this.options.data)) {
            this.data = this.options.data.map(function (it) {
              if (typeof it === 'string' || typeof it === 'number') {
                return {
                  text: it,
                  value: it
                };
              }
              return it;
            });
          } else if (_typeof(this.options.data) === 'object') {
            for (var _i = 0, _Object$entries = Object.entries(this.options.data); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                value = _Object$entries$_i[0],
                text = _Object$entries$_i[1];
              data.push({
                value: value,
                text: text
              });
            }
            this.data = data;
          }
        } else {
          $$e.each(this.$el.children(), function (i, elm) {
            var row = _this2.initRow(i, elm);
            if (row) {
              data.push(_this2.initRow(i, elm));
            }
          });
          this.options.data = data;
          this.data = data;
          this.fromHtml = true;
        }
        this.dataTotal = setDataKeys(this.data);
      }
    }, {
      key: "initRow",
      value: function initRow(i, elm, groupDisabled) {
        var _this3 = this;
        var row = {};
        var $elm = $$e(elm);
        if ($elm.is('option')) {
          row.type = 'option';
          row.text = this.options.textTemplate($elm);
          row.value = elm.value;
          row.visible = true;
          row.selected = !!elm.selected;
          row.disabled = groupDisabled || elm.disabled;
          row.classes = elm.getAttribute('class') || '';
          row.title = elm.getAttribute('title') || '';
          if ($elm.data('value')) {
            row._value = $elm.data('value'); // value for object
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
          $$e.each($elm.children(), function (j, elem) {
            row.children.push(_this3.initRow(j, elem, row.disabled));
          });
          return row;
        }
        return null;
      }
    }, {
      key: "initSelected",
      value: function initSelected(ignoreTrigger) {
        var selectedTotal = 0;
        var _iterator = _createForOfIteratorHelper(this.data),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var row = _step.value;
            if (row.type === 'optgroup') {
              var selectedCount = row.children.filter(function (child) {
                return child.selected && !child.disabled && child.visible;
              }).length;
              if (row.children.length) {
                row.selected = !this.options.single && selectedCount && selectedCount === row.children.filter(function (child) {
                  return !child.disabled && child.visible && !child.divider;
                }).length;
              }
              selectedTotal += selectedCount;
            } else {
              selectedTotal += row.selected && !row.disabled && row.visible ? 1 : 0;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.allSelected = this.data.filter(function (row) {
          return row.selected && !row.disabled && row.visible;
        }).length === this.data.filter(function (row) {
          return !row.disabled && row.visible && !row.divider;
        }).length;
        if (!ignoreTrigger) {
          if (this.allSelected) {
            this.options.onCheckAll();
          } else if (selectedTotal === 0) {
            this.options.onUncheckAll();
          }
        }
      }
    }, {
      key: "initFilter",
      value: function initFilter() {
        this.filterText = '';
        if (this.options.filter || !this.options.filterByDataLength) {
          return;
        }
        var length = 0;
        var _iterator2 = _createForOfIteratorHelper(this.data),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var option = _step2.value;
            if (option.type === 'optgroup') {
              length += option.children.length;
            } else {
              length += 1;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.options.filter = length > this.options.filterByDataLength;
      }
    }, {
      key: "initDrop",
      value: function initDrop() {
        var _this4 = this;
        this.initList();
        this.update(true);
        if (this.options.isOpen) {
          setTimeout(function () {
            _this4.open();
          }, 50);
        }
        if (this.options.openOnHover) {
          this.$parent.hover(function () {
            _this4.open();
          }, function () {
            _this4.close();
          });
        }
      }
    }, {
      key: "initList",
      value: function initList() {
        var html = [];
        if (this.options.filter) {
          html.push("\n        <div class=\"ms-search\">\n          <input type=\"text\" autocomplete=\"off\" autocorrect=\"off\"\n            autocapitalize=\"off\" spellcheck=\"false\"\n            placeholder=\"".concat(this.options.filterPlaceholder, "\">\n        </div>\n      "));
        }
        html.push('<ul></ul>');
        this.$drop.html(html.join(''));
        this.$ul = this.$drop.find('>ul');
        this.initListItems();
      }
    }, {
      key: "initListItems",
      value: function initListItems() {
        var _this5 = this;
        var rows = this.getListRows();
        var offset = 0;
        if (this.options.selectAll && !this.options.single) {
          offset = -1;
        }
        if (rows.length > Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS) {
          if (this.virtualScroll) {
            this.virtualScroll.destroy();
          }
          var dropVisible = this.$drop.is(':visible');
          if (!dropVisible) {
            this.$drop.css('left', -10000).show();
          }
          var updateDataOffset = function updateDataOffset() {
            _this5.updateDataStart = _this5.virtualScroll.dataStart + offset;
            _this5.updateDataEnd = _this5.virtualScroll.dataEnd + offset;
            if (_this5.updateDataStart < 0) {
              _this5.updateDataStart = 0;
            }
            if (_this5.updateDataEnd > _this5.data.length) {
              _this5.updateDataEnd = _this5.data.length;
            }
          };
          this.virtualScroll = new VirtualScroll({
            rows: rows,
            scrollEl: this.$ul[0],
            contentEl: this.$ul[0],
            callback: function callback() {
              updateDataOffset();
              _this5.events();
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
    }, {
      key: "getListRows",
      value: function getListRows() {
        var _this6 = this;
        var rows = [];
        if (this.options.selectAll && !this.options.single) {
          rows.push("\n        <li class=\"ms-select-all\" tabindex=\"0\">\n        <label>\n        <input type=\"checkbox\" ".concat(this.selectAllName).concat(this.allSelected ? ' checked="checked"' : '', " tabindex=\"-1\" />\n        <span>").concat(this.options.formatSelectAll(), "</span>\n        </label>\n        </li>\n      "));
        }
        this.updateData = [];
        this.data.forEach(function (row) {
          rows.push.apply(rows, _toConsumableArray(_this6.initListItem(row)));
        });
        rows.push("<li class=\"ms-no-results\">".concat(this.options.formatNoMatchesFound(), "</li>"));
        return rows;
      }
    }, {
      key: "initListItem",
      value: function initListItem(row) {
        var _this7 = this;
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var title = row.title ? "title=\"".concat(row.title, "\"") : '';
        var multiple = this.options.multiple ? 'multiple' : '';
        var type = this.options.single ? 'radio' : 'checkbox';
        var classes = '';
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
          var _customStyle = this.options.styler(row);
          var _style = _customStyle ? "style=\"".concat(_customStyle, "\"") : '';
          var html = [];
          var group = this.options.hideOptgroupCheckboxes || this.options.single ? "<span ".concat(this.selectGroupName, " data-key=\"").concat(row._key, "\"></span>") : "<input type=\"checkbox\"\n          ".concat(this.selectGroupName, "\n          data-key=\"").concat(row._key, "\"\n          ").concat(row.selected ? ' checked="checked"' : '', "\n          ").concat(row.disabled ? ' disabled="disabled"' : '', "\n          tabindex=\"-1\"\n        >");
          if (!classes.includes('hide-radio') && (this.options.hideOptgroupCheckboxes || this.options.single)) {
            classes += 'hide-radio ';
          }
          html.push("\n        <li class=\"group ".concat(classes, "\" ").concat(_style, " tabindex=\"").concat(classes.includes('hide-radio') || row.disabled ? -1 : 0, "\">\n        <label class=\"optgroup").concat(this.options.single || row.disabled ? ' disabled' : '', "\">\n        ").concat(group).concat(row.label, "\n        </label>\n        </li>\n      "));
          row.children.forEach(function (child) {
            html.push.apply(html, _toConsumableArray(_this7.initListItem(child, 1)));
          });
          return html;
        }
        var customStyle = this.options.styler(row);
        var style = customStyle ? "style=\"".concat(customStyle, "\"") : '';
        classes += row.classes || '';
        if (level && this.options.single) {
          classes += "option-level-".concat(level, " ");
        }
        if (row.divider) {
          return '<li class="option-divider"/>';
        }
        return ["\n      <li class=\"".concat(multiple, " ").concat(classes, "\" ").concat(title, " ").concat(style, " tabindex=\"").concat(row.disabled ? -1 : 0, "\">\n      <label class=\"").concat(row.disabled ? 'disabled' : '', "\">\n      <input type=\"").concat(type, "\"\n        value=\"").concat(row.value, "\"\n        data-key=\"").concat(row._key, "\"\n        ").concat(this.selectItemName, "\n        ").concat(row.selected ? ' checked="checked"' : '', "\n        ").concat(row.disabled ? ' disabled="disabled"' : '', "\n        tabindex=\"-1\"\n      >\n      <span>").concat(row.text, "</span>\n      </label>\n      </li>\n    ")];
      }
    }, {
      key: "events",
      value: function events() {
        var _this8 = this;
        this.$searchInput = this.$drop.find('.ms-search input');
        this.$selectAll = this.$drop.find("input[".concat(this.selectAllName, "]"));
        this.$selectGroups = this.$drop.find("input[".concat(this.selectGroupName, "],span[").concat(this.selectGroupName, "]"));
        this.$selectItems = this.$drop.find("input[".concat(this.selectItemName, "]:enabled"));
        this.$disableItems = this.$drop.find("input[".concat(this.selectItemName, "]:disabled"));
        this.$noResults = this.$drop.find('.ms-no-results');
        var toggleOpen = function toggleOpen(e) {
          e.preventDefault();
          if ($$e(e.target).hasClass('icon-close')) {
            return;
          }
          _this8[_this8.options.isOpen ? 'close' : 'open']();
        };
        if (this.$label && this.$label.length) {
          this.$label.off('click').on('click', function (e) {
            if (e.target.nodeName.toLowerCase() !== 'label') {
              return;
            }
            toggleOpen(e);
            if (!_this8.options.filter || !_this8.options.isOpen) {
              _this8.focus();
            }
            e.stopPropagation(); // Causes lost focus otherwise
          });
        }

        this.$choice.off('click').on('click', toggleOpen).off('focus').on('focus', this.options.onFocus).off('blur').on('blur', this.options.onBlur);
        this.$parent.off('keydown').on('keydown', function (e) {
          // esc key
          if (e.which === 27 && !_this8.options.keepOpen) {
            _this8.close();
            _this8.$choice.focus();
          }
        });
        this.$close.off('click').on('click', function (e) {
          e.preventDefault();
          _this8._checkAll(false, true);
          _this8.initSelected(false);
          _this8.updateSelected();
          _this8.update();
          _this8.options.onClear();
        });
        this.$searchInput.off('keydown').on('keydown', function (e) {
          // Ensure shift-tab causes lost focus from filter as with clicking away
          if (e.keyCode === 9 && e.shiftKey) {
            _this8.close();
          }
        }).off('keyup').on('keyup', function (e) {
          // enter or space
          // Avoid selecting/deselecting if no choices made
          if (_this8.options.filterAcceptOnEnter && [13, 32].includes(e.which) && _this8.$searchInput.val()) {
            if (_this8.options.single) {
              var $items = _this8.$selectItems.closest('li').filter(':visible');
              if ($items.length) {
                _this8.setSelects([$items.first().find("input[".concat(_this8.selectItemName, "]")).val()]);
              }
            } else {
              _this8.$selectAll.click();
            }
            _this8.close();
            _this8.focus();
            return;
          }
          _this8.filter();
        });
        this.$selectAll.off('click').on('click', function (e) {
          _this8._checkAll($$e(e.currentTarget).prop('checked'));
        });
        this.$selectGroups.off('click').on('click', function (e) {
          var $this = $$e(e.currentTarget);
          var checked = $this.prop('checked');
          var group = findByParam(_this8.data, '_key', $this.data('key'));
          _this8._checkGroup(group, checked);
          _this8.options.onOptgroupClick(removeUndefined({
            label: group.label,
            selected: group.selected,
            data: group._data,
            children: group.children.map(function (child) {
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
        this.$selectItems.off('click').on('click', function (e) {
          var $this = $$e(e.currentTarget);
          var checked = $this.prop('checked');
          var option = findByParam(_this8.data, '_key', $this.data('key'));
          var close = function close() {
            if (_this8.options.single && _this8.options.isOpen && !_this8.options.keepOpen) {
              _this8.close();
            }
          };
          if (_this8.options.onBeforeClick(option) === false) {
            close();
            return;
          }
          _this8._check(option, checked);
          _this8.options.onClick(removeUndefined({
            text: option.text,
            value: option.value,
            selected: option.selected,
            data: option._data
          }));
          close();
        });
        this.$ul.find('li').off('keydown').on('keydown', function (e) {
          var $this = $$e(e.currentTarget);
          var $divider;
          var $li;
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
              if (_this8.options.single) {
                _this8.$choice.trigger('focus');
              }
              break;
            // ignore
          }
        });
      }
    }, {
      key: "initView",
      value: function initView() {
        var computedWidth;
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
    }, {
      key: "open",
      value: function open() {
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
          var offset = this.$drop.offset();
          this.$drop.appendTo($$e(this.options.container));
          this.$drop.offset({
            top: offset.top,
            left: offset.left
          }).css('min-width', 'auto').outerWidth(this.$parent.outerWidth());
        }
        var maxHeight = this.options.maxHeight;
        if (this.options.maxHeightUnit === 'row') {
          maxHeight = this.$drop.find('>ul>li').first().outerHeight() * this.options.maxHeight;
        }
        this.$drop.find('>ul').css('max-height', "".concat(maxHeight, "px"));
        this.$drop.find('.multiple').css('width', "".concat(this.options.multipleWidth, "px"));
        if (this.data.length && this.options.filter) {
          this.$searchInput.val('');
          this.$searchInput.focus();
          this.filter(true);
        }
        this.options.onOpen();
      }
    }, {
      key: "close",
      value: function close() {
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
        var textSelects = this.getSelects('text');
        if (this.options.displayValues) {
          textSelects = valueSelects;
        }
        var $span = this.$choice.find('>span');
        var sl = valueSelects.length;
        var html = '';
        if (sl === 0) {
          $span.addClass('placeholder').html(this.options.placeholder);
        } else if (sl < this.options.minimumCountSelected) {
          html = textSelects.join(this.options.displayDelimiter);
        } else if (this.options.formatAllSelected() && sl === this.dataTotal) {
          html = this.options.formatAllSelected();
        } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
          html = "".concat(textSelects.slice(0, this.options.minimumCountSelected).join(this.options.displayDelimiter), "...");
        } else if (this.options.formatCountSelected() && sl > this.options.minimumCountSelected) {
          html = this.options.formatCountSelected(sl, this.dataTotal);
        } else {
          html = textSelects.join(this.options.displayDelimiter);
        }
        if (html) {
          $span.removeClass('placeholder').html(html);
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
    }, {
      key: "updateSelected",
      value: function updateSelected() {
        for (var i = this.updateDataStart; i < this.updateDataEnd; i++) {
          var row = this.updateData[i];
          this.$drop.find("input[data-key=".concat(row._key, "]")).prop('checked', row.selected).closest('li').toggleClass('selected', row.selected);
        }
        var noResult = this.data.filter(function (row) {
          return row.visible;
        }).length === 0;
        if (this.$selectAll.length) {
          this.$selectAll.prop('checked', this.allSelected).closest('li').toggle(!noResult);
        }
        this.$noResults.toggle(noResult);
        if (this.virtualScroll) {
          this.virtualScroll.rows = this.getListRows();
        }
      }
    }, {
      key: "getData",
      value: function getData() {
        return this.options.data;
      }
    }, {
      key: "getOptions",
      value: function getOptions() {
        // deep copy and remove data
        var options = $$e.extend({}, this.options);
        delete options.data;
        return $$e.extend(true, {}, options);
      }
    }, {
      key: "refreshOptions",
      value: function refreshOptions(options) {
        // If the objects are equivalent then avoid the call of destroy / init methods
        if (compareObjects(this.options, options, true)) {
          return;
        }
        this.options = $$e.extend(this.options, options);
        this.destroy();
        this.init();
      }

      // value html, or text, default: 'value'
    }, {
      key: "getSelects",
      value: function getSelects() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
        var values = [];
        var _iterator3 = _createForOfIteratorHelper(this.data),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var row = _step3.value;
            if (row.type === 'optgroup') {
              var selectedChildren = row.children.filter(function (child) {
                return child.selected;
              });
              if (!selectedChildren.length) {
                continue;
              }
              if (type === 'value' || this.options.single) {
                values.push.apply(values, _toConsumableArray(selectedChildren.map(function (child) {
                  return type === 'value' ? child._value || child[type] : child[type];
                })));
              } else {
                var value = [];
                value.push('[');
                value.push(row.label);
                value.push(": ".concat(selectedChildren.map(function (child) {
                  return child[type];
                }).join(', ')));
                value.push(']');
                values.push(value.join(''));
              }
            } else if (row.selected) {
              values.push(type === 'value' ? row._value || row[type] : row[type]);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return values;
      }
    }, {
      key: "setSelects",
      value: function setSelects(values) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';
        var ignoreTrigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var hasChanged = false;
        var _setSelects = function _setSelects(rows) {
          var _iterator4 = _createForOfIteratorHelper(rows),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var row = _step4.value;
              var selected = false;
              if (type === 'text') {
                selected = values.includes($$e('<div>').html(row.text).text().trim());
              } else {
                selected = values.includes(row._value || row.value);
                if (!selected && row.value === "".concat(+row.value)) {
                  selected = values.includes(+row.value);
                }
              }
              if (row.selected !== selected) {
                hasChanged = true;
              }
              row.selected = selected;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        };
        var _iterator5 = _createForOfIteratorHelper(this.data),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var row = _step5.value;
            if (row.type === 'optgroup') {
              _setSelects(row.children);
            } else {
              _setSelects([row]);
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        if (hasChanged) {
          this.initSelected(ignoreTrigger);
          this.updateSelected();
          this.update(ignoreTrigger);
        }
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
      key: "check",
      value: function check(value) {
        var option = findByParam(this.data, 'value', value);
        if (!option) {
          return;
        }
        this._check(option, true);
      }
    }, {
      key: "uncheck",
      value: function uncheck(value) {
        var option = findByParam(this.data, 'value', value);
        if (!option) {
          return;
        }
        this._check(option, false);
      }
    }, {
      key: "_check",
      value: function _check(option, checked) {
        if (this.options.single) {
          this._checkAll(false, true);
        }
        option.selected = checked;
        this.initSelected();
        this.updateSelected();
        this.update();
      }
    }, {
      key: "checkAll",
      value: function checkAll() {
        this._checkAll(true);
      }
    }, {
      key: "uncheckAll",
      value: function uncheckAll() {
        this._checkAll(false);
      }
    }, {
      key: "_checkAll",
      value: function _checkAll(checked, ignoreUpdate) {
        var _iterator6 = _createForOfIteratorHelper(this.data),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var row = _step6.value;
            if (row.type === 'optgroup') {
              this._checkGroup(row, checked, true);
            } else if (!row.disabled && !row.divider && (ignoreUpdate || row.visible)) {
              row.selected = checked;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        if (!ignoreUpdate) {
          this.initSelected();
          this.updateSelected();
          this.update();
        }
      }
    }, {
      key: "_checkGroup",
      value: function _checkGroup(group, checked, ignoreUpdate) {
        group.selected = checked;
        group.children.forEach(function (row) {
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
    }, {
      key: "checkInvert",
      value: function checkInvert() {
        if (this.options.single) {
          return;
        }
        var _iterator7 = _createForOfIteratorHelper(this.data),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var row = _step7.value;
            if (row.type === 'optgroup') {
              var _iterator8 = _createForOfIteratorHelper(row.children),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var child = _step8.value;
                  if (!child.divider) {
                    child.selected = !child.selected;
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            } else if (!row.divider) {
              row.selected = !row.selected;
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        this.initSelected();
        this.updateSelected();
        this.update();
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
        this.destroy();
        this.init();
      }
    }, {
      key: "filter",
      value: function filter(ignoreTrigger) {
        var originalSearch = this.$searchInput.val().trim();
        var search = originalSearch.toLowerCase();
        if (this.filterText === search) {
          return;
        }
        this.filterText = search;
        var _iterator9 = _createForOfIteratorHelper(this.data),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var row = _step9.value;
            if (row.type === 'optgroup') {
              if (this.options.filterGroup) {
                var visible = this.options.customFilter({
                  label: removeDiacritics(row.label.toString().toLowerCase()),
                  search: removeDiacritics(search),
                  originalLabel: row.label,
                  originalSearch: originalSearch,
                  row: row
                });
                row.visible = visible;
                var _iterator10 = _createForOfIteratorHelper(row.children),
                  _step10;
                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var child = _step10.value;
                    child.visible = visible;
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              } else {
                var _iterator11 = _createForOfIteratorHelper(row.children),
                  _step11;
                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var _child = _step11.value;
                    _child.visible = this.options.customFilter({
                      text: removeDiacritics(_child.text.toString().toLowerCase()),
                      search: removeDiacritics(search),
                      originalText: _child.text,
                      originalSearch: originalSearch,
                      row: _child,
                      parent: row
                    });
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
                row.visible = row.children.filter(function (child) {
                  return child.visible;
                }).length > 0;
              }
            } else {
              row.visible = this.options.customFilter({
                text: removeDiacritics(row.text.toString().toLowerCase()),
                search: removeDiacritics(search),
                originalText: row.text,
                originalSearch: originalSearch,
                row: row
              });
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        this.initListItems();
        this.initSelected(ignoreTrigger);
        this.updateSelected();
        if (!ignoreTrigger) {
          this.options.onFilter(originalSearch);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
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
    }]);
    return MultipleSelect;
  }();

  $$e.fn.multipleSelect = function (option) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var value;
    this.each(function (i, el) {
      var $this = $$e(el);
      var data = $this.data('multipleSelect');
      var options = $$e.extend({}, $this.data(), _typeof(option) === 'object' && option);
      if (!data) {
        data = new MultipleSelect($this, options);
        $this.data('multipleSelect', data);
      }
      if (typeof option === 'string') {
        var _data;
        if ($$e.inArray(option, Constants.METHODS) < 0) {
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
  $$e.fn.multipleSelect.Constructor = MultipleSelect;
  $$e.fn.multipleSelect.defaults = Constants.DEFAULTS;
  $$e.fn.multipleSelect.locales = Constants.LOCALES;
  $$e.fn.multipleSelect.methods = Constants.METHODS;

}));
