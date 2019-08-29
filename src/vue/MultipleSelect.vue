<template>
  <select :multiple="!options.single">
    <slot />
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
  mounted () {
    this.$select = $(this.$el)

    this._initSelect()
  },
  methods: {
    _initSelect () {
      const options = {
        ...deepCopy(this.options),
        data: deepCopy(this.data)
      }
      if (!this._hasInit) {
        this.$select.multipleSelect(options)
        this._hasInit = true
      } else {
        this.refreshOptions(options)
      }
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
  },
  watch: {
    options: {
      handler () {
        this._initSelect()
      },
      deep: true
    },
    data: {
      handler () {
        this.load(deepCopy(this.data))
      },
      deep: true
    }
  }
}
</script>
