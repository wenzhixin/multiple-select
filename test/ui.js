// https://github.com/DevExpress/testcafe
// https://devexpress.github.io/testcafe/documentation/test-api/
import {Selector} from 'testcafe'

fixture`TestCafe UI tests`
  .page`http://localhost:3000/examples#basic.html`

test('Basic select', async t => {
  await t.expect(Selector('*[data-name="selectItem"]')).ok('Has select option')
})
