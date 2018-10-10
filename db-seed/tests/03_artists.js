const q = require("../queries");
const assert = require("assert");
const Server = require("../../dist/classes/server").Server;
const global = require("../helpers/globals");
const fields = require("../../dist/interfaces/resources/artist.interface");
const assertFieldsMatch = require("../queries").assertFieldsMatch;

function normalizeArtist(artist) {
	const youtubes = artist.youtube_video_urls.split(",");
	return { ...artist, youtube_video_urls: youtubes };
}

describe("Artists", function() {
	const server = new Server({}, {});
	const artists = q.readCSV("./data/artists.csv");

	it("an unauthenticated user cannot add an Artist", function() {
		return q.shouldFail(server.artists.create(artists[0])).then(res => {
			assert.strictEqual(res.status, 401);
		});
	});

	artists.forEach(function(artist) {
		it(`SuperUser registers ${artist.name}`, async function() {
			const art = normalizeArtist(artist);
			let result = await global.adminServer.artists.create(art);
			assert.strictEqual(
				result.status,
				201,
				`${artist.name} was not added; ${result.data}`
			);
		});
	});

	//TODO place back when bn-api supports querying artists by name
	// it("an unauthenticated user can search for an artist by name", async function() {
	// 	const response = await server.artists.index({ q: "Daft Punk" });
	// 	assert.strictEqual(response.status, 200);
	// 	const matches = response.data;
	// 	assert.strictEqual(matches.length, 1);
	// 	assert.strictEqual(matches[0].name, "Daft Punk");
	// 	assert.strictEqual(matches[0].facebook_username, "DaftPunk");
	// });

	describe("Retrieve and validate artist row", async function() {
		let list = null;
		let artist;
		it("an unauthenticated user can retrieve the artist list", async function() {
			const response = await server.artists.index();
			assert.strictEqual(response.status, 200);
			list = response.data;
			assert.strictEqual(list.length, artists.length);
			assert.strictEqual(list[0].name, "Billy Joel");
		});

		it("an unauthenticated user can retrieve an artist", async function() {
			artist = await server.artists.read({ id: list[0].id });
			assert.strictEqual(artist.status, 200);
			assert.strictEqual(artist.data.name, "Billy Joel"); //First name in the list if default sort is by name
		});

		it("an artist interface has matching fields", () => {
			let artistInterface = fields.createArtist();
			assertFieldsMatch(artist.data, artistInterface, "Artists: ");
		});
	});
});
