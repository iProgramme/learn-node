var fs = require('fs');
var data = '';

var reader = fs.createReadStream('三国.html');
reader.setEncoding('UTF8');

reader.on('data',(chunk)=>{
  data += chunk
})
reader.on('end',()=>{
  console.log(data)
})
reader.on('error',(err)=>{
  console.log(err)
})

console.log('程序执行完毕')
