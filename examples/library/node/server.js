const Server = require("../../../dist/classes/server").default;
const server = new Server({
	prefix: process.env.SERVER || "http://localhost:8088",
	timeout: 30000,
}, {
	headers: {}
});
module.exports = server;
