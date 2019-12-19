// https://github.com/DevExpress/testcafe
// https://devexpress.github.io/testcafe/documentation/test-api/
// https://github.com/helen-dikareva/axe-testcafe
import { axeCheck, createReport } from 'axe-testcafe'

/**
* @external AxeResult
*/
/**
 * @external TestcafeTest
*/
/**
 * @param {external.TestcafeTest} t Testcafe test object
 * @returns {Promise<external:AxeResult>} Axe accessibility result
 */
async function axeCheckWithConfig (t) {
  // https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axerun
  const { error, violations } = await axeCheck(t,
    // context: https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#context-parameter
    {
      exclude: [
        // Ignore bootstrap docs (should be fixed by them)
        ['.bs-docs-footer'],
        // Ignore codefund
        ['*[class|="cf"]']
      ]
    },
    // https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
    {
      rules: {
        // 'meta-viewport': {enabled: false}
      }
    }
    // https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#results-object
    // , (err, results) {}
  )
  await t.expect(violations.length === 0).ok(createReport(violations))
}

fixture`TestCafe Axe accessibility tests (Main page)`
  .page`http://localhost:3000/`

test('Main page', async t => {
  await axeCheckWithConfig(t)
})
