import _ from 'lodash';
import readPkg from 'read-pkg';

export interface Options {
  key?: string;
  rootDir?: string;
  normalize?: boolean;
  include?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PkgJson = { [key: string]: any }

interface ReadPkgJsonResult {
  pkgJson: PkgJson;
  key?: string;
}

const defaultOptions: Options = {
  include: [],
  key: 'pkgJson',
  normalize: true,
  rootDir: process.cwd(),
};

const readPkgJson = (pluginOptions: Options = defaultOptions): ReadPkgJsonResult => {
  let pkgJson: PkgJson;

  const options: Options = _.defaults(pluginOptions, defaultOptions);

  try {
    pkgJson = readPkg.readPackageSync({
      cwd: options.rootDir,
      normalize: options.normalize,
    });
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw new Error(err as any);
  }

  if (options.include && !_.isEmpty(pkgJson) && !_.isEmpty(options.include)) {
    pkgJson = _.pick(pkgJson, options.include);
  }

  return { pkgJson, key: options.key };
};

export default readPkgJson;
