const q = require('../queries');
const assert = require('assert');
const Server = require('../../dist/classes/server').Server;
const global = require('../data/globals');


describe('/venues/', function () {
    const server = new Server({}, {});
    const venues = q.readCSV('./data/venues.csv');
    it('an unauthenticated user cannot add an Venue', function () {
        return q.shouldFail(server.venue.create(venues[0])).then(res => {
            assert.strictEqual(res.status, 401);
        });
    });

    venues.forEach(function (venue) {
        it(`SuperUser registers ${venue.name}`, async function () {
            let result = await global.adminServer.venue.create(venue);
            assert.strictEqual(result.status, 201, `${venue.name} was not added; ${result.data}`);
            global.venues[result.data.name] = result.data;
        });
    });

    it('an unauthenticated user can search for a venue by name', async function () {
        const response = await server.venue.find({name: venues[0].name});
        assert.strictEqual(response.status, 200);
        const matches = response.data;
        assert.strictEqual(matches.length, 1);
        assert.strictEqual(matches[0].name, venues[0].name);
    });
});