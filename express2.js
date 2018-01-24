var express = require('express');
var app = express()
var index = require('./models/file');

app.use(express.static('./public'));
app.get('/',(req,res)=>{
    res.send()
})

app.listen(3000);