const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const productController = require('../controllers/productController');


const storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, path.join(__dirname, '../public/images/groups'))
    },

    filename: (req, file, next) => {
        console.log(file);
        const nFileName = 'planta-' + Date.now() + path.extname(file.originalname); 
        next(null, nFileName);
    }
});

const upload = multer({storage});


router.get('/view/:id', productController.detail);
router.get('/cart', productController.cart);
router.get('/', productController.showcase);
router.get('/', productController.showcase);
//router.post('/', productController.showcase);
//router.post('/crear' ,productController.crear);
router.post('/add' , upload.single('"formFile"'),productController.add);

module.exports = router;