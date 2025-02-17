import 'multiple-select/src/multiple-select.scss'

import './jquery'
import $ from 'jquery'
import 'multiple-select/src/multiple-select.js'
import 'multiple-select/src/locale/multiple-select-en-US'
import 'multiple-select/src/locale/multiple-select-zh-CN'

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US'])
