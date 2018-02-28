const extendedConfigs = ['eslint-config-airbnb'].map(require.resolve);

const settings = {
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.json', '.mjs'],
    },
  },
};

module.exports = {
  extends: extendedConfigs,
  settings,
};
