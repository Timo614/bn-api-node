const server = require("../server");

(async () => {
	async function start() {
		const auth = await server.auth.create({email: "superuser@test.com", password: "password"});
		try {
			const profile = await server.events.codes.create({
				"name": "cacaw",
				"redemption_codes": "cacaw",
				"code_type": "cacaw",
				"max_uses": "cacaw",
				"start_date": "cacaw",
				"end_date": "cacaw",
				"ticket_type_ids": "cacaw",
				"event_id": "ASdf",
				"discount_in_cents": 0,
				"discount_as_percentage": 1,
			});
			console.log(profile.data)
		}catch(e) {
			console.log(e);
		}

	}
	await start();
})();

