const {
  override,
  addBabelPlugins
} = require('customize-cra');
// const pkg = require('./package.json');

const plugins = ['babel-plugin-styled-components'];

module.exports = override(
  addBabelPlugins(plugins)
);
