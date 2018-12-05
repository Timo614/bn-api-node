const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");
const assertFieldsMatch = require("../queries").assertFieldsMatch;
const venueFields = require("../../dist/interfaces/resources/venue.interface");


describe("Integration::Venues", async function() {
	let publicServer, adminServer, regionsByName = {};
	const venues = q.readCSV("./data/venues.csv");

	describe("SuperUser Actions", function() {
		before(async function() {
			adminServer = await global.getAdminServer();
			regionsByName = await global.getRegions();
		});
		global.venuesByName = {};
		for (let i in venues) {
			let venue = venues[i];
			it(`SuperUser registers ${venue.name}`, async function() {

				venue.region_id = regionsByName[venue.region_id];
				let result = await adminServer.venues.create(venue);
				assert.strictEqual(
					result.status,
					201,
					`${venue.name} was not added; ${result.data}`
				);
				global.venuesByName[result.data.name] = result.data.id;
			});
		}

		it("updates a venue", async () => {
			let updateId = global.venuesByName["Lavo Nightclu"];
			let original = await adminServer.venues.read({id: updateId});
			original = original.data;
			let originalName = original.name;
			original.name = "Lavo Nightclub";
			let updated = await adminServer.venues.update({ ...original});
			global.venuesByName[original.name] = updateId;
			assert.strictEqual(original.name, updated.data.name, `Failed to update venue name from ${originalName} to ${original.name}, got ${updated.name}`);
		});
	});

	describe("Public User", function() {
		before(async function() {
			publicServer = await global.getPublicServer();
		});
		it("an unauthenticated user cannot add an Venue", function() {
			return q.shouldFail(publicServer.venues.create(venues[0])).then(res => {
				assert.strictEqual(res.status, 401);
			});
		});

		describe("Retrieve and validate venue row", function() {
			let list = [], response, venue;
			before(async () =>{
				response = await publicServer.venues.index();
				assert.strictEqual(response.status, 200, `Response status: ${response.status}`);
			});
			it("retrieve the venue list", async function() {
				list = response.data.data;

				const localVenue = venues.find(item => {
					return list[0].name === item.name;
				});


				assert.strictEqual(list.length, venues.length, `Mismatched list length Server: ${list.length} Local: ${venues.length}`);
				assert.strictEqual(list[0].name, localVenue.name, `Was expecting "${localVenue.name}" but got ${list[0].name}`);
			});

			it("retrieve a venue", async function() {
				venue = await publicServer.venues.read({ id: list[0].id });
				assert.strictEqual(venue.status, 200);
				assert.strictEqual(venue.data.name, list[0].name); //First name in the list if default sort is by name
			});

			it("a venue interface has matching fields", () => {
				let venueInterface = venueFields.createVenue();
				assertFieldsMatch(venue.data, venueInterface, "Venues: ");
			});
		})
	});

	//TODO place back when bn-api supports querying by name
	// it("an unauthenticated user can search for a venue by name", async function() {
	// 	const response = await server.venues.index({ q: venues[0].name });
	// 	assert.strictEqual(response.status, 200);
	// 	const matches = response.data;
	// 	assert.strictEqual(matches.length, 1);
	// 	assert.strictEqual(matches[0].name, venues[0].name);
	// });
});
