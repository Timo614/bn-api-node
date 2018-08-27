const Bigneon = require('../../../dist/bundle.node.js');
const server = Bigneon.server;


console.log(Bigneon.resourceInterfaces.createArtist());
let bigneon = new Bigneon.server();
bigneon.auth.create({
  data: {
    email: 'superuser@test.com',
    password: 'password'
  }
}).then(result => {
  console.log('result', result);
});