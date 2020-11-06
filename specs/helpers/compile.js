const compile = (compiler) => new Promise((resolve, reject) => {
  compiler.run((err, stats) => {
    if (err) {
      return reject(err);
    }

    return resolve(stats);
  });
});

export default compile;
