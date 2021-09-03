const express = require('express');
const router = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


const userController = require('../controllers/userController');

//Crear un nuevo usurario
router.get('/register', guestMiddleware, userController.register);
router.post('/register', userController.createUser);

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