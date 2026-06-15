const express = require('express')
const cookie = require('cookie-parser')
const app = express()
app.use(express.static(__dirname))
app.get('/calc',(req,res)=>{
    const no1 = parseInt(req.query.no1)
    const no2 = parseInt(req.query.no2)
    if(no1>=0 & no2>=0){
        if("add"==req.query.choice){
            const a = no1 + no2
            res.write("addition : "+a)
        }else if("sub"==req.query.choice){
            const b = no1-no2
            res.write("substraction : "+b)
        }else if("mul"==req.query.choice){
            const c = no1*no2
            res.write("multiplication : "+c)
        }else if("div"==req.query.choice){
            const d = no1/no2
            res.write("divition : "+d)
        }else{
            res.write("please select method to do ")
        }
    }else{
        res.write("number must be greter then 0 ")
    }
    res.send()
})
app.listen(3050)