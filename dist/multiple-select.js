(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
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

  var O = 'object';
  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis == O && globalThis) ||
    check(typeof window == O && window) ||
    check(typeof self == O && self) ||
    check(typeof commonjsGlobal == O && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    Function('return this')();

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
  var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$1
  };

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  var nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$2
  };

  var hide = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      hide(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || setGlobal(SHARED, {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.2.1',
    mode:  'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var functionToString = shared('native-function-to-string', Function.toString);

  var WeakMap = global_1.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global_1.WeakMap;
  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap) {
    var store = new WeakMap$1();
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function (it, metadata) {
      wmset.call(store, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      hide(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(functionToString).split('toString');

  shared('inspectSource', function (it) {
    return functionToString.call(it);
  });

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
      enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else hide(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
  });
  });

  var path = global_1;

  var aFunction = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
      : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger
  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };

  var indexOf = arrayIncludes.indexOf;


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$3
  };

  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$4
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        hide(sourceProperty, 'sham', true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
  };

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });

  var Symbol$1 = global_1.Symbol;
  var store$1 = shared('wks');

  var wellKnownSymbol = function (name) {
    return store$1[name] || (store$1[name] = nativeSymbol && Symbol$1[name]
      || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
  };

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var html = getBuiltIn('document', 'documentElement');

  var IE_PROTO = sharedKey('IE_PROTO');

  var PROTOTYPE = 'prototype';
  var Empty = function () { /* empty */ };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var length = enumBugKeys.length;
    var lt = '<';
    var script = 'script';
    var gt = '>';
    var js = 'java' + script + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = String(js);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
    return createDict();
  };

  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  hiddenKeys[IE_PROTO] = true;

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    hide(ArrayPrototype, UNSCOPABLES, objectCreate(null));
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $includes = arrayIncludes.includes;


  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  _export({ target: 'Array', proto: true }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var nativeAssign = Object.assign;

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  // should work with symbols and should have deterministic property order (V8 bug)
  var objectAssign = !nativeAssign || fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;
    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : nativeAssign;

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  _export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
    assign: objectAssign
  });

  var MATCH = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.github.io/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var notARegexp = function (it) {
    if (isRegexp(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var MATCH$1 = wellKnownSymbol('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (e) {
      try {
        regexp[MATCH$1] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (f) { /* empty */ }
    } return false;
  };

  // `String.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.includes
  _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~String(requireObjectCoercible(this))
        .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var VERSION = '1.4.2';
  var DEFAULTS = {
    name: '',
    placeholder: '',
    data: undefined,
    locale: undefined,
    selectAll: true,
    single: false,
    singleRadio: false,
    multiple: false,
    hideOptgroupCheckboxes: false,
    multipleWidth: 80,
    width: undefined,
    dropWidth: undefined,
    maxHeight: 250,
    position: 'bottom',
    displayHtml: false,
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
    customFilter: function customFilter(label, text) {
      // originalLabel, originalText
      return label.includes(text);
    },
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
  var EN = {
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
  var METHODS = ['getOptions', 'refreshOptions', 'getSelects', 'setSelects', 'enable', 'disable', 'open', 'close', 'check', 'uncheck', 'checkAll', 'uncheckAll', 'checkInvert', 'focus', 'blur', 'refresh', 'destroy'];
  Object.assign(DEFAULTS, EN);
  var Constants = {
    VERSION: VERSION,
    DEFAULTS: DEFAULTS,
    METHODS: METHODS,
    LOCALES: {
      en: EN,
      'en-US': EN
    }
  };

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

  var toString$1 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return nativeGetOwnPropertyNames(it);
    } catch (error) {
      return windowNames.slice();
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]'
      ? getWindowNames(it)
      : nativeGetOwnPropertyNames(toIndexedObject(it));
  };

  var objectGetOwnPropertyNamesExternal = {
  	f: f$5
  };

  var f$6 = wellKnownSymbol;

  var wrappedWellKnownSymbol = {
  	f: f$6
  };

  var defineProperty = objectDefineProperty.f;

  var defineWellKnownSymbol = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
      value: wrappedWellKnownSymbol.f(NAME)
    });
  };

  var defineProperty$1 = objectDefineProperty.f;



  var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
      defineProperty$1(it, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };

  var aFunction$1 = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  // optional / simple context binding
  var bindContext = function (fn, that, length) {
    aFunction$1(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var SPECIES = wellKnownSymbol('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = bindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
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
            case 2: push.call(target, value); // filter
          } else if (IS_EVERY) return false;  // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6)
  };

  var $forEach = arrayIteration.forEach;

  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE$1 = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE$1];
  var $Symbol = global_1.Symbol;
  var JSON = global_1.JSON;
  var nativeJSONStringify = JSON && JSON.stringify;
  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var nativeDefineProperty$1 = objectDefineProperty.f;
  var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared('wks');
  var QObject = global_1.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = descriptors && fails(function () {
    return objectCreate(nativeDefineProperty$1({}, 'a', {
      get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty$1(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
      nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty$1;

  var wrap = function (tag, description) {
    var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
    setInternalState(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!descriptors) symbol.description = description;
    return symbol;
  };

  var isSymbol = nativeSymbol && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return Object(it) instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPrimitive(P, true);
    anObject(Attributes);
    if (has(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
      } return setSymbolDescriptor(O, key, Attributes);
    } return nativeDefineProperty$1(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
      if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPrimitive(V, true);
    var enumerable = nativePropertyIsEnumerable$1.call(this, P);
    if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPrimitive(P, true);
    if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
    if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.github.io/ecma262/#sec-symbol-constructor
  if (!nativeSymbol) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };
      if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };

    redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
      return getInternalState(this).tag;
    });

    objectPropertyIsEnumerable.f = $propertyIsEnumerable;
    objectDefineProperty.f = $defineProperty;
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

    if (descriptors) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        }
      });
      {
        redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
      }
    }

    wrappedWellKnownSymbol.f = function (name) {
      return wrap(wellKnownSymbol(name), name);
    };
  }

  _export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
    Symbol: $Symbol
  });

  $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol(name);
  });

  _export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
    // `Symbol.for` method
    // https://tc39.github.io/ecma262/#sec-symbol.for
    'for': function (key) {
      var string = String(key);
      if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.github.io/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  _export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
    // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });

  _export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  _export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return objectGetOwnPropertySymbols.f(toObject(it));
    }
  });

  // `JSON.stringify` method behavior with symbols
  // https://tc39.github.io/ecma262/#sec-json.stringify
  JSON && _export({ target: 'JSON', stat: true, forced: !nativeSymbol || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return nativeJSONStringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || nativeJSONStringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || nativeJSONStringify(Object(symbol)) != '{}';
  }) }, {
    stringify: function stringify(it) {
      var args = [it];
      var index = 1;
      var replacer, $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer = args[1];
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return nativeJSONStringify.apply(JSON, args);
    }
  });

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag($Symbol, SYMBOL);

  hiddenKeys[HIDDEN] = true;

  var defineProperty$2 = objectDefineProperty.f;


  var NativeSymbol = global_1.Symbol;

  if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined
  )) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof SymbolWrapper
        ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;

    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty$2(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has(EmptyStringDescriptionStore, symbol)) return '';
        var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    _export({ global: true, forced: true }, {
      Symbol: SymbolWrapper
    });
  }

  // `Symbol.iterator` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol('iterator');

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var SPECIES$1 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    return !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({ target: 'Array', proto: true, forced: FORCED }, {
    concat: function concat(arg) { // eslint-disable-line no-unused-vars
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var $filter = arrayIteration.filter;


  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $find = arrayIteration.find;


  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var correctPrototypeGetter = !fails(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO$1 = sharedKey('IE_PROTO');
  var ObjectPrototype$1 = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype$1 : null;
  };

  var ITERATOR = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS = false;

  var returnThis = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }

  if (IteratorPrototype == undefined) IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if ( !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    return IteratorConstructor;
  };

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    } return it;
  };

  // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis$1 = function () { return this; };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
            hide(CurrentIteratorPrototype, ITERATOR$1, returnThis$1);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
      hide(IterablePrototype, ITERATOR$1, defaultIterator);
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$1 = internalState.set;
  var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.github.io/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$1(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  }, 'values');

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var sloppyArrayMethod = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !method || !fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var nativeJoin = [].join;

  var ES3_STRINGS = indexedObject != Object;
  var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

  // `Array.prototype.join` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.join
  _export({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  var $map = arrayIteration.map;


  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var SPECIES$2 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$1 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$2];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var defineProperty$3 = objectDefineProperty.f;

  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.github.io/ecma262/#sec-function-instances-name
  if (descriptors && !(NAME in FunctionPrototype)) {
    defineProperty$3(FunctionPrototype, NAME, {
      configurable: true,
      get: function () {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG$2] = 'z';

  // `Object.prototype.toString` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  var objectToString = String(test) !== '[object z]' ? function toString() {
    return '[object ' + classof(this) + ']';
  } : test.toString;

  var ObjectPrototype$2 = Object.prototype;

  // `Object.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  if (objectToString !== ObjectPrototype$2.toString) {
    redefine(ObjectPrototype$2, 'toString', objectToString, { unsafe: true });
  }

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod$2 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$2(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$2(true)
  };

  var charAt = stringMultibyte.charAt;



  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = internalState.set;
  var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  var SPECIES$3 = wellKnownSymbol('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      re.exec = function () { execCalled = true; return null; };

      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$3] = function () { return re; };
      }

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return regexMethod.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return regexMethod.call(string, this); }
      );
      if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
    }
  };

  var SPECIES$4 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.github.io/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction$1(S);
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  var arrayPush = [].push;
  var min$2 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

  // @@split logic
  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
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
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = min$2(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, !SUPPORTS_Y);

  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$3 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
    start: createMethod$3(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
    end: createMethod$3(2),
    // `String.prototype.trim` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.trim
    trim: createMethod$3(3)
  };

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var forcedStringTrimMethod = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim;


  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  _export({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
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

  var $forEach$1 = arrayIteration.forEach;


  // `Array.prototype.forEach` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  } : [].forEach;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      hide(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  for (var COLLECTION_NAME$1 in domIterables) {
    var Collection$1 = global_1[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
    if (CollectionPrototype$1) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$1[ITERATOR$2] !== ArrayValues) try {
        hide(CollectionPrototype$1, ITERATOR$2, ArrayValues);
      } catch (error) {
        CollectionPrototype$1[ITERATOR$2] = ArrayValues;
      }
      if (!CollectionPrototype$1[TO_STRING_TAG$3]) hide(CollectionPrototype$1, TO_STRING_TAG$3, COLLECTION_NAME$1);
      if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          hide(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }

  var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return objectKeys(toObject(it));
    }
  });

  var max$2 = Math.max;
  var min$3 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max$2(min$3(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

  // sprintf format specifiers
  var s = 's';

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
    return defaultDiacriticsRemovalMap.reduce(function (string, _ref) {
      var letters = _ref.letters,
          base = _ref.base;
      return string.replace(letters, base);
    }, str);
  };

  function _templateObject26() {
    var data = _taggedTemplateLiteral(["[value=\"", "\"]"]);

    _templateObject26 = function _templateObject26() {
      return data;
    };

    return data;
  }

  function _templateObject25() {
    var data = _taggedTemplateLiteral(["[value=\"", "\"]"]);

    _templateObject25 = function _templateObject25() {
      return data;
    };

    return data;
  }

  function _templateObject24() {
    var data = _taggedTemplateLiteral(["[value=\"", "\"]"]);

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
    var data = _taggedTemplateLiteral(["[", "][data-group=\"", "\"]"]);

    _templateObject22 = function _templateObject22() {
      return data;
    };

    return data;
  }

  function _templateObject21() {
    var data = _taggedTemplateLiteral(["input[", "]:checked"]);

    _templateObject21 = function _templateObject21() {
      return data;
    };

    return data;
  }

  function _templateObject20() {
    var data = _taggedTemplateLiteral(["[data-group=\"", "\"]"]);

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
    var data = _taggedTemplateLiteral(["<span>", "</span>"]);

    _templateObject18 = function _templateObject18() {
      return data;
    };

    return data;
  }

  function _templateObject17() {
    var data = _taggedTemplateLiteral([" data-group=\"", "\""]);

    _templateObject17 = function _templateObject17() {
      return data;
    };

    return data;
  }

  function _templateObject16() {
    var data = _taggedTemplateLiteral(["<input type=\"", "\" value=\"", "\" ", "", "", "", ">"]);

    _templateObject16 = function _templateObject16() {
      return data;
    };

    return data;
  }

  function _templateObject15() {
    var data = _taggedTemplateLiteral(["<label class=\"", "\">"]);

    _templateObject15 = function _templateObject15() {
      return data;
    };

    return data;
  }

  function _templateObject14() {
    var data = _taggedTemplateLiteral(["<li class=\"", " ", "\" ", " ", ">"]);

    _templateObject14 = function _templateObject14() {
      return data;
    };

    return data;
  }

  function _templateObject13() {
    var data = _taggedTemplateLiteral(["style=\"", "\""]);

    _templateObject13 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12() {
    var data = _taggedTemplateLiteral(["<input type=\"checkbox\" ", " ", ">"]);

    _templateObject12 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11() {
    var data = _taggedTemplateLiteral(["<span ", "></span>"]);

    _templateObject11 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10() {
    var data = _taggedTemplateLiteral(["<label class=\"optgroup ", "\" data-group=\"", "\">"]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    var data = _taggedTemplateLiteral(["style=\"", "\""]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteral(["title=\"", "\""]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["<li class=\"ms-no-results\">", "</li>"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["<input type=\"checkbox\" ", " />"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["placeholder=\"", "\""]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["<div class=\"ms-drop ", "\"></div>"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n      <button type=\"button\" class=\"ms-choice\">\n      <span class=\"placeholder\">", "</span>\n      <div></div>\n      </button>\n    "]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["title=\"", "\""]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["<div class=\"ms-parent ", "\" ", "/>"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var MultipleSelect =
  /*#__PURE__*/
  function () {
    function MultipleSelect($el, options) {
      _classCallCheck(this, MultipleSelect);

      this.$el = $el;
      this.options = $.extend({}, Constants.DEFAULTS, options);
    }

    _createClass(MultipleSelect, [{
      key: "init",
      value: function init() {
        this.initLocale();
        this.initContainer();
        this.initData();
        this.initFilter();
        this.initDrop();
        this.initView();
        this.options.onAfterCreate();
      }
    }, {
      key: "initLocale",
      value: function initLocale() {
        if (this.options.locale) {
          var locales = $.fn.multipleSelect.locales;
          var parts = this.options.locale.split(/-|_/);
          parts[0] = parts[0].toLowerCase();

          if (parts[1]) {
            parts[1] = parts[1].toUpperCase();
          }

          if (locales[this.options.locale]) {
            $.extend(this.options, locales[this.options.locale]);
          } else if (locales[parts.join('-')]) {
            $.extend(this.options, locales[parts.join('-')]);
          } else if (locales[parts[0]]) {
            $.extend(this.options, locales[parts[0]]);
          }
        }
      }
    }, {
      key: "initContainer",
      value: function initContainer() {
        var _this = this;

        var el = this.$el[0];
        var name = el.getAttribute('name') || this.options.name || ''; // hide select element

        this.$el.hide(); // label element

        this.$label = this.$el.closest('label');

        if (!this.$label.length && this.$el.attr('id')) {
          this.$label = $("label[for=\"".concat(this.$el.attr('id'), "\"]"));
        }

        if (this.$label.find('>input').length) {
          this.$label = null;
        } // restore class and title from select element


        this.$parent = $(sprintf(_templateObject(), s, s)(el.getAttribute('class') || '', sprintf(_templateObject2(), s)(el.getAttribute('title')))); // add placeholder to choice button

        this.options.placeholder = this.options.placeholder || el.getAttribute('placeholder') || '';
        this.$choice = $(sprintf(_templateObject3(), s)(this.options.placeholder)); // default position is bottom

        this.$drop = $(sprintf(_templateObject4(), s)(this.options.position));

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
          $(document).click(function (e) {
            if ($(e.target)[0] === _this.$choice[0] || $(e.target).parents('.ms-choice')[0] === _this.$choice[0]) {
              return;
            }

            if (($(e.target)[0] === _this.$drop[0] || $(e.target).parents('.ms-drop')[0] !== _this.$drop[0] && e.target !== el) && _this.options.isOpen) {
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
          this.options.data.forEach(function (row, i) {
            if (row.type === 'optgroup') {
              row.group = row.group || "group_".concat(i);
              row.children.forEach(function (child) {
                child.group = child.group || row.group;
              });
            }
          });
          this.data = this.options.data.map(function (it) {
            if (typeof it === 'string' || typeof it === 'number') {
              return {
                text: it,
                value: it
              };
            }

            return it;
          });
          return;
        }

        $.each(this.$el.children(), function (i, elm) {
          var row = _this2.initRow(i, elm);

          if (row) {
            data.push(_this2.initRow(i, elm));
          }
        });
        this.options.data = data;
        this.data = data;
        this.fromHtml = true;
      }
    }, {
      key: "initRow",
      value: function initRow(i, elm, group, groupDisabled) {
        var _this3 = this;

        var row = {};
        var $elm = $(elm);

        if ($elm.is('option')) {
          row.type = 'option';
          row.group = group;
          row.text = this.options.textTemplate($elm);
          row.value = elm.value;
          row.selected = elm.selected;
          row.disabled = groupDisabled || elm.disabled;
          row.classes = elm.getAttribute('class') || '';
          row.title = elm.getAttribute('title');
          return row;
        }

        if ($elm.is('optgroup')) {
          row.type = 'optgroup';
          row.group = "group_".concat(i);
          row.label = this.options.labelTemplate($elm);
          row.disabled = elm.disabled;
          row.children = [];
          $.each($elm.children(), function (j, elem) {
            row.children.push(_this3.initRow(j, elem, row.group, row.disabled));
          });
          return row;
        }

        return null;
      }
    }, {
      key: "initFilter",
      value: function initFilter() {
        if (this.options.filter || !this.options.filterByDataLength) {
          return;
        }

        var length = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var option = _step.value;

            if (option.type === 'optgroup') {
              length += option.children.length;
            } else {
              length += 1;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.options.filter = length > this.options.filterByDataLength;
      }
    }, {
      key: "initDrop",
      value: function initDrop() {
        var _this4 = this;

        this.initList();
        this.events();
        this.update(true);
        this.updateOptGroupSelect(true);
        this.updateSelectAll(false, true);

        if (this.options.isOpen) {
          this.open();
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
        var _this5 = this;

        var html = [];

        if (this.options.filter) {
          html.push("\n        <div class=\"ms-search\">\n          <input type=\"text\" autocomplete=\"off\" autocorrect=\"off\"\n            autocapitalize=\"off\" spellcheck=\"false\"\n            ".concat(sprintf(_templateObject5(), s)(this.options.filterPlaceholder), ">\n        </div>\n      "));
        }

        html.push('<ul>');

        if (this.options.selectAll && !this.options.single) {
          html.push(['<li class="ms-select-all">', '<label>', sprintf(_templateObject6(), s)(this.selectAllName), "<span>".concat(this.options.formatSelectAll(), "</span>"), '</label>', '</li>'].join(''));
        }

        html.push(this.data.map(function (row) {
          return _this5.initListItem(row);
        }).join(''));
        html.push(sprintf(_templateObject7(), s)(this.options.formatNoMatchesFound()));
        html.push('</ul>');
        this.$drop.html(html.join(''));
        this.$drop.find('ul').css('max-height', "".concat(this.options.maxHeight, "px"));
        this.$drop.find('.multiple').css('width', "".concat(this.options.multipleWidth, "px"));
        this.$searchInput = this.$drop.find('.ms-search input');
        this.$selectAll = this.$drop.find("input[".concat(this.selectAllName, "]"));
        this.$selectGroups = this.$drop.find("input[".concat(this.selectGroupName, "],span[").concat(this.selectGroupName, "]"));
        this.$selectItems = this.$drop.find("input[".concat(this.selectItemName, "]:enabled"));
        this.$disableItems = this.$drop.find("input[".concat(this.selectItemName, "]:disabled"));
        this.$noResults = this.$drop.find('.ms-no-results');
      }
    }, {
      key: "initListItem",
      value: function initListItem(row) {
        var _this6 = this;

        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var title = sprintf(_templateObject8(), s)(row.title);
        var multiple = this.options.multiple ? 'multiple' : '';
        var type = this.options.single ? 'radio' : 'checkbox';
        var classes = '';

        if (this.options.single && !this.options.singleRadio) {
          classes = 'hide-radio ';
        }

        if (row.type === 'optgroup') {
          var _customStyle = this.options.styler(row);

          var _style = _customStyle ? sprintf(_templateObject9(), s)(_customStyle) : '';

          var html = [];
          html.push(["<li class=\"group ".concat(classes, "\" ").concat(_style, ">"), sprintf(_templateObject10(), s, s)(row.disabled ? 'disabled' : '', row.group), this.options.hideOptgroupCheckboxes || this.options.single ? sprintf(_templateObject11(), s)(this.selectGroupName) : sprintf(_templateObject12(), s, s)(this.selectGroupName, row.disabled ? 'disabled="disabled"' : ''), row.label, '</label>', '</li>'].join(''));
          html.push(row.children.map(function (child) {
            return _this6.initListItem(child, 1);
          }).join(''));
          return html.join('');
        }

        var customStyle = this.options.styler(row);
        var style = customStyle ? sprintf(_templateObject13(), s)(customStyle) : '';
        classes += row.classes || '';

        if (level && this.options.single) {
          classes += "option-level-".concat(level, " ");
        }

        return [sprintf(_templateObject14(), s, s, s, s)(multiple, classes, title, style), sprintf(_templateObject15(), s)(row.disabled ? 'disabled' : ''), sprintf(_templateObject16(), s, s, s, s, s, s)(type, row.value, this.selectItemName, row.selected ? ' checked="checked"' : '', row.disabled ? ' disabled="disabled"' : '', sprintf(_templateObject17(), s)(row.group)), sprintf(_templateObject18(), s)(row.text), '</label>', '</li>'].join('');
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
      key: "events",
      value: function events() {
        var _this7 = this;

        var toggleOpen = function toggleOpen(e) {
          e.preventDefault();

          _this7[_this7.options.isOpen ? 'close' : 'open']();
        };

        if (this.$label && this.$label.length) {
          this.$label.off('click').on('click', function (e) {
            if (e.target.nodeName.toLowerCase() !== 'label') {
              return;
            }

            toggleOpen(e);

            if (!_this7.options.filter || !_this7.options.isOpen) {
              _this7.focus();
            }

            e.stopPropagation(); // Causes lost focus otherwise
          });
        }

        this.$choice.off('click').on('click', toggleOpen).off('focus').on('focus', this.options.onFocus).off('blur').on('blur', this.options.onBlur);
        this.$parent.off('keydown').on('keydown', function (e) {
          // esc key
          if (e.which === 27 && !_this7.options.keepOpen) {
            _this7.close();

            _this7.$choice.focus();
          }
        });
        this.$searchInput.off('keydown').on('keydown', function (e) {
          // Ensure shift-tab causes lost focus from filter as with clicking away
          if (e.keyCode === 9 && e.shiftKey) {
            _this7.close();
          }
        }).off('keyup').on('keyup', function (e) {
          // enter or space
          // Avoid selecting/deselecting if no choices made
          if (_this7.options.filterAcceptOnEnter && [13, 32].includes(e.which) && _this7.$searchInput.val()) {
            if (_this7.options.single) {
              var $items = _this7.$selectItems.closest('li').filter(':visible');

              if ($items.length) {
                _this7.setSelects([$items.first().find("input[".concat(_this7.selectItemName, "]")).val()]);
              }
            } else {
              _this7.$selectAll.click();
            }

            _this7.close();

            _this7.focus();

            return;
          }

          _this7.filter();
        });
        this.$selectAll.off('click').on('click', function (e) {
          var checked = $(e.currentTarget).prop('checked');

          var $items = _this7.$selectItems.filter(':visible');

          if ($items.length === _this7.$selectItems.length) {
            _this7[checked ? 'checkAll' : 'uncheckAll']();
          } else {
            // when the filter option is true
            _this7.$selectGroups.prop('checked', checked);

            $items.prop('checked', checked);

            _this7.options[checked ? 'onCheckAll' : 'onUncheckAll']();

            _this7.update();
          }
        });
        this.$selectGroups.off('click').on('click', function (e) {
          var $this = $(e.currentTarget);
          var group = $this.parent()[0].getAttribute('data-group');

          var $items = _this7.$selectItems.filter(':visible');

          var $children = $items.filter(sprintf(_templateObject19(), s)(group));
          var checked = $children.length !== $children.filter(':checked').length;
          $children.prop('checked', checked);

          _this7.updateSelectAll(true);

          _this7.update();

          _this7.options.onOptgroupClick({
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

          if (_this7.options.single) {
            var clickedVal = $this.val();

            _this7.$selectItems.filter(function (i, el) {
              return $(el).val() !== clickedVal;
            }).each(function (i, el) {
              $(el).prop('checked', false);
            });
          }

          _this7.updateSelectAll(true);

          _this7.update();

          _this7.updateOptGroupSelect();

          _this7.options.onClick({
            label: $this.parent().text(),
            value: $this.val(),
            checked: $this.prop('checked')
          });

          if (_this7.options.single && _this7.options.isOpen && !_this7.options.keepOpen) {
            _this7.close();
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

        if (!this.data.length) {
          this.$selectAll.parent().hide();
          this.$noResults.show();
        }

        if (this.options.container) {
          var offset = this.$drop.offset();
          this.$drop.appendTo($(this.options.container));
          this.$drop.offset({
            top: offset.top,
            left: offset.left
          }).css('min-width', 'auto').outerWidth(this.$parent.outerWidth());
        }

        if (this.data.length && this.options.filter) {
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
        var textSelects = this.getSelects('text');

        if (this.options.displayHtml) {
          textSelects = this.getSelects('html');
        } else if (this.options.displayValues) {
          textSelects = this.getSelects();
        }

        var $span = this.$choice.find('>span');
        var sl = textSelects.length;
        var html = '';

        if (sl === 0) {
          $span.addClass('placeholder').html(this.options.placeholder);
        } else if (sl < this.options.minimumCountSelected) {
          html = textSelects.join(this.options.displayDelimiter);
        } else if (this.options.formatAllSelected() && sl === this.$selectItems.length + this.$disableItems.length) {
          html = this.options.formatAllSelected();
        } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
          html = "".concat(textSelects.slice(0, this.options.minimumCountSelected).join(this.options.displayDelimiter), "...");
        } else if (this.options.formatCountSelected() && sl > this.options.minimumCountSelected) {
          html = this.options.formatCountSelected(sl, this.$selectItems.length + this.$disableItems.length);
        } else {
          html = textSelects.join(this.options.displayDelimiter);
        }

        if (html) {
          $span.removeClass('placeholder').html(html);
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
      value: function updateSelectAll(triggerEvent) {
        var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var $items = this.$selectItems;

        if (!all) {
          $items = $items.filter(':visible');
        }

        var selectedLength = $items.filter(':checked').length;
        this.$selectAll.prop('checked', selectedLength === $items.length);

        if (triggerEvent) {
          if (selectedLength === $items.length) {
            this.options.onCheckAll();
          } else if (selectedLength === 0) {
            this.options.onUncheckAll();
          }
        }
      }
    }, {
      key: "updateOptGroupSelect",
      value: function updateOptGroupSelect() {
        var all = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var $items = this.$selectItems;

        if (!all) {
          $items = $items.filter(':visible');
        }

        $.each(this.$selectGroups, function (i, val) {
          var group = $(val).parent()[0].getAttribute('data-group');
          var $children = $items.filter(sprintf(_templateObject20(), s)(group));
          $(val).prop('checked', $children.length && $children.length === $children.filter(':checked').length);
        });
      }
    }, {
      key: "getOptions",
      value: function getOptions() {
        // deep copy and remove data
        var options = $.extend({}, this.options);
        delete options.data;
        return $.extend(true, {}, options);
      }
    }, {
      key: "refreshOptions",
      value: function refreshOptions(options) {
        // If the objects are equivalent then avoid the call of destroy / init methods
        if (compareObjects(this.options, options, true)) {
          return;
        }

        this.options = $.extend(this.options, options);
        this.destroy();
        this.init();
      } // value html, or text, default: 'value'

    }, {
      key: "getSelects",
      value: function getSelects(type) {
        var _this8 = this;

        var texts = [];
        var values = [];
        this.$drop.find(sprintf(_templateObject21(), s)(this.selectItemName)).each(function (i, el) {
          texts.push($(el).next()[type === 'html' ? 'html' : 'text']());
          values.push($(el).val());
        });

        if (type === 'text' && this.$selectGroups.length && !this.options.single) {
          texts = [];
          this.$selectGroups.each(function (i, el) {
            var html = [];
            var text = $.trim($(el).parent().text());
            var group = $(el).parent().data('group');

            var $children = _this8.$drop.find(sprintf(_templateObject22(), s, s)(_this8.selectItemName, group));

            var $selected = $children.filter(':checked');

            if (!$selected.length) {
              return;
            }

            html.push('[');
            html.push(text);

            if ($children.length >= $selected.length) {
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

        return ['html', 'text'].includes(type) ? texts : values;
      }
    }, {
      key: "setSelects",
      value: function setSelects(values) {
        var _this9 = this;

        this.$selectItems.prop('checked', false);
        this.$disableItems.prop('checked', false);
        $.each(values, function (i, value) {
          _this9.$selectItems.filter(sprintf(_templateObject23(), s)(value)).prop('checked', true);

          _this9.$disableItems.filter(sprintf(_templateObject24(), s)(value)).prop('checked', true);
        });
        this.$selectAll.prop('checked', this.$selectItems.length === this.$selectItems.filter(':checked').length + this.$disableItems.filter(':checked').length);
        $.each(this.$selectGroups, function (i, val) {
          var group = $(val).parent()[0].getAttribute('data-group');

          var $children = _this9.$selectItems.filter("[data-group=\"".concat(group, "\"]"));

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
      key: "check",
      value: function check(value) {
        if (this.options.single) {
          this.$selectItems.prop('checked', false);
          this.$disableItems.prop('checked', false);
        }

        this._check(value, true);
      }
    }, {
      key: "uncheck",
      value: function uncheck(value) {
        this._check(value, false);
      }
    }, {
      key: "_check",
      value: function _check(value, checked) {
        this.$selectItems.filter(sprintf(_templateObject25(), s)(value)).prop('checked', checked);
        this.$disableItems.filter(sprintf(_templateObject26(), s)(value)).prop('checked', checked);
        this.update();
        this.updateOptGroupSelect(true);
        this.updateSelectAll(true, true);
      }
    }, {
      key: "checkAll",
      value: function checkAll() {
        this._checkAll(true);

        this.options.onCheckAll();
      }
    }, {
      key: "uncheckAll",
      value: function uncheckAll() {
        this._checkAll(false);

        this.options.onUncheckAll();
      }
    }, {
      key: "_checkAll",
      value: function _checkAll(checked) {
        this.$selectItems.prop('checked', checked);
        this.$selectGroups.prop('checked', checked);
        this.$selectAll.prop('checked', checked);
        this.update();
      }
    }, {
      key: "checkInvert",
      value: function checkInvert() {
        if (this.options.single) {
          return;
        }

        this.$selectItems.each(function (i, el) {
          $(el).prop('checked', !$(el).prop('checked'));
        });
        this.update();
        this.updateOptGroupSelect(true);
        this.updateSelectAll(true, true);
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
      value: function filter() {
        var _this10 = this;

        var originalText = $.trim(this.$searchInput.val());
        var text = originalText.toLowerCase();

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

              var hasText = _this10.options.customFilter(removeDiacritics($parent.text().toLowerCase()), removeDiacritics(text), $parent.text(), originalText);

              $parent.closest('li')[hasText ? 'show' : 'hide']();
            });
          }

          this.$disableItems.closest('li').hide();
          this.$selectGroups.each(function (i, el) {
            var $parent = $(el).parent();
            var group = $parent[0].getAttribute('data-group');

            if (_this10.options.filterGroup) {
              var hasText = _this10.options.customFilter(removeDiacritics($parent.text().toLowerCase()), removeDiacritics(text), $parent.text(), originalText);

              var func = hasText ? 'show' : 'hide';
              $parent.closest('li')[func]();

              _this10.$selectItems.filter("[data-group=\"".concat(group, "\"]")).closest('li')[func]();
            } else {
              var _hasText = _this10.$selectItems.filter("[data-group=\"".concat(group, "\"]")).closest('li').filter(':visible').length;

              $parent.closest('li')[_hasText ? 'show' : 'hide']();
            }
          }); // Check if no matches found

          if (this.$selectItems.closest('li').filter(':visible').length) {
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
        if (!this.$parent) {
          return;
        }

        this.$el.before(this.$parent).removeClass('ms-offscreen');
        this.$parent.remove();

        if (this.fromHtml) {
          delete this.options.data;
          this.fromHtml = false;
        }
      }
    }]);

    return MultipleSelect;
  }();

  $.fn.multipleSelect = function (option) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var value;
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

        if ($.inArray(option, Constants.METHODS) < 0) {
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

  $.fn.multipleSelect.defaults = Constants.DEFAULTS;
  $.fn.multipleSelect.locales = Constants.LOCALES;
  $.fn.multipleSelect.methods = Constants.METHODS;

}));
