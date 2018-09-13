const q = require('../queries');
const assert = require('assert');
const Server = require('../../dist/classes/server').Server;
const global = require('../data/globals');


describe('/events/', function () {
    const server = new Server({}, {});
    const events = q.readCSV('./data/events.csv');


    it('an unauthenticated user cannot add an event', function () {
        return q.shouldFail(server.event.create(events[0])).then(res => {
            assert.strictEqual(res.status, 401);
        });
    });

    events.forEach(function (event) {
        it(`SuperUser creates event ${event.name} for Event: ${event.venue_id} and Org: ${event.organization_id}`, async function () {
            event.venue_id = global.venues[event.venue_id].id;
            event.organization_id = global.organizations[event.organization_id].id;
            let result = await global.adminServer.event.create(event);
            global.events[result.data.name] = result.data;
            assert.strictEqual(result.status, 201, `${event.name} was not added; ${result.data}`);
        });
    });

    describe('Event lists', function() {
        let list;
        it('an unauthenticated user can retrieve the event list', async function () {
            const response = await server.event.index();
            assert.strictEqual(response.status, 200);
            list = response.data;
            assert.strictEqual(list.length, events.length);
        });

        it('an unauthenticated user can retrieve an event', async function () {
            const response = await server.event.read({id: list[0].id});
            assert.strictEqual(response.status, 200);
            assert.strictEqual(response.data.name, list[0].name);
        });

        it('an unauthenticated user can search for an event by name', async function () {
            const response = await server.event.find({name: events[0].name});
            assert.strictEqual(response.status, 200);
            const matches = response.data;
            assert.strictEqual(matches.length, 1);
            assert.strictEqual(matches[0].name, events[0].name);
        });

        it('an unauthenticated user cannot update an event', function () {
            return q.shouldFail(server.event.edit({id: list[0].id, name: "My First Event"})).then(res => {
                assert.strictEqual(res.status, 401);
            });
        });

        it('A superuser can edit an event', async function () {
            const response = await global.adminServer.event.update({id: list[0].id, name: "My First Event"});
            assert.strictEqual(response.status, 200);
            assert.strictEqual(response.data.name, "My First Event");
        });
    });

});