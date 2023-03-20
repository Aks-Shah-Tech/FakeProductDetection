const express = require('express');
const {
    registerProduct,
    getAllProducts,
    getProductByIdForQr
} = require('../controllers/product.controllers.js');

const {
    isAuthenticated
} = require('../middlewares/auth.js');
const router = express.Router();

// Register the Product
router.route('/registerProduct').post(isAuthenticated, registerProduct);
// View the Product by Id
router.route('/viewProductbyId/:id').get(getProductByIdForQr);
// View all the products
router.route('/allProducts').get(isAuthenticated, getAllProducts);

module.exports = router;