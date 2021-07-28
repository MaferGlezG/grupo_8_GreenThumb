const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const productController = require('../controllers/productController');


const storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, path.join('localhost:333/public/images'))
    },

    filename: (req, file, next) => {
        console.log(file);
        const nFileName = 'planta-' + Date.now() + path.extname(file.originalname);
        next(null, nFileName);
    }
});

const upload = multer({ storage });


//Listado de productos (product showcase)
router.get('/', productController.showcase);

//Añadir un producto
router.get('/add', productController.add);
router.post('/add', upload.single('"formFile"'), productController.store);

module.exports = router;