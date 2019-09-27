<template>
  <select
    v-model="currentValue"
    :name="name"
    :multiple="!single"
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
      type: [String, Number, Array],
      default: undefined
    },
    name: {
      type: String,
      default: undefined
    },
    single: {
      type: Boolean,
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
      type: Array,
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
    single () {
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
      this._initSelect()
    },
    options: {
      handler () {
        this._initSelect()
      },
      deep: true
    },

    data: {
      handler () {
        this._initSelect()
      },
      deep: true
    }
  },

  mounted () {
    this.$select = $(this.$el).change(() => {
      const selects = this.getSelects()
      if (!selects.length) {
        return
      }

      this.currentValue = Array.isArray(this.currentValue) ?
        selects : selects[0]
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    })

    for (const event in $.fn.multipleSelect.defaults) {
      if (/^on[A-Z]/.test(event)) {
        $.fn.multipleSelect.defaults[event] = (...args) => {
          this.$emit(event, ...args)
        }
      }
    }

    this._initSelect()
    this._initDefaultValue()
  },

  destroyed () {
    this.destroy()
  },

  methods: {
    _initSelect () {
      const options = {
        ...deepCopy(this.options),
        single: this.single,
        width: this.width,
        data: deepCopy(this.data)
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
          this.currentValue : [this.currentValue])
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
    })()
  }
}
</script>
