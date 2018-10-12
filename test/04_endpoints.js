const fs = require("fs");
const assert = require("assert");
module.exports = ((global) => {
	describe("Compare bn-api endpoints to bn-api-node endpoints", () => {
		it("The bn-api endpoints should match bn-api-node endpoints", () => {
			let routingPath = "../bn-api/api/src/routing.rs";
			const routingExists = fs.existsSync(routingPath);
			if (routingExists) {
				const content= fs.readFileSync(routingPath, "utf8");
				const regex = /"(\/.*?)"/g;
				const apiUrls = content.match(regex).map(item => item.replace(/"/g, "").replace(/\{.*?\}/gi, "{id}"));
				const localUrls = global.publicServer.matchingResources.map(item => `/${item.fullPath}`.replace(/\?.*$/, "")).filter((v, i, a) => a.indexOf(v) === i);
				const removeIndexes = [];
				apiUrls.forEach((url, index) => {
					let pos = localUrls.indexOf(url);
					if (pos > -1) {
						removeIndexes.push(index);
						localUrls.splice(pos, 1);
					}
				});
				//Sort the indexes to remove descending
				removeIndexes.sort((a,b) => {return a > b ? -1 : a < b ? 1 : 0});
				removeIndexes.forEach(index => {
					apiUrls.splice(index,1);
				});

				let message = "";
				if (apiUrls.length) {
					message += `\n${apiUrls.join(",")} missing from bn-api-node`;
				}
				if (localUrls.length) {
					message += `\n${localUrls.join(",")} missing from routing.rs`;
				}

				assert.strictEqual(apiUrls.length + localUrls.length, 0, message);
			}
		});
	})
});