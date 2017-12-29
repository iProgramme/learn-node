var fs = require('fs');
var data = '22222222 ';

// var reader = fs.createReadStream('三国.html')

var reader = fs.createReadStream('三国.html');
reader.setEncoding('UTF8');

reader.on('data',(chunk)=>{
  data += chunk
})
reader.on('end',()=>{
  console.log(data)
  writeapp()
})
reader.on('error',(err)=>{
  console.log(err)
})

function writeapp() {
  var write = fs.createWriteStream('三国.html');
  write.write(data,'UTF8')
  write.end();
  write.on('finish',()=>{
    console.log('写入完成')
  })
  write.on('error',(err)=>{
    console.log(err)
  })
}


console.log('程序执行完毕')
