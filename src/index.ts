import webpack from 'webpack';
import {validate} from 'schema-utils';

import schema from './schema';
import readPkgJson, { Options } from './readPkgJson';

const PLUGIN_NAME = 'PackgaeJsonPlugin';

class PackgaeJsonWebpackPlugin {
  constructor(pluginOptions: Options = {}) {

    validate(schema, pluginOptions, {
      name: PLUGIN_NAME,
      baseDataPath: 'options',
    });

    const { pkgJson, key } = readPkgJson(pluginOptions);
    return new webpack.EnvironmentPlugin({ [key as string]: pkgJson });
  }
}

export = PackgaeJsonWebpackPlugin;
