const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");

describe("Integration::Invitations", () => {
	let adminServer, publicServer;
	describe("Super user invites other users to the organization", function () {
		let org, invitations = {
			existingUser: false,
			newUser: false
		};
		before(async function () {
			adminServer = await global.getAdminServer();
			publicServer = await global.getPublicServer();
		});

		it("Invites a user that exists alice@token.com ", async function () {
			let orgs = await adminServer.organizations.index();
			org = orgs.data.data ? orgs.data.data[0] : orgs.data[0];
			let response = await adminServer.organizations.invite.create({
				organization_id: org.id,
				user_email: "alice@token.com",
				role: "OrgMember"
			});
			invitations.existingUser = response.data;
			assert.strictEqual(response.status, 201);
		});

		it("Invites a new user bob@sagget.com", async function () {
			let response = await adminServer.organizations.invite.create({
				organization_id: org.id,
				user_email: "bob@sagget.com",
				role: "OrgMember"
			});
			invitations.newUser = response.data;
			assert.strictEqual(response.status, 201);
		});

		it("Invites an invalid email that doesn't exist asdf😰kkruigfvsa.asdnf3", () => {
			return q.shouldFail(adminServer.organizations.invite.create({
				organization_id: org.id,
				user_email: "asdf😰kkruigfvsa.asdnf3",
				role: "OrgMember"
			})).then(res => {
				assert.strictEqual(res.status, 422);
			})
		});
		// describe("Invitees check, accept and decline", () => {
		it("Unauthorized user can view their invite", async function () {
			let response = await publicServer.invitations.read({security_token: invitations.newUser.security_token});
			assert.strictEqual(response.status, 200);
			assert.strictEqual(response.data.organization_name, org.name);
			assert.strictEqual(response.data.inviter_name, "System Administrator");
		});

		it("Authorized user can accept their invite", async function () {
			let aliceServer = await global.getServer();
			await aliceServer.auth.create({
				email: "alice@token.com",
				password: "alicepw"
			});
			let response = await aliceServer.invitations.accept({ security_token: invitations.existingUser.security_token });
			assert.strictEqual(response.status, 200);
		});

		it("Unauthorized user can decline their invite", async function () {
			// let response = await publicServer.invitations.decline({security_token: invitations.newUser.security_token});
		});
		// });
	});
});
