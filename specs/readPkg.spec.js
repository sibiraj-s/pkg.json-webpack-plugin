const _ = require('lodash');
const readPkgJson = require('../lib/readPkgjson').default;

const appPackageJson = require('../package.json');
const normalizedPkgJson = _.merge({}, appPackageJson);
require('normalize-package-data')(normalizedPkgJson);

it(`should return normalized package.json correctly`, function() {
  const { pkgJson } = readPkgJson();
  expect(pkgJson).toEqual(normalizedPkgJson);
});

it(`should throw error if file is not found`, function() {
  expect(() => readPkgJson({ rootDir: __dirname })).toThrow(Error);
});

it(`should throw error if include option is not an array`, function() {
  expect(() => readPkgJson({ include: 'name' })).toThrow(Error);
});

it(`should return raw package.json when 'normalize' is set to 'false'`, function() {
  const { pkgJson } = readPkgJson({ normalize: false });
  expect(pkgJson).toEqual(appPackageJson);
});

it(`should object with only fields mentioned in include options`, function() {
  const { pkgJson } = readPkgJson({ include: ['name', 'version'] });
  expect(pkgJson).toHaveProperty('name');
  expect(pkgJson).toHaveProperty('version');
  expect(pkgJson).not.toHaveProperty('description');
  expect(pkgJson).not.toHaveProperty('scripts');
});
