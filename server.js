const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

// Load env vars
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Body Parser
app.use(express.json());

// Route Files
const purchases = require('./routes/purchases');

// Middleware
if (process.env.NODE_ENV === 'developement') {
    app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/purchases', purchases);

const server = app.listen(
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
