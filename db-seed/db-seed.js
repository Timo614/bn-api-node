require("dotenv").config();
const program = require('commander');
const q = require('./queries');
const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

program.version("1.0.0")
    .description("BigNeon seed and API e2e testing")
    .option("-b, --bail", "Stop after first failed test")
    .option("-H, --host [value]", "The BigNeon API url", process.env.BIGNEON_API || "http://localhost:9000")
    .option("-t, --test [value,value]", "Run a specific test")
    .parse(process.argv);

seedDatabase();

async function seedDatabase() {
// Instantiate a Mocha instance.
    const mocha = new Mocha({
        bail: !!program.bail
    });

    const testDir = `${__dirname}/tests`;

    console.log(program.test);
    // Add each .js file to the mocha instance
    const onlyRunTheseTests = program.test ? program.test.split(',').map(item => {
        let parts = item.toLowerCase().split('.');
        if (parts[parts.length - 1].toLowerCase() === 'js') {
            //Remove js file extensions
            parts.pop();
        }
        return parts.join('.');
    }) : [];

    fs.readdirSync(testDir).filter(file => {
        //Only allow .js files
        if (file.substr(-3) === '.js') {
            let basename = path.basename(file, '.js').toLowerCase();
            if (onlyRunTheseTests.length ) {
                return onlyRunTheseTests.indexOf(basename) > -1;
            }
            return true;
        }
        return false;

    }).forEach(file => {
        const testFile = path.join(testDir, file)
        mocha.addFile(testFile);
        console.log(`Added ${testFile}`);
    });

//Check server status
    const status = await q.checkStatus();
    if (!status) {
        console.log(`BigNeon API server (${program.host}) is offline. Exiting`);
        process.exit(1);
    }

// Run the tests.
    mocha.run(failures => {
        process.exitCode = failures ? -1 : 0;  // exit with non-zero status if there were failures
    });
}
