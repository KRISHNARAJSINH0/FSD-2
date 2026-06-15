var express = require('express');
var app = express();
student = {
    u1:[{name: 'John', age: 21}, {name: 'Jane', age: 22}, {name: 'Doe', age: 23}]
}
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<center><table cellspacing ='5px' border = '2px' cellpadding = '8px'><tr><th>NAME</th><th>AGE</th></tr>")
    for (i of student.u1){
        res.write("<tr><td>"+i.name+"</td><td>"+i.age+"</td><tr>")
    }
    res.write("</table></center>")
    res.send()
})
app.listen(3000)