const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");
const ticketing = require("../helpers/ticketing");
const interfaceFields = require("../../dist/interfaces/resources/event.interface");
const assertFieldsMatch = require("../queries").assertFieldsMatch;

describe("Integration::TicketPricing", () => {
	let publicServer, adminServer;


	describe("SuperUser Actions", () => {
		let eventsByName = {};
		before(async () => {
			adminServer = await global.getAdminServer();
			eventsByName = await global.getEvents();
		});

		it("SuperUser updates ticket pricing for event Fancy Pants Party", async () => {
			let event = await adminServer.events.read({ id: eventsByName["Fancy Pants Party"] });
			let ticketType = event.data.ticket_types.pop();

			let updatedTicketTypes = await adminServer.events.ticketTypes.update({
				event_id: event.data.id,
				id: ticketType.id,
				ticket_pricing: [{
					name: "Updated Pricing",
					status: "Published",
					start_date: ticketType.start_date,
					end_date: ticketType.end_date,
					price_in_cents: 99900
				}]
			});
			assert.strictEqual(updatedTicketTypes.status, 200);
		});
	})
});