const q = require('../queries');
const assert = require('assert');
const Server = require('../../dist/classes/server').Server;
const global = require('../data/globals');


describe('/organizations/', function () {
    const server = new Server({}, {});
    const orgs = q.readCSV('./data/organizations.csv');
    it('an unauthenticated user cannot add an Organization', function () {
        return q.shouldFail(server.organizations.create(orgs[0])).then(res => {
            assert.strictEqual(res.status, 401);
        }).catch(e => {
            console.log(e);
        });
    });

    orgs.forEach(function (org) {
        it(`SuperUser registers ${org.name}`, async function () {
            let result = await global.adminServer.organizations.create({ owner_user_id: global.orgOwner1.id, ...org });
            assert.strictEqual(result.status, 201, `${org.name} was not added; ${result.data}`);
            global.organizations[result.data.name] = result.data;
        });
    });
});