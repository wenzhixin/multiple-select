window._config = {
  isDebug: ['localhost'].includes(location.hostname),
  cdnUrl: 'https://unpkg.com/multiple-select@3/dist/',
  localUrl: '/multiple-select/dist/',
}

function _getLink(file) {
  var url = file
  if (!/^http/.test(file)) {
    url = window._config.cdnUrl + file

    if (window._config.isDebug) {
      url = window._config.localUrl + file.replace(/\.min/, '') + '?t=' + (+new Date())
    }
  }
  return '<link href="' + url + '" rel="stylesheet">'
}

function _getScript(file, isScriptTag) {
  var url = file
  if (!/^http/.test(file)) {
    url = window._config.cdnUrl + file

    if (window._config.isDebug) {
      url = window._config.localUrl + file.replace(/\.min/, '') + '?t=' + (+new Date())
    }
  }
  if (isScriptTag) {
    return '<script src="' + url + '"></script>'
  }
  return url
}

function _link(file) {
  document.head.insertAdjacentHTML('beforeend', _getLink(file))
}

function _script(file, callback) {
  var head = document.head
  var script = document.createElement('script')

  if (window._config.isDebug && !/^http/.test(file)) {
    script.type = 'module'
  }

  script.src = _getScript(file)

  var done = false
  // Attach handlers for all browsers
  script.onload = script.onreadystatechange = function() {
    if (!done && (!this.readyState ||
      this.readyState === 'loaded' || this.readyState === 'complete')) {
      done = true
      if (callback)
        callback()

      // Handle memory leak in IE
      script.onload = script.onreadystatechange = null
    }
  }

  head.appendChild(script)
}

function _scripts(scripts, callback) {
  var eachSeries = function (arr, iterator, callback_) {
    var callback = callback_ || function () {}
    if (!arr.length) {
      return callback()
    }
    var completed = 0
    var iterate = function () {
      iterator(arr[completed], function (err) {
        if (err) {
          callback(err)
          callback = function () {}
        } else {
          completed += 1
          if (completed >= arr.length) {
            callback(null)
          } else {
            iterate()
          }
        }
      })
    }
    iterate()
  }

  eachSeries(scripts, _script, function () {
    callback()
  })
}

function _importsScript (moduleMap) {
  if (!moduleMap || !Object.keys(moduleMap).length) {
    return
  }
  const imports = {}
  for (var [k, v] of Object.entries(moduleMap)) {
    imports[k] = _getScript(v)
  }
  const script = document.createElement('script')

  script.setAttribute('type', 'importmap')
  script.innerHTML = `\n${JSON.stringify({ imports }, null, 4)}\n`
  return script
}

function _loadModuleMap(moduleMap) {
  const script = _importsScript(moduleMap)

  script && document.head.appendChild(script)
}

function _beautifySource(data) {
  var lines = data.split('\n')
  var scriptStart = lines.indexOf('<script>')
  var scriptEnd = lines.indexOf('</script>', scriptStart)
  var strings = lines.slice(scriptStart + 1, scriptEnd).map(x => x.trim())
  /* eslint-disable no-control-regex */
  var obj = eval('(' + strings.join('').replace(/[^\u0000-\u007E]/g, '')
    .replace(/^init\((.*)\)$/, '$1') + ')')

  var result = obj.links.map(_getLink)
  const imports = _importsScript(obj.modules || { 'multiple-select': 'multiple-select.js' })
  
  if (imports) {
    result.push(imports.outerHTML)
  }

  result = result.concat(obj.scripts?.map(x => _getScript(x, true)) || [])
  lines = result.concat(lines.slice(scriptEnd + 1))

  return lines.join('\n')
}

(function () {
  var query = new URLSearchParams(location.search)
  var url = query.get('url')
  

  query.delete('url')

  fetch(url + '?' + query.toString()).then(res => {
    if (!res.ok) {
      parent.location.href = 'index.html'
      return
    }
    res.text().then(data => {
      var example = document.getElementById('example')
      var source = document.getElementById('source')
      var isSource = location.hash.substring(1) === 'view-source'

      example.innerHTML = data
      setTimeout(() => {
        example.querySelectorAll('script').forEach(item => {
          const script = document.createElement('script')
          
          script.innerHTML = item.innerHTML
          for (const attr of item.attributes) {
            script.setAttribute(attr.name, attr.value)
          }
          
          example.append(script)
        })
        if (isSource) {
          example.style.display = 'none'
          document.querySelector('.source-pre').style.display = 'block'
          source.innerText = _beautifySource(data)
          window.hljs.highlightAll()
        }
      }, 1)
    })
  })
})()

window.init = function (options_) {
  var options = Object.assign({
    title: '',
    desc: '',
    links: [],
    scripts: [],
    modules: {
      'multiple-select': 'multiple-select.js'
    },
    bootstrapVersion: 3,
    callback: function () {
      if (typeof window.mounted === 'function') {
        window.mounted()
      }
    }
  }, options_)

  document.querySelector('.bd-title span').innerHTML = options.title
  document.querySelector('.bd-lead').innerHTML = options.desc
  options.links.forEach(function (file) {
    _link(file)
  })
  _loadModuleMap(options.modules)
  _scripts(options.scripts, options.callback)
}

window.importModule = function (file) {
  return import(_getScript(file))
}
window.importDefault = function (file) {
  return importModule(file).then(x => x.default)
}