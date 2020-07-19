const path = require('path');
const webpack = require('webpack');

const fixturesDir = path.resolve(__dirname, '..', 'fixtures');

const getCompiler = () => webpack({
  mode: 'production',
  output: {
    path: path.resolve(fixturesDir, 'build'),
  },
  entry: path.resolve(fixturesDir, 'main.js'),
  plugins: [],
});

export default getCompiler;
