var express = require("express")
var app = express()
app.get('/',(req,res)=>{
    res.send(`<h1>THIS IS FORM</h1>
        <form method = 'get' action = '/user'>
        NAME : <input type='text' name = 'name' placeholder = 'Enter name' />
        <button type = 'submit' >Submit</button>
        </form>
        `)
})

app.get("/user",(req,res)=>{
    const name = req.query.name
    res.send("Name of User : "+name)
})
app.listen(3000)