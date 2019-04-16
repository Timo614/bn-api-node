const server = require("../server");

(async () => {
	let eventList = [];
	async function events() {

	}

	async function start() {
		const auth = await server.auth.create({email: "doorperson@test.com", password: "password"});
		eventList = (await server.events.checkins()).data.data;
		let ticket_id = null;
		let redeem_key = null;
		let event_id = null;
		while (eventList.length && (ticket_id === null || redeem_key === null)) {
			const event = eventList.pop();
			console.log("Trying", event.name);
			event_id = event.id;
			const tickets = await server.events.guests.index({event_id});
			for (let i in tickets.data.data) {
				let ticket = tickets.data.data[i];
				if (ticket.status === 'Purchased' && ticket.redeem_key) {
					redeem_key = ticket.redeem_key;
					ticket_id = ticket.id;
					break;
				}
			}

		}

		if (ticket_id === null) {
			console.log("There are no events that have redeemable tickets");
			return false;
		}

		const start = new Date();
		const redeem = await server.events.tickets.redeem({event_id, ticket_id, redeem_key});
		const end = new Date() - start;
		console.info('Execution time: %dms', end)
	}
	await start();
})();

