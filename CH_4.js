var express = require('express');
var app = express();
// student = {
//     name: 'John',
//     age: 21,
//     grade: 'A'
// }
// app.get('/', function (req, res) {
//     //1  res.write ("Hello"); its throw error because write method must be after send method 
//     //   res.send ("<h1> Hello from home</h1>");

//     //2  res.write(JSON.stringify(student)); its for write method but output is same 
//     //   res.send()

//     //3  res.send(student); its for send method

//     //4  res.json(student); its for json method

//  //5 three methods to print age of student in string format
//  ->   // res.write(student.age+""); 
//       // res.send()

//  ->  // res.send(student.age)

//  ->   //res.json(student.age) 

// });

//req.params use this to run in brauser : http://localhost:3000/a/10/c/20
// app.get('/a/:b/c/:d',(req,res)=>{
//     res.send(req.params)
// })

//req.query :


app.listen(3000,()=> {
    console.log('Server is running on port 3000');
});