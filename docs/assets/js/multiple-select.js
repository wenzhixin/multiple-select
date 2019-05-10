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

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
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

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

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

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$1 = typeof window == 'object' && window && window.Math == Math ? window
    : typeof self == 'object' && self && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();

  var document$1 = global$1.document;
  // typeof document.createElement is 'object' in old IE
  var exist = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return exist ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  var nativeDefineProperty = Object.defineProperty;

  var f = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
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

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var hide = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      hide(global$1, key, value);
    } catch (error) {
      global$1[key] = value;
    } return value;
  };

  var shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = global$1[SHARED] || setGlobal(SHARED, {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.0.1',
    mode: 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
  };

  // Chrome 38 Symbol has incorrect toString conversion
  var nativeSymbol = !fails(function () {
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });

  var store = shared('wks');

  var Symbol$1 = global$1.Symbol;


  var wellKnownSymbol = function (name) {
    return store[name] || (store[name] = nativeSymbol && Symbol$1[name]
      || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
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

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = nativeGetOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$1
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings


  var split = ''.split;

  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var nativeGetOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  var f$2 = descriptors ? nativeGetOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$2
  };

  var functionToString = shared('native-function-to-string', Function.toString);

  var WeakMap = global$1.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

  var shared$1 = shared('keys');


  var sharedKey = function (key) {
    return shared$1[key] || (shared$1[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global$1.WeakMap;
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
    var store$1 = new WeakMap$1();
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;
    set = function (it, metadata) {
      wmset.call(store$1, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store$1, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store$1, it);
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
    if (O === global$1) {
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
  // false -> Array#indexOf
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  // true  -> Array#includes
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  var arrayIncludes = function (IS_INCLUDES) {
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
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIndexOf = arrayIncludes(false);


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
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

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

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

  var Reflect = global$1.Reflect;

  // all object keys, includes non-enumerable and symbols
  var ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
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

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






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
      target = global$1;
    } else if (STATIC) {
      target = global$1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
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

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  // optional / simple context binding
  var bindContext = function (fn, that, length) {
    aFunction(fn);
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

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
  // 0 -> Array#forEach
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  // 1 -> Array#map
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  // 2 -> Array#filter
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  // 3 -> Array#some
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  // 4 -> Array#every
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  // 5 -> Array#find
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  // 6 -> Array#findIndex
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  var arrayMethods = function (TYPE, specificCreate) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = specificCreate || arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = bindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
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
            case 2: target.push(value);       // filter
          } else if (IS_EVERY) return false;  // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var internalFilter = arrayMethods(2);

  var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !SPECIES_SUPPORT$1 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return internalFilter(this, callbackfn, arguments[1]);
    }
  });

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var key;
    while (length > i) objectDefineProperty.f(O, key = keys[i++], Properties[key]);
    return O;
  };

  var document$2 = global$1.document;

  var html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])





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

  var internalFind = arrayMethods(5);
  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return internalFind(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var internalIncludes = arrayIncludes(true);

  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  _export({ target: 'Array', proto: true }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return internalIncludes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

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

  var SPECIES$2 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$1 = Math.max;

  var SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');

  // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export({ target: 'Array', proto: true, forced: !SPECIES_SUPPORT$2 }, {
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

  var defineProperty = objectDefineProperty.f;
  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.github.io/ecma262/#sec-function-instances-name
  if (descriptors && !(NAME in FunctionPrototype)) {
    defineProperty(FunctionPrototype, NAME, {
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

  var MATCH = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.github.io/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  // helper for String#{startsWith, endsWith, includes}



  var validateStringMethodArguments = function (that, searchString, NAME) {
    if (isRegexp(searchString)) {
      throw TypeError('String.prototype.' + NAME + " doesn't accept regex");
    } return String(requireObjectCoercible(that));
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

  var INCLUDES = 'includes';

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic(INCLUDES);

  // `String.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.includes
  _export({ target: 'String', proto: true, forced: !CORRECT_IS_REGEXP_LOGIC }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~validateStringMethodArguments(this, searchString, INCLUDES)
        .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // CONVERT_TO_STRING: true  -> String#at
  // CONVERT_TO_STRING: false -> String#codePointAt
  var stringAt = function (that, pos, CONVERT_TO_STRING) {
    var S = String(requireObjectCoercible(that));
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

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? stringAt(S, index, true).length : 1);
  };

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
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

  var max$2 = Math.max;
  var min$2 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic(
    'replace',
    2,
    function (REPLACE, nativeReplace, maybeCallNative) {
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
            var position = max$2(min$2(toInteger(result.index), S.length), 0);
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
    }
  );

  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // 1 -> String#trimStart
  // 2 -> String#trimEnd
  // 3 -> String#trim
  var stringTrim = function (string, TYPE) {
    string = String(requireObjectCoercible(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var forcedStringTrimMethod = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var FORCED$1 = forcedStringTrimMethod('trim');

  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  _export({ target: 'String', proto: true, forced: FORCED$1 }, {
    trim: function trim() {
      return stringTrim(this, 3);
    }
  });

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
            var arg = args[i];

            if (arg === undefined) {
              return true;
            }

            retStr += str + arg;
            return false;
        }
      }) ? retStr + strings.slice(-1) : '';
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
    var data = _taggedTemplateLiteral([" style=\"width: ", "\""]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["<div class=\"ms-drop ", "\"", "></div>"]);

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

      this.$drop = $(sprintf(_templateObject5(), s, s)(this.options.position, sprintf(_templateObject6(), s)(this.options.dropWidth)));
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
          this.$drop.append("\n        <div class=\"ms-search\">\n          <input type=\"text\" autocomplete=\"off\" autocorrect=\"off\"\n            autocapitilize=\"off\" spellcheck=\"false\">\n        </div>\n      ");
        }

        if (this.options.selectAll && !this.options.single) {
          $ul.append("\n        <li class=\"ms-select-all\">\n          <label>\n            ".concat(sprintf(_templateObject7(), s)(this.selectAllName), "\n            ").concat(this.options.formatSelectAll(), "\n          </label>\n        </li>\n      "));
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
          $('.ms-parent').hover(function () {
            _this2.open();
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
          var style = sprintf(_templateObject10(), s)(this.options.styler(value));
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
            _this4.$selectGroups[0].checked = checked;
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
            children: $children.get(),
            instance: _this4
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
            checked: $this.prop('checked'),
            instance: _this4
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
        }

        if (this.options.filter) {
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
        var selects = this.options.displayValues ? this.getSelects() : this.getSelects('text');
        var $span = this.$choice.find('>span');
        var sl = selects.length;

        if (sl === 0) {
          $span.addClass('placeholder').html(this.options.placeholder);
        } else if (this.options.formatAllSelected() && sl === this.$selectItems.length + this.$disableItems.length) {
          $span.removeClass('placeholder').html(this.options.formatAllSelected());
        } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
          $span.removeClass('placeholder').text("".concat(selects.slice(0, this.options.minimumCountSelected).join(this.options.displayDelimiter), "..."));
        } else if (this.options.formatCountSelected() && sl > this.options.minimumCountSelected) {
          $span.removeClass('placeholder').html(this.options.formatCountSelected().replace(/#/g, selects.length).replace(/%/g, this.$selectItems.length + this.$disableItems.length));
        } else {
          $span.removeClass('placeholder').text(selects.join(this.options.displayDelimiter));
        }

        if (this.options.addTitle) {
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

        console.log(values);
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
          this.$selectAll.parent().show();
          this.$selectItems.parent().show();
          this.$disableItems.parent().show();
          this.$selectGroups.parent().show();
          this.$noResults.hide();
        } else {
          this.$selectItems.each(function (i, el) {
            var $parent = $(el).parent();
            $parent[!removeDiacritics($parent.text().toLowerCase()).includes(removeDiacritics(text)) ? 'hide' : 'show']();
          });
          this.$disableItems.parent().hide();
          this.$selectGroups.each(function (i, el) {
            var $parent = $(el).parent();
            var group = $parent[0].getAttribute('data-group');

            var $items = _this7.$selectItems.filter(':visible');

            $parent[$items.filter(sprintf(_templateObject24(), s)(group)).length ? 'show' : 'hide']();
          }); // Check if no matches found

          if (this.$selectItems.parent().filter(':visible').length) {
            this.$selectAll.parent().show();
            this.$noResults.hide();
          } else {
            this.$selectAll.parent().hide();
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
    allSelected: true,
    displayType: 'countSelected',
    displayValues: false,
    displayTitle: false,
    displayDelimiter: ', ',
    minimumCountSelected: 3,
    ellipsis: false,
    single: false,
    multiple: false,
    multipleWidth: 80,
    hideOptgroupCheckboxes: false,
    width: undefined,
    dropWidth: undefined,
    maxHeight: 250,
    position: 'bottom',
    isOpen: false,
    keepOpen: false,
    openOnHover: false,
    filter: false,
    filterPlaceholder: '',
    filterAcceptOnEnter: false,
    container: null,
    animate: 'none',
    formatSelectAll: function formatSelectAll() {
      return '[Select all]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'All selected';
    },
    formatCountSelected: function formatCountSelected() {
      return '# of % selected';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'No matches found';
    },
    styler: function styler() {
      return false;
    },
    textTemplate: function textTemplate($elm) {
      var el = $elm[0];
      return el.innerHTML;
    },
    labelTemplate: function labelTemplate($elm) {
      var el = $elm[0];
      return el.getAttribute('label');
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
