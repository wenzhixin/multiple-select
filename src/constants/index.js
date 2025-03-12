const VERSION = '2.1.1'
const BLOCK_ROWS = 500
const CLUSTER_BLOCKS = 4

const DEFAULTS = {
  name: '',
  placeholder: '',
  classes: '',
  classPrefix: '',
  classInput: '',
  data: undefined,
  locale: undefined,

  selectAll: true,
  single: undefined,
  singleRadio: false,
  multiple: false,
  hideOptgroupCheckboxes: false,
  multipleWidth: 80,
  width: undefined,
  size: undefined,
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
  filterSelectAll: true,
  customFilter ({ text, label, search }) {
    return (label || text).includes(search)
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
  onBeforeClick () {
    return true
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
    return `${count} of ${total} selected`
  },
  formatNoMatchesFound () {
    return 'No matches found'
  }
}

const METHODS = [
  'getOptions', 'refreshOptions',
  'getData',
  'getSelects', 'setSelects',
  'enable', 'disable',
  'open', 'close',
  'check', 'uncheck',
  'checkAll', 'uncheckAll',
  'checkInvert',
  'focus', 'blur',
  'refresh', 'resetFilter',
  'destroy'
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
