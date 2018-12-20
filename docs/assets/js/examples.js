function loadUrl(url) {
  var template = 'template.html'
  var hash = ''
  if (/v4.html/.test(url)) {
    template = 'template4.html'
  }
  if (location.search.slice(1) === 'view-source') {
    hash = '#view-source'
  } else if (location.search.slice(1) === 'is-debug') {
    hash = '#is-debug'
  }
  $('iframe').attr('src', template + '?v=VERSION&' + url + hash)
}

function initNavigation(href) {
  var $el = $('a[href="../examples#' + href + '"]')

  $('.navigation').hide()

  if (!$el.length) {
    return
  }
  var $prev = $el.parent().prev('li')
  var $next = $el.parent().next('li')

  if ($prev.text()) {
    $('.navigation.previous').show()
      .attr('href', $prev.find('a').attr('href'))
      .attr('title', 'Previous: ' + $prev.text())
  }
  if ($next.text()) {
    $('.navigation.next').show()
      .attr('href', $next.find('a').attr('href'))
      .attr('title', 'Next: ' + $next.text())
  }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  $(window).hashchange(function () {
    var href = location.hash.substring(1)
    loadUrl(href)
    initNavigation(href)
  })

  $(window).on('blur',function() {
    $('.dropdown-toggle').parent().removeClass('open')
  })

  var href = location.hash.substring(1) || 'basic.html'
  loadUrl(href)
  initNavigation(href)
})
