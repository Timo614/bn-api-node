const q = require("../queries");
const assert = require("assert");
const Server = require("../../dist/classes/server").Server;
const global = require("../data/globals");

async function addUser(server, user) {
	return await server.users.create(user);
}

describe("Users", function() {
	const superUser = new Server({}, {});

	/**
	 * Tests the SuperUser Login and assigns the result to the globals object for use in subsequent tests
	 */
	describe("Superadmin user", function() {
		it("logs in", async function() {
			let result = await superUser.auth.create(global.userData.superadmin);
			assert.strictEqual(result.status, 200);
			global.adminServer = superUser;
		});
	});

	describe("Register users", function() {
		const server = new Server({}, {});
		const users = q.readCSV("./data/users.csv");
		users.forEach(function(user) {
			it(`registers ${user.first_name} ${user.last_name}`, async function() {
				let result = await addUser(server, user);
				assert.strictEqual(
					result.status,
					201,
					`${user.last_name} was not added`
				);
			});
		});
	});

	describe("Find specific users", function() {
		it("Finds Org Owner1", async function() {
			const result = await superUser.users.findByEmail({
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
