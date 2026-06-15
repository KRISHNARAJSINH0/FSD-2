//Note : Math.abs() is used to get always positive value of number
// let a = [2,3,4,5,6]
// console.log(Math.max(...a)) => to find maximum value in array

// CHAP = 1
// const data = require("./Json.json")
// const fs = require("fs")
// console.log(data)
// console.log(data.employee1)
// console.log(data.employee2)
// console.log(data.employee2.age)
// console.log(data.employee2.city)
// console.log(data.employee2.name)
// console.log(data.employee1[0])
// console.log(data.employee1[1])
// console.log(data.employee2["age"])
// console.log(data.employee2.FRD[1])
// console.log(data.employee2.FRD[3])

// Json.Parse(string)
// in this json write in string 
// let data = JSON.parse('{"var1":"LJKU","var2":"UNI"}')
// console.log(data)
// console.log(data.var1)
// console.log(data.var2)

//JSON.stringify(object)
//in this js write without string 
// let data = JSON.stringify({"var1":"LJKU","var2":"UNI"})
// console.log(data)

//UPDATE Values 
// console.log(data)
// console.log(data.employee2.age = 50)
// console.log(data.employee2["name"] = "KRISH")
// console.log(data)

// write data in array
// console.log(data)
// console.log(data.book[0])
// console.log(data.book[1])
// console.log(data.book[0].language)
// console.log(data.book[1].language)

//PB 33
// let get = JSON.parse('{"Name":"KRISH","Age":30,"DOB":"2006-07-23"}')
// console.log(get)
// console.log(get.DOB)
// a = new Date(get.DOB)
// console.log(a)

//EX
//Write one JSON string with date property (yyyy-mm-dd) and print date in India standard time While clicking on button.
// function fun(){
//     let get = JSON.parse('{"Name":"KRISH","Age":30,"DOB":"2006-07-23"}')
//     document.writeln("INDIA TIME : ")
//     document.writeln(new Date(get.DOB))
// }

//EX : fetch data using for loops
//for of loop gives values 
//for in loop gives index 
// using for in loop 
// for(x in data.FSD){
//     for(y in data.FSD[x]){
//         console.log(data.FSD[x][y])
//     }
// }
//using for of loop
// for(x of data.FSD){
//     console.log(x.Topic)
//     console.log(x.course)
//     console.log(x.content)
// }

//PB 32: sort values in descending order
// const student =
//     [
//         {
//             name: "PQR",
//             age: 25
//         },
//         {
//             name: "ABC",
//             age: 30
//         },
//         {
//             name: "XYZ",
//             age: 33
//         }
//     ] 
// const obj = student.sort((a,b)=>b.age - a.age)
// for(x of obj){
//     console.log(x.name + " " + x.age)
// }

//PB 29,31 murge
//concat for murge two object
// var obj = {
//     "div1":{
//         "name":["Z","B","H"]
//     },
//     "div2":{
//         "name":["Y","A","G"]
//     }
// }
// const obj1 = obj.div1.name
// const obj2 = obj.div2.name
// var final = obj1.concat(obj2).sort()
// let b = {
//     div:final
// }
// let a = JSON.stringify(b)
// fs.writeFile("sorted.json",a,(err)=>{
//     if(err){
//         console.log("something wrong")
//     }else{
//         console.log("successfull")
//     }
// })
// console.log(final)

//EX 
// function fun(b){
//     temp = {}
//     temp[b[0]]= b[b.length-1]
//     return temp
// }

// var a =["abc","def","ghi","jkl"]
// console.log(fun(a))

//PB 27
// function fun(a){
//     temp = {}
//     temp[a[0]] = a[a.length-1]
//     return temp
// }
// let input = ['ABC', 'DEF', 'Employee', 'Manager'] 
// console.log(fun(input))

//PB 30
// let obj = [
//     {
//         "name":"ABC",
//         "height":5.5
//     },
//     {
//         "name":"PQR",
//         "height":6.3
//     },
//     {
//         "name":"XYZ",
//         "height":5.2
//     }
// ]
// let a = obj.sort((a,b)=>b.height-a.height)[0]
// console.log(a.name + " " + a.height)
//                  OR
// console.log(Math.max(...obj.map(obj=>obj.height)))

