const siteConfig = {
  title: 'Multiple Select',
  tagline: 'Multiple Select is a jQuery plugin to select multiple elements with checkboxes :).',
  url: 'http://multiple-select.wenzhixin.net.cn',
  baseUrl: '/',

  // Used for publishing and more
  projectName: 'multiple-select',
  organizationName: 'wenzhixin',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'download', label: 'Getting started'},
    {doc: 'options', label: 'Documentation'},
    {page: 'examples', label: 'Examples'},
    {doc: 'introduction', label: 'Vue Component'},
    {page: 'vue-examples', label: 'Vue Examples'},
    {href: "http://multiple-select-live.wenzhixin.net.cn", external: true, label: "Online Editor"},
    {href: "https://github.com/wenzhixin/multiple-select", external: true, label: "GitHub"},
    {languages: true},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/favicon.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#6f5499',
    secondaryColor: '#0d3a5f',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © 2010-${new Date().getFullYear()} wenzhixin.net.cn`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://gg.wenzhixin.net.cn/wenzhixin/gg.js'
  ],

  separateCss: [
    'static/css/examples.css',
    'static/css/template.css'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  wrapPagesHTML: true,
}

module.exports = siteConfig
