const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const productController = require('../controllers/productController');


const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },

    filename: (req, file, cb) => {
        console.log(file);
        const nFileName = 'planta-' + Date.now() + path.extname(file.originalname);
        cb(null, nFileName);
    }
});

const fileUpload = multer({ storage: multerDiskStorage });


//Listado de productos (product showcase)
router.get('/', productController.showcase);

//Añadir un producto
router.get('/add', productController.add);
router.post('/add', fileUpload.single("formFile"), productController.store);

//Vista de carrito
router.get('/cart', productController.cart);

//Vista de detalle
router.get('/:id/view', productController.detail)

//editar un producto
router.get('/:id/edit', productController.edit)
router.put('/:id/update', fileUpload.single("product-image"), productController.update)

//eliminar un producto
router.delete('/:id/delete', productController.destroy)

module.exports = router;