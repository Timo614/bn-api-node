const server = require("../server");

(async () => {
	async function start() {
		const auth = await server.auth.create({email: "superuser@test.com", password: "password"});
		const events = await server.events.index();
		const fans = await server.events.fans.index({event_id: events.data.data[0].id});
		console.log(fans.data)
	}
	await start();
})();

