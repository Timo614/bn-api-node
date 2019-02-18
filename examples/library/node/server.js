const Server = require("../../../dist/classes/server").default;
const server = new Server({
	prefix: process.env.SERVER || "https://beta.bigneon.com/api",
	timeout: 30000,
}, {
	headers: {}
});
module.exports = server;