import fs from 'node:fs/promises';
import path from 'node:path';

import { src, dest, series } from 'gulp';

const outDir = path.resolve(import.meta.dirname, 'lib');

const cleanOutDir = async () => {
  await fs.rm(outDir, { recursive: true, force: true });
};

const copyFiles = () => {
  return src(['README.md', 'CHANGELOG.md', 'LICENSE', 'package.json']).pipe(dest(outDir));
};

const preparePackageJson = async () => {
  const targetPkgJsonPath = path.resolve(outDir, 'package.json');
  const pkgJsonStr = await fs.readFile(targetPkgJsonPath, 'utf-8');
  const pkgJson = JSON.parse(pkgJsonStr);

  pkgJson.main = 'index.cjs';
  pkgJson.types = 'index.d.cts';
  delete pkgJson.module;
  delete pkgJson.scripts;
  delete pkgJson.devDependencies;
  delete pkgJson.private;

  await fs.writeFile(targetPkgJsonPath, JSON.stringify(pkgJson, null, 2), 'utf-8');
};

export const clean = cleanOutDir;
export const prepareLib = series(copyFiles, preparePackageJson);
