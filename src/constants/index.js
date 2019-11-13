const VERSION = '1.5.2'
const BLOCK_ROWS = 50
const CLUSTER_BLOCKS = 4

const DEFAULTS = {
  name: '',
  placeholder: '',
  data: undefined,
  locale: undefined,

  selectAll: true,
  single: undefined,
  singleRadio: false,
  multiple: false,
  hideOptgroupCheckboxes: false,
  multipleWidth: 80,
  width: undefined,
  dropWidth: undefined,
  maxHeight: 250,
  maxHeightUnit: 'px',
  position: 'bottom',

  displayValues: false,
  displayTitle: false,
  displayDelimiter: ', ',
  minimumCountSelected: 3,
  ellipsis: false,

  isOpen: false,
  keepOpen: false,
  openOnHover: false,
  container: null,

  filter: false,
  filterGroup: false,
  filterPlaceholder: '',
  filterAcceptOnEnter: false,
  filterByDataLength: undefined,
  customFilter (label, text) { // originalLabel, originalText
    return label.includes(text)
  },

  showClear: false,
  animate: undefined,

  styler () {
    return false
  },
  textTemplate ($elm) {
    return $elm[0].innerHTML.trim()
  },
  labelTemplate ($elm) {
    return $elm[0].getAttribute('label')
  },

  onOpen () {
    return false
  },
  onClose () {
    return false
  },
  onCheckAll () {
    return false
  },
  onUncheckAll () {
    return false
  },
  onFocus () {
    return false
  },
  onBlur () {
    return false
  },
  onOptgroupClick () {
    return false
  },
  onClick () {
    return false
  },
  onFilter () {
    return false
  },
  onClear () {
    return false
  },
  onAfterCreate () {
    return false
  }
}

const EN = {
  formatSelectAll () {
    return '[Select all]'
  },
  formatAllSelected () {
    return 'All selected'
  },
  formatCountSelected (count, total) {
    return count + ' of ' + total + ' selected'
  },
  formatNoMatchesFound () {
    return 'No matches found'
  }
}

const METHODS = [
  'getOptions', 'refreshOptions',
  'getSelects', 'setSelects',
  'enable', 'disable',
  'open', 'close',
  'check', 'uncheck',
  'checkAll', 'uncheckAll',
  'checkInvert',
  'focus', 'blur',
  'refresh', 'destroy'
]

Object.assign(DEFAULTS, EN)

const Constants = {
  VERSION,

  BLOCK_ROWS,

  CLUSTER_BLOCKS,

  DEFAULTS,

  METHODS,

  LOCALES: {
    en: EN,
    'en-US': EN
  }
}

export default Constants
