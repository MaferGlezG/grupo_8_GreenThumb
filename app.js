const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3333, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/product-Cart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/product-Detail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/product-Showcase', (req,res)=>{
    res.sendFile(__dirname + '/views/productShowcase.html');
});

app.get('/register-login', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});