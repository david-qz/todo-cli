#!/usr/bin/env node
const yargs = require('yargs');

const argv = yargs
    .command(require('./list'))
    .help()
    .alias('help', 'h')
    .argv;
