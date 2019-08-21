const fs = require('fs').promises
const getopts = require('getopts')

const options = getopts(process.argv.slice(2), {
  alias: {
    h: 'help',
    n: 'name',
    t: 'title',
    d: 'desc'
  }
})

/**
 * Logs help.
 * @returns {void}
 */
function showHelp () {
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

/**
 * Perform document file writing.
 * @returns {Promise<void>} process
 */
async function run () {
  if (options.help || Object.keys(options).length === 1) {
    showHelp()
    return
  }
  if (!options.name) {
    console.error('You need to input -n, --name argv')
    return
  }
  if (!options.title) {
    options.title = options.name.split('-').join(' ')
  }

  let content = (await fs.readFile(`${__dirname}/example.tpl`)).toString()
  content = content.replace(/@title@/, options.title || '')
    .replace(/@desc@/, options.desc || '')

  await fs.writeFile(`${__dirname}/../docs/examples/${options.name}.html`, content)
  console.info(`${options.name}.html`)

  let list = (await fs.readFile(`${__dirname}/../docs/_includes/example-list.md`)).toString()
  list += `<li><a href="../examples#${options.name}.html">${options.title}</a></li>\n`
  await fs.writeFile(`${__dirname}/../docs/_includes/example-list.md`, list)
}

run()
