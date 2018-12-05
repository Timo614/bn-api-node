const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");
const ticketing = require("../helpers/ticketing");
const interfaceFields = require("../../dist/interfaces/resources/event.interface");
const assertFieldsMatch = require("../queries").assertFieldsMatch;

describe("Integration::FeeSchedule", () => {
	let publicServer, adminServer;



	describe("SuperUser Actions", () => {
		let orgsByName = {};
		before(async () => {
			adminServer = await global.getAdminServer();
			orgsByName = await global.getOrganizations();
		});

		it("SuperUser creates fee schedule for Organization: The Midway", async () => {
			let result = await adminServer.organizations.feeSchedules.create({
				organization_id: orgsByName["The Midway"],
				name: "Fee Schedule 1",
				ranges: [
					{
						min_price: 0,
						company_fee_in_cents: 75,
						client_fee_in_cents: 25
					},
					{
						min_price: 10,
						company_fee_in_cents: 100,
						client_fee_in_cents: 50
					},
					{
						min_price: 20,
						company_fee_in_cents: 150,
						client_fee_in_cents: 75
					},
				]
			});
			assert.strictEqual(result.status, 201);
		});
	})
});