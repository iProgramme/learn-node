// 显示首页
var file = require('../models/file.js');
exports.showIndex = (req,res)=>{
    res.render('index',{
        "arr":file.getAllDirectory()
    })
}
// 显示个人相册页
exports.showAlbum = (req,res)=>{
    res.send('这个是相册页'+req.params.albumName)
}