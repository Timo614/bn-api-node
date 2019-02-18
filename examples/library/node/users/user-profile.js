const server = require("../server");

(async () => {
	async function start() {
		const auth = await server.auth.create({email: "doorperson@test.com", password: "password"});
		const profile = await server.users.current();
		console.log(profile.data)
	}
	await start();
})();

