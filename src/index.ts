import webpack from 'webpack';

import readPkgJson, { Options } from './readPkgJson';

class PackgaeJsonWebpackPlugin {
  constructor(pluginOptions: Options = {}) {
    const { pkgJson, key } = readPkgJson(pluginOptions);
    return new webpack.EnvironmentPlugin({ [key as string]: pkgJson });
  }
}

export = PackgaeJsonWebpackPlugin;
