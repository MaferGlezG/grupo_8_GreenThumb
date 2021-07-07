const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/:id', productController.detail);
router.get('/cart', productController.cart);
router.get('/showcase', productController.showcase);
router.get('/add', productController.add);

module.exports = router;