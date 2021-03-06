#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import compareFiles from '../src/index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<firstFile>', 'first file to compare')
  .argument('<secondFile>', 'second file to compare')
  .action((firstFile, secondFile) => {
    console.log(compareFiles(firstFile, secondFile));
  })
  .parse(process.argv);
