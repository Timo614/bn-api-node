const Bigneon = require('../../../dist/bundle.node.js');
const server = Bigneon.server;

const createArtist = require('../../../dist/interfaces/resources/artist.interface').createArtist;

// console.log(Bigneon.resourceInterfaces.createArtist());
let bigneon = new Bigneon.server();
bigneon.auth.create({
    email: 'superuser@test.com',
    password: 'password'
}).then(result => {
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


    bigneon.event.create({
        name: 'Event 1',
        organization_id: '1eb832c3-cc45-434c-ba6d-fe27979cc448',
        venue_id: '4ba7ce12-7f9d-438f-9499-76338e083d34',
        event_start: '2018-10-01T12:00:00.000',
        is_external: 0,
        door_time: "2018-10-01T12:00:00.000",
        publish_date: "2018-10-01T12:00:00.000",
    }).then(result => {
        console.log(result.body);
    }).catch(e => {
        console.error(e);
    })
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
