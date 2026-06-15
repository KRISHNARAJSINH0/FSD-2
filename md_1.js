var express = require('express')
var app = express()
const entryLog = (req,res,next)=>{
    console.log("Student entered campus")
    next()
}
const checkId = (req,res,next)=>{
    var id = true
    if(id){
        req.name = "Krish"
        console.log("Id verified")
        next()
    }else{
        console.log("NO id card")
    }
}
app.use("/class",entryLog,checkId)
app.get("/class/data",(req,res)=>{
    res.send(`Welcome ${req.name} to the class`)
})
app.listen(3001)