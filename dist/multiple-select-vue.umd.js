(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("vue")) : typeof define === "function" && define.amd ? define(["vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.MultipleSelect = factory(global.Vue));
})(this, function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const $ = window.jQuery;
  const deepCopy = (arg) => {
    if (!arg) {
      return arg;
    }
    return $.extend(true, Array.isArray(arg) ? [] : {}, arg);
  };
  const getEventNames = () => {
    const events = [];
    for (const event in $.fn.multipleSelect.defaults) {
      if (/^on[A-Z]/.test(event)) {
        events.push(event.replace(/([A-Z])/g, "-$1").toLowerCase());
      }
    }
    return events;
  };
  const _sfc_main = {
    name: "MultipleSelect",
    props: {
      modelValue: {
        type: [String, Number, Array, Object],
        default: void 0
      },
      value: {
        type: [String, Number, Array, Object],
        default: void 0
      },
      name: {
        type: String,
        default: void 0
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
        default: void 0
      },
      size: {
        type: String,
        default: void 0
      },
      data: {
        type: [Array, Object],
        default() {
          return void 0;
        }
      },
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    emits: ["update:modelValue", "change", ...getEventNames()],
    data() {
      return {
        currentValue: this.value === void 0 ? this.modelValue : this.value,
        children: []
      };
    },
    watch: {
      modelValue(val) {
        if (this.currentValue === val) {
          return;
        }
        this.currentValue = val;
        this._initDefaultValue();
      },
      value(val) {
        if (this.currentValue === val) {
          return;
        }
        this.currentValue = val;
        this._initDefaultValue();
      },
      multiple() {
        this._initSelect();
      },
      disabled() {
        this.$nextTick(() => {
          if (this.disabled) {
            this.disable();
          } else {
            this.enable();
          }
        });
      },
      width() {
        this._initSelectValue();
      },
      options: {
        handler() {
          this._initSelectValue();
        },
        deep: true
      },
      data: {
        handler() {
          this._initSelectValue();
        },
        deep: true
      }
    },
    updated() {
      const children = [
        ...this.$el.options,
        ...this.$el.getElementsByTagName("optgroup")
      ];
      if (children.length !== this.children.length || children.some((item, index) => item !== this.children[index])) {
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
    unmounted() {
      this.destroy(true);
      this.observer.disconnect();
    },
    mounted() {
      this._refresh();
      this.$select = $(this.$el).change(() => {
        const selects = this.getSelects();
        if (Array.isArray(this.currentValue)) {
          this.currentValue = selects;
        } else if (typeof this.currentValue === "number") {
          this.currentValue = selects.length ? +selects[0] : void 0;
        } else {
          this.currentValue = selects.length ? selects[0] : void 0;
        }
        this.$emit("update:modelValue", this.currentValue);
        this.$emit("change", this.currentValue);
      });
      this.observer = new MutationObserver(() => {
        this._update();
      });
      if (this._hasInit && this.$select.val() && (typeof this.currentValue === "undefined" || Array.isArray(this.currentValue) && !this.currentValue.length)) {
        this.currentValue = this.$select.val();
        this.$emit("update:modelValue", this.currentValue);
        this.$emit("change", this.currentValue);
      }
      for (const event in $.fn.multipleSelect.defaults) {
        if (/^on[A-Z]/.test(event)) {
          $.fn.multipleSelect.defaults[event] = (...args) => {
            this.$emit(event.replace(/([A-Z])/g, "-$1").toLowerCase(), ...args);
          };
        }
      }
      this._initSelectValue();
    },
    methods: {
      _update() {
        this.$nextTick(() => {
          this._refresh();
          this._initSelectValue();
        });
      },
      _initSelectValue() {
        this._initSelect();
        if (typeof this.currentValue === "undefined" || Array.isArray(this.currentValue) && !this.currentValue.length) {
          return;
        }
        this._initDefaultValue();
      },
      _initSelect() {
        if (!this.$select) {
          return;
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
      _initDefaultValue() {
        this.$nextTick(() => {
          try {
            this.setSelects(Array.isArray(this.currentValue) ? this.currentValue : [this.currentValue], null, true);
          } catch (e) {
          }
        });
      },
      ...(() => {
        const res = {};
        for (const method of $.fn.multipleSelect.methods) {
          res[method] = function(...args) {
            return this.$select.multipleSelect(method, ...args);
          };
        }
        return res;
      })(),
      _refresh() {
        for (const el of this.$el.options) {
          if (el.value) {
            $(el).data("value", el.value);
          }
        }
      },
      refresh() {
        this._refresh();
        this.$select.multipleSelect("refresh");
      }
    }
  };
  const _hoisted_1 = ["name", "multiple", "disabled"];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("select", {
      name: $props.name,
      multiple: $props.multiple,
      disabled: $props.disabled
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_1);
  }
  const MultipleSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  return MultipleSelect;
});
