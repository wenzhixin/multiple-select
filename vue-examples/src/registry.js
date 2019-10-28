const ctx = require.context('./examples', false, /vue$/)
const raw = require.context('!!raw-loader!./examples/', false, /vue$/)
const components = ctx.keys().map(ctx)
const sources = raw.keys().map(raw)

for (let i = 0; i < components.length; i++) {
  const name = ctx.keys()[i].replace('./', '').replace('.vue', '')
  components[i].name = name
  components[i].source = sources[i]
}
export default {
  components
}
