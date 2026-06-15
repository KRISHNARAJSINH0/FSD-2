import React,{useState} from "react";
function ValidForm(){
    const[data,setData] = useState({})
    function add(e){
        const{name,value} = e.target
        setData({...data,[name]:value})
    }
    function hendleValid(){
        if(data.pass !== data.cpass){
            alert("password and the conmfirm password must be same")
        }else if(data.pass.length<=8){
            alert("password must be 8 charfield")
        }else{
            alert("Name : "+data.fname+"\nEmail : "+data.email )
        }
    }
    return(
        <>
            <form onSubmit={hendleValid}>
                <input type="text" name = "fname" onChange={add} placeholder="First Name"/><br />
                <input type="email" name="email" onChange={add} placeholder="Email"/><br />
                <input type="password" name ="pass" onChange={add} placeholder="Password"/><br />
                <input type="password" name="cpass" onChange={add} placeholder="Comfirm Password"/><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default ValidForm