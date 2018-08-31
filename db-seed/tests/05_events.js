const q = require('../queries');
const assert = require('assert');
const Server = require('../../dist/classes/server').Server;
const global = require('../data/globals');


describe('/events/', function () {
    const server = new Server({}, {});
    const events = q.readCSV('./data/events.csv');
    it('an unauthenticated user cannot add an Event', function () {
        return q.shouldFail(server["event"].create(_replaceIds(events[0])).then(res => {
            assert.strictEqual(res.statusCode, 401);
        }));
    });

    events.forEach(function (e) {

        it(`creates ${e.name}`, async function () {
            let data = _replaceIds(e);
            let result = await global.admin["event"].create(data);
            assert.strictEqual(result.statusCode, 201, `${e.name} was not added`);
        });
    });
});

function _replaceIds(e) {
    return { ...e, organization_id: global.organizations[e.organization_id].id, venue_id: global.venues[e.venue_id].id }
}