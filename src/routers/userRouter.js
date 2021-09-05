const express = require('express');
const router = express.Router();
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware');

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

//Crear un nuevo usurario
router.get('/register', guestMiddleware, userController.register);
router.post('/register', fileUpload.single("formFile"), userController.createUser);

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