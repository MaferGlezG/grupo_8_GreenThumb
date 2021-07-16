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

    add: (req, res) => {
        res.render('productAdd');
    },

    /*
    
    store: (req, res) => {
        res.render('productDetail');
    },

    edit: (req, res) => {
        res.render('productAdd');
    },

    update: (req, res) => {
        res.render('productAdd');
    },
    destroy: (req, res) => {
        res.render('productAdd');
    }
    
    */
}

module.exports = productController;