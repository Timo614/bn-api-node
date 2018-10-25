const Server = require("../../dist/classes/server").Server;
const Mocker = require("../../dist/classes/mocker").Mocker;
const assert = require("assert");
const global = require("../global.setup");


describe("Unit::Mock Server", () => {
	let server, mocker;
	it("It should create a mock server", () => {
		mocker = new Mocker(global.mockData);
		global.mockServer = server = new Server({}, {}, mocker);
	});

	it("The server should have a mocker instance in the client", () => {
		assert.strictEqual(server.client.mocker, mocker);
	});

});
