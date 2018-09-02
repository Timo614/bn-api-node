const q = require('../queries');
const assert = require('assert');
const Server = require('../../dist/classes/server').Server;
const global = require('../data/globals');


describe('/events/', function () {
    const server = new Server({}, {});
    const events = q.readCSV('./data/events.csv');
let list;

    it('an unauthenticated user cannot add an event', function () {
        return q.shouldFail(server.event.create(events[0])).then(res => {
            assert.strictEqual(res.statusCode, 401);
        });
    });

    events.forEach(function (event) {
        it(`SuperUser creates event ${event.name} for Event: ${event.venue_id} and Org: ${event.organization_id}`, async function () {
            event.venue_id = global.venues[event.venue_id].id;
            event.organization_id = global.organizations[event.organization_id].id;
            let result = await global.admin.event.create(event);
            assert.strictEqual(result.statusCode, 201, `${event.name} was not added; ${result.text}`);
            global.events[result.body.name] = result.body;
        });
    });

    it('an unauthenticated user can retrieve the event list', async function() {
        const response = await server.event.index();
        assert.strictEqual(response.statusCode, 200);
         list = response.body;
        assert.strictEqual(list.length, events.length);
        assert.strictEqual(list[0].event.name, events[0].name);
    });

    it('an unauthenticated user can retrieve an event', async function() {
        const response = await server.event.read({id: list[0].event.id});
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.body.event.name, events[0].name);
    });

    it('an unauthenticated user can search for an event by name', async function() {
        const response = await server.event.find({name: events[0].name});
        assert.strictEqual(response.statusCode, 200);
        const matches = response.body;
        assert.strictEqual(matches.length, 1);
        assert.strictEqual(matches[0].event.name, events[0].name);
    });

    it('an unauthenticated user cannot update an event', function () {
        return q.shouldFail(server.event.edit({id:list[0].event.id, name: "My First Event"})).then(res => {
            assert.strictEqual(res.statusCode, 401);
        });
    });

    it('A superuser can edit an event', async function() {
        const response = await global.admin.event.edit({id: list[0].event.id, name: "My First Event"});
        console.log(response);
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.body.name, "My First Event");
    });
});