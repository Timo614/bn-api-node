const q = require("../queries");
const assert = require("assert");
const Server = require("../../dist/classes/server").Server;
const global = require("../data/globals");

describe("/events/", function() {
	const server = new Server({}, {});
	const events = q.readCSV("./data/events.csv");

	it("an unauthenticated user cannot add an event", function() {
		return q.shouldFail(server.events.create(events[0])).then(res => {
			assert.strictEqual(
				res.status,
				401,
				res.message || "Expecting a 401 status"
			);
		});
	});
	let adminServer, adminData;
	describe("SuperUser Events", function() {
		before(async function() {
			adminServer = await global.getAdminServer();
			adminData = await global.getAdminData();
		});
		for (let i in events) {
			const event = events[i];
			let id;
			it(`SuperUser creates event "${event.name}" for Venue: ${
				event.venue_id
			} and Org: ${event.organization_id}`, async function() {
				event.venue_id = global.venues[event.venue_id].id;
				event.organization_id = global.organizations[event.organization_id].id;
				const result = await adminServer.events.create(event);
				id = result.data.id;
				global.events[result.data.name] = result.data;
				assert.strictEqual(
					result.status,
					201,
					`${event.name} was not added; ${result.data}`
				);
			});

			//TODO add artists to event

			//TODO add ticketing to event

			it(`SuperUser publishes event "${event.name}"`, async function() {
				const result = await adminServer.events.publish({ id });
				assert.strictEqual(result.status, 200);
			});
		}
	});

	describe("Event lists", function() {
		let list;
		it("an unauthenticated user can retrieve the published event list", async function() {
			const response = await server.events.index();
			assert.strictEqual(response.status, 200);
			list = response.data;
			assert.strictEqual(list.length, events.length);
		});

		it("an unauthenticated user can retrieve an event", async function() {
			const response = await server.events.read({ id: list[0].id });
			assert.strictEqual(response.status, 200);
			assert.strictEqual(response.data.name, list[0].name);
		});

		it("an unauthenticated user can search for an event by name", async function() {
			const response = await server.events.index({ query: events[0].name });
			assert.strictEqual(response.status, 200);
			const matches = response.data;
			assert.strictEqual(matches.length, 1);
			assert.strictEqual(matches[0].name, events[0].name);
		});

		it("an unauthenticated user cannot update an event", function() {
			return q
				.shouldFail(
					server.events.update({ id: list[0].id, name: "My First Event" })
				)
				.then(res => {
					assert.strictEqual(
						res.status,
						401,
						res.message || "Expecting a 401 status"
					);
				});
		});

		it("A superuser can update an event", async function() {
			const response = await global.adminServer.events.update({
				id: list[0].id,
				name: "My First Event"
			});
			assert.strictEqual(response.status, 200);
			assert.strictEqual(response.data.name, "My First Event");
		});
	});
});
