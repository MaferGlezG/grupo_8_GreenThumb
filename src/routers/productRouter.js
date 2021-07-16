const express = require('express');
const router = express.Router();
const multer = require('multer');


const productController = require('../controllers/productController');

router.get('/view/:id', productController.detail);
router.get('/cart', productController.cart);
router.get('/', productController.showcase);
router.get('/add', productController.add);

module.exports = router;