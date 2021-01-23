const express = require('express');
const router = express.Router();
const {
    getPurchases,
    getPurchase,
    updatePurchase,
    deletePurchase,
    createPurchase,
} = require('../controllers/purchases');

router.route('/').get(getPurchases).post(createPurchase);
router
    .route('/:id')
    .get(getPurchase)
    .put(updatePurchase)
    .delete(deletePurchase);

module.exports = router;
