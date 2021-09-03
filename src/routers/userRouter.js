const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');

//Crear un nuevo usurario
router.get('/register', userController.register);
router.post('/register', userController.createUser);

//Actualizar usuario
//router.get('/:id/update', userController.update);
//router.post('/:id/update', userController.save);

//Eliminar usuario
router.delete('/:id/delete', userController.destroy);


//Validación de login
router.post('/login', userController.login);


module.exports = router;