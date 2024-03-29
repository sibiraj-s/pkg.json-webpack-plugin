const fs = require('fs');
const path = require('path');

const gulp = require('gulp');

const outDir = path.resolve(__dirname, 'lib');

const cleanOutDir = async () => {
  await fs.promises.rm(outDir, { recursive: true, force: true });
};

const copyFiles = () => {
  return gulp.src(['README.md', 'CHANGELOG.md', 'LICENSE', 'package.json']).pipe(gulp.dest(outDir));
};

const preparePackageJson = async () => {
  const targetPkgJsonPath = path.resolve(outDir, 'package.json');
  const pkgJsonStr = await fs.promises.readFile(targetPkgJsonPath, 'utf-8');
  const pkgJson = JSON.parse(pkgJsonStr);

  pkgJson.main = 'index.js';
  pkgJson.types = 'index.d.ts';
  delete pkgJson.scripts;
  delete pkgJson.devDependencies;
  delete pkgJson.private;

  await fs.promises.writeFile(targetPkgJsonPath, JSON.stringify(pkgJson, null, 2), 'utf-8');
};

exports.clean = cleanOutDir;
exports.prepareLib = gulp.series(copyFiles, preparePackageJson);
