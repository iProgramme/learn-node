var fs = require('fs');

exports.getAllDirectory = (req,res)=>{
    
    fs.readdir('./uploads',(err,files)=>{
        var arr = [];
        // console.log('./uploads/'+files);
        (function inter(i){
            if(i == files.length){
                console.log(arr);
                return
            }
            fs.stat('./uploads/'+files[i],(err,status)=>{
                if(status.isDirectory()){
                    arr.push(files[i])
                }
                inter(i+1)
            })
        })(0)
    })
    return ["相册1","相册2","相册3","相册4"]
}