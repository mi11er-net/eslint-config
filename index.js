const extendedConfigs = [
  './rules/base',
  './rules/security',
  './rules/prettier',
].map(require.resolve);

module.exports = {
  extends: extendedConfigs,
};
