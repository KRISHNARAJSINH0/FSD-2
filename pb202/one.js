const express = require("express")
const cookie = require("cookie-parser")
const app = express()
app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{index:"index.html"}))
app.post('/user',(req,res)=>{
    res.cookie("name",req.body.name,{
        maxAge:24*60*60*1000
    })
    res.send(`
        <h1>cookie save successfully</h1>
        <br><br>
        username ${req.body.name}
        <br>
        cookie stay alive for 1 day only 
        `)
    
})
app.listen(3000)