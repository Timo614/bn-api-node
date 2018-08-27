require("dotenv").config();
const program = require('commander');
const q = require('./queries');

program.version("1.0.0")
    .description("BigNeon seed and API e2e testing")
    .option("-s, --seedonly", "Only seed database, do not run assertions")
    .option("-H, --host [value]", "The BigNeon API url", process.env.BIGNEON_API || "http://localhost:9000")
    .parse(process.argv);

const config = {
    seedOnly: program.seedonly || false,
    host: program.host
};

seedDatabase(config);

async function seedDatabase(config) {
    const status = await q.checkStatus();
    if (!status) {
        console.log(`BigNeon API server (${config.host}) is offline. Exiting`);
        process.exit(1);
    }
    const usersAdded = await q.addUsers(config.seedOnly);
    console.log(usersAdded);
}

