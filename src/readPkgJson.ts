import _ from 'lodash';
import readPkg from 'read-pkg';

export interface Options {
  key?: string;
  rootDir?: string;
  normalize?: boolean;
  include?: string[];
}

interface ReadPkgJsonResult {
  pkgJson: object;
  key?: string;
}

const defaultOptions: Options = {
  include: [],
  key: 'pkgJson',
  normalize: true,
  rootDir: process.cwd(),
};

function readPkgJson(pluginOptions: Options = defaultOptions): ReadPkgJsonResult {
  let pkgJson: string | object;

  const options: Options = _.defaults(pluginOptions, defaultOptions);

  try {
    pkgJson = readPkg.sync({
      cwd: options.rootDir,
      normalize: options.normalize,
    });
  } catch (err) {
    throw new Error(err);
  }

  if (options.include && !_.isEmpty(pkgJson) && !_.isEmpty(options.include)) {
    if (!_.isArray(options.include)) {
      throw new TypeError('options `inlucde` should be array of strings');
    }
    pkgJson = _.pick(pkgJson, options.include);
  }

  return { pkgJson, key: options.key };
}

export default readPkgJson;
