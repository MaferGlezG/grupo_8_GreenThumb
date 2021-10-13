const db = require('../database/models');
const Producto = require('../database/models/Producto');

let mainController = {
    index: (req, res) => {
        db.Producto.findAll()
            .then(function (products) {
                res.render('index', { products: products });
            })

    },

}

module.exports = mainController;