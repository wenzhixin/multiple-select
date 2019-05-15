// sprintf format specifiers
const s = 's'

// it only does '%s', and return '' when arguments are undefined
const sprintf = (strings, ...formats) => {
  return (...args) => {
    let retStr = ''
    return strings.slice(0, -1).some((str, i) => {
      switch (formats[i]) {
        default:
          throw new TypeError('Unrecognized sprintf format')
        case 's': {
          const arg = args[i]
          if (arg === null || arg === undefined) {
            return true
          }
          retStr += str + arg
          return false
        }
      }
    })
      ? ''
      : retStr + strings.slice(-1)
  }
}

export {s, sprintf}
