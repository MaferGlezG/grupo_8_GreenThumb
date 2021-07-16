const express = require('express');
const router = express.Router();


const productController = require('../controllers/productController');

//Listado de productos (product showcase)
router.get('/', productController.showcase);

//Era add, formulario de creación de productos
router.get('/create', productController.add);

//Detalle de un producto
router.get('/:id/view', productController.detail);

//Carrito
router.get('/cart', productController.cart);

/*

//Acción de creación (a donde se envía el formulario)
router.post('/', productController.store); 

//editar un producto
router.get('/:id/edit', productController.edit); 
router.put('/:id/view', productController.update); 

//Eliminar un producto
router.delete('/:id', productController.destroy);

*/

module.exports = router;