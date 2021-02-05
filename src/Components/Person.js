import React from 'react'
const person=(props)=>{
    return (
    <div>
    <p>this is {props.names} from {props.place} and my age is {Math.floor(Math.random() *50) } </p>
    <h1>{props.children}</h1>
    </div>
    )
}
export default person