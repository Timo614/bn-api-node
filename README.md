# bn-api-node
Bigneon Javascript Middleware

# Install

`npm install bn-api-node`

```javascript
import Bigneon from 'bn-api-node';
const options = {
	protocol: "http",
	host: "bigneon.dyn-ip.me",
	port: 80,
	basePath: "/api"
};
const headers = {};
const mocker = null;//This needs to be an instance of Mocker
const bigneon = new Bigneon.Server(options, headers, mocker);

//List events
bigneon.events.index().then(eventsResponse => {
	console.log(eventsResponse.data);
});

//Auth
bigneon.auth.authenticate({email: "email@example.com", "password": "password"})
    .then(response => {
        //We can now call authed endpoints
        bigneon.users.current().then(myUserResponse => {
        	console.log(myUserResponse.data);
        });
    });
```

# Documentation


For all of the documentation go to [https://big-neon.github.io/bn-api-node/](https://big-neon.github.io/bn-api-node/)

For endpoints [https://big-neon.github.io/bn-api-node/modules/\_resources\_index\_.html](https://big-neon.github.io/bn-api-node/modules/_resources_index_.html)


# Running

`npm run test`

`npm run build`

`npm run build:web`

`npm run build:server`

`npm run build:tsc`

`npm run db-seed`

`npm run docs`

`npm run eslint:validate`

`npm run eslint:fix`


# Development

`git clone https://github.com/big-neon/bn-api-node.git`

`cd bn-api-node/`

`npm install`

For local development using bn-web, link bn-node-api as an npm module in bn-web:

`npm link`

`cd ../bn-web`

`npm link bn-api-node`
