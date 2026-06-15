const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()

app.use(express.urlencoded({"extended":true}))

app.use(session({
    secret : "mykey",
    resave : false,
    saveUninitialized:true 
}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.post('/savesessionpage',(req,res)=>{
    req.session.name = req.body.name
    res.redirect("/fetchsession")
})
app.get('/fetchsession',(req,res)=>{
    res.send(`
        <h2>Usernamae ${req.session.name}</h2><br>
        <a href = '/logout'>
        <button>Logout</button>
        </a>
    `)

})
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})
app.listen(3050)