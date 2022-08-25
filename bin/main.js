#!/usr/bin/env node
const yargs = require('yargs');

const argv = yargs
    .command(require('./list'))
    .command(require('./sign'))
    .help()
    .alias('help', 'h')
    .demandCommand()
    .argv;
