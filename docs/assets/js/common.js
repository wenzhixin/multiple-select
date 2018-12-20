$(function () {
  $('h1').find('a')
    .attr('target', '_blank')
    .addClass('edit-page-link')
    .text('Edit on GitHub')

  // languages
  var currentLanguage = 'en'
  var baseDir = '../'
  var pathDir = location.href.replace(/\/$/, '').split('/').pop()
  $('[data-language]').each(function (i) {
    var $this = $(this),
      language = $this.data('language')

    // default
    if (i === 0) {
      $this.addClass('active')
    }
    if (location.href.indexOf('/' + language + '/') !== -1) {
      $this.addClass('active').siblings().removeClass('active')
      $('.language').text($(this).text())
      currentLanguage = language
    }
  })
  if (currentLanguage !== 'en') {
    baseDir = '../../'
  }
  $('[data-language]').each(function (i) {
    var language = $(this).data('language')
    $(this).find('a').attr('href', baseDir +
      (language === 'en' ? '' : language + '/') + pathDir)
  })

  $('.start-table').next().bootstrapTable({
    search: true,
    showToggle: true,
    showColumns: true,
    mobileResponsive: true
  })
})
