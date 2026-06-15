var express = require("express")
var app = express()
const addName = (req,res,next)=>{
    req.name = "xyz"
    console.log("name added")
    next()
}
const addMarks = (req,res,next)=>{
    req.mark = 50+89
    console.log("marks added")
    next()
}
const addAge = (req,res,next)=>{
    req.age = 19
    console.log("age added")
    next()
}
app.get('/student',addName,addMarks,addAge,(req,res)=>{
    res.send(
        "Student Name: " + req.name + 
        "<br>Marks: " + req.mark + 
        "<br>Age: " + req.age 
        )
})
app.listen(3001)