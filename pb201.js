const express = require("express")
const session = require("express-session")
const app = express()
app.use(session({
    secret : "mykey",
    resave : true,
    saveUninitialized : true 
}))
app.get('/',(req,res)=>{
    if(req.session.view){
        req.session.view++
        res.send(`<h1 style=color:red;>This page viewed ${req.session.view} times</h1>`)
    }else{
        req.session.view=1
        res.send(`<h1 style=color:red;>This page viewed ${req.session.view} times</h1>`)
    }
})
app.listen(3050)