//Add test files here
const tests = [
    require('./01_server'),
    require('./02_mockServer'),
    require('./03_mockData'),
];
const mockData = require('./mockData');
const chai = require('chai');
//Global state management
const global = {
    authToken: 'test_token',
    publicServer: false,
    mockServer: false,
    mockData

};

// chai.should();

describe('bn-api-node test',() => {
    tests.forEach(test =>{
        test(global);
    })
});