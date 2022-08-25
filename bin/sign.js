const {
    resumeSessionOrPromptLogin,
    logout,
    signup,
    fetch
} = require('../src/session');

exports.command = 'sign <in|out|up>';
exports.describe = 'sign in, out, or up';

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
        case 'up':
        {
            const { ok, message } = await signup();
            if (!ok) {
                console.log(message);
            } else {
                console.log('Signed up successfully');
            }
            break;
        }
        default:
            console.log(`error: got ${verb}, expected either 'in' or 'out'`);
    }
};
