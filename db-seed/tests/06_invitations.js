const q = require("../queries");
const assert = require("assert");
const Server = require("../../dist/classes/server").Server;
const global = require("../helpers/globals");

describe("/invitations/", () => {
	let server = global.getPublicServer();
	describe("Super user invites other users to the organization", () => {
		let adminServer, org;
		it("Invites a user that exists alice@token.com ", async () => {
			adminServer = await global.getAdminServer();
			let orgs = await adminServer.organizations.index();
			org = orgs.data[0];

			// let response = await adminServer.organizations.invite.create({id: org.id, user_email: "alice@token.com"});
			// assert.strictEqual(response.status, 200);
			// console.log(response);
		});

		it("Invites a new user bob@sagget.com", async () => {
			// let response = await adminServer.organizations.invite.create({id: org.id, user_email: "bob@sagget.com"});
			// assert.strictEqual(response.status, 500);
		});

		it("Invites an invalid email that doesn't exist asdf😰kkruigfvsa.asdnf3", () => {
			// return q.shouldFail(adminServer.organizations.invite.create({
			//     id: org.id,
			//     user_email: "asdf😰kkruigfvsa.asdnf3"
			// })).then(res => {
			//     assert.strictEqual(rest.status, 500);
			// })
		});
		describe("Invitees check, accept and decline", () => {
			it("Unauthorized user can view their invite", async () => {
				// let response = await server.invitations.read({security_token: 'security_token'});
			});

			it("Authorized user can accept their invite", async () => {
				// let response = server.invitations.accept({security_token: 'security_token'});
			});

			it("Unauthorized user can decline their invite", async () => {
				// let response = server.invitations.decline({security_token: 'security_token'});
			});
		});
	});
});
