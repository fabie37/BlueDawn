const Purchase = require('../models/Purchase');
const ErrorResponse = require('../utils/errorResponse');

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
        next(error);
    }
};

// @desc    Get single purchase by id
// @route   GET /api/v1/purchases/:id
// @access  Public
exports.getPurchase = async (req, res, next) => {
    try {
        const purchase = await Purchase.findById(req.params.id);

        if (!purchase) {
            return next(
                new ErrorResponse(
                    `Purchase not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        next(error);
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
        next(error);
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
            return next(
                new ErrorResponse(
                    `Purchase not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a purchase
// @route   DELETE /api/v1/purchases/:id
// @access  Public
exports.deletePurchase = async (req, res, next) => {
    try {
        const purchase = await Purchase.findByIdAndDelete(req.params.id);

        if (!purchase) {
            return next(
                new ErrorResponse(
                    `Purchase not found with id of ${req.params.id}`,
                    404
                )
            );
        }

        res.status(200).json({
            success: true,
            data: purchase,
        });
    } catch (error) {
        next(error);
    }
};
