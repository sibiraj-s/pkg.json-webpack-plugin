import { Compiler, EnvironmentPlugin } from 'webpack';
import { validate } from 'schema-utils';

import schema from './schema';
import readPkgJson, { Options } from './readPkgJson';

const PLUGIN_NAME = 'PackgaeJsonPlugin';

class PackgaeJsonWebpackPlugin {
  pluginOptions: Options = {}

  constructor(pluginOptions: Options = {}) {
    validate(schema, pluginOptions, {
      name: PLUGIN_NAME,
      baseDataPath: 'options',
    });

    this.pluginOptions = pluginOptions;
  }

  apply(compiler: Compiler) {
    const { pkgJson, key } = readPkgJson(this.pluginOptions);
    new EnvironmentPlugin({ [key as string]: pkgJson }).apply(compiler);
  }
}

export = PackgaeJsonWebpackPlugin;
