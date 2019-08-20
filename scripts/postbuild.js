const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

const targetDir = path.resolve(__dirname, '../lib');

const paths = {};
paths.pkgJson = path.resolve(__dirname, '../package.json');
paths.license = path.resolve(__dirname, '../LICENSE');
paths.readMe = path.resolve(__dirname, '../README.md');
paths.assets = path.resolve(__dirname, '../assets/');

function copyFileSync(filePath) {
  const filename = path.basename(filePath);
  const copySync = fs.copyFileSync(filePath, path.join(targetDir, filename));
  console.log(`- ${chalk.green('File copied:')} ${filename} to '${targetDir}'`);
  return copySync;
}

async function copyFiles() {
  try {
    copyFileSync(paths.pkgJson);
    copyFileSync(paths.license);
    copyFileSync(paths.readMe);
    fs.copySync(paths.assets, path.resolve(targetDir, 'assets'));
  } catch (err) {
    throw new Error(err);
  }
}

async function preparePackageJson() {
  try {
    const pkgJson = path.resolve(targetDir, 'package.json');
    fs.readFile(pkgJson, 'utf8', (readErr, data) => {
      if (readErr) throw readErr;

      const pkg = JSON.parse(data);
      pkg.main = 'index.js';
      pkg.types = 'index.d.ts';
      delete pkg.scripts;
      delete pkg.devDependencies;
      delete pkg.private;

      fs.writeFile(pkgJson, JSON.stringify(pkg, null, 2), 'utf8', writeErr => {
        if (writeErr) throw writeErr;
        console.log(`- ${chalk.green('Prepare PackageJson:')} package.json written \n`);
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

copyFiles();
preparePackageJson();
