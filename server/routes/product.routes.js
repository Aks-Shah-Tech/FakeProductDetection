const express = require('express');
const { registerProduct, getAllProducts } = require('../controllers/product.controllers.js');
const { getProductById } = require('../controllers/product.controllers.js');
const router = express.Router();

router.route('/registerProduct').post(registerProduct);
router.route('/viewProduct/:id').get(getProductById);
router.route('/allProducts').get(getAllProducts);

module.exports = router;