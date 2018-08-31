const Server = require('../dist/classes/server').Server;
const server = new Server({}, {});
const fs = require('fs');
const csv = require('csv-parse/lib/sync');
const assert = require('assert');


/**
 * Returns a promise for a boolean for the status of the API server
 */
function checkStatus() {
    return server.status.get().then(res => {
        return res.statusCode === 200;
    }).catch(err => {
        console.error(err.response && err.response.body || err);
        return false;
    });
}


/**
 * Read a CSV file and retun data as an array of objects
 * @param path
 * @returns {any}
 */
function readFile(path) {
    const csv_data = fs.readFileSync(path);
    return csv(csv_data, { columns: true, trim: true });
}

function assertAPICall(seedOnly, path, result, expected) {
    let status = { success: true, message: `${path}: ${JSON.stringify(expected)}` };
    if (seedOnly) {
        return status;
    }
    Object.keys(expected).forEach(key => {
        if (!result[key]) {
            status.sucess = false;
            status.message = `${key} should exist in result of ${path}, but it does not.`;
        }
        if (result[key] !== expected[key]) {
            status.success = false;
            status.message = `in ${path}, I expected ${key} to be ${expected[key]} but received ${result[key]}. Body: ${JSON.stringify(result.body)}`;
        }
    });
    return status;
}

/**
 * Take a promise and assert that the promise is rejected
 */
function shouldFail(promise) {
    return promise.then(() => {
        throw new Error('The request should fail');
    }).catch(err => {
        return err.response;
    });
}



module.exports = {
    server: server,
    checkStatus: checkStatus,
    readCSV: readFile,
    shouldFail: shouldFail
};