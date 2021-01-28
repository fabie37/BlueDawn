const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
let ORIGIN = '';
if (process.env.NODE_ENV === 'developement') {
    ORIGIN = 'http://localhost:3000';
    console.log('Dev');
} else {
    ORIGIN = 'http://192.168.1.217:3000';
    console.log('Prod');
}

const SEND_PURCHASES = 'send_purchases';

exports.ORIGIN = ORIGIN;
exports.SEND_PURCHASES = SEND_PURCHASES;
