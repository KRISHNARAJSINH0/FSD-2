const express = require('express')
const multer = require('multer')
const app = express()
app.use(express.static(__dirname))
const store = multer.diskStorage({
    destination : "image",
    filename : function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:store})
app.post("/pic",upload.single('img'),(req,res)=>{
    const file = req.file
    if(file){
        res.send(`<h1>file ${file.originalname} upload in ${file.destination} </h1>`)
    }else{
        res.send("file does not upload")
    }
})
app.listen(3000)