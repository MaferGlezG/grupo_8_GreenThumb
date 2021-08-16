const fs = require('fs');
const path = require('path');
const { v4: newId } = require('uuid');
newId();
const db = require('../data/products.json')

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let productController = {
    detail: (req, res) => {
        res.render('productDetail');
    },

    cart: (req, res) => {
        res.render('productCart');
    },
    showcase: (req, res) => {
        res.render('productShowcase');
    },
    //Formato de creación de producto
    add: (req, res) => {
        res.render('productAdd');
    },


    store: (req, res) => {
        console.log(req.body)
        let newProduct = {
            id: newId(),
            name: req.body.name,
            description: req.body.descripcion,
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


    },

    edit: (req, res) => {
        let productId = req.params.id;
        let productToEdit = db[productId]
        res.render('productEdit', { productToEdit: productToEdit });
    },

    update: (req, res) => {
        let productId = req.params.id;
        if (db[req.params.id].id = req.params.id) {
            db[productId].name = req.body.name;
            db[productId].description = req.body.description;
            db[productId].color = req.body.color;
            db[productId].price = req.body.price;
            db[productId].category = req.body.category;
            db[productId].size = req.body.size;
        }
        res.redirect('/:id/view')
    },
    delete: (req, res) => {
        res.render('productAdd');
    },
    destroy: (req, res) => {
        res.render('productAdd');
    },


}

module.exports = productController;