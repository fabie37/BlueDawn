const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const SEND_PURCHASES = 'send_purchases';

exports.ORIGIN = process.env.SOCKET_URI;
exports.SEND_PURCHASES = SEND_PURCHASES;
