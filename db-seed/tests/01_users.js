const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");

async function addUser(server, user) {
	return await server.users.create(user);
}

describe("Integration::Users", function() {
	let adminServer;
	/**
	 * Tests the SuperUser Login and assigns the result to the globals object for use in subsequent tests
	 */
	describe("Login as Super Admin", function() {
		before(async function() {
			adminServer = await global.getAdminServer();
		});
		it("Logs in", async function() {
			assert.notEqual(adminServer, false);
		});

		describe("Registers users", function() {
			const users = q.readCSV("./data/users.csv");
			users.forEach(function(user) {
				it(`registers ${user.first_name} ${user.last_name}`, async function() {
					let result = await addUser(adminServer, user);
					assert.strictEqual(
						result.status,
						201,
						`${user.last_name} was not added`
					);
				});
			});
		});
	});


	describe("Find specific users", function() {
		it("Finds Org Owner1", async function() {
			const result = await adminServer.users.findByEmail({
				email: "orgowner1@bigneon.com"
			});
			assert.strictEqual(result.status, 200);
			const orgOwner = result.data;
			assert.strictEqual(orgOwner.first_name, "Org");
			assert.strictEqual(orgOwner.last_name, "Owner");
			assert.strictEqual(orgOwner.phone, "515-123-1000");
			global.orgOwner1 = orgOwner;
		});
	});
});