//EX
//Hi! We are students of semester 4 of CSE branch
// const a = {
//     "A": "LJU",
//     "B": ["CSE", "IT", "CE"],
//     "C": [
//         {
//             "D": "Hi",
//             "E": ['are', 4, { 'F': ['semester', 'We'] }]
//         }
//     ],
//     "G": {
//         "H": "students",
//         "I": ["of", "!"]
//     },
//     "J": [{ "K": "Python", "L": "branch" }, "FSD-2"]
// }
// console.log(a.C[0].D + a.G.I[1] + " " + a.C[0].E[2].F[1] + " " + a.C[0].E[0] + " " + a.G.H + " " + a.G.I[0] + " " + a.C[0].E[2].F[0] + " " + a.C[0].E[1] + " " + a.G.I[0] + " " + a.B[0] + " " + a.J[0].L)


//CHAP = 2
var fs = require("fs")
var pm = require("path")

// setTimeout(()=>{
//     console.log("this is 5 sec timeout")
// },5000)

// setInterval(()=>{
//     console.log(5+9+8)
// },4000)

//EX : Write code to increase the font size at interval of 50 ms and it should stop increasing when the font size reaches to 50px. This task should be performed when you click on “Increase button” on browser. (Default font size 15px)
// font = 15
// function fun(font){
//     document.getElementById("demo").style.fontSize = font+"px"
//     document.getElementById("demo").style.color = "blue"
// }
// function fun2(){
//     setInterval(()=>{
//         if(font<=50){
//             fun(font++)
//         }
//     },50)
// }

//EX : Write code to perform the tasks as asked below. 
// • Add three buttons. 
// • Increase button to increase the fonts. It should stop increasing the fonts when the font 
// size reaches to 200px or stop button is clicked. 
// • Decrease button to decrease the fonts. It should stop decreasing the fonts when the 
// font size reaches to 20px or stop button is clicked. 
// • Stop button to stop increasing or decreasing the fonts. 
// • Increasing/decreasing interval is of 100 ms. 
// • (Default font size = 50px)
// let font = 50
// let inc, dec
// function fun(font){
//     document.getElementById("demo").style.fontSize = font+"px"
// }
// function fun2(){
//     inc = setInterval(()=>{
//         if(font<=200){
//             fun(font++)
//         }
//     },100)
// }
// function fun3(){
//     dec = setInterval(()=>{
//         if(font>=20){
//             fun(font--)
//         }
//     },100)
// }   
// function fun4(){
//     clearInterval(inc)
//     clearInterval(dec)
// }

//EX : read data from json file and print it in console
//ASYNC
// fs.readFile("sorted.json","utf-8",(err,data)=>{
//     if(err){
//         throw err
//     }else{
//         console.log(data)
//     }
// })
//SYNC
// const data1 = fs.readFileSync("sorted.json","utf-8")
// console.log(data1)

//EX : write data in json file
//ASYNC
// fs.writeFile("new.json","this is write file",(err)=>{
//     if(err){
//         console.log("something wrong")
//     }else{
//         console.log("successfull")
//     }
// })
//SYNC
// fs.writeFileSync("new.json","this is write file")

//EX : append data in json file(add somethinf in existing file)
//ASYNC
// fs.appendFile("new.json"," \n this is append file",(err)=>{
//     if(err){
//         console.log("something wrong")  
//     }else{
//         console.log("successfull")
//     }
// })
//SYNC
// fs.appendFileSync("new.json"," this is append file")

//EX : rename file name
//ASYNC
// fs.rename("new.json","renamed.json",(err)=>{
//     if(err){
//         console.log("something wrong")  
//     }else{
//         console.log("successfull")
//     }
// })
//SYNC
// fs.renameSync("new.json","renamed.json")

// copy file(in copy file old data will be deleted only stay new data)
//ASYNC
// fs.copyFile("sorted.json","renamed.json",(err)=>{
//     if(err){
//         console.log("something wrong")
//     }else{
//         console.log("successfull")
//     }
// })
//SYNC
// fs.copyFileSync("Json.json","renamed.json")

//EX : delete file
//ASYNC
// fs.unlink("renamed.json",(err)=>{
//     if(err){
//         console.log("something wrong")
//     }else{
//         console.log("successfull")
//     }})
//SYNC
// fs.unlinkSync("renamed.json")

