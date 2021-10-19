const express = require('express');
const router = express.Router();
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware');
const { body } = require('express-validator');

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users/profileImages'))
    },

    filename: (req, file, cb) => {
        console.log(file);
        const nFileName = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, nFileName);
    }
});

const fileUpload = multer({ storage: multerDiskStorage });
const userController = require('../controllers/userController');

const validations = [
    body('first_name')
        .notEmpty()
        .withMessage('Debes escribir un nombre')
        .isLength({ min: 3 }),
    body('last_name')
        .notEmpty()
        .withMessage('Debes escribir un apellido')
        .isLength({ min: 3 }),
    body('username')
        .notEmpty()
        .withMessage('Debes escribir un nombre de usuario')
        .isLength({ min: 3 }),
    body('email')
        .notEmpty()
        .withMessage('Debes escribir un correo electrónico')
        .isEmail(),
    body('password')
        .notEmpty()
        .withMessage('Debes escribir una contraseña')
        .isLength({ min: 8 }),
    body('confirmPassword')
        .notEmpty()
        .withMessage('La contraseña debe coincidir')
        .isLength({min : 8 }),
];


//Crear un nuevo usurario
router.get('/register', guestMiddleware, userController.register);
router.post('/register', fileUpload.single("formFile"), validations, userController.createUser);



//Actualizar usuario
//router.get('/:id/update', userController.update);
//router.put('/:id/update', userController.save);

//Eliminar usuario
router.delete('/:id/delete', userController.destroy);


//Login y Logout
router.post('/login', userController.login);
router.get('/logout', userController.logout);

router.get('/profile', authMiddleware, userController.profile);


module.exports = router;