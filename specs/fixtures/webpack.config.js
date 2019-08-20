const path = require('path');

module.exports = function(options = {}) {
  const plugins = options.plugins || [];

  return {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'build'),
    },
    entry: path.resolve(__dirname, 'main.js'),
    plugins,
  };
};
