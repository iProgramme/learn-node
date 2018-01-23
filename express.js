var express = require("express")
var app = express()

var a = 100
app.get('/',(req,res)=>{
    res.send('请求成功'+a)
})
app.get('/111',(req,res)=>{
    res.send('请求成功'+a)
})
app.get('/222',(req,res)=>{
    res.send('请求成功'+a)
})
app.get('/:student/:app2',(req,res)=>{
    console.log(req.params.student)
    // res.write(req.params.student)
    // res.write(app2)
    res.send(`请求成功${req.params.student}++++${req.params.app2}`)
})


app.listen(3000)

