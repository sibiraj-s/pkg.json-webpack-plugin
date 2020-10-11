import path from 'path';
import fs from 'fs';

import PackageJsonWebpackPlugin from '../src/index.ts';
import pkgJson from '../package.json';

import getCompiler from './helpers/getCompiler';
import compile from './helpers/compile';

const rootDir = path.resolve(__dirname, '..');

test('the plugin should load without any errors with default options', async () => {
  const compiler = getCompiler();
  new PackageJsonWebpackPlugin().apply(compiler);

  const stats = await compile(compiler);

  expect(stats.compilation.errors).toEqual([]);
  expect(stats.compilation.warnings).toEqual([]);
});

test('the plugin should load without any errors with custom options', async () => {
  const compiler = getCompiler();

  const options = { key: 'appPkgJson' };
  new PackageJsonWebpackPlugin(options).apply(compiler);

  const stats = await compile(compiler);
  expect(stats.compilation.errors).toEqual([]);
  expect(stats.compilation.warnings).toEqual([]);
});

test('the plugin should load the data correctly', async () => {
  const compiler = getCompiler();

  const options = {
    key: 'appPkgJson',
    rootDir,
  };
  new PackageJsonWebpackPlugin(options).apply(compiler);

  const outFile = path.resolve(__dirname, 'fixtures', 'build', 'main.js');

  const stats = await compile(compiler);
  expect(stats.compilation.errors).toEqual([]);
  expect(stats.compilation.warnings).toEqual([]);

  const output = await fs.promises.readFile(outFile, 'utf-8');
  expect(output).toContain(pkgJson.name);
  expect(output).toContain(pkgJson.version);
  expect(output).toContain(pkgJson.description);
});
