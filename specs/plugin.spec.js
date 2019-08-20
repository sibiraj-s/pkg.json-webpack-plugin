const webpack = require('webpack');

const PackageJsonWebpackPlugin = require('../lib/index');
const webpackConfig = require('./fixtures/webpack.config');

it(`the plugin should load without any errors with default options`, function(done) {
  const plugins = [new PackageJsonWebpackPlugin()];
  const config = webpackConfig({ plugins });

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);
    done();
  });
});

it(`the plugin should load without any errors with custom options`, function(done) {
  const plugins = [new PackageJsonWebpackPlugin({ key: 'appPkgJson' })];
  const config = webpackConfig({ plugins });

  webpack(config, (err, stats) => {
    expect(err).toBeFalsy();
    expect(stats.compilation.errors).toEqual([]);
    expect(stats.compilation.warnings).toEqual([]);
    done();
  });
});
