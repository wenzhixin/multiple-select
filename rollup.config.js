import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'
import inject from 'rollup-plugin-inject'
// import vue from 'rollup-plugin-vue'

let found
const env = process.argv.find(flag => {
  if (found) {
    return true
  }
  found = flag === '--config-env'
  return false
})

const production = env === 'PRODUCTION'
const dev = env === 'DEV'

const external = ['jquery']
const globals = {
  jquery: 'jQuery'
}
const config = []
const plugins = [
  inject({
    include: '**/*.js',
    exclude: 'node_modules/**',
    $: 'jquery'
  }),
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  })
]

if (production) {
  plugins.push(minify({
    comments: false
  }))
}

let out = 'dist/multiple-select.js'
if (production) {
  out = out.replace(/.js$/, '.min.js')
} else if (dev) {
  out = out.replace(/^dist/, 'docs/assets/js')
}
config.push({
  input: 'src/multiple-select.js',
  output: {
    name: 'MultipleSelect',
    file: out,
    format: 'umd',
    globals
  },
  external,
  plugins
})

if (!dev) {
  out = 'dist/multiple-select-es.js'
  if (production) {
    out = out.replace(/.js$/, '.min.js')
  }
  config.push({
    input: 'src/multiple-select.js',
    output: {
      file: out,
      format: 'esm'
    },
    plugins: plugins.slice(1)
  })
}

export default config
