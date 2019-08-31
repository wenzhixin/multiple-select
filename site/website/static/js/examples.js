function loadUrl(url) {
  var template = 'templates/template.html'
  var hash = ''
  if (location.search.slice(1) === 'view-source') {
    hash = '#view-source'
  } else if (location.search.slice(1) === 'is-debug') {
    hash = '#is-debug'
  }
  $('iframe').attr('src', template + '?v=VERSION&' + url + hash)

  $('.navGroup li.navListItemActive').removeClass('navListItemActive')
  $('a[href="../examples#' + url + '"]').parent().addClass('navListItemActive')
}

$(function () {
  $(window).hashchange(function () {
    var href = location.hash.substring(1)
    loadUrl(href)
  })

  var href = location.hash.substring(1) || 'basic.html'
  loadUrl(href)
})
