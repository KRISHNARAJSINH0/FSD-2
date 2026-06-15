import React,{useState} from 'react'
function US1(){
    const [text,setText] = useState('LJ University')
    const [textColor,setColor] = useState('red')
    const [hide,setHide] = useState('React Js Hooks')
    const [buttonHide,setButton] = useState('Hide')
    function Text(){
        if(text==='LJ University'){
            setText('Welcome students')
        }else{
            setText('LJ University')
        }
    }
    function Color(){
        if(textColor==='red'){
            setColor('blue')
        }else{
            setColor('red')
        }
    }
    function Button(){
        if(buttonHide==='Hide'){
            setButton('Show')
            setHide("")
        }else{
            setButton('Hide')
            setHide('React Js Hooks')
        }
    }
    return ( 
        <>
        <button onClick = {Text}>Change Text</button><br />
        <button onDoubleClick = {Color}>Change Color</button><br />
        <button onClick={Button}>{buttonHide}</button><br />
        <h2 style={{color:textColor}}>{text}</h2>
        <h3>{hide}</h3>
        </>
    )
}
export default US1