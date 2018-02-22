const extendedConfigs = ['eslint-config-airbnb-base'].map(require.resolve);

const plugins = ['optimize-regex'];

const rules = {
  'optimize-regex/optimize-regex': 'warn',
  'no-param-reassign': ['error', { props: false }],
  'valid-jsdoc': ['error', { requireReturn: false }],
  complexity: ['error', 6],
};

module.exports = {
  extends: extendedConfigs,
  plugins,
  rules,
};
