const js = require('@eslint/js');
const pluginOptimizeRegex = require('eslint-plugin-optimize-regex');
const pluginImport = require('eslint-plugin-import');

module.exports = [
  js.configs.recommended,
  {
    plugins: {
      'optimize-regex': pluginOptimizeRegex,
      import: pluginImport,
    },
    rules: {
      'optimize-regex/optimize-regex': 'warn',
      'no-param-reassign': ['error', { props: false }],
      complexity: ['error', 6],
      'import/extensions': [
        'error',
        'always',
        {
          js: 'never',
          jsx: 'never',
          mjs: 'never',
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.json', '.mjs'],
        },
      },
      'import/extensions': ['.js', '.jsx', '.mjs'],
    },
  },
];
