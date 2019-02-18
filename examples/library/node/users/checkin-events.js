const server = require("../server");

(async () => {
	async function start() {
		const auth = await server.auth.create({email: "doorperson@test.com", password: "password"});
		const checkinEvents = await server.events.checkins();
		console.log(checkinEvents.data)
	}
	await start();
})();

