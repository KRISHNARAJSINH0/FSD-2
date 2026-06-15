const express = require('express')
const ml = require('nodemailer')
const app = express()
const trans = ml.createTransport({
    host:"",
    port: "",
    auth:{
        user:"",
        pass:""
    }
})
const details = {
    from :'',
    to : '',
    subject : '',
    text : '',
    html : ''
}
trans.sendMail(details,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
})