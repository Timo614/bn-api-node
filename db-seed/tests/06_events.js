const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");
const ticketing = require("../helpers/ticketing");
const interfaceFields = require("../../dist/interfaces/resources/event.interface");
const { SoldOutBehavior, Visibility } =  require("../../dist/interfaces/enums/ticket-types.enum");
const assertFieldsMatch = require("../queries").assertFieldsMatch;

const moment = require("moment");

describe("Integration::Events", function () {
	let publicServer, adminServer;
	const events = q.readCSV("./data/events.csv").map(event => {
		event.age_limit = Number(event.age_limit);
		const eventStart = isNaN(event.event_start) ? moment(event.event_start) : moment().add(event.event_start, "days");
		event.event_start = eventStart.utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
		event.event_end = eventStart.add(24, "h").utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
		event.door_time = isNaN(event.door_time) ? event.door_time : moment().add(event.door_time, "days").utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
		return event;
	});

	describe("Public User", function () {
		before(async function () {
			publicServer = await global.getPublicServer();
		});
		it("an unauthenticated user cannot add an event", function () {
			return q.shouldFail(publicServer.events.create(events[0])).then(res => {
				assert.strictEqual(
					res.status,
					401,
					res.message || "Expecting a 401 status"
				);
			});
		});
	});

	describe("SuperUser Actions", function () {
		let venuesByName = {}, orgsByName = {}, artistsByName = {};
		global.eventsByName = {};
		before(async function () {
			adminServer = await global.getAdminServer();
			orgsByName = await global.getOrganizations();
			venuesByName = await global.getVenues();
			artistsByName = await global.getArtists();

		});

		for (let i in events) {
			const event = events[i];
			let id;
			it(`SuperUser creates event "${event.name}" for Venue: ${
				event.venue_id} and Org: ${event.organization_id}`, async function () {

				event.venue_id = venuesByName[event.venue_id];
				event.organization_id = orgsByName[event.organization_id];
				event.cover_image_url = event.promo_image_url;
				const result = await adminServer.events.create(event);
				id = result.data.id;
				global.eventsByName[result.data.name] = id;
				assert.strictEqual(
					result.status,
					201,
					`${event.name} was not added; ${result.data}`
				);
			});

			it(`SuperUser adds Daft Punk artists to event ${event.name}`, async function () {
				let artistId = artistsByName["Daft Punk"];
				let result = await adminServer.events.artists.create({
					event_id: id,
					artist_id: artistId,
					rank: 0,
					set_time: "2018-12-12T12:00:00.000",
					importance: 0,
				});
				assert.strictEqual(result.status, 201);
				assert.strictEqual(result.data.artist_id, artistId, "Artist ID's must match");
			});

			if (i == 0) {
				//Only add Billy Joel to the first event
				it(`SuperUser Adds Billy Joel to event ${event.name}`, async function () {
					let dpArtistId = artistsByName["Daft Punk"];
					let bjArtistId = artistsByName["Billy Joel"];

					let artists = [
						{ artist_id: dpArtistId, rank: 0, set_time: "2018-12-12T12:00:00.000", importance: 0 },
						{ artist_id: bjArtistId, rank: 1, set_time: "2018-12-12T14:00:00.000", importance: 1 },
					];

					let result = await adminServer.events.artists.update({ event_id: id, rank: 0, artists });
					assert.strictEqual(result.status, 200);
					assert.strictEqual(result.data.length, 2, "We are expecting 2 artists back");
				});
			}


			it(`SuperUser adds ticket pricing to event "${
				event.name}"`, async function () {
				const testTicketTypes = [
					{
						name: "General Access",
						visibility: Visibility.ALWAYS,
						startPrice: 1000,
						pricingPeriods: 5,
						capacity: 1000,
						limit_per_person: 0,
						sold_out_behavior: SoldOutBehavior.SHOW_SOLD_OUT,
						is_private: false
					},
					{
						name: "Balcony",
						visibility: Visibility.HIDDEN,
						startPrice: 2000,
						pricingPeriods: 2,
						capacity: 150,
						limit_per_person: 4,
						sold_out_behavior: SoldOutBehavior.HIDE,
						is_private: false
					},
					{
						name: "VIP",
						visibility: Visibility.WHEN_AVAILABLE,
						startPrice: 10000,
						pricingPeriods: 2,
						capacity: 200,
						limit_per_person: 1,
						sold_out_behavior: SoldOutBehavior.SHOW_SOLD_OUT,
						is_private: false
					}
				];

				for (let index = 0; index < testTicketTypes.length; index++) {
					const ticketTypeDetails = ticketing.generateTicketTypePricing({
						...testTicketTypes[index],
						eventDateString: event.door_time
					});

					const result = await adminServer.events.ticketTypes.create({
						event_id: id,
						...ticketTypeDetails
					});
					assert.strictEqual(
						result.status,
						201,
						`${testTicketTypes[index].name} ticket type was not added to event ${event.name}; ${ticketTypeDetails}`
					);
				}
			});

			it(`SuperUser publishes event "${event.name}"`, async function () {

				const result = await adminServer.events.publish({ id });
				assert.strictEqual(result.status, 200);
			});
		}

		it("A superuser can update an event", async function () {

			let updatedEvent = {
				id: global.eventsByName["Priority Party"],
				name: "Priority Parties",
				event_start: "2020-12-12T12:00:00",
				event_end: "2020-12-13T12:00:00",
				door_time: "2020-12-12T12:00:00",
				status: "Published",
				promo_image_url: "https://res.cloudinary.com/bigneon-dev/image/upload/v1540996739/bigneon/pssets0z4vxrjasvhvmj.jpg",
			};
			const response = await adminServer.events.update(updatedEvent);
			const serverEvent = (await adminServer.events.read({ id: global.eventsByName["Priority Party"] })).data;
			assert.strictEqual(response.status, 200);

			for (let i in updatedEvent) {
				assert.strictEqual(serverEvent[i], updatedEvent[i], `${i} fields must match`);
			}
		});


		//TODO updating of event ticket pricing details

	});

	describe("Event lists", function () {
		let event;
		before(async function () {
			publicServer = await global.getPublicServer();
		});
		let list;
		it("an unauthenticated user can retrieve the published event list", async function () {
			const response = await publicServer.events.index();
			assert.strictEqual(response.status, 200);
			list = response.data.data;
			assert.strictEqual(list.length, events.length);
		});

		it("an unauthenticated user can retrieve an event", async function () {
			const response = await publicServer.events.read({ id: list[0].id });
			event = response.data;
			assert.strictEqual(response.status, 200);
			assert.strictEqual(response.data.name, list[0].name);
		});

		it(`an unauthenticated user can search for an event by name: ${events[0].name}`, async function () {
			const response = await publicServer.events.index({ query: events[0].name });
			assert.strictEqual(response.status, 200, "Invalid Status");
			const matches = response.data.data;
			assert.strictEqual(matches.length, 1, "There should only be 1 match");
			assert.strictEqual(matches[0].name, events[0].name);
		});

		it(`an unauthenticated user can search for an event by Artist: Billy Joel`, async function () {
			const response = await publicServer.events.index({ query: "Billy Joel" });
			assert.strictEqual(response.status, 200, "Invalid Status");
			const matches = response.data.data;
			assert.strictEqual(matches.length, 1, "There should only be 1 match");
			assert.strictEqual(matches[0].name, "Christmas Bash");
		});

		it(`an unauthenticated user can search for an event by Venue: Bimbos`, async function () {
			const response = await publicServer.events.index({ query: "Bimbos" });
			assert.strictEqual(response.status, 200, "Invalid Status");
			const matches = response.data.data;
			assert.strictEqual(matches.length, 1, "There should only be 1 match");
			assert.strictEqual(matches[0].name, "Boxing Day Brawl");
		});


		it("an unauthenticated user cannot update an event", function () {
			return q
				.shouldFail(
					publicServer.events.update({ id: list[0].id, name: "Christmas Bash" })
				)
				.then(res => {
					assert.strictEqual(
						res.status,
						401,
						res.message || "Expecting a 401 status"
					);
				});
		});


		it("Compares Interface with Response", async function () {
			let result = await adminServer.events.read({ id: list[0].id });
			let event = result.data;
			let localInterface = interfaceFields.createEvent();
			assertFieldsMatch(event, localInterface, "Event: ");
		});
	});
});
