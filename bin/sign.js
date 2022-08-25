const { resumeSessionOrPromptLogin, logout, fetch } = require('../src/session');

exports.command = 'sign <in|out>';
exports.describe = 'sign in or out';

exports.handler = async function(argv) {
    const verb = argv.in;

    switch (verb) {
        case 'in':
        {
            const { ok, message } = await resumeSessionOrPromptLogin();
            if (!ok) console.log(message);

            if (message.match(/resumed/)) {
                console.log("You are already logged in. Run 'todo sign out' first to start a new session.");
            } else if (message.match(/started/)) {
                console.log('Logged in successfully');
            }

            break;
        }
        case 'out':
        {
            await logout();
            console.log('Logged out successfully');
            break;
        }
        default:
            console.log(`error: got ${verb}, expected either 'in' or 'out'`);
    }
};
