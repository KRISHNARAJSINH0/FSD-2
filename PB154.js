var express = require("express")
var app = express()
student =[
    {name:"abc",age:23},
    {name:"pqr",age:12},
    {name:"xyz",age:34}
]

app.get("/",(req,res)=>{
    res.send(student)
})
app.get("/sort",(req,res)=>{
    res.set("content-type","text/html")
    var sr = student.sort((a,b)=>b.age - a.age)
    for(k of sr){
        res.write("<center><h2>"+k.name+" = "+k.age+"</h2></center>")
    }
    res.send()
})
app.listen(3000,()=>{
    console.log("server is running...")
})