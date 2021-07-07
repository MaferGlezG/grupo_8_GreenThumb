const express = require('express');
const app = express();
const rutasMain = require('./routers/mainRouter');
const rutasUsuario = require('./routers/userRouter');
const rutasProducto = require('./routers/productRouter');
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', rutasMain);
app.use('/user', rutasUsuario)
app.set('views', path.join(__dirname, 'views'));
app.use('/product', rutasProducto);



app.listen(3333, ()=>{
    console.log('Servidor funcionando');
});

//app.get('/', (req,res)=>{
  //  res.sendFile(__dirname + '/views/index.html');
//});

//app.get('/product-Cart', (req,res)=>{
  //  res.sendFile(__dirname + '/views/productCart.html');
//});

//app.get('/product-Detail', (req,res)=>{
  //  res.sendFile(__dirname + '/views/productDetail.html');
//});

//app.get('/product-Showcase', (req,res)=>{
  //  res.sendFile(__dirname + '/views/productShowcase.html');
//});

//app.get('/register', (req,res)=>{
  //  res.sendFile(__dirname + '/views/register.html');
//});