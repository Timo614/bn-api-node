const q = require("../queries");
const assert = require("assert");
const Server = require("../../dist/classes/server").Server;
const global = require("../data/globals");

describe("/organizations/", function() {
	const server = new Server({}, {});
	const orgs = q.readCSV("./data/organizations.csv");
	it("an unauthenticated user cannot add an Organization", function() {
		let org = { owner_user_id: "", ...orgs[0] };
		return q.shouldFail(server.organizations.create(org)).then(res => {
			assert.strictEqual(
				res.status,
				401,
				res.message || "Expecting a 401 status"
			);
		});
	});

	let adminServer, adminData;
	describe("SuperUser Actions", function() {
		before(async function() {
			adminServer = await global.getAdminServer();
			adminData = await global.getAdminData();
		});

		orgs.forEach(function(org) {
			it(`SuperUser registers organization ${org.name}`, async function() {
				let result = {};
				try {
					result = await adminServer.organizations.create({
						owner_user_id: adminData.user.id,
						...org
					});
				} catch (e) {
					result = e.response;
				}
				assert.strictEqual(
					result.status,
					201,
					`${org.name} was not added; StatusCode: ${result.status}`
				);
				global.organizations[result.data.name] = result.data;
			});
		});
	});
});
