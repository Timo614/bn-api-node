
const assert = require('assert');
module.exports = ((global) => {


    describe('Mock Data', () => {
        it('The mocker should have a get.event route', () => {
            assert.strictEqual(global.mockServer.client.mocker.hasMock('get.events'), true, 'There should be a {"get.events": []} key in the mockData');
        });

        describe('Mock Events', () => {
            let events;
            it('The mocker should be able to request events', async () => {
                events = await global.mockServer.event.index();
                assert.notEqual(events.length, 0, 'There should be more than 0 events')
            });

            it('The first event is called Event 1', () => {
                assert.strictEqual(events[0].name, 'Event 1', 'The first event is named Event 1');
            })
        });

    })
});