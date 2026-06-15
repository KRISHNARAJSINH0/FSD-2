import React,{useState} from "react";
function Form(){
    const[data,setName] = useState({})
    function detail(e){
        const{name,value} = e.target
        setName({...data,[name]:value})
    }
    return(
        <>
        <div>
            <form>
                <input type="text" name="fname" onChange={detail}/>
                <input type="text" name="lname" onChange={detail}/>
            </form>
            <h1>FirstName : {data.fname}</h1>
            <h1>LastName : {data.lname}</h1>
        </div>
        </>
    )
}
export default Form
