const q = require("../queries");
const assert = require("assert");
const Server = require("../../dist/classes/server").Server;
const global = require("../helpers/globals");
const ticketing = require("../helpers/ticketing");

describe("Integration::Events", function() {
	let publicServer, adminServer;
	const events = q.readCSV("./data/events.csv");

	describe("Public User", function() {
		before(async function() {
			publicServer = await global.getPublicServer();
		});
		it("an unauthenticated user cannot add an event", function() {
			return q.shouldFail(publicServer.events.create(events[0])).then(res => {
				assert.strictEqual(
					res.status,
					401,
					res.message || "Expecting a 401 status"
				);
			});
		});
	});

	describe("SuperUser Actions", function() {
		before(async function() {
			adminServer = await global.getAdminServer();
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

			it(`SuperUser adds ticket pricing to event "${
				event.name
			}"`, async function() {
				const testTicketTypes = [
					{
						name: "General Access",
						startPrice: 1000,
						pricingPeriods: 5,
						capacity: 1000
					},
					{
						name: "Balcony",
						startPrice: 2000,
						pricingPeriods: 2,
						capacity: 50
					},
					{
						name: "VIP",
						startPrice: 10000,
						pricingPeriods: 2,
						capacity: 20
					}
				];

				for (let index = 0; index < testTicketTypes.length; index++) {
					const {
						name,
						startPrice,
						pricingPeriods,
						capacity
					} = testTicketTypes[index];
					const ticketTypeDetails = ticketing.generateTicketTypePricing({
						name,
						startPrice,
						pricingPeriods,
						capacity,
						eventDateString: event.door_time
					});
					const result = await adminServer.events.ticketTypes.create({
						event_id: id,
						...ticketTypeDetails
					});
					assert.strictEqual(
						result.status,
						201,
						`${name} ticket type was not added to event ${
							event.name
						}; ${ticketTypeDetails}`
					);
				}
			});

			it(`SuperUser publishes event "${event.name}"`, async function() {
				const result = await adminServer.events.publish({ id });
				assert.strictEqual(result.status, 200);
			});
		}

		//TODO updating of event details tests

		//TODO updating of event ticket pricing details

		//TODO update artists tests
	});

	describe("Event lists", function() {
		before(async function() {
			publicServer = await global.getPublicServer();
		});
		let list;
		it("an unauthenticated user can retrieve the published event list", async function() {
			const response = await publicServer.events.index();
			assert.strictEqual(response.status, 200);
			list = response.data.data;
			assert.strictEqual(list.length, events.length);
		});

		it("an unauthenticated user can retrieve an event", async function() {
			const response = await publicServer.events.read({ id: list[0].id });
			assert.strictEqual(response.status, 200);
			assert.strictEqual(response.data.name, list[0].name);
		});

		it("an unauthenticated user can search for an event by name", async function() {
			const response = await publicServer.events.index({ query: events[0].name });
			assert.strictEqual(response.status, 200);
			const matches = response.data.data;
			assert.strictEqual(matches.length, 1);
			assert.strictEqual(matches[0].name, events[0].name);
		});

		it("an unauthenticated user cannot update an event", function() {
			return q
				.shouldFail(
					publicServer.events.update({ id: list[0].id, name: "My First Event" })
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
			const response = await adminServer.events.update({
				id: list[0].id,
				name: "My First Event"
			});
			assert.strictEqual(response.status, 200);
			assert.strictEqual(response.data.name, "My First Event");
		});
	});
});
