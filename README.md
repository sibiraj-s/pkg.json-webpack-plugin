# pkg.json-webpack-plugin [![Build Status](https://travis-ci.com/sibiraj-s/pkg.json-webpack-plugin.svg?branch=master)](https://travis-ci.com/sibiraj-s/pkg.json-webpack-plugin)

> Loads package.json into webpack app as an environment variable

<div align="center">
  <a href="https://github.com/sibiraj-s/pkg.json-webpack-plugin">
    <img width="200" height="200" src="./assets/webpack.svg">
  </a>
  </div>

## Getting Started

### Installation

```bash
npm i -D pkg.json-webpack-plugin
# or
yarn add --dev pkg.json-webpack-plugin
```

### Usage

```js
const PackageJsonPlugin = require('pkg.json-webpack-plugin');

module.exports = {
  // ...webpack config
  plugins: [new PackageJsonPlugin()],
};
```

```js
console.log(process.env.pkgJson.version); // prints `1.0.0`
```

the plugin uses [EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/) under the hood to load the values, refer the docs to know how it works

## Options

the default options are

```js
new PackageJsonPlugin({
  key: 'pkgJson',
  normalize: true,
  rootDir: process.cwd(),
  include: [],
});
```

- key [`string`] - name of key to which package.json values are mapped to
- normalize [`boolen`] - [normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) and load package.json
- rootDir [`string`] - directory to look for a package.json file. By default the process is expected be be run from the root direcotry where package.json exists.
- include [`array`] - values only to keep from a package.json file. Empty array or any [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values will load all values
