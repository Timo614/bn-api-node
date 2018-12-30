const Server = require("../../../dist/classes/server").default;
let server = new Server({
	prefix: "https://beta.bigneon.com/api",
	timeout: 30000,
}, {

	headers: {}
});
server.auth.create({email: "superuser@test.com", password: "password"}).then(() => {

});

//
// server.client.setTokens({
// 	"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlNzc0OTcyOS04MzA1LTRmNjUtYjRjNi1mYzE0MTNkYTI4MDgiLCJpc3MiOiJ0ZW1wIiwiZXhwIjoxNTQ1NjM1NDMzfQ._ZO3fsTOHcnaTy4feIc1aEbaqnSuxl86w-0CCeFE9AM",
// 	"refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlNzc0OTcyOS04MzA1LTRmNjUtYjRjNi1mYzE0MTNkYTI4MDgiLCJpc3MiOiJ0ZW1wIiwiaXNzdWVkIjoxNTQ1NjM0NTMzfQ.zYJRSnXxI-zj3HEQJo32uJIpO0rSrmG3_3m9MjFZAoU"
// });
// server.users.current().then(res => {
// 	console.log(res.data);
// }).catch(e => {
// 	console.log(e);
// });


// serverInterface.auth.authenticate({ email: "superuser@test.com", password: "password" }).then(res => {
// 	// console.log(res);
// });
// serverInterface.events.index({}, {}, false, {
// 	afterRequest: async(serverInterface, client, response) => {
// 		response.data.cacaw = true;
// 		return response;
// 	}
// }).then(result => {
// 	console.log('res', result.data.cacaw);
// });
// serverInterface.artists.search({q: "Powerwolf", spotify: 1}, {}, false, {minTimeout: 100000}).then(result => {
// 	console.log('res', result.data);
// });
// serverInterface.users.create({ first_name: "     FIRST NAME     ", last_name: "     LAST NAME      ", email: "  superuser@testb.com      ", password: "   password    " }).then(a => {
// 	// serverInterface.events.guests.index({
// 	// 	event_id: "20d44514-c2bc-4536-8749-e7ec586b3cb8",
// 	// 	query: ""
// 	// }).then(res => {
// 	// 	console.log(res.data);
// 	// }).catch(e => {
// 	// 	console.log("Err", e);
// 	// })
// 	// serverInterface.events.tickets.redeem({
// 	// 	event_id: "20d44514-c2bc-4536-8749-e7ec586b3cb8",
// 	// 	ticket_id: "e9e377be-0f1f-4e2e-8638-5b3d71b1d2b5",
// 	// 	redeem_key: "HW54Q9SG2"
// 	// }).then(res => {
// 	// 	console.log("Read", res);
// 	// }).catch(e => {
// 	// 	console.log("Error" ,e);
// 	// })
// }).catch(e => {
// 	console.log("err", e);
// });
return;
const Bigneon = require("../../../dist/bundle.node.js").default;
// console.log(Bigneon.resourceInterfaces.createArtist());
let bigneon = new Bigneon.Server();
console.log(bigneon.matchUrl("post", "/events/bd029204-9be0-40dd-ab38-439a17d51ba2/tickets"));
return;
(async function () {


})();
// return;
//
// const s = require('../../../dist/classes/serverInterface').Server;
//
// const Mocker = require('../../../dist/classes/mocker').Mocker;
// console.log(Mocker);
// let mocker = new Mocker({
//     'get.events': {
//         data: [{a: 1}, {b:2}],
//         reject: false
//     }
// });
// let b = new s({}, {});
// b.event.index().then(result => {console.log(result)});
// b.eventTicket.create({event_id: '', 'id': ''}).catch(e => {
//     console.error(e);
// });
//
bigneon.auth.create({
	email: "superuser@test.com",
	password: "password"
})
	.then(async result => {
		console.log(bigneon.event.artists);
		let events = await bigneon.organization.events.index({ id: "9885dac8-9b81-4e0b-a268-54450195f86f" });
		console.log(events);
		// let artist = await bigneon.organization.artist.index({id: 'aa3eb446-ffe3-4234-8f0f-bd7a053f91b0'});
		// console.log(artist);
		// let response = await bigneon.organization.artist.create({
		//     id: 'aa3eb446-ffe3-4234-8f0f-bd7a053f91b0',
		//     organization_id: 'aa3eb446-ffe3-4234-8f0f-bd7a053f91b0',
		//     name: "Keith Artist",
		//     bio: "A short bio"
		// });
		// console.log(response);
		// bigneon.organization.events({id: 'cda5b9f9-bd02-498a-9993-a22ac1321f42'}).then(events => {
		//     console.log(events.body);
		// });
		// let events = await bigneon.event.index(null, null, true);
		// console.log(events);
		// bigneon.venue.create({
		//     name: "Venue 1"
		// }).then(result => {
		//     console.log(result.body);
		// }).catch(e => {
		//     console.error(e);
		// })
		// bigneon.users.current().then(user => {
		//     console.log(user.body.user.id);
		//
		//
		//     // bigneon.organization.create({
		//     //     owner_user_id: user.body.user.id,
		//     //     name: "My Org 1"
		//     // }).then(result => {
		//     //     console.log(result.body);
		//     // }).catch(e => {
		//     //     console.error(e);
		//     // });
		// });


		// bigneon.event.create({
		//     name: 'Event 1',
		//     organization_id: '1eb832c3-cc45-434c-ba6d-fe27979cc448',
		//     venue_id: '4ba7ce12-7f9d-438f-9499-76338e083d34',
		//     event_start: '2018-10-01T12:00:00.000',
		//     is_external: 0,
		//     door_time: "2018-10-01T12:00:00.000",
		//     publish_date: "2018-10-01T12:00:00.000",
		// }).then(result => {
		//     console.log(result.body);
		// }).catch(e => {
		//     console.error(e);
		// })
		// console.log(result.body);
		// bigneon.artist.create({
		//     name: 'Bob the rob',
		//     bio: 'artist nbio',
		//     youtube_video_urls: []
		// }).then(result => {
		//     console.log(result.body);
		// }).catch(e => {
		//     console.error(e);
		// })
		// bigneon.artist.index().then(a => {
		//     console.log(a.body);
		//     // a.json().then(result => {
		//     //     console.log('restul', result);
		//     // })
		// });


	});
