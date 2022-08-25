#!/usr/bin/env node
const { resumeSessionOrPromptLogin } = require('../src/session');
const yargs = require('yargs');

(async () => {
    // Preempt the command parsing logic here because we want to run this resume-or-prompt login
    // logic before every command except the 'sign in/out' command.
    if (process.argv[2] !== 'sign') {
        const { ok, message } = await resumeSessionOrPromptLogin();
        if (!ok) {
            console.log(message);
            return;
        }
    }

    const argv = yargs
        .command(require('./sign'))
        .command(require('./list'))
        .command(require('./add'))
        .help()
        .alias('help', 'h')
        .demandCommand()
        .argv;
})();
