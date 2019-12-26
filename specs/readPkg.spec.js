import _ from 'lodash';
import normalizePackageData from 'normalize-package-data';

import readPkgJson from '../src/readPkgjson';
import appPackageJson from '../package.json';

const normalizedPkgJson = _.merge({}, appPackageJson);
beforeAll(() => {
  normalizePackageData(normalizedPkgJson);
});

it(`should return normalized package.json correctly`, () => {
  const { pkgJson } = readPkgJson();
  expect(pkgJson).toEqual(normalizedPkgJson);
});

it(`should throw error if file is not found`, () => {
  expect(() => readPkgJson({ rootDir: __dirname })).toThrow(Error);
});

it(`should throw TypeError if include option is not an array`, () => {
  expect(() => readPkgJson({ include: 'name' })).toThrow(TypeError);
});

it(`should return raw package.json when 'normalize' is set to 'false'`, () => {
  const { pkgJson } = readPkgJson({ normalize: false });
  expect(pkgJson).toEqual(appPackageJson);
});

it(`should object with only fields mentioned in include options`, () => {
  const { pkgJson } = readPkgJson({ include: ['name', 'version'] });
  expect(pkgJson).toHaveProperty('name');
  expect(pkgJson).toHaveProperty('version');
  expect(pkgJson).not.toHaveProperty('description');
  expect(pkgJson).not.toHaveProperty('scripts');
});
