import * as _ from 'lodash';
import * as readPkg from 'read-pkg';

export interface IOptions {
  key?: string;
  rootDir?: string;
  normalize?: boolean;
  include?: string[];
}

export const defaultOptions: IOptions = {
  include: [],
  key: 'pkgJson',
  normalize: true,
  rootDir: process.cwd(),
};

function readPkgJson(pluginOptions: IOptions = defaultOptions) {
  let pkgJson: string | object;

  const options: IOptions = _.defaults(pluginOptions, defaultOptions);

  try {
    pkgJson = readPkg.sync({
      cwd: options.rootDir,
      normalize: options.normalize,
    });
  } catch (err) {
    throw Error(err);
  }

  if (options.include && !_.isEmpty(pkgJson) && !_.isEmpty(options.include)) {
    if (!_.isArray(options.include)) {
      throw Error('inlucde should be array of string');
    }
    pkgJson = _.pick(pkgJson, options.include);
  }

  return { pkgJson, key: options.key };
}

export default readPkgJson;
