import 'multiple-select/dist/multiple-select.min.css'

import './jquery'
import $ from 'jquery'
import 'multiple-select/src/multiple-select'
import 'multiple-select/dist/multiple-select-locale-all'

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US'])
