import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest'
      }
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: globals.browser,
      parser: vueParser,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest'
      }
    }
  }
]
