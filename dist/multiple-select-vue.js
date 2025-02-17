(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MultipleSelect = factory());
})(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const $ = window.jQuery;
  const deepCopy = arg => {
    if (!arg) {
      return arg
    }
    return $.extend(true, Array.isArray(arg) ? [] : {}, arg)
  };

  const getEventNames = () => {
    const events = [];

    for (const event in $.fn.multipleSelect.defaults) {
      if (/^on[A-Z]/.test(event)) {
        events.push(event.replace(/([A-Z])/g, '-$1').toLowerCase());
      }
    }
    return events
  };

  var script = {
    name: 'MultipleSelect',

    props: {
      modelValue: {
        type: [String, Number, Array, Object],
        default: undefined
      },
      value: {
        type: [String, Number, Array, Object],
        default: undefined
      },
      name: {
        type: String,
        default: undefined
      },
      multiple: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: [Number, String],
        default: undefined
      },
      size: {
        type: String,
        default: undefined
      },
      data: {
        type: [Array, Object],
        default () {
          return undefined
        }
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },

    emits: ['update:modelValue', 'change', ...getEventNames()],

    data () {
      return {
        currentValue: this.value === undefined ? this.modelValue : this.value,
        children: []
      }
    },

    watch: {
      modelValue (val) {
        if (this.currentValue === val) {
          return
        }
        this.currentValue = val;
        this._initDefaultValue();
      },
      value (val) {
        if (this.currentValue === val) {
          return
        }
        this.currentValue = val;
        this._initDefaultValue();
      },
      multiple () {
        this._initSelect();
      },
      disabled () {
        this.$nextTick(() => {
          if (this.disabled) {
            this.disable();
          } else {
            this.enable();
          }
        });
      },
      width () {
        this._initSelectValue();
      },
      options: {
        handler () {
          this._initSelectValue();
        },
        deep: true
      },

      data: {
        handler () {
          this._initSelectValue();
        },
        deep: true
      }
    },

    updated () {
      const children = this.$el.querySelectorAll('option,optgroup');

      if (
        children.length !== this.children.length ||
        !Array.prototype.every.call(children, (item, index) => item === this.children[index])
      ) {
        this._update();
        this.observer.disconnect();

        for (const child of children) {
          this.observer.observe(child, {
            attributes: true,
            childList: true,
            subtree: true
          });
        }
        this.children = children;
      }
    },

    unmounted () {
      this.destroy(true);
      this.observer.disconnect();
    },

    mounted () {
      this._refresh();

      this.$select = $(this.$el).change(() => {
        const selects = this.getSelects();

        if (Array.isArray(this.currentValue)) {
          this.currentValue = selects;
        } else if (typeof this.currentValue === 'number') {
          this.currentValue = selects.length ? +selects[0] : undefined;
        } else {
          this.currentValue = selects.length ? selects[0] : undefined;
        }

        this.$emit('update:modelValue', this.currentValue);
        this.$emit('change', this.currentValue);
      });

      this.observer = new MutationObserver(() => {
        this._update();
      });

      if (
        this._hasInit &&
        this.$select.val() &&
        (typeof this.currentValue === 'undefined' ||
        Array.isArray(this.currentValue) && !this.currentValue.length)
      ) {
        this.currentValue = this.$select.val();

        this.$emit('update:modelValue', this.currentValue);
        this.$emit('change', this.currentValue);
      }

      for (const event in $.fn.multipleSelect.defaults) {
        if (/^on[A-Z]/.test(event)) {
          $.fn.multipleSelect.defaults[event] = (...args) => {
            this.$emit(event.replace(/([A-Z])/g, '-$1').toLowerCase(), ...args);
          };
        }
      }

      this._initSelectValue();
    },

    methods: {
      _update () {
        this.$nextTick(() => {
          this._refresh();
          this._initSelectValue();
        });
      },

      _initSelectValue () {
        this._initSelect();

        if (
          typeof this.currentValue === 'undefined' ||
          Array.isArray(this.currentValue) && !this.currentValue.length
        ) {
          return
        }

        this._initDefaultValue();
      },

      _initSelect () {
        if (!this.$select) {
          // before mounted
          return
        }
        const options = {
          ...deepCopy(this.options),
          single: !this.multiple,
          width: this.width,
          size: this.size,
          data: this.data
        };

        if (!this._hasInit) {
          this.$select.multipleSelect(options);
          this._hasInit = true;
        } else {
          this.refreshOptions(options);
        }
      },

      _initDefaultValue () {
        this.$nextTick(() => {
          try {
            this.setSelects(Array.isArray(this.currentValue) ?
              this.currentValue : [this.currentValue], null, true);
          } catch (e) {
            // ignore error
          }
        });
      },

      ...(() => {
        const res = {};

        for (const method of $.fn.multipleSelect.methods) {
          res[method] = function (...args) {
            return this.$select.multipleSelect(method, ...args)
          };
        }
        return res
      })(),

      _refresh () {
        this.$el.querySelectorAll('option').forEach(el => {
          if (el.value) {
            $(el).data('value', el.value);
          }
        });
      },

      refresh () {
        this._refresh();
        this.$select.multipleSelect('refresh');
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
      }
      return script;
  }

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "select",
      {
        attrs: { name: _vm.name, multiple: _vm.multiple, disabled: _vm.disabled },
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__);

  return __vue_component__;

}));
