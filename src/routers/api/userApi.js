const express = require('express');
const multer = require('multer');
const router = express.Router();
const { check } = require('express-validator');
const corsMiddleware = require('../../middlewares/corsMiddleware');
const db = require('../../database/models')

// Multer para aceptar la imagen en el formulario de registro
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/img/users');
    },
    filename: (req, file, cb) => {
        const newFileName = 'user' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    },
});

const upload = multer({ storage });

// Controlador de productos
const userAPIController = require('../../controllers/api/userAPIControler');

const userLoggedMiddleware = require('../../middlewares/userLoggedMiddleware');

/* Rutas */

// listado de todos los usuarios
router.get('/', userAPIController.list);

// detalle de los usuarios
router.get('/:id', userAPIController.detail);
router.get('/:id/products', userAPIController.userProducts);
router.post('/create', userAPIController.create);
router.put('/update/:id', userAPIController.update);
router.delete('/delete/:id', userAPIController.destroy);


module.exports = router;