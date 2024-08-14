import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import inject from 'rollup-plugin-inject'
import vue from 'rollup-plugin-vue'

let found
const env = process.argv.find(flag => {
  if (found) {
    return true
  }
  found = flag === '--config-env'
  return false
})

const production = env === 'PRODUCTION'

const config = []
const plugins = [
  inject({
    include: '**/*.js',
    exclude: 'node_modules/**'
  }),
  resolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**'
  })
]

if (production) {
  plugins.push(terser({
    output: {
      comments () {
        return false
      }
    }
  }))
}

let out = 'dist/multiple-select.global.js'

if (production) {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/MultipleSelect.global.js',
  output: {
    name: 'MultipleSelect',
    file: out,
    format: 'umd'
  },
  plugins
})

out = 'dist/multiple-select.js'
if (production) {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/MultipleSelect.js',
  output: {
    file: out,
    format: 'esm'
  },
  plugins: plugins.slice(1)
})

out = 'dist/multiple-select-vue.js'
if (production) {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/vue/MultipleSelect.vue',
  output: {
    name: 'MultipleSelect',
    file: out,
    format: 'esm'
  },
  plugins: [
    vue(),
    ...plugins
  ]
})

export default config
