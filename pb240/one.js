const express = require('express')
const multer = require('multer')
const app = express()
app.set("view engine","ejs")
const store = multer.diskStorage({
    destination:"lji",
    filename : function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:store})
app.get('/',(req,res)=>{
    res.render('home')
})
app.post('/pic',upload.single('img'),(req,res)=>{
    const file = req.file
    if(file){
        res.send(`<h1>file ${file.originalname} uploaded</h1>`)
    }else{
        console.log("file not uploaded")
    }
})
app.listen(3050)