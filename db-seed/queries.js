const Server = require('../dist/classes/server').Server;
const server = new Server({}, {});

server.auth.create({ email: 'test@here.com', password: 'pw'}).then(res => {
    console.log(res);
}).catch(err => {
    console.error(`Status: ${err.status}, Response: ${JSON.stringify(err.response.body)}`);
});

