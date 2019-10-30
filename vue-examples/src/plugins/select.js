import 'multiple-select/dist/multiple-select.min.css'

import './jquery'
import Vue from 'vue'
import $ from 'jquery'
import 'multiple-select/src/multiple-select'
import 'multiple-select/dist/multiple-select-locale-all'

import MultipleSelect from 'multiple-select/src/vue/MultipleSelect'

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['en-US'])
Vue.component('MultipleSelect', MultipleSelect)
