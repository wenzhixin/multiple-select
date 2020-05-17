module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': true
  },
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2017,
    'sourceType': 'module'
  },
  'extends': [
    'plugin:testcafe/recommended'
  ],
  'overrides': [
    {
      'files': ['rollup*', 'tools/template.js'],
      'env': {
        'node': true,
        'browser': false
      }
    },
    {
      'files': ['src/locale/*.js', 'tools/*.js'],
      // These are being overwritten for some reason, despite `node: true`
      'globals': {
        require: 'readonly',
        __dirname: 'readonly'
      },
      'rules': {
        'import/no-commonjs': 'off',
        'import/unambiguous': 'off',
        'node/no-unsupported-features/node-builtins': 'off'
      }
    }
  ],
  'rules': {
    'indent': ['error',
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 1,
        'ArrayExpression': 1,
        'FunctionDeclaration': {'parameters': 'first'},
        'CallExpression': {'arguments': 1},
        'ImportDeclaration': 'first',
        'ObjectExpression': 1
      }
    ],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'semi-style': ['error', 'last'],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'default-case': 'error',
    'no-new-func': 'error',
    'no-void': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'no-tabs': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'no-trailing-spaces': 'error',
    'operator-assignment': ['error', 'always'],
    'dot-location': ['error', 'property'],
    'no-console': ['error', { allow: ['log', 'info', 'warn', 'error'] }],
    'no-else-return': ['error', {allowElseIf: false}],
    'no-multi-spaces': 'error',
    'valid-jsdoc': 'warn',
    'eqeqeq': 'error',
    'guard-for-in': 'warn',
    'no-multi-str': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'warn',
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true, 'mode': 'strict'}],
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'space-before-blocks': ['error', {'functions': 'always', 'keywords': 'always', 'classes': 'always'}],
    'spaced-comment': ['error', 'always'],
    'space-infix-ops': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'no-useless-constructor': 'warn',
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'camelcase': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'quote-props': 'off',
    'linebreak-style': 'off',
    'require-unicode-regexp': 'off',
    'max-len': 'off'
  },
  'globals': {
    '$': true,
    'jQuery': true
  }
}
