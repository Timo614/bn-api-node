const Server = require("../../dist/classes/server").Server;
const assert = require("assert");
const global = require("../global.setup");



describe("Unit::Server", () => {
	let authToken = global.authToken || "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NGI3ZWZiNC02NDJkLTRjMTMtYTY2My0wYWQwODZiZGY0YTkiLCJpc3MiOiJ0ZW1wIiwiZXhwIjoxNTQ1Mzg3OTkxfQ.ptQG9TKGWhyp6OmgS7fc10qeT60RF49wHS4jihha3lc";
	let server;
	it("It should create a server", () => {
		global.publicServer = server = new Server();
	});

	it("It should get a public client agent", () => {
		let agent = server.client.getPublicAgent();
		assert.notEqual(!!agent, false, "There must be a valid axios agent");
	});

	it("It should set a token", () => {
		server.client.setToken(authToken);
		assert.strictEqual(server.client.token, authToken, "There must be a valid token");
	});

	it("It should get an authorized client agent", async () => {
		let client = await server.client.getAuthAgent();
		assert.strictEqual(client.defaults.headers.Authorization, `Bearer ${authToken}`, "There must be a valid token in the Authorization header");
	});

});
