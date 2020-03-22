import path from 'path';
import fs from 'fs';
import webpack from 'webpack';

import PackageJsonWebpackPlugin from '../src/index.ts';
import webpackConfig from './fixtures/webpack.config';
import pkgJson from '../package.json';

const rootDir = path.resolve(__dirname, '..');

test('the plugin should load without any errors with default options', (done) => {
  const plugins = [new PackageJsonWebpackPlugin()];
  const config = webpackConfig({ plugins });

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);
    done();
  });
});

test('the plugin should load without any errors with custom options', (done) => {
  const plugins = [new PackageJsonWebpackPlugin({ key: 'appPkgJson' })];
  const config = webpackConfig({ plugins });

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);
    done();
  });
});

test('the webpack config should be initialized correctly with no options', (done) => {
  const config = webpackConfig();

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);
    done();
  });
});

test('the plugin should load the data correctly', (done) => {
  const options = {
    key: 'appPkgJson',
    rootDir,
  };

  const plugins = [new PackageJsonWebpackPlugin(options)];
  const config = webpackConfig({ plugins });

  const outFile = path.resolve(__dirname, 'fixtures', 'build', 'main.js');

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);

    fs.promises
      .readFile(outFile, 'utf-8')
      .then((output) => {
        expect(output).toContain(pkgJson.name);
        expect(output).toContain(pkgJson.version);
        expect(output).toContain(pkgJson.desctiption);
        done();
      })
      .catch((e) => {
        done(e);
      });
  });
});
