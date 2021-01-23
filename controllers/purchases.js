// @desc    Get all purchases
// @route   GET /api/v1/purchases
// @access  Public
exports.getPurchases = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all purchases' });
};

// @desc    Get single purchase
// @route   GET /api/v1/purchases/:id
// @access  Public
exports.getPurchase = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Show purchase ${req.params.id}`,
    });
};

// @desc    Create new purchases
// @route   POST /api/v1/purchases
// @access  Public
exports.createPurchase = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new purchase' });
};

// @desc    Update a purchase
// @route   PUT /api/v1/purchases/:id
// @access  Public
exports.updatePurchase = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update purchase ${req.params.id}`,
    });
};

// @desc    Delete a purchase
// @route   DELETE /api/v1/purchases/:id
// @access  Public
exports.deletePurchase = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete purchase ${req.params.id}`,
    });
};
