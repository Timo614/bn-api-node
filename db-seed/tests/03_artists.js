const q = require("../queries");
const assert = require("assert");
const global = require("../helpers/globals");
const artistFields = require("../../dist/interfaces/resources/artist.interface");
const assertFieldsMatch = require("../queries").assertFieldsMatch;

function normalizeArtist(artist) {
	const youtubes = artist.youtube_video_urls.split(",");
	return { ...artist, youtube_video_urls: youtubes };
}

describe("Integration::Artists", function() {
	let publicServer, adminServer;
	const artists = q.readCSV("./data/artists.csv");


	describe("SuperUser Actions", function() {
		before(async function() {
			adminServer = await global.getAdminServer();
		});
		global.artistsByName = {};
		artists.forEach(function(artist) {
			it(`SuperUser registers ${artist.name}`, async function() {
				const art = normalizeArtist(artist);
				let result = await adminServer.artists.create(art);
				assert.strictEqual(
					result.status,
					201,
					`${artist.name} was not added; ${result.data}`
				);
				global.artistsByName[result.data.name] = result.data.id;
			});
		});

	});


	describe("Public User", function() {
		before(async function() {
			publicServer = await global.getPublicServer();
		});

		it("an unauthenticated user cannot add an Artist", function() {
			return q.shouldFail(publicServer.artists.create(artists[0])).then(res => {
				assert.strictEqual(res.status, 401);
			});
		});

		// @TODO place back when bn-api supports querying artists by name
		// it("an unauthenticated user can search for an artist by name", async function() {
		// 	const response = await server.artists.index({ q: "Daft Punk" });
		// 	assert.strictEqual(response.status, 200);
		// 	const matches = response.data;
		// 	assert.strictEqual(matches.length, 1);
		// 	assert.strictEqual(matches[0].name, "Daft Punk");
		// 	assert.strictEqual(matches[0].facebook_username, "DaftPunk");
		// });

		describe("Retrieve and validate artist row", function() {
			let list = [], response, artist;
			before(async () =>{
				response = await publicServer.artists.index();
				assert.strictEqual(response.status, 200, `Response status: ${response.status}`);
			});
			it("an unauthenticated user can retrieve the artist list", async function() {
				list = response.data.data;
				assert.strictEqual(list.length, artists.length, `Mismatched list length Server: ${list.length} Local: ${artists.length}`);
				assert.strictEqual(list[0].name, "Billy Joel", `Was expecting "Billy Joel" but got ${list[0].name}`);
			});

			it("an unauthenticated user can retrieve an artist", async function() {
				artist = await publicServer.artists.read({ id: list[0].id });
				assert.strictEqual(artist.status, 200);
				assert.strictEqual(artist.data.name, list[0].name); //First name in the list if default sort is by name
			});

			it("an artist interface has matching fields", () => {
				let artistInterface = artistFields.createArtist();
				assertFieldsMatch(artist.data, artistInterface, "Artists: ");
			});
		});
	});






});
