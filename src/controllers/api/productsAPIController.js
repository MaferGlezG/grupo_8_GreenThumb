const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const productController = require('../productController');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Products = db.Producto;
const Categories = db.Producto_Categoria;
const Users = db.Usuario;


const productsAPIController = {
    'list': (req, res) => {
        db.Producto.findAll({
            include: ['category']
        })
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                }
                res.json(respuesta);
            })
    },

    'detail': (req, res) => {
        db.Producto.findByPk(req.params.id,
            {
                include: ['category']
            })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/product/single/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    },
    /*'recomended': (req, res) => {
        db.Producto.findAll({
            include: ['category'],
            where: {
                rating: {[db.Sequelize.Op.gte] : req.params.rating}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products/recomended/:rating'
                },
                data: products
            }
                res.json(respuesta);
        })
        .catch(error => console.log(error))
    },*/
    create: (req, res) => {
        Products
            .create(
                {
                    name: req.body.name,
                    seller_id: userId,
                    stock: req.body.stock,
                    description: req.body.description,
                    image: req.body.nFileName,
                    price: req.body.price,
                    product_category_id: req.body.category,
                    size_id: req.body.size,
                    color: req.body.color
                }
            )
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/products/create'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/products/create'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        let productId = req.params.id;
        Products.update(
            {
                name: req.body.name,
                seller_id: userId,
                stock: req.body.stock,
                description: req.body.description,
                image: req.body.nFileName,
                price: req.body.price,
                product_category_id: req.body.category,
                size_id: req.body.size,
                color: req.body.color
            },
            {
                where: { id: productId }
            })
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/products/update/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/products/update/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        let productId = req.params.id;
        Products
            .destroy({ where: { id: productId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/products/destroy/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/products/destroy/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    last: (req, res) => {
        Products.findAll({
            order: [
                ['id', 'DESC']
            ],
            limit: 1
        })
            .then(product => {
                console.log(product)
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: 'api/products/last'
                    },
                    data: product
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    }

}

module.exports = productsAPIController;