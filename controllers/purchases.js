const Purchase = require('../models/Purchase');

// @desc    Get all purchases
// @route   GET /api/v1/purchases
// @access  Public
exports.getPurchases = async (req, res, next) => {
    try {
        const purchases = await Purchase.find();
        res.status(200).json({
            success: true,
            count: purchases.length,
            data: purchases,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

// @desc    Get single purchase by id
// @route   GET /api/v1/purchases/:id
// @access  Public
exports.getPurchase = async (req, res, next) => {
    try {
        const purchase = await Purchase.findById(req.params.id);

        if (!purchase) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

// @desc    Create new purchases
// @route   POST /api/v1/purchases
// @access  Public
exports.createPurchase = async (req, res, next) => {
    try {
        const purchase = await Purchase.create(req.body);
        res.status(201).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

// @desc    Update a purchase
// @route   PUT /api/v1/purchases/:id
// @access  Public
exports.updatePurchase = async (req, res, next) => {
    try {
        const purchase = await Purchase.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!purchase) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

// @desc    Delete a purchase
// @route   DELETE /api/v1/purchases/:id
// @access  Public
exports.deletePurchase = async (req, res, next) => {
    try {
        const purchase = await Purchase.findByIdAndDelete(req.params.id);

        if (!purchase) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
