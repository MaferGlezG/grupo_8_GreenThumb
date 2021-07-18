let productController ={
    detail : (req, res) => {
        res.render('productDetail');
    },

    cart : (req, res) => {
        res.render('productCart');
    },
    showcase : (req, res) => {
        res.render('productShowcase');
    },

    add : (req, res) => {
        res.render('productAdd');
    },

    //crear : (req, res) => {
        //res.render('creado');
    //},

}

module.exports = productController;