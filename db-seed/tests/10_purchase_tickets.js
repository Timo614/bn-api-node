const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");

describe("Integration::FanPurchaseTickets", function() {
	this.timeout(120000);
	/**
	 * Tests each fan user buying a ticket
	 * Currently only buys 1 ticket of the first ticket type in the first event found.
	 * Could be changed to cover more scenarios
	 */
	let fanServer;
	describe("Fan ticket purchase", function() {
		const users = q.readCSV("./data/users.csv");
		before(async function () {
			fanServer = await global.getServer({ timeout: 10000 });
		});

		users.forEach(function(user) {
			it(`logs in ${user.first_name} ${user.last_name}`, async function() {
				await fanServer.auth.create({
					email: user.email,
					password: user.password
				});
			});

			let ticketType;
			it("Authenticated user can retrieve the published event list", async function () {
				const response = await fanServer.events.index();
				assert.strictEqual(response.status, 200);
				const eventList = response.data.data;

				const eventResponse = await fanServer.events.read({ id: eventList[0].id });
				const event = eventResponse.data;
				const { ticket_types } = event;
				ticketType = ticket_types[0];
			});

			let amount;
			it("User adds ticket to cart", async function () {
				const cartAddResponse = await fanServer.cart.update({ items: [{
					ticket_type_id: ticketType.id,
					quantity: 1
				}] });
				assert.strictEqual(cartAddResponse.status, 200);
				amount = cartAddResponse.data.total_in_cents;
			});

			let token;
			it("User sends payment request to stripe", async function () {
				const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

				const stripeData = await stripe.tokens.create({
					card: {
						"number": "4242424242424242",
						"exp_month": 12,
						"exp_year": 2020,
						"cvc": "123"
					}
				});

				token = stripeData.id;
				assert.strictEqual(!!token, true);
			});

			it("User checks out current cart", async function () {
				const cartCheckoutResponse = await fanServer.cart.checkout({
					amount,
					method: {
						type: "Card",
						provider: "stripe",
						token,
						save_payment_method: false,
						set_default: false
					}
				});

				assert.strictEqual(cartCheckoutResponse.status, 200);
			}).timeout(10000);
		});
	});
});
