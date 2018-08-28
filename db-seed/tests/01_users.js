const q = require('../queries');
const assert = require('assert');
const Server = require('../../dist/classes/server').Server;


async function addUser(server, user) {
    return await server.users.create(user);
}

describe('/users/', function() {
    const server = new Server({}, {});
    const users = q.readCSV('./data/users.csv');
    users.forEach(function(user) {
        it(`registers ${user.first_name} ${user.last_name}`, async function() {
            let result = await addUser(server, user);
            assert.strictEqual(result.statusCode, 200, `${user.last_name} was not added`);
        });
    });
});
