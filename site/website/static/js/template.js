window._config = {
  isDebug: ['localhost'].indexOf(location.hostname) > -1,
  cdnUrl: 'https://unpkg.com/multiple-select@2.3.1/dist/',
  localUrl: 'http://localhost:8080/github/multiple-select/src/'
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
  $('head').append(_getLink(file))
}

function _script(file, callback) {
  var head = document.getElementsByTagName('head')[0]
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

function _beautifySource(data) {
  var lines = data.split('\n')
  var scriptStart = lines.indexOf('<script>')
  var scriptEnd = lines.indexOf('</script>', scriptStart)
  var strings = lines.slice(scriptStart + 1, scriptEnd)
  strings = strings.map(function (s) {
    return s.trim()
  })
  /* eslint-disable no-control-regex */
  var obj = eval('(' + strings.join('').replace(/[^\u0000-\u007E]/g, '')
    .replace(/^init\((.*)\)$/, '$1') + ')')

  var result = []
  result = result.concat(obj.links.map(_getLink))
  result.push('')
  result.push('<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>')
  result = result.concat(obj.scripts.map(function (script) {
    return _getScript(script, true)
  }))
  lines = result.concat(lines.slice(scriptEnd + 1))

  var mountedStart = lines.indexOf('  function mounted() {')
  var mountedEnd = lines.indexOf('  }', mountedStart)
  lines[mountedStart] = '  $(function() {'
  lines[mountedEnd] = '  })'

  return lines.join('\n')
}

$(function () {
  var query = {}
  location.search.substring(1).split('&').forEach(function (item) {
    query[item.split('=')[0]] = item.split('=')[1]
  })
  var url = query.url
  var isSource = location.hash.substring(1) === 'view-source'

  delete query.url

  $.ajax({
    type: 'GET',
    url: url + '?' + Object.keys(query).filter(function(key) {
      return query[key] !== null && query[key] !== undefined
    }).map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
    }).join('&'),
    dataType: 'html',
    global: false,
    cache: true, // (warning: setting it to false will cause a timestamp and will call the request twice)
    success: function (data) {
      if (isSource) {
        $('#example').hide().html(data)
        $('.source-pre').show()
        $('#source').text(_beautifySource(data))
        window.hljs.highlightAll()
      } else {
        $('#example').html(data)
      }
    },
    error: function () {
      parent.location.href = 'index.html'
    }
  })
})

function _getOrigin() {
  if (window.location.origin) {
    return window.location.origin
  }
  return window.location.protocol + '//' + window.location.hostname +
    (window.location.port ? ':' + window.location.port : '')
}

function _resizeIframe() {
  var height = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  )
  parent.postMessage({ type: 'resize', height: height }, _getOrigin())
}

window.init = function (options_) {
  var options = Object.assign({
    title: '',
    desc: '',
    links: [],
    scripts: [],
    bootstrapVersion: 3,
    callback: function () {
      if (typeof window.mounted === 'function') {
        window.mounted()
      }
      _resizeIframe()
    }
  }, options_)

  $('.bd-title span').html(options.title)
  $('.bd-lead').html(options.desc)
  options.links.forEach(function (file) {
    _link(file)
  })
  _scripts(options.scripts, options.callback)
}
