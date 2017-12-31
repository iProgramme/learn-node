/**
 * Created by yubowen on 2017/12/30.
 */
var fs = require("fs")
var promise = require("promise")
// Promise 也是es6的一个内置对象,可以在浏览器或者js里面直接拿到
var app = fs.createReadStream("../三国.html");
console.log(app.path)
var num = 0;
function getP() {
  return new promise((resolve,rej)=>{
    console.log('正在加载下一次')
    setTimeout(()=>{
      num++;
      resolve(`成功第${num}次`)
    },1000)

  })
}
getP().then((data)=>{
  console.log(data)
  return getP()
}).then((data)=>{
  console.log(data)
  return getP()
}).then((data)=>{
  console.log(data)
})
