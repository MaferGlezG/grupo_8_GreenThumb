const fs = require('fs');
const path = require('path');
//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//const { validationResult } = require('express-validator');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//const date = Date.now();
const db = require('../../database/models');
const Attribute = require('../../database/models/Attribute');

const productApiController = {


    // listado de todos los productos
    /* products: function (req, res) {
 
         Promise.all([db.Product.findAll(
             { include: [{ model: db.Attribute, as: "product_attributes" }] }),
         db.Product.findAll(
             {
                 include: [{ model: db.Attribute, as: "product_attributes" }
                     //where: { ???? }}]}),
                     /*        db.Product.findAll(
                                 {include : [ { model: db.Attribute, as: "product_attributes",
                                                 where: { ???? }}]}),
                             db.Product.findAll(
                                 {include : [ { model: db.Attribute, as: "product_attributes",
                                                 where: { ???? }}]}), 
                             db.Product.findAll(
                                 {include : [ { model: db.Attribute, as: "product_attributes",
                                                 where: { ???? }}]}), 
                             db.Product.findAll(
                                 {include : [ { model: db.Attribute, as: "product_attributes",
                                                 where: { ???? }}]}),
                             db.Product.findAll(
                                 {include : [ { model: db.Attribute, as: "product_attributes",
                                                 where: { ???? }}]}), 
                             db.Product.findAll(
                                 {include : [ { model: db.Attribute, as: "product_attributes",
                                                 where: { ???? }}]}), 
                         
                 ])
             /*
                     db.Product.findAll({
                         include : [ { model: db.Attribute,
                                         as: "products_attributes" }]
                     })
             
             .then(function ([} ]) {
             let producto = [];
             products.forEach(element => {
                 let este = element.dataValues.product_attributes;
                 let tempPro = {};
                 /* El usuario normal debería ver sólo los atributos que existen: 
                 este.length > 0 
                 /* El administrador debe ver también los productos que no tiene atributos
                 este.length >= 0 
                 if(este.length > 0){
                     tempPro = {
                         id_product: element.dataValues.id_product,
                         name: element.dataValues.name,
                         description: element.dataValues.description,
                         model: element.dataValues.model,
                         image: 'http://localhost:3333/img/products/' + este[0].dataValues.image,
                         attribute: este,
                         //detail: 'http://localhost:3000/api/products/' + element.dataValues.id_product,
                         attribute_url: 'http://localhost:3333/api/attributes/' + element.dataValues.id_product
                     }
                     //console.log(element.dataValues.products_attributes[0].dataValues)
                     //return res.send(producto);
                     producto.push(tempPro);
                 } else {
                     /* esto sólo lo debería ver el administrador 
                     tempPro = {
                         id_product: element.dataValues.id_product,
                         name: element.dataValues.name,
                         description: element.dataValues.description,
                         image: 'http://localhost:3333/img/products/' + 'default-image.png',
                         attribute: este,
                         //detail: 'http://localhost:3000/api/products/' + element.dataValues.id_product,
                         attribute_url: 'http://localhost:3333/api/attributes/' + element.dataValues.id_product
                     }
                     //console.log(element.dataValues.products_attributes[0].dataValues)
                     //return res.send(producto);
                     producto.push(tempPro);
 
                 }
             });
             console.log(producto);
 
             return res.status(200).json ({
                 meta: {
                     count: producto.length,
                     countByCategory: {
                         ???
                         ???
                         ???
                         ???
                     }
                 },
                 products: producto
             })
 
             //res.render('adminProduct/admin-products', { productos: producto, titelId: 0 })
         }) 
         .catch(function (err) {
             console.log(err);
         })
     },
 
     detail: function(req, res) {
 
     }*/

};

module.exports = productApiController;