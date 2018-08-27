require("dotenv").config();
const program = require('commander');
const fs = require('fs');
const csv = require('csv-parse/lib/sync');
const q = require('./queries');

program.version("1.0.0")
    .description("BigNeon seed and API e2e testing")
    .option("-t, --testonly", "Do not seed database, but run tests only")
    .option("-H, --host [value]", "The BigNeon API url", process.env.BIGNEON_API || "http://localhost:9000")
    .parse(process.argv);

const config = {
    testOnly: program.testonly || false,
    host: program.host
};

seedDatabase(config);

function readFile(path) {
    const csv_data = fs.readFileSync(path);
    return csv(csv_data, {columns: true});
}

async function seedDatabase(config) {
    const status = await q.checkStatus();
    if (!status) {
        console.log(`BigNeon API server (${config.host}) is offline. Exiting`);
        process.exit(1);
    }
}

