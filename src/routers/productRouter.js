const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const productController = require('../controllers/productController');
const db = require('../database/models');

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },

    filename: (req, file, cb) => {
        console.log(file);
        const nFileName = 'planta-' + Date.now() + path.extname(file.originalname);
        req.body.nFileName = nFileName;
        cb(null, nFileName);
    }
});
//const multer  = require('multer')
//const upload = multer({ dest: './public/data/uploads/' })
//app.post('/stats', upload.single('uploaded_file'), function (req, res) {
// req.file is the name of your file in the form above, here 'uploaded_file'
// req.body will hold the text fields, if there were any 
//console.log(req.file, req.body)
//});

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