//EX : create directory
//ASYNC
// fs.mkdir("myDirectory",(err)=>{
//     if(err){
//         console.log("something wrong")  
//     }else{
//         console.log("successfull")
//     }})
//SYNC
// fs.mkdirSync("myDirectory")

//EX : delete directory
//ASYNC
// fs.rmdir("myDirectory",(err)=>{
//     if(err){
//         console.log("something wrong")  
//     }else{
//         console.log("successfull")
//     }})
//SYNC
// fs.rmdirSync("myDirectory")

//PB 73 (settimeout is extra for knowledge purpose)
// fs.writeFile("help.txt", "You are creating a file", (err) => {
//     if (err) throw err
//     console.log("file write successfully")
// })
// fs.appendFile("help.txt", "\n you are appending data", (err) => {
//     if (err) throw err
//     console.log("file append successfully")
// })
// setTimeout(() => {
//     fs.readFile("help.txt", "utf-8", (err, data) => {
//         if (err) throw err
//         console.log(data)
//         console.log("thenks for using my program")
//     })
// }, 2000)

//EX : this is also a right to write file, append file and read file in one program but it is not a good way to write code because of callback hell
// fs.writeFile('test1.txt', 'Hello World!',(err) =>{
//     if (err) { console.log("Error Generated" + err); }
//     else {
//         fs.appendFile('test1.txt', '\nGood Morning!',(err)=> {
//             if (err) { console.log("Error Generated" + err); }
//             else {
//                 fs.readFile('test1.txt', "utf-8", (err, data) => {
//                     if (err) console.log("Error Generated: " + err)
//                     console.log(data);
//                 });
//             }
//         });
//     }
// });

//EX : Write node JS script to write an array of objects with properties name and age in a file named student.txt. Then read the file and display the object on console.
// let student = [
//     {
//         "name":"ABC",
//         "age":25
//     },
//     {
//         "name":"PQR",
//         "age":30
//     },
//     {
//         "name":"XYZ",
//         "age":33
//     }
// ]
// fs.writeFile("student.txt",JSON.stringify(student),(err)=>{
//     if(err){
//         console.log("something wrong")
//     }else{
//         console.log("successfull")
//     }})
//     fs.readFile("student.txt","utf-8",(err,data)=>{
//         if(err){
//             console.log("something wrong")
//         }else{
//             console.log(JSON.parse(data))
//         }})

//EX : Create JSON object which contains array of objects. Calculate perimeter of square and 
// perimeter of circle by using side value and diameter value respectively. Write object as well as perimeter values of square and circle in shape.txt file.
// const shape =
//     [
//         {
//             name: "circle",
//             diameter: 8
//         },
//         {
//             name: "square",
//             side: 10
//         }
//     ] 
// fs.writeFileSync("shape.txt",JSON.stringify(shape))
// let data = fs.readFileSync("shape.txt","utf-8")
// data = JSON.parse(data)
// let a = data[0].diameter
// let b = data[1].side
// console.log("circle perimeter : "+ (a/2)*3.14*2)
// console.log("square perimeter : "+ b*4)
// fs.appendFileSync("shape.txt","\n circle perimeter : "+ (a/2)*3.14*2 + "\n square perimeter : "+ b*4)

// path module
// path=pm.dirname("D:/LJ/abc.html");
// console.log(path);
// path1=pm.basename("D:/LJ/abc.txt");
// console.log(path1);
// path2=pm.parse("D:/LJ/abc.html");
// console.log(path2);
// ext = pm.extname("D:/LJ/abc.txt")
// console.log(ext);
// if(ext == ".txt"){
//     console.log("this is text file")
// }else{
//     console.log("this is not text file")
// }

//events module
var EventEmitter = require("events")
var ee = new EventEmitter()
// ee.on("sayMyName",(start,end)=>{
//     console.log(`starting ${start} and ending ${end}`)
// })
// ee.emit("sayMyName",1,100)

//EX : Write a Node.js program using the events module to simulate a sequence of events:
// 1. When a "connection" event occurs, print "Connection successfully" and trigger a 
// "data-received" event.
// 2. When the "data-received" event occurs, print "Data received successfully"
// 3. Finally, print "Thanks" at the end of execution.
// ee.on("connection",()=>{
//     console.log("Connection successfully")
//     ee.emit("data-received")
// })
// ee.on("data-received",()=>{
//     console.log("Data received successfully")
// })
// ee.emit("connection")
// console.log("Thanks")

