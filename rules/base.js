import js from '@eslint/js';
import pluginOptimizeRegex from 'eslint-plugin-optimize-regex';
import pluginImportX from 'eslint-plugin-import-x';

export default [
  js.configs.recommended,
  {
    plugins: {
      'optimize-regex': pluginOptimizeRegex,
      'import-x': pluginImportX,
    },
    rules: {
      'optimize-regex/optimize-regex': 'warn',
      'no-param-reassign': ['error', { props: false }],
      complexity: ['error', 6],
      'import-x/extensions': ['error', 'always', { ignorePackages: true }],
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js', '.json', '.mjs'],
        },
      },
      'import-x/extensions': ['.js', '.jsx', '.mjs'],
    },
  },
];
