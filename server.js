const express = require('express');
const dotenv = require('dotenv');

// Route Files
const purchases = require('./routes/purchases');

// Load env vars
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;

// Mount Routers
app.use('/api/v1/purchases', purchases);

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
