const fs = require('fs');
const path = require('path');
const { v4: newId } = require('uuid');
newId();
//const oldDb = require('../data/products.json')
const db = require('../database/models');
const Producto = require('../database/models/Producto');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let productController = {
    detail: (req, res) => {
        res.render('products/productDetail');
    },

    cart: (req, res) => {
        res.render('products/productCart');
    },
    showcase: (req, res) => {
        res.render('products/productShowcase');
    },
    //Formato de creación de producto
    add: (req, res) => {
        res.render('products/productAdd');
    },


    store: (req, res) => {

        //MÉTODO NUEVO (SQL)   
        try {
            db.Producto.create({
                name: req.body.name,
                description: req.body.description,
                image: req.body.formFile,
                price: req.body.price,
                product_category_id: req.body.category,
                size_id: req.body.size,
                color: req.body.color

            });
            res.redirect('/');
        } catch (error) {
            console.log(error.message)
        }



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
        let productToEdit = db[productId]
        res.render('productEdit', { productToEdit: productToEdit });
    },

    update: (req, res) => {
        if (db[req.params.id].id == req.params.id) {
            db[req.params.id].name = req.body.name;
            db[req.params.id].description = req.body.description;
            db[req.params.id].color = req.body.color;
            db[req.params.id].price = req.body.price;
            db[req.params.id].category = req.body.category;
            db[req.params.id].size = req.body.size;
        }
        res.redirect('/:id/view')
    },
    delete: (req, res) => {
        res.render('productDelete');
    },
    destroy: (req, res) => {
        if (db[req.params.id].id == req.params.id) {
            db[req.params.id].delete
        };
    },


}

module.exports = productController;