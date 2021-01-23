const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    store: {
        type: String,
        required: [true, 'Please add a store'],
        trim: true,
        maxlength: [50, 'Store cannot be more than 50 characters'],
    },
    slug: String,
    total: {
        type: Number,
        required: [true, 'Please enter a total amount'],
        min: [0, 'Must be greater than 0'],
    },
    category: {
        type: String,
        required: [true, 'Please enter a category of purchase'],
        enum: [
            'Shopping',
            'Health',
            'Services',
            'Restaurants',
            'Transport',
            'General',
            'Enterainment',
            'Utilities',
            'Other',
        ],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