//EX :Create a Node.js program using the events module to demonstrate:
// 1. Registering multiple event listeners for different events (myEvent1, myEvent2).
// 2. Removing a specific event listener (removeListener) for myEvent2.
// 3. Removing all listeners associated with myEvent1 (removeAllListeners).
// 4. Triggering events and observing which listeners execute.
// let fun1 = (msg)=>{
//     console.log("this is myEvent1 and message is : "+ msg)
// }
// let fun2 = (msg)=>{
//     console.log("this is myEvent2 and message is : "+ msg)
// }
// ee.on("myEvent1",fun1)
// ee.on("myEvent2",fun2)
// ee.on("myEvent1",fun1)
// ee.on("myEvent2",fun2)

// ee.removeListener("myEvent2",fun2)
// ee.removeAllListeners("myEvent1")

// ee.emit("myEvent1","hello")
// ee.emit("myEvent2","welcome")

//EX : Write node js script to create two listeners for a common event. Print number of events associated with an emitter. Remove one of the listeners and call remaining listener again. Also, print number of remaining listeners.
// let fun1 = ()=>{
//     console.log("this is myEvent1")
// }
// let fun2 = ()=>{
//     console.log("this is myEvent2")
// }
// ee.on("myEvent",fun1)
// ee.on("myEvent",fun2)
// let count = ee.listenerCount("myEvent")
// console.log(count)
// ee.emit("myEvent")
// ee.removeListener("myEvent",fun1)
// ee.emit("myEvent")
// count = ee.listenerCount("myEvent")
// console.log(count)
// ee.removeAllListeners("myEvent")
// count = ee.listenerCount("myEvent")
// console.log(count)

//EX : Write node js script to handle events as asked below.
// 1) Check the radius is negative or not. If negative then display message “Radius” must 
// be positive” else calculate the perimeter of circle.
// 2) Check side is negative or not. If negative then display message “Side must be 
// positive” else calculate the perimeter of square. 
// ee.on("Ncircle",()=>{
//     console.log("Radius must be positive")
// })
// ee.on("Nsquare",()=>{
//     console.log("Side must be positive")
// })
// ee.on("circle",(r)=>{
//     if(r<0){
//         ee.emit("Ncircle")
//     }else{
//         console.log("Circle perimeter : "+ 2*3.14*r)
//     }
// })
// ee.on("square",(s)=>{
//     if(s<0){
//         ee.emit("Nsquare")              
//     }else{
//         console.log("Square perimeter : "+ 4*s)
//     }       
// })
// ee.emit("circle",5)
// ee.emit("square",-10)

//PB 84
// Write a node.js script using Event handling to perform following tasks in sequence:
// 1) Create a folder named abc.
// 2) Create a file in it named xyz.txt and enter data into it. 
// 3) Append data to that file xyz.txt and print message “Data Appended Successfully”.
// 4) Read the content of the file xyz.txt and print the content on console. 
// 5) Copy content from xyz.txt to pqr.txt file. 
// 6) Delete the file xyz.txt. And Lastly print the message “All operations performed 
// successfully” on console. 
// Do all the operations of File using synchronous file system module.

// ee.on("createFolder",()=>{
//     fs.mkdirSync("abc")
//     ee.emit("createFile")
// })
// ee.on("createFile",()=>{
//     fs.writeFileSync("abc/xyz.txt","this is xyz file")
//     ee.emit("appendFile")
// })
// ee.on("appendFile",()=>{
//     fs.appendFileSync("abc/xyz.txt"," \n this is append file")
//     console.log("Data Appended Successfully")
//     ee.emit("readFile")
// })
// ee.on("readFile",()=>{
//     let data = fs.readFileSync("abc/xyz.txt","utf-8")
//     console.log(data)
//     ee.emit("copyFile")

// })
// ee.on("copyFile",()=>{
//     fs.copyFileSync("abc/xyz.txt","abc/pqr.txt")
//     ee.emit("deleteFile")
// })
// ee.on("deleteFile",()=>{
//     fs.unlinkSync("abc/xyz.txt")
//     console.log("All operations performed successfully")
// })
// ee.emit("createFolder")