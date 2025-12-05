const parserOptions = {
  ecmaVersion: 2022,
};

const env = {
  es2022: true,
  node: true,
};

const globals = {
  Atomics: false,
  SharedArrayBuffer: false,
};
const plugins = ['n'];

const rules = {
  'no-process-exit': 'error',
  'n/exports-style': 'off',
  'n/no-deprecated-api': 'error',
  'n/no-extraneous-import': 'off',
  'n/no-extraneous-require': 'error',
  'n/no-missing-import': 'off',
  'n/no-missing-require': 'error',
  'n/no-unpublished-bin': 'error',
  'n/no-unpublished-import': 'off',
  'n/no-unpublished-require': 'error',
  'n/no-unsupported-features/es-builtins': 'error',
  'n/no-unsupported-features/es-syntax': 'error',
  'n/no-unsupported-features/node-builtins': 'error',
  'n/prefer-global/buffer': 'off',
  'n/prefer-global/console': 'off',
  'n/prefer-global/process': 'off',
  'n/prefer-global/url-search-params': 'off',
  'n/prefer-global/url': 'off',
  'n/process-exit-as-throw': 'error',
  'n/hashbang': 'error',
};

module.exports = {
  parserOptions,
  env,
  globals,
  plugins,
  rules,
};
