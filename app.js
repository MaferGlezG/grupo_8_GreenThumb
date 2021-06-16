const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3030, ()=>{
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