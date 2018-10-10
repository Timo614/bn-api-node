const assert = require("assert");
module.exports = ((global) => {


	describe("Mock Data", () => {
		it("The mocker should have a events.index route", () => {
			assert.strictEqual(global.mockServer.client.mocker.hasMock("events.index"), true, "There should be a {\"events.index\": []} key in the mockData");
		});

		describe("Mock Events", () => {
			let events = [];
			it("The mocker should be able to request events", async () => {

				events = await global.mockServer.events.index();
				assert.notEqual(events.data.length, 0, "There should be more than 0 events")
			});

			it("The first event is called Event 1", () => {
				assert.strictEqual(events.data[0].name, "Event 1", "The first event is named Event 1");
			});

			it("Creates an event interest", async() => {
				const interest = await global.mockServer.events.interests.create({event_id: "event_id_1"});
				assert.strictEqual(interest.id, "event_interest_id_1", "Expecting event_interest_id_1");
			})
		});


	})
});