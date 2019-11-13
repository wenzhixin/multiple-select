/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.5.2
 *
 * http://wenzhixin.net.cn/p/multiple-select/
 */

import Constants from './constants/index.js'
import MultipleSelect from './MultipleSelect.js'

$.fn.multipleSelect = function (option, ...args) {
  let value

  this.each((i, el) => {
    const $this = $(el)
    let data = $this.data('multipleSelect')

    const options = $.extend(
      {},
      $this.data(),
      typeof option === 'object' && option
    )

    if (!data) {
      data = new MultipleSelect($this, options)
      $this.data('multipleSelect', data)
    }

    if (typeof option === 'string') {
      if ($.inArray(option, Constants.METHODS) < 0) {
        throw new Error(`Unknown method: ${option}`)
      }
      value = data[option](...args)

      if (option === 'destroy') {
        $this.removeData('multipleSelect')
      }
    } else {
      data.init()
    }
  })

  return typeof value !== 'undefined' ? value : this
}

$.fn.multipleSelect.defaults = Constants.DEFAULTS
$.fn.multipleSelect.locales = Constants.LOCALES
$.fn.multipleSelect.methods = Constants.METHODS
