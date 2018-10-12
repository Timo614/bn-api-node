const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");

describe("Integration::Venues", async function() {
	let publicServer, adminServer;
	const venues = q.readCSV("./data/venues.csv");

	describe("Public User", function() {
		before(async function() {
			publicServer = await global.getPublicServer();
		});
		it("an unauthenticated user cannot add an Venue", function() {
			return q.shouldFail(publicServer.venues.create(venues[0])).then(res => {
				assert.strictEqual(res.status, 401);
			});
		});
	});


	describe("SuperUser Actions", function() {
		before(async function() {
			adminServer = await global.getAdminServer();
		});
		venues.forEach(function(venue) {
			it(`SuperUser registers ${venue.name}`, async function() {
				let result = await adminServer.venues.create(venue);
				assert.strictEqual(
					result.status,
					201,
					`${venue.name} was not added; ${result.data}`
				);
				global.venues[result.data.name] = result.data;
			});
		});
	})


	//TODO place back when bn-api supports querying by name
	// it("an unauthenticated user can search for a venue by name", async function() {
	// 	const response = await server.venues.index({ q: venues[0].name });
	// 	assert.strictEqual(response.status, 200);
	// 	const matches = response.data;
	// 	assert.strictEqual(matches.length, 1);
	// 	assert.strictEqual(matches[0].name, venues[0].name);
	// });
});
