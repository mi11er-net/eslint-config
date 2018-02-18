const isInstalled = require('./isInstalled');

const optionalConfigs = [
  {
    plugins: ['optimize-regex'],
  },
  {
    name: 'airbnb-base',
    plugins: ['import'],
  },
  {
    name: 'airbnb',
    plugins: ['import', 'react', 'jsx-a11y'],
  },
  {
    name: 'plugin:security/recommended',
  },
  {
    name: 'prettier',
  },
];

const extendedConfigs = {
  extends: [],
  plugins: [],
};

optionalConfigs.forEach(({ name, plugins = [] }) => {
  const localName = [name].filter(Boolean);

  if (
    localName.every(config => isInstalled(config, 'config')) &&
    plugins.every(plugin => isInstalled(plugin, 'plugin'))
  ) {
    extendedConfigs.extends.push(...localName);
    extendedConfigs.plugins.push(...plugins);
  }
});

module.exports = extendedConfigs;
