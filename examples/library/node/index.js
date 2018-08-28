const Bigneon = require('../../../dist/bundle.node.js');
const server = Bigneon.server;

const createArtist = require('../../../dist/interfaces/resources/artist.interface').createArtist;

// console.log(Bigneon.resourceInterfaces.createArtist());
let bigneon = new Bigneon.server();
bigneon.auth.create({
    email: 'superuser@test.com',
    password: 'password'
}).then(result => {
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
    bigneon.artist.index().then(a => {
        console.log(a.body);
        // a.json().then(result => {
        //     console.log('restul', result);
        // })
    });


});
