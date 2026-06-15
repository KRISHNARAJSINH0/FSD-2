var express = require("express")
var app = express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<h1>THIS IS FORM</h1>
        <form method = 'post' action = '/user'>
        NAME : <input type='text' name = 'name' placeholder = 'Enter name' />
        <button type = 'submit' >Submit</button>
        </form>
        `)
})

app.post("/user",(req,res)=>{
    const name = req.body.name
    res.send("Name of User : "+name)
})
app.listen(3000)