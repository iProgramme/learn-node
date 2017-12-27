var http = require('http');
var cheerio = require('cheerio');
function filterData(html){
    var $ = cheerio.load(html);
    var chapters = $('.chapter')
    var arr = [];
    chapters.each((index,item)=>{
        // console.log(item)
        arr.push($(item).find("strong").text())
        // console.log($(this).find("strong").text())
    })
    console.log(arr)
}
var url = "http://www.imooc.com/learn/348"
http.get(url,(res)=>{
    var html = ''
    res.on('data',(data)=>{
        html += data
    })

    res.on('end',()=>{
        // console.log(html)
        filterData(html)
    })

})