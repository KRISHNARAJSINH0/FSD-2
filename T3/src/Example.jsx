import { useState } from "react";

function Example(props){
    return(
        <>
        <h2>My Name Is {props.data.Student_name} I am a student of { props.data.University_name } University !</h2>
        </>
    )
}
export default Example