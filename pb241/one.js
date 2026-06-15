const express = require('express')
const app = express()
app.use(express.urlencoded({"extended":true}))
app.set('view engine',"ejs")
app.get('/contact',(req,res)=>{
    res.render("contact")
})
app.post('/submit',(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    res.send(`
        "Thank you ${name}, we have received your email ${email}."
        `)
})
app.listen(3050)