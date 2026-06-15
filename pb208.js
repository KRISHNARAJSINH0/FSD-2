const express = require("express")
const app = express()
const ck = require("cookie-parser")
app.use(ck())
app.get('/',(req,res)=>{
    res.send(`
        <h2>form</h2>
        <form action='/user' method = 'get'>
            Username : <input type="text" name = "name"><br><br>
            Email : <input type="email" name = "email"><br><br>
            Gender : <input type="radio" name = "gen" value="male">Male <input type="radio" name ="gen" value="female">Female<input type="radio" name="gen" value="other">Other
            <br><br>
            <button type="submit">Submit</button>       
        </form>
        `)
})
app.get('/user',(req,res)=>{
    res.cookie("Username",req.query.name,{maxAge:15000})
    res.cookie("Email",req.query.email)
    res.cookie("Gender",req.query.gen)
    res.send(`<h3>data store successfully</h3>
        <a href = '/detail'>See Details</a>
        `)

})
app.get('/detail',(req,res)=>{
    res.send(`
        Name : ${req.cookies.Username} <br>
        Email : ${req.cookies.Email} <br>
        Gender : ${req.cookies.Gender}<br>
        <a href = '/'>Logout</a>
        `)
})
app.listen(3000)