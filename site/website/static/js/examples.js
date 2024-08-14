window._config = {
  isDebug: ['localhost'].indexOf(location.hostname) > -1,
  isViewSource: false
}

function initUrl() {
  var href = location.hash.substring(1)
  window._config.isViewSource = false
  if (href.indexOf('view-source') > -1) {
    href = href.replace('#view-source', '').replace('view-source', '')
    window._config.isViewSource = true
  }
  return href || 'single-row.html'
}

function loadUrl(url_) {
  var template = 'templates/template.html'

  var url = template + '?v=VERSION&url=' + url_
  if (window._config.isDebug) {
    url = template + '?t=' + (+new Date()) + '&url=' + url_
  }
  if (window._config.isViewSource) {
    url = template + '?v=VERSION&view-source&url=' + url_ + '#view-source'
  }
  document.querySelector('iframe').setAttribute('src', url)

  document.querySelectorAll('.navGroup li.navListItemActive').forEach(item => {
    item.classList.remove('navListItemActive')
  })
  document.querySelectorAll('a[href="../examples#' + url_ + '"]').forEach(item => {
    item.parentElement.classList.add('navListItemActive')
  })
}

function autoScrollNavigation () {
  var container = document.querySelector('.docsNavContainer')
  var el = container.querySelector('li.navListItemActive')
  var top = el && el.getBoundingClientRect().top

  container.scrollTop = 0
  if (el && top > window.innerHeight / 2) {
    container.scrollTop = top - window.innerHeight / 2
  }
}

function updateCornerRibbon () {
  var isSource = /view-source$/.test(location.hash)
  var title = isSource ? 'View Example' : 'View Source'

  document.querySelectorAll('.corner-ribbon').forEach(el => {
    el.setAttribute('title', title)
    el.innerText = title
  })
}

function handleCornerRibbonClick () {
  updateCornerRibbon()
  var isSource = /view-source$/.test(location.hash)
  if (isSource) {
    location.hash = location.hash.replace('#view-source', '')
  } else {
    if (location.hash.indexOf('view-source') === -1) {
      location.hash += '#view-source'
    }
  }
}

function initViewSource () {
  updateCornerRibbon()
  document.querySelectorAll('.corner-ribbon').forEach(item => {
    item.addEventListener('click', handleCornerRibbonClick)
  })
}

(function () {
  window.addEventListener('hashchange', function (e) {
    loadUrl(initUrl())
    autoScrollNavigation()
    initViewSource()
  })

  loadUrl(initUrl())
  autoScrollNavigation()
  initViewSource()
})()
