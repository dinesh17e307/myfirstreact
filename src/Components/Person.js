import React from 'react'
import "./Style.css";
const person=(props)=>{
    return (
    <div className="Person">
    <p onClick={()=>props.click()}>this is {props.names} from {props.place} and my age is {Math.floor(Math.random() *50) } </p>
    <h1>{props.children}</h1>
    <input type="text" onChange={props.changed} value={props.names}/>
    </div>
    )
}
export default person