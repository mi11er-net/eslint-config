const extendedConfigs = [
  './rules/base',
  './rules/security',
  './rules/prettier',
].map(require.resolve);

module.exports = {
  parser: 'babel-eslint',
  extends: extendedConfigs,
};
