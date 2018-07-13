const extendedConfigs = [
  './rules/base',
  './rules/node',
  './rules/security',
  './rules/prettier',
].map(require.resolve);

module.exports = {
  extends: extendedConfigs,
};
