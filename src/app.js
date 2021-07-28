// REQUIRES

const express = require('express');
const rutasMain = require('./routers/mainRouter');
const rutasUsuario = require('./routers/userRouter');
const rutasProducto = require('./routers/productRouter');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE

//EXPRESS()

const app = express();

//MIDDLEWARES

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//TEMPLATE ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//RUTAS
app.use('/', rutasMain);
app.use('/user', rutasUsuario)
app.use('/product', rutasProducto);


app.listen(3333, () => {
  console.log('Servidor funcionando');
});

