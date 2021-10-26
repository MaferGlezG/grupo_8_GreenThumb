const express = require('express');
const router = express.Router();
const categoriesAPIController = require('../../controllers/api/categoriesAPIController');

//Rutas
//Listado de todos los generos
router.get('/', categoriesAPIController.list);
//Detalle del genero
router.get('/single/:id', categoriesAPIController.detail);
//Películas por genero
router.get('/:id/products', categoriesAPIController.categoryProducts);

router.get('/last', categoriesAPIController.last)

module.exports = router;