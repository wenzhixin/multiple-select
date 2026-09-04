/**
 * Regression test for issue #580:
 * "Disable event checkAll and uncheckAll while using filter."
 *
 * Reproduces: onCheckAll / onUncheckAll callbacks fire inappropriately
 * when the user types in the filter input, even though no selection
 * change occurred. The events should not fire during filter operations.
 *
 * Loads the bundled dist/multiple-select.js into a jsdom window so the
 * source-fixing diff also flows through the standard build artifact.
 */
import { test } from 'node:test'
import { strict as assert } from 'node:assert'
import { JSDOM } from 'jsdom'
import { rollup } from 'rollup'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(here, '..')
const jqueryPath = path.join(repoRoot, 'node_modules', 'jquery', 'dist', 'jquery.js')

// Always bundle the current sources into a temp file. This keeps the
// regression test self-contained while leaving the committed dist/ output
// untouched (it is produced by the project's own rollup config in CI).
async function ensureBuilt () {
  const bundle = await rollup({
    input: path.join(repoRoot, 'src', 'multiple-select.js'),
    external: ['jquery'],
    plugins: [
      { name: 'relative-resolve', resolveId (id, parent) {
        if (id.startsWith('.')) {
          return path.resolve(path.dirname(parent), id)
        }
        return null
      } }
    ],
    onwarn () {}
  })
  const { output } = await bundle.generate({
    name: 'MultipleSelect',
    format: 'iife',
    globals: { jquery: 'jQuery' },
    intro: 'var window = globalThis.window, document = globalThis.document, $ = globalThis.$, jQuery = globalThis.jQuery, navigator = globalThis.navigator;'
  })
  const tmpPath = path.join(os.tmpdir(), 'multiple-select-test-bundle.js')
  fs.writeFileSync(tmpPath, output[0].code)
  return tmpPath
}

const pluginPath = await ensureBuilt()
const jquerySrc = fs.readFileSync(jqueryPath, 'utf8')
const pluginSrc = fs.readFileSync(pluginPath, 'utf8')

async function bootstrap () {
  const dom = new JSDOM(`<!doctype html><html><body>
<select id="s" multiple>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
</select>
</body></html>`, {
    url: 'http://localhost/',
    runScripts: 'outside-only',
    pretendToBeVisual: true
  })
  const { window } = dom
  window.eval(jquerySrc)
  window.eval(pluginSrc)
  return window
}

function runScenario (window, filterText) {
  return new Promise(resolve => {
    const $ = window.$
    const events = { checkAll: 0, uncheckAll: 0, filter: 0 }
    $('#s').multipleSelect({
      filter: true,
      onCheckAll: () => { events.checkAll++ },
      onUncheckAll: () => { events.uncheckAll++ },
      onFilter: () => { events.filter++ }
    })
    $('#s').multipleSelect('open')
    $('#s').multipleSelect('checkAll')
    const before = { checkAll: events.checkAll, uncheckAll: events.uncheckAll }
    const $input = $('.ms-drop .ms-search input')
    $input.val(filterText)
    $input.trigger('keyup')
    setImmediate(() => resolve({ before, after: events }))
  })
}

test('issue #580: onCheckAll/onUncheckAll do NOT fire on filter input change', async () => {
  const window = await bootstrap()
  {
    const { before, after } = await runScenario(window, 'zzz_no_match_xxx')
    assert.equal(after.checkAll - before.checkAll, 0,
      `onCheckAll must not fire on filter change (got delta=${after.checkAll - before.checkAll})`)
    assert.equal(after.uncheckAll - before.uncheckAll, 0,
      `onUncheckAll must not fire on filter change (got delta=${after.uncheckAll - before.uncheckAll})`)
  }
  {
    const { before, after } = await runScenario(window, 'Two')
    assert.equal(after.checkAll - before.checkAll, 0,
      `onCheckAll must not fire a second time on filter change (got delta=${after.checkAll - before.checkAll})`)
    assert.equal(after.uncheckAll - before.uncheckAll, 0,
      `onUncheckAll must not fire on filter change (got delta=${after.uncheckAll - before.uncheckAll})`)
  }
})

test('issue #580: programmatic checkAll still fires onCheckAll exactly once', async () => {
  const window = await bootstrap()
  return new Promise(resolve => {
    const $ = window.$
    let checkAllFired = 0
    $('#s').multipleSelect({
      filter: true,
      onCheckAll: () => { checkAllFired++ },
      onUncheckAll: () => {}
    })
    $('#s').multipleSelect('open')
    $('#s').multipleSelect('checkAll')
    setImmediate(() => {
      assert.equal(checkAllFired, 1,
        'onCheckAll must fire exactly once when checkAll() is invoked')
      resolve()
    })
  })
})
