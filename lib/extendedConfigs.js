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

optionalConfigs.forEach(element => {
  if ('name' in element && !isInstalled(element.name, 'config')) {
    return;
  }
  if (
    'plugins' in element &&
    !element.plugins.every(plugin => isInstalled(plugin, 'plugin'))
  ) {
    return;
  }
  if ('name' in element) {
    extendedConfigs.extends.push(element.name);
  }
  if ('plugins' in element) {
    extendedConfigs.plugins.push(...element.plugins);
  }
});

module.exports = extendedConfigs;
