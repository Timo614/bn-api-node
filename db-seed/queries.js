const Server = require('../dist/classes/server').Server;
const server = new Server({}, {});


function checkStatus() {
    return server.status.get().then(res => {
        return res.statusCode === 200;
    }).catch(err => {
        console.error(err.response.body);
        return false;
    });
}

module.exports = {
    server: server,
    checkStatus: checkStatus
};