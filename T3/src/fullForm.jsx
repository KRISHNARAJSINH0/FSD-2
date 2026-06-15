import React,{useState} from "react";
function Full(){
    const[data,setData] = useState({})
    function detail(e){
        const{name,value} = e.target
        setData({...data,[name]:value})
    }
    function hendleAlert(){
        alert("\nname : "+data.fname+"\nEmail : "+data.email+"\npassword : "+data.pass+"\nMessage : "+data.msg+"\nCity : "+data.city+"\nGender : "+data.gender)
    }
    return(
        <>
            <form onSubmit={hendleAlert}>
                First Name :<input type="text" name="fname" onChange={detail}/><br />
                Email : <input type="email" name="email" onChange={detail}/><br />
                Password : <input type="password" name="pass" onChange={detail}/><br />
                Confirm Password : <input type="password" onChange={detail}/><br />
                Message : <textarea placeholder="Enter Details..." name="msg" onChange={detail}></textarea><br />
                Gender : 
                <input type="radio" name="gender" value="male" onChange={detail}/>Male 
                <input type="radio" name="gender" value="female" onChange={detail}/>Female
                <br />
                City : 
                <select name="city" onChange={detail}><br />
                    <option value="">--select--</option>
                    <option value="Surat">Surat</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                </select><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Full