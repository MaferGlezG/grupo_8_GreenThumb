const fs = require('fs');
const path = require('path');
const { v4: newId } = require('uuid');
newId();
//const oldDb = require('../data/products.json')
const db = require('../database/models');
const Producto = require('../database/models/Producto');

const productsFilePath = path.join(__dirname, '../data(obsolete)/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let productController = {
    detail: (req, res) => {
        db.Producto.findOne(
            {
                where:
                    { id: req.params.id }
            }, {
            include: [{
                association: "category"
            }
            ]
        })
            .then(function (producto) {

                db.Producto.findAll({
                    limit: 4
                })
                    .then(function (data) {
                        res.render('products/productDetail', { producto: producto, data: data, user: req.session.userLogged });
                    })

            })

    },

    cart: (req, res) => {
        db.Producto.findAll({
            limit: 4
        })
            .then(function (prod) {
                res.render('products/productCart', {
                    user: req.session.userLogged, product: prod
                }
                )
            });
    },
    showcase: (req, res) => {
        db.Producto.findAll()
            .then(function (products) {
                db.Producto_Categoria.findAll()
                    .then(function (categorias) {
                        db.Talla.findAll()
                            .then(function (tallas) {
                                res.render('products/productShowcase', { categorias: categorias, tallas: tallas, products: products, user: req.session.userLogged });
                            })

                    })
            })

    },
    //Formato de creación de producto
    add: (req, res) => {
        //Pasar las tallas y categorías
        db.Producto_Categoria.findAll()
            .then(function (categorias) {
                //esto no está funcionando
                db.Talla.findAll()
                    .then(function (tallas) {
                        res.render('products/productAdd', { categorias: categorias, tallas: tallas, user: req.session.userLogged });
                    })

            })

    },


    store: (req, res) => {
        //MÉTODO NUEVO (SQL) 
        console.log(req)
        let userId = req.session.userLogged.id;

        db.Producto
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
            .then(() => {
                console.log(req.session.userLogged.id)
                return res.redirect('/product')
            })

            .catch(error => res.send(error))



        /* ******MÉTODO ANTIGUO (JSON)********
    let newProduct = {
     id: newId(),
     name: req.body.name,
     description: req.body.description,
     image: req.body.formFile,
     color: req.body.exampleColorInput,
     price: req.body.price,
     category: req.body.category,
     size: req.body.size
    }
    
    try {
     products.push(newProduct);
     fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
     res.redirect('/');
    } catch (error) {
     console.log(error.message)
    }
    */


    },

    edit: (req, res) => {
        let productId = req.params.id;
        let promProduct = db.Producto.findByPk(productId);
        Promise
            .all([promProduct])
            .then(([productToEdit]) => {
                return res.render('products/productEdit', { productToEdit, user: req.session.userLogged })
            })
            .catch(error => res.send(error))
    },

    update: (req, res) => {
        //MÉTODO NUEVO (SQL) 
        let productId = req.params.id;
        let userId = req.session.userLogged.id;
        db.Producto
            .update(
                {
                    name: req.body.name,
                    seller_id: userId,
                    stock: req.body.stock,
                    description: req.body.description,
                    image: req.body.formFile,
                    price: req.body.price,
                    product_category_id: req.body.category,
                    size_id: req.body.size,
                    color: req.body.color
                },
                {
                    where: { id: productId }
                })
            .then(() => {
                return res.redirect('/product')
            })
            .catch(error => res.send(error))

        /* ******MÉTODO ANTIGUO (JSON)********
       if (db[req.params.id].id == req.params.id) {
           db[req.params.id].name = req.body.name;
           db[req.params.id].description = req.body.description;
           db[req.params.id].color = req.body.color;
           db[req.params.id].price = req.body.price;
           db[req.params.id].category = req.body.category;
           db[req.params.id].size = req.body.size;
       }
       res.redirect('/:id/view') */
    },

    destroy: (req, res) => {

        //NUEVO MÉTODO (SQL)
        let productId = req.params.id;
        db.Producto.destroy({
            where: { id: productId }
        })
            .then(() => {
                return res.redirect('/product')
            })
            .catch(error => res.send(error))
        /* VIEJO MÉTODO (JSON)
        if (db[req.params.id].id == req.params.id) {
            db[req.params.id].delete
        };*/
    },

    userShowcase: (req, res) => {
        let userid = req.session.userLogged.id;
        db.Producto.findAll({
            where: {
                seller_id: userid
            }
        })
            .then(function (products) {
                db.Producto_Categoria.findAll()
                    .then(function (categorias) {
                        db.Talla.findAll()
                            .then(function (tallas) {
                                res.render('products/productShowcase', { categorias: categorias, tallas: tallas, products: products, user: req.session.userLogged });
                            })

                    })
            })

    }

}

module.exports = productController;