var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('三国.html').pipe(zlib.createGzip()).pipe(fs.createWriteStream('三国.html.gz'))

console.log('压缩完成')
