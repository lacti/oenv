#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;

const oenv = () => {
  const output = argv.output || argv.o || 'oenv.js';
  const outputDir = argv.outputDir || argv.d || '.';

  const vars = [`// This file is auto-generated: ${new Date().toString()}`];
  for (const pair of argv._) {
    const [key, value] = pair.split('=');
    vars.push(`process.env.${key} = "${value}";`);
  }
  const outputPath = path.join(outputDir, output);
  const content = vars.join('\n');
  if (argv.v || argv.verbose) {
    console.log(content);
  }
  fs.writeFileSync(outputPath, content);
}
module.exports = oenv;

if (require.main === module) {
  oenv();
}

