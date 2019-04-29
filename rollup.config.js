import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'
import inject from 'rollup-plugin-inject'
// import vue from 'rollup-plugin-vue'

import env from './env.json'

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

if (env.NODE_ENV === 'production') {
  plugins.push(minify({
    comments: false
  }))
}

let out = 'dist/multiple-select.js'
if (env.NODE_ENV === 'production') {
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
if (env.NODE_ENV === 'production') {
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

export default config
