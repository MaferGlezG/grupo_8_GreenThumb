const express = require('express');
//const multer = require('multer');
const router = express.Router();
//const { check } = require('express-validator');
//const upload = multer({ storage });

// Controlador de productos
const productsAPIController = require('../../controllers/api/productsAPIController');
const productController = require('../../controllers/productController');

const loggedAdminMiddleware = require('../../middlewares/userLoggedMiddleware');


/* Rutas */


// listado de todos los productos
//router.get('/', loggedAdminMiddleware, adminProductController.products);
router.get('/', productsAPIController.list);
router.get('/single/:id', productsAPIController.detail);
router.get('/create', productsAPIController.create);
router.get('/update/:id', productsAPIController.update);
router.get('/delete/:id', productsAPIController.destroy);
router.get('/last', productsAPIController.last)
// detalle de un producto
//router.get('/:id', userloggedMiddleware, productController.detalle);
//router.get('/:id', userloggedMiddleware, productController.detail);


module.exports = router;





/* Validación para el formulario de creación de un producto
const validations = [
    check('nombre')
        .notEmpty()
        .withMessage('Debes escribir un nombre para el producto')
        .isLength({ min: 3 }),
    check('descripcion')
        .notEmpty()
        .withMessage('Debes escribir una descripción para el producto')
        .isLength({ min: 3 }),
    check('tamaño')
        .notEmpty()
        .withMessage('Debes indicar el tamaño del producto')
        .isLength({ min: 3 }),
]; */