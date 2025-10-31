import React from "react";

const Hello = props => {
    console.log(props)
    return (
        <div className="hello">
            <h1>Hello {props.name}</h1>
            <h2>{props.name} is {props.heroName} </h2>
        </div>
    )
}

export default Hello