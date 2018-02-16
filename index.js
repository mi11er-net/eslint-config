const extendedConfigs = require('./lib/extendedConfigs');

const ERROR = 2;

const rules = {
  'no-param-reassign': [ERROR, { props: false }],
  'valid-jsdoc': [ERROR],
};

module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  ...extendedConfigs,
  rules,
};
