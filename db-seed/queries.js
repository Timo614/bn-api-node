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
    return csv(csv_data, {columns: true});
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
 * Registers all users listed in data/users.csv into the database and confirms
 */
function addUsers(seedOnly) {
    const users = readFile('./data/users.csv');
    const results = users.map(async user => {
        let result;
        try {
            result = await server.users.create(user);
        } catch (e) {
            result = e.response;
        }
        return assertAPICall(seedOnly, 'users/register', result, {statusCode: 200});
    });
    return Promise.all(results);
}

module.exports = {
    server: server,
    checkStatus: checkStatus,
    addUsers: addUsers
};