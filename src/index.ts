import webpack from 'webpack';

import readPkgJson, { IOptions } from './readPkgJson';

class PackgaeJsonWebpackPlugin {
  constructor(pluginOptions: IOptions = {}) {
    const { pkgJson, key } = readPkgJson(pluginOptions);
    return new webpack.EnvironmentPlugin({ [key as string]: pkgJson });
  }
}

export default PackgaeJsonWebpackPlugin;
module.exports = exports.default;
