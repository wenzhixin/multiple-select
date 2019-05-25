/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.3.1
 *
 * http://wenzhixin.net.cn/p/multiple-select/
 */

import MultipleSelect from './MultipleSelect.js'

$.fn.multipleSelect = function (option, ...args) {
  let value

  const allowedMethods = [
    'getSelects', 'setSelects',
    'enable', 'disable',
    'open', 'close',
    'checkAll', 'uncheckAll',
    'focus', 'blur',
    'refresh', 'destroy'
  ]

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
      if ($.inArray(option, allowedMethods) < 0) {
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
