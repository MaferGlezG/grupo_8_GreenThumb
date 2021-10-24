const express = require('express');
const multer = require('multer');
const router = express.Router();
const { check } = require('express-validator');

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
const userAPIController = require('../../controllers/api/userAPIController');

const userLoggedMiddleware = require('../../middlewares/userLoggedMiddleware');

/* Rutas */

// listado de todos los usuarios
router.get('/', userController.users);

// detalle de los usuarios
router.get('/:id', userController.usersDetail);


module.exports = router;