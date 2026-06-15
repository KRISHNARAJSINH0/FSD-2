const express = require('express')
const app = express()
const student_result = [

    {
        Name: "Krishna",
        Roll_no: 1,
        Division: "A",
        Percentage: 85,
        Grade: "A"
    },

    {
        Name: "Raj",
        Roll_no: 2,
        Division: "B",
        Percentage: 78,
        Grade: "B"
    },

    {
        Name: "Priya",
        Roll_no: 3,
        Division: "A",
        Percentage: 92,
        Grade: "A+"
    }

];
app.get('/result',(req,res)=>{
    res.send(student_result)
})
app.get('/result/:rollno',(req,res)=>{
    const roll = Number(req.params.rollno)
    const student = student_result.find(
        s=>s.Roll_no === roll
    )
    res.send(student)
})
app.listen(3000)