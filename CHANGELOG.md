# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
>
> - Features
> - Bug Fixes
> - Performance Improvements
> - Enhancements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal
> - Unreleased

## v2.0.0 (2020-10-11)

#### Features

- support webpack 5 ([fe9eabc](https://github.com/sibiraj-s/pkg.json-webpack-plugin/commit/fe9eabc))

#### Breaking Changes

- minimum required node version is v10.13
- drop webpack 4 support

## v1.1.0 (2020-07-19)

#### Features

- add schema validation ([fe9eabc](https://github.com/sibiraj-s/pkg.json-webpack-plugin/commit/fe9eabc))
- update loadash to v4.17.19 to fix vulnerability ([541ed98](https://github.com/sibiraj-s/pkg.json-webpack-plugin/commit/541ed98))

#### Dependency Updates

- update dependencies and devDependencies ([541ed98](https://github.com/sibiraj-s/pkg.json-webpack-plugin/commit/541ed98))

## v1.0.3 (2019-12-28)

#### Internal

- prefer gulp task runner ([1f884f2](https://github.com/sibiraj-s/pkg.json-webpack-plugin/commit/1f884f2))
- migrate from travis-ci to github actions ([2c439c2](https://github.com/sibiraj-s/pkg.json-webpack-plugin/commit/2c439c2))
- update devDependencies ([f1d5f8c](https://github.com/sibiraj-s/pkg.json-webpack-plugin/commit/f1d5f8c))

## v1.0.2 (2019-08-20)

#### Internal

- remove assets published to npm, reverts [v1.0.1](https://github.com/sibiraj-s/pkg.json-webpack-plugin/blob/master/CHANGELOG.md#v101-2019-08-20)

## v1.0.1 (2019-08-20)

#### Internal

- publish assets to npm ([62ea97c](https://github.com/sibiraj-s/pkg.json-webpack-plugin/commit/62ea97c))

## v1.0.0 (2019-08-20)

#### Features

- **Initial Release**: A Webpack Plugin to load package.json as an environment variable
