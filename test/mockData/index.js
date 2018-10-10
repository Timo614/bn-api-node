const interfaces = require("../../dist/interfaces/resources/index").default;
module.exports = {
	"events.index": {
		data: {
			data: [
				interfaces.createEvent({
					id: "event_id_1",
					name: "Event 1",
					venue_id: "venue_id_1",
					event_start: "2019-01-01T00:00:00.000",
					event_end: "2019-01-02T00:00:00.000",
					door_time: "2019-01-01T00:00:00.000",
					publish_date: "2018-12-01T00:00:00.000",
					is_external: false,
					promo_image_url: "",
					additional_info: "",
					age_limit: 18,
					external_url: "",
					created_at: "2018-11-01T00:00:00.000",
					ticket_sell_date: "2018-11-01T00:00:00.000",
					tickets: [],
					blockchain_id: "blockchain_id_1",
					blockchain_expiry_date: "2020-01-01T00:00:00.000",
				})

			],
			paging: {}
		},
		reject: false
	},
	"events.interests.create": {
		data:  interfaces.createEventInterest({
			id: "event_interest_id_1",
			event_id: "event_id_1",
			user_id: "user_id_1",
			created_at: "2018-11-01T00:00:00.000",
			updated_at: "2018-11-01T00:00:00.000"
		})

	}
};