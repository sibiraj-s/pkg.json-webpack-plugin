import * as _ from 'lodash';
import * as webpack from 'webpack';

import readPkgJson, { IOptions } from './readPkgjson';

class PackgaeJsonWebpackPlugin {
  constructor(pluginOptions: IOptions = {}) {
    const { pkgJson, key } = readPkgJson(pluginOptions);
    return new webpack.EnvironmentPlugin({ [key as string]: pkgJson });
  }
}

export = PackgaeJsonWebpackPlugin;
