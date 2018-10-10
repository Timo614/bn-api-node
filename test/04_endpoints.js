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
				removeIndexes.forEach(index => {
					apiUrls.splice(index);
				});
				assert.strictEqual(apiUrls.length, 0, `${apiUrls} are present in routing.rs but not implemented in bn-api-node`);
				assert.strictEqual(localUrls.length, 0, `${localUrls} are present in bn-api-node but not implemented in routing.rs`);
			}
		});
	})
});