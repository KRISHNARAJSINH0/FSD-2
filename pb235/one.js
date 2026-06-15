const express = require('express')
const multer = require('multer')
const app = express()
app.use(express.static(__dirname))
const store = multer.diskStorage({
    destination:"image",
    filename : function(req,file,cb){
        cb(null,file.originalname+"-file.pdf")
    }
})
const upload = multer({storage:store})
app.post('/upload',upload.single('img'),(req,res)=>{
    const file = req.file
    res.send(`
         <html>
        <head>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h3>
                ${req.file.originalname} has been uploaded
            </h3>
        </body>
        </html>
        `)
})
app.listen(3001)