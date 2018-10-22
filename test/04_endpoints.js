const axios = require("axios");
const assert = require("assert");


function processRoutingFile(fileContents) {
	let lines = fileContents.split("\n");
	let urls = {};//url: [METHOD]
	let lastUrl;

	const urlRegex = /"(\/.*?)"/g;
	const methodRegex = /Method::([A-Z]+)/g;
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
			methodMatches = methodMatches.map(item => item.replace("Method::", "")).forEach(method => {
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


module.exports = ((global) => {
	describe("Compare bn-api endpoints to bn-api-node endpoints", () => {
		it("The bn-api endpoints should match bn-api-node endpoints", async () => {
			let branch = process.env.TEST_ROUTING_BRANCH || "master";
			let result = await axios.get(`https://raw.githubusercontent.com/big-neon/bn-api/${branch}/api/src/routing.rs`);

			const content = result.data;
			//Get the remote urls and their endpoints
			const remoteUrlsAndMethods = processRoutingFile(content);

			//Create a matching object of local endpoints and methods
			const localUrlsAndMethods = {};
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

			const missingFromRemote = compare(localUrlsAndMethods, remoteUrlsAndMethods);
			const missingFromLocal = compare(remoteUrlsAndMethods, localUrlsAndMethods);


			let message = "";
			if (missingFromRemote.length) {
				message += `\n${missingFromRemote.join(",")} missing from bn-api-node`;
			}
			if (missingFromLocal.length) {
				message += `\n${missingFromLocal.join(",")} missing from routing.rs`;
			}

			assert.strictEqual(missingFromRemote.length + missingFromLocal.length, 0, message);
		});
	})
});