const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const colors = require('colors');
const io = require('./socket/socket');
const http = require('http');
const { ORIGIN } = require('./socket/constants');

// Load env vars
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.SOCKET_URI);

    // Request methods you wish to allow
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );

    // Request headers you wish to allow
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Body Parser
app.use(express.json());

// Route Files
const purchases = require('./routes/purchases');

// Mount Routers
app.use('/api/v1/purchases', purchases);

// Middleware
app.use(errorHandler);
if (process.env.NODE_ENV === 'developement') {
    app.use(morgan('dev'));
}

// Server
const server = http.createServer(app);

// Socket.io
io.listen(server, {
    cors: {
        origin: ORIGIN,
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log(`A client has joined...${socket.handshake.address}`.magenta);
    socket.emit('hello', 'can you hear me?');
});

server.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
);

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit
    server.close(() => process.exit(1));
});
