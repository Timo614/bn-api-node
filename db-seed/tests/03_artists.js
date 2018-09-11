const q = require('../queries');
const assert = require('assert');
const Server = require('../../dist/classes/server').Server;
const global = require('../data/globals');
const fields = require('../../dist/interfaces/resources/artist.interface');
const assertFieldsMatch = require('../queries').assertFieldsMatch;

function normalizeArtist(artist) {
    const youtubes = artist.youtube_video_urls.split(',');
    return {...artist, youtube_video_urls: youtubes};
}
describe('Artists', function() {
    const server = new Server({}, {});
    const artists = q.readCSV('./data/artists.csv');

    it('an unauthenticated user cannot add an Artist', function() {
       return q.shouldFail(server.artist.create(artists[0])).then(res => {
           assert.strictEqual(res.status, 401);
       });
    });

    artists.forEach(function(artist) {
        it(`SuperUser registers ${artist.name}`, async function() {
            const art = normalizeArtist(artist);
            let result = await global.admin.artist.create(art);
            assert.strictEqual(result.status, 201, `${artist.name} was not added; ${result.data}`);
        });
    });


    describe('Retrieve and validate artist row', async function() {
        let list = null;
        let artist;
        it('an unauthenticated user can retrieve the artist list', async function() {
            const response = await server.artist.index();
            assert.strictEqual(response.status, 200);
            list = response.data;
            assert.strictEqual(list.length, artists.length);
            assert.strictEqual(list[0].name, artists[0].name);
        });

        it('an unauthenticated user can retrieve an artist', async function() {
            artist = await server.artist.read({id: list[1].id});
            assert.strictEqual(artist.status, 200);
            assert.strictEqual(artist.data.name, 'Billy Joel');
        });

        it('an artist interface has matching fields', () => {
            let artistInterface = fields.createArtist();
            assertFieldsMatch(artist.data, artistInterface, 'Artists: ');
        });
    });


    it('an unauthenticated user can search for an artist by name', async function() {
        const response = await server.artist.find({name: 'The Killers'});
        assert.strictEqual(response.status, 200);
        const matches = response.data;
        assert.strictEqual(matches.length, 1);
        assert.strictEqual(matches[0].name, 'The Killers');
        assert.strictEqual(matches[0].facebook_username, 'KillersMusic');
    });
});