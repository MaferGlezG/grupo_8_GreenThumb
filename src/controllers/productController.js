const fs = require('fs');
const path = require('path');
const { v4: newId } = require('uuid');
newId();

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
    /*
        edit: (req, res) => {
            res.render('productAdd');
        },
    
        update: (req, res) => {
            res.render('productAdd');
        },
        destroy: (req, res) => {
            res.render('productAdd');
        },
    */

}

module.exports = productController;