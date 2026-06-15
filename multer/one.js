const express = require("express")
const multer = require("multer")
const path = require('path')
const app = express()
app.use(express.static(__dirname))
var store = multer.diskStorage({
    destination : "lju",
    filename:function(req,file,cb){
        const up_filename = file.originalname
        fd = up_filename
        cb(null,up_filename)
    }
})
var upload = multer({storage:store})
app.post('/pic',upload.single('mypic'),(req,res)=>{
    const file = req.file 
    if(file){
        res.send(`file ${file.originalname} should be uploaded in ${file.destination}
            <br><a href = '/dwn'>Download</a>
            `)
    }
})
app.get('/dwn',(req,res)=>{
    const a = path.join(__dirname,"lju",fd)
    res.download(a)
})
app.listen(3050)