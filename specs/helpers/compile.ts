import { Compiler, Stats } from 'webpack';

const compile = (compiler: Compiler): Promise<Stats> => new Promise((resolve, reject) => {
  compiler.run((err, stats) => {
    if (err) {
      return reject(err);
    }

    if (stats === undefined) {
      return reject(new Error('Compilation stats are undefined'));
    }

    return resolve(stats);
  });
});

export default compile;
