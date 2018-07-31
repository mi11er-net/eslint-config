const parserOptions = {
  ecmaVersion: 2019,
};

const env = {
  es6: true,
  node: true,
};

const globals = {
  Atomics: false,
  SharedArrayBuffer: false,
};
const plugins = ['node'];

const rules = {
  'no-process-exit': 'error',
  'node/exports-style': 'off',
  'node/no-deprecated-api': 'error',
  'node/no-extraneous-import': 'off',
  'node/no-extraneous-require': 'error',
  'node/no-missing-import': 'off',
  'node/no-missing-require': 'error',
  'node/no-unpublished-bin': 'error',
  'node/no-unpublished-import': 'off',
  'node/no-unpublished-require': 'error',
  'node/no-unsupported-features/es-builtins': 'error',
  'node/no-unsupported-features/es-syntax': 'error',
  'node/no-unsupported-features/node-builtins': 'error',
  'node/prefer-global/buffer': 'off',
  'node/prefer-global/console': 'off',
  'node/prefer-global/process': 'off',
  'node/prefer-global/url-search-params': 'off',
  'node/prefer-global/url': 'off',
  'node/process-exit-as-throw': 'error',
  'node/shebang': 'error',
};

module.exports = {
  parserOptions,
  env,
  globals,
  plugins,
  rules,
};
