var express = require('express');
var app = express()
var router = require('./controller/router.js');

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.get('/',router.showIndex);
app.get('/:albumName',router.showAlbum);

app.listen(3000);
console.log('服务器启动成功！');
