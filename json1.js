var u=require("url");
var http  = require("http");    
// var addr="http://localhost:8080/default.html?year=2025&month=feb#test";
// var q=u.parse(addr)
// console.log(q)
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>hello world</h1>")
    res.end()
}).listen(8080,()=>{
    console.log("server is running at port 8080")
})