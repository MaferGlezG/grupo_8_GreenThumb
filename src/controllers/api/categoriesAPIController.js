const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const categoriesAPIController = {
    list: (req, res) => {
        db.Producto_Categoria.findAll()
            .then(categories => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: categories.length,
                        url: 'api/categories'
                    },
                    data: categories
                }
                res.json(respuesta);
            })
    },

    detail: (req, res) => {
        db.Producto_Categoria.findByPk(req.params.id)
            .then(category => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: category.length,
                        url: '/api/category/:id'
                    },
                    data: category
                }
                res.json(respuesta);
            });
    },
    categoryProducts: (req, res) => {
        db.Producto_Categoria.findByPk(req.params.id, {
            include: ['products']
        })
            .then(category => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: category.length,
                        url: '/api/category/:id/products'
                    },
                    data: category
                }
                res.json(respuesta);
            });
    }
}

module.exports = categoriesAPIController;