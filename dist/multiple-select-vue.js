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

  var script = {
    name: 'MultipleSelect',

    props: {
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

    data () {
      return {
        currentValue: this.value
      }
    },

    watch: {
      value () {
        if (this.currentValue === this.value) {
          return
        }
        this.currentValue = this.value;
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

    beforeUpdate () {
      if (this.slotDefault || this.slotDefault !== this.$slots.default) {
        this.slotDefault = this.$slots.default;
        this.$nextTick(() => {
          this._refresh();
          this._initSelectValue();
        });
      }
    },

    destroyed () {
      this.destroy(true);
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

        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      });

      if (
        this._hasInit &&
        this.$select.val() &&
        (typeof this.currentValue === 'undefined' ||
        Array.isArray(this.currentValue) && !this.currentValue.length)
      ) {
        this.currentValue = this.$select.val();

        this.$emit('input', this.currentValue);
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
        if (this.$slots.default) {
          for (const el of this.$slots.default) {
            if (el.elm.nodeName === 'OPTION' && el.data.domProps && el.data.domProps.value) {
              $(el.elm).data('value', el.data.domProps.value);
            }
          }
        }
      },

      refresh () {
        this._refresh();
        this.$select.multipleSelect('refresh');
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "select",
      {
        attrs: { name: _vm.name, multiple: _vm.multiple, disabled: _vm.disabled }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  return __vue_component__;

}));
