const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("hello express js from my channel")
});

app.get('/about', function(req, res){
    res.send("this is about page")
});

app.get('/login', function(req, res){
    res.send("hthis is login page")
});

app.listen(4500);

