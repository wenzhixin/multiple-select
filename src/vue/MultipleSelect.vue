<template>
  <select
    :name="name"
    :multiple="multiple"
    :disabled="disabled"
  >
    <slot/>
  </select>
</template>

<script>
const $ = window.jQuery
const deepCopy = arg => {
  if (!arg) {
    return arg
  }
  return $.extend(true, Array.isArray(arg) ? [] : {}, arg)
}

export default {
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
      this.currentValue = this.value
      this._initDefaultValue()
    },
    multiple () {
      this._initSelect()
    },
    disabled () {
      this.$nextTick(() => {
        if (this.disabled) {
          this.disable()
        } else {
          this.enable()
        }
      })
    },
    width () {
      this._initSelectValue()
    },
    options: {
      handler () {
        this._initSelectValue()
      },
      deep: true
    },

    data: {
      handler () {
        this._initSelectValue()
      },
      deep: true
    }
  },

  beforeUpdate () {
    if (this.slotDefault || this.slotDefault !== this.$slots.default) {
      this.slotDefault = this.$slots.default
      this.$nextTick(() => {
        this._refresh()
        this._initSelectValue()
      })
    }
  },

  destroyed () {
    this.destroy(true)
  },

  mounted () {
    this._refresh()

    this.$select = $(this.$el).change(() => {
      const selects = this.getSelects()

      if (Array.isArray(this.currentValue)) {
        this.currentValue = selects
      } else if (typeof this.currentValue === 'number') {
        this.currentValue = selects.length ? +selects[0] : undefined
      } else {
        this.currentValue = selects.length ? selects[0] : undefined
      }

      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    })

    if (
      this._hasInit &&
      this.$select.val() &&
      (typeof this.currentValue === 'undefined' ||
      Array.isArray(this.currentValue) && !this.currentValue.length)
    ) {
      this.currentValue = this.$select.val()

      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    }

    for (const event in $.fn.multipleSelect.defaults) {
      if (/^on[A-Z]/.test(event)) {
        $.fn.multipleSelect.defaults[event] = (...args) => {
          this.$emit(event.replace(/([A-Z])/g, '-$1').toLowerCase(), ...args)
        }
      }
    }

    this._initSelectValue()
  },

  methods: {
    _initSelectValue () {
      this._initSelect()

      if (
        typeof this.currentValue === 'undefined' ||
        Array.isArray(this.currentValue) && !this.currentValue.length
      ) {
        return
      }

      this._initDefaultValue()
    },

    _initSelect () {
      const options = {
        ...deepCopy(this.options),
        single: !this.multiple,
        width: this.width,
        data: this.data
      }
      if (!this._hasInit) {
        this.$select.multipleSelect(options)
        this._hasInit = true
      } else {
        this.refreshOptions(options)
      }
    },

    _initDefaultValue () {
      this.$nextTick(() => {
        this.setSelects(Array.isArray(this.currentValue) ?
          this.currentValue : [this.currentValue], null, true)
      })
    },

    ...(() => {
      const res = {}
      for (const method of $.fn.multipleSelect.methods) {
        res[method] = function (...args) {
          return this.$select.multipleSelect(method, ...args)
        }
      }
      return res
    })(),

    _refresh () {
      if (this.$slots.default) {
        for (const el of this.$slots.default) {
          if (el.elm.nodeName === 'OPTION' && el.data.domProps && el.data.domProps.value) {
            $(el.elm).data('value', el.data.domProps.value)
          }
        }
      }
    },

    refresh () {
      this._refresh()
      this.$select.multipleSelect('refresh')
    }
  }
}
</script>
