const express = require("express")
const app = express()
app.use(express.static(__dirname,{index:"index.html"}))
app.use(express.urlencoded({"extended":false}))
app.set("content-type","text/html")
app.post('/user',(req,res)=>{
    const name = req.body.uname
    const pass = req.body.pass
    const copass = req.body.co_pass
    const gender = req.body.gen
    if(pass == copass){
        res.send(`
            name ${name}
            pass ${pass}
            gender ${gender}
            `)
    }else{
        res.send(`<h3 style = 'color: red;'>No need to write file having form elements</h3>`)
    }
})
app.listen(3000)