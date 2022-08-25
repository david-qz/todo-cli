const { login, fetch } = require('../src/session');

exports.command = 'list';
exports.describe = 'list all todos';

exports.handler = async function(argv) {
    const { ok, message } = await login();
    if (!ok) {
        console.log(message);
        return;
    }

    const response = await fetch('https://davidqz-todos.herokuapp.com/api/v1/todos');
    console.log(JSON.stringify(await response.json()));
};
