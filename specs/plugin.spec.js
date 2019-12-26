import webpack from 'webpack';

import PackageJsonWebpackPlugin from '../src';
import webpackConfig from './fixtures/webpack.config';

test(`the plugin should load without any errors with default options`, done => {
  const plugins = [new PackageJsonWebpackPlugin()];
  const config = webpackConfig({ plugins });

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);
    done();
  });
});

test(`the plugin should load without any errors with custom options`, done => {
  const plugins = [new PackageJsonWebpackPlugin({ key: 'appPkgJson' })];
  const config = webpackConfig({ plugins });

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);
    done();
  });
});

test(`the webpack config should be initialized correctly with no options`, done => {
  const config = webpackConfig();

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);
    done();
  });
});
