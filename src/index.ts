import { Compiler, EnvironmentPlugin, WebpackPluginInstance } from 'webpack';
import { validate } from 'schema-utils';

import schema from './schema';
import readPkgJson, { Options } from './readPkgJson';

const PLUGIN_NAME = 'PackgaeJsonPlugin';

class PackgaeJsonWebpackPlugin implements WebpackPluginInstance {
  pluginOptions: Options = {};

  constructor(pluginOptions: Options = {}) {
    validate(schema, pluginOptions, {
      name: PLUGIN_NAME,
      baseDataPath: 'options',
    });

    this.pluginOptions = pluginOptions;
  }

  apply(compiler: Compiler) {
    const { pkgJson, key } = readPkgJson(this.pluginOptions);
    new EnvironmentPlugin({ [key as string]: JSON.stringify(pkgJson) }).apply(compiler);
  }
}

export default PackgaeJsonWebpackPlugin;
