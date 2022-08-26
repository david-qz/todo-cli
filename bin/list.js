const { fetch } = require('../src/session');
const jsonpipe = require('../src/jsonpipe');

exports.command = 'list';
exports.describe = 'list all todos';

exports.handler = async function(argv) {
    const response = await fetch('https://davidqz-todos.herokuapp.com/api/v1/todos');
    const json = await response.text();
    jsonpipe.out(json);
};
