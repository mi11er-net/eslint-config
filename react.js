const extendedConfigs = [
  './rules/base',
  './rules/react',
  './rules/security',
  './rules/prettier',
].map(require.resolve);

module.exports = {
  extends: extendedConfigs,
};
