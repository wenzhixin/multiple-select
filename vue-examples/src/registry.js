const modules = import.meta.glob('./examples/*.vue')
const raws = import.meta.glob('./examples/*.vue', { as: 'raw' })
const components = []

for (const path in modules) {
  if (!modules[path]) {
    continue
  }
  const name = (/examples\/(.*).vue/.exec(path))[1]

  components.push({
    path: '/' + name,
    component: modules[path],
    name,
    source: raws[path]
  })
}

export default {
  components
}
