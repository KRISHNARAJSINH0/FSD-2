const express = require('express')
const cookie = require('cookie-parser')
const app  = express()
app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{index:"index.html"}))
app.use(cookie())
app.post('/feedback',(req,res)=>{
    const {name,email,msg,feed} = req.body
    const feedback = {name,email,msg,feed}
    res.cookie('feedback',feedback,{maxAge:10000})
    res.send(`Thank you for your feedback, if you wnat see your detais than click on Detail
        <br>
        <a href = '/see_detail'>Detail</a>
        `)
})
app.get('/see_detail',(req,res)=>{
    const feedback = req.cookies.feedback
    if(feedback){
        res.send(`
            <h3>Name : ${feedback.name}</h3>
            <h3>Email : ${feedback.email}</h3>
            <h3>Message : ${feedback.msg}</h3>
            <h3>Rating : ${feedback.feed}</h3>
            <a href = '/'>Logout</a>
            `)
    }else{
        res.send("Feedback not given please note this ")
    }
})
app.listen(3050)