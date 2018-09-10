const Server = require('../dist/classes/server').Server;
const assert = require('assert');

module.exports = ((global) => {
    let authToken = global.authToken || 'test_token';

    describe('Server', () => {
        let server;
        it('It should create a server', () => {
            global.publicServer = server = new Server();
        });

        it('It should get a public client agent', () => {
            let agent = server.client.getPublicAgent();
            assert.notEqual(!!agent, false, 'There must be a valid axios agent');
        });

        it('It should set a token', () => {
            server.client.setToken(authToken);
            assert.strictEqual(server.client.token , authToken, 'There must be a valid token');
        });

        it('It should get an authorized client agent', () => {
            let client = server.client.getAuthAgent();
            assert.strictEqual(client.defaults.headers.Authorization, `Bearer ${authToken}`, 'There must be a valid token in the Authorization header');
        });

    })
});