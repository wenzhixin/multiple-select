const fs = require('fs')
const getopts = require('getopts')

const options = getopts(process.argv.slice(2), {
  alias: {
    h: 'help',
    n: 'name',
    t: 'title',
    d: 'desc'
  }
})

function showHelp() {
  const baseCmd = 'node tools/template.js'

  console.info(`usage:
    -h, --help      show help info
    -n, --name      set the example name
    -t, --title     set the example title
    -d, --desc      set the example desc
  `)

  console.info(`example:
    ${baseCmd} -n 'name' -d 'desc'
  `)
}

function run() {
  if (options.help || Object.keys(options).length === 1) {
    return showHelp()
  }
  if (!options.name) {
    return console.error('You need to input -n, --name argv')
  }
  if (!options.title) {
    options.title = options.name.split('-').join(' ')
  }

  let content = fs.readFileSync(`${__dirname}/example.tpl`).toString()
  content = content.replace(/@title@/, options.title || '')
    .replace(/@desc@/, options.desc || '')

  fs.writeFileSync(`${__dirname}/../docs/examples/${options.name}.html`, content)
  console.info(`${options.name}.html`)

  let list = fs.readFileSync(`${__dirname}/../docs/_includes/example-list.md`).toString()
  list += `<li><a href="../examples#${options.name}.html">${options.title}</a></li>\n`
  fs.writeFileSync(`${__dirname}/../docs/_includes/example-list.md`, list)
}

run()
