const path = require('path');
const fs = require('fs-extra');

const targetDir = path.resolve(__dirname, '../lib');

async function removeDir() {
  try {
    fs.removeSync(targetDir);
  } catch (err) {
    console.err(err);
    process.exit(1);
  }
}

removeDir();
