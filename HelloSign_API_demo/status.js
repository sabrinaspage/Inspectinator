require('dotenv').config({silent: true, path: "./hellosign.env"}); // Read values from .env file
const PORT = 3000;

const hellosign = require('./hellosign.js');

// signature request id
const req_id = "53ee48721d35348147c849f4a8d81d8af656d8e5"
// inspector signature id
const sign_1 = "8d815ad64dcb12881151a398192ecf88"
// client signature id
const sign_2 = "81741c9559df4de49be8dceacf9bc489"

// const result = hellosign.check_Esigns(req_id, sign_1, sign_2);

// check the status of signature roles
hellosign.check_Esigns(req_id, sign_1, sign_2);
