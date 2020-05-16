import glob from 'glob'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import inject from 'rollup-plugin-inject'
import multiEntry from '@rollup/plugin-multi-entry'
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
  plugins.push(terser({
    output: {
      comments () {
        return false
      }
    }
  }))
}

let out = 'dist/multiple-select.js'
if (production) {
  out = out.replace(/.js$/, '.min.js')
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

out = 'dist/multiple-select-locale-all.js'
if (production) {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/locale/**/*.js',
  output: {
    name: 'MultipleSelect',
    file: out,
    format: 'umd',
    globals
  },
  external,
  plugins: [
    multiEntry(),
    ...plugins
  ]
})

const files = glob.sync('src/locale/**/*.js')

for (const file of files) {
  out = `dist/${file.replace('src/', '')}`
  if (production) {
    out = out.replace(/.js$/, '.min.js')
  }
  config.push({
    input: file,
    output: {
      name: 'MultipleSelect',
      file: out,
      format: 'umd',
      globals
    },
    external,
    plugins
  })
}

out = 'dist/multiple-select-vue.js'
if (production) {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/vue/index.js',
  output: {
    name: 'MultipleSelect',
    file: out,
    format: 'umd'
  },
  plugins: [
    vue(),
    ...plugins
  ]
})

out = 'dist/multiple-select-vue-es.js'
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
