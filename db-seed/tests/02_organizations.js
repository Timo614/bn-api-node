const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");
const orgFields = require("../../dist/interfaces/resources/organization.interface");
const assertFieldsMatch = require("../queries").assertFieldsMatch;

describe("Integration::Organizations", function() {
	let publicServer, adminServer, adminData;
	const orgs = q.readCSV("./data/organizations.csv");

	describe("Public User", function() {
		before(async function() {
			publicServer = await global.getPublicServer();
		});

		it("an unauthenticated user cannot add an Organization", function() {
			let org = { owner_user_id: "", ...orgs[0] };
			return q.shouldFail(publicServer.organizations.create(org)).then(res => {
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
		describe("Retrieve and validate organization", function() {
			let list = [], response, org;
			before(async () =>{
				response = await adminServer.organizations.index();
				assert.strictEqual(response.status, 200, `Response status: ${response.status}`);
			});

			it("and authenticated user can retrieve a list of organizations", async () => {
				list = response.data.data;
				assert.strictEqual(list.length, orgs.length, `Mismatched list length Server: ${list.length} Local: ${orgs.length}`);
			});
			it("an authenticated user can retrieve an organization", async function() {
				org = await adminServer.organizations.read({ id: list[0].id });
				assert.strictEqual(org.status, 200);
				assert.strictEqual(org.data.name, list[0].name); //First name in the list if default sort is by name
			});
			it("an organization interface has matching fields", () => {
				let orgInterface = orgFields.createOrganization();
				assertFieldsMatch(org.data, orgInterface, "Organization: ");
			});
		})

	});


});
