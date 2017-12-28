var https = require('https');
var fs = require('fs');
var options = {
    key:fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cre.pem')
}
https.createServer(options,(req,res)=>{
    res.writeHead(200);
    res.end('结束了')
}).listen(8080)