const { fetch } = require('../src/session');

exports.command = 'add todo';
exports.describe = 'add a new todo';

exports.handler = async function(argv) {
    const todo = JSON.parse(JSON.stringify(argv.todo));

    const response = await fetch('https://davidqz-todos.herokuapp.com/api/v1/todos', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: todo
    });
    console.log(JSON.stringify(await response.json()));
};
