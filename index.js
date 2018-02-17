const extendedConfigs = require('./lib/extendedConfigs');

const WARN = 1;
const ERROR = 2;

const rules = {
  'no-param-reassign': [ERROR, { props: false }],
  'valid-jsdoc': [ERROR],
  complexity: [ERROR, 6],
};

if (extendedConfigs.plugins.includes('optimize-regex')) {
  rules['optimize-regex/optimize-regex'] = WARN;
}

module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  ...extendedConfigs,
  rules,
};
