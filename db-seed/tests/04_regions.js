const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");


describe("Integration::Regions", async function() {
	let publicServer, adminServer;
	const regions = q.readCSV("./data/regions.csv");

	describe("SuperUser Actions", function() {
		before(async function() {
			adminServer = await global.getAdminServer();
		});
		global.regionsByName = {};
		regions.forEach(function(region) {
			it(`SuperUser registers ${region.name}`, async function() {
				let result = await adminServer.regions.create(region);
				assert.strictEqual(
					result.status,
					201,
					`${region.name} was not added; ${result.data}`
				);
				global.regionsByName[result.data.name] = result.data.id;
			});
		});

		it("updates a region", async function () {
			let updateId = global.regionsByName["New Orlean"];
			let original = await adminServer.regions.read({id: updateId});
			original = original.data;
			let originalName = original.name;
			original.name = "New Orleans";
			let updated = await adminServer.regions.update({ ...original});
			assert.strictEqual(original.name, updated.data.name, `Failed to update region name from ${originalName} to ${original.name}, got ${updated.name}`);
		});
	});

	describe("Public User", function() {
		before(async function() {
			publicServer = await global.getPublicServer();
		});
		it("an unauthenticated user cannot add a Region", function() {
			return q.shouldFail(publicServer.regions.create(regions[0])).then(res => {
				assert.strictEqual(res.status, 401);
			});
		});
	});
});
