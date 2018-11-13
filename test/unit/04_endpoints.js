const axios = require("axios");
const assert = require("assert");
const global = require("../global.setup");

function processRoutingFile(fileContents) {
	let lines = fileContents.split("\n");
	let urls = {};//url: [METHOD]
	let lastUrl;

	const urlRegex = /"(\/.*?)"/g;
	const methodRegex = /\(Method::([A-Z]+)\)/g;
	for (let i in lines) {
		let line = lines[i];
		if (line.endsWith("register()")) {
			break;
		}
		let urlMatch = line.match(urlRegex);
		if (urlMatch && urlMatch.length) {
			const apiUrls = urlMatch.map(item => item.replace(/"/g, "").replace(/\{.*?\}/gi, "{id}"));
			lastUrl = apiUrls.pop();
			if (!urls.hasOwnProperty(lastUrl)) {
				urls[lastUrl] = {};
			}
		}

		let methodMatches = line.match(methodRegex);
		if (lastUrl && methodMatches && methodMatches.length) {
			methodMatches = methodMatches.map(item => item.replace("(Method::", "").replace(")", "")).forEach(method => {
				urls[lastUrl][method] = true;
			});
		}
	}
	return urls;
}

function compare(a, b) {
	const missing = [];
	for (let endpoint in a) {
		if (!b.hasOwnProperty(endpoint)) {
			//The entire url is missing
			missing.push(Object.keys(a[endpoint]).join(", ") + " " + endpoint);
		} else {
			for (let method in a[endpoint]) {
				if (!b[endpoint].hasOwnProperty(method)) {
					missing.push(method + " " + endpoint);
				}
			}
		}
	}
	return missing;
}


describe("Unit::Compare bn-api endpoints to bn-api-node endpoints", () => {
	let remoteUrlsAndMethods = {}, localUrlsAndMethods= {};
	let branch = process.env.TEST_ROUTING_BRANCH || "master";
	before(function(done) {
		this.timeout(30000);

		axios.get(`https://raw.githubusercontent.com/big-neon/bn-api/${branch}/api/src/routing.rs`).then(result => {
			const content = result.data;
			//Get the remote urls and their endpoints
			remoteUrlsAndMethods = processRoutingFile(content);

			//Create a matching object of local endpoints and methods
			global.publicServer.matchingResources.map(item => {
				item.fullPath = `/${item.fullPath}`.replace(/\?.*$/, "");
				return item;
			}).forEach(endpoint => {
				if (!localUrlsAndMethods.hasOwnProperty(endpoint.fullPath)) {
					localUrlsAndMethods[endpoint.fullPath] = {};
				}
				if (endpoint.clientOnly) {
					return;
				}
				localUrlsAndMethods[endpoint.fullPath][endpoint.method] = true;
			});
			done();
		});

	});
	it(`The bn-api-node endpoints must match bn-api routing.rs endpoints branch: ${branch}`, async () => {

		const missingFromLocal = compare(remoteUrlsAndMethods, localUrlsAndMethods);

		let message = "";

		if (missingFromLocal.length) {
			message += `\nbn-api-node is missing the following endpoints:\n${missingFromLocal.join("\n")}`;
		}

		assert.strictEqual(missingFromLocal.length, 0, message);
	});

	it(`The bn-api endpoints should match bn-api-node endpoints branch: ${branch}`, async () => {
		//Don't assert, sometimes the local library has endpoints that are not required on the server
		const missingFromRemote = compare(localUrlsAndMethods, remoteUrlsAndMethods);

		let message = "";
		if (missingFromRemote.length) {
			message += `${missingFromRemote.join(",")} missing from routing.rs`;
			console.warn(message);
		}
	});
});
