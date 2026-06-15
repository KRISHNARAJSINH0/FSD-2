var url = require("url");
var http = require("http");

// process.noDeprecation = true;
// var adr = "http://localhost:8080/test?m1=50&m2=60&m3=70";
// var q = url.parse(adr, true);
// var m1 = parseInt(q.query.m1);
// var m2 = parseInt(q.query.m2);
// var m3 = parseInt(q.query.m3);
// var avg = (m1 + m2 + m3) / 3;
// console.log("Average:", avg);

// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})
//     res.write("<h1>hello world</h1>")
//     res.end()
// }).listen(8080,()=>{
//     console.log("server is running at port 8080")
// })

//EX 
// http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.write("<h1>hello world</h1>")
//         res.end()
//     }
//     else if(req.url == "/about"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.write("<h1>about us</h1>")
//         res.end()
//     }
//     else{
//         res.writeHead(404,{"Content-Type":"text/html"})
//         res.write("<h1>page not found</h1>")
//         res.end()
//     }
// }).listen(5051)

//EX
// http.createServer((req,res)=>{
//     if(req.url == "/"){
//         const a = {"name":"abc","age":30}
//         res.writeHead(200,{"Content-Type":"application/json"})
//         res.write("Thank you")
//         res.write(JSON.stringify(a))
//         res.end()
//     }
// }).listen(5051)

//EX
// var http = require("http");
// var fs = require("fs");
// var url = require("url");
// var addr = "http://localhost:6051/7.html";
// var q = url.parse(addr);
// http.createServer(function (req, res) {
//     fs.readFile("." + q.pathname, function (err, data) {
//         if (err) {
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("File Not Found");
//         } else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         }
//     });
// }).listen(6051);


