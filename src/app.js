// REQUIRES

const express = require('express');
const rutasMain = require('./routers/mainRouter');
const rutasUsuario = require('./routers/userRouter');
const rutasProducto = require('./routers/productRouter');
const productAPI = require('./routers/api/productApi');
const categoriesAPI = require('./routers/api/categoryApi');
const userAPI = require('./routers/api/userApi');


const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session');
const bcryptjs = require('bcryptjs')


//EXPRESS()

const app = express();

//MIDDLEWARES

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'Secret',
  resave: false,
  saveUninitialized: false
}));
app.use(methodOverride('_method'));


//TEMPLATE ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//RUTAS
app.use('/', rutasMain);
app.use('/user', rutasUsuario)
app.use('/product', rutasProducto);

//Aquí creo la colección de mis recursos de movies (APIs)
app.use('/api/products', productAPI);
app.use('/api/users', userAPI);
app.use('/api/categories', categoriesAPI);


app.listen(3333, () => {
  console.log('Servidor funcionando');
});


/*var cors = require('cors')

app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3333/', //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(5000);*/