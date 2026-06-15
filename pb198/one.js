const express = require("express")
const session = require("express-session")
const path = require('path')
const app = express()
app.use(express.urlencoded({"extended":true}))
app.use(session({
    secret : "mykey",
    resave : false,
    saveUninitialized : true
}))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.post('/savesession',(req,res)=>{
    req.session.name = req.body.uname
    req.session.pass = req.body.pass
    req.session.gen = req.body.gen
    res.redirect("/fetchsession")
})
app.get('/fetchsession',(req,res)=>{
    res.send(`
            <h2>Name : ${req.session.name}</h2><br>  
            <h2>Password : ${req.session.pass}</h2><br>  
            <h2>Gender : ${req.session.gen}</h2><br> 
            <a href = '/deletesession'>Logout</a>    
        `)
})
app.get('/deletesession',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})
app.listen(3050)