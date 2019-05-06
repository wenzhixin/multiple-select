// sprintf format specifiers
const s = 's'

// it only does '%s', and return '' when arguments are undefined
const sprintf = (strings, ...formats) => {
  return (...args) => {
    let retStr = ''
    return strings.some((str, i) => {
      switch (formats[i]) {
        default:
          throw new TypeError('Unrecognized sprintf format')
        case 's':
          const arg = args[i]
          if (arg === undefined) {
            return true
          }
          retStr += str + arg
          return false
      }
    })
      ? retStr
      : ''
  }
}

export {s, sprintf}
