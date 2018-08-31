const q = require('../queries');
const assert = require('assert');
const Server = require('../../dist/classes/server').Server;
const global = require('../data/globals');


describe('/venues/', function () {
    const server = new Server({}, {});
    const venues = q.readCSV('./data/venues.csv');
    it('an unauthenticated user cannot add an Venue', function () {
        return q.shouldFail(server.venue.create(venues[0])).then(res => {
            assert.strictEqual(res.statusCode, 401);
        });
    });

    venues.forEach(function (venue) {
        it(`SuperUser registers ${venue.name}`, async function () {
            let result = await global.admin.venue.create(venue);
            assert.strictEqual(result.statusCode, 201, `${venue.name} was not added; ${result.text}`);
            global.venues[result.body.name] = result.body;
        });
    });
});