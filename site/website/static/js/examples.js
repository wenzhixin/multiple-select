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
  $('iframe').attr('src', url)

  $('.navGroup li.navListItemActive').removeClass('navListItemActive')
  $('a[href="../examples#' + url_ + '"]').parent().addClass('navListItemActive')
}

function autoScrollNavigation () {
  var $el = $('.docsNavContainer li.navListItemActive')
  $('.docsNavContainer').scrollTop(0)
  if ($el.length && $el.offset().top > $(window).height() / 2) {
    $('.docsNavContainer').scrollTop($el.offset().top - $(window).height() / 2)
  }
}

function initViewSource () {
  var isSource = /view-source$/.test(location.hash)
  var title = 'View Source'
  if (isSource) {
    title = 'View Example'
  }
  $('.corner-ribbon').off('click').click(function () {
    if (isSource) {
      location.hash = location.hash.replace('#view-source', '')
    } else {
      if (location.hash.indexOf('view-source') === -1) {
        location.hash += '#view-source'
      }
    }
  }).attr('title', title).text(title)
}

$(function () {
  $(window).hashchange(function () {
    var href = initUrl()
    loadUrl(href)
    autoScrollNavigation()
    initViewSource()
  })

  var href = initUrl()
  loadUrl(href)
  autoScrollNavigation()
  initViewSource()
})
