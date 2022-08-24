const { login, fetch } = require('../src/session');

exports.command = 'list';
exports.describe = 'list all todos';

exports.handler = async function(argv) {
    const { ok, error } = await login();
    if (!ok) {
        console.log(error);
        return;
    }

    const response = await fetch('https://davidqz-todos.herokuapp.com/api/v1/todos');
    console.log(JSON.stringify(await response.json()));
};
