import React from 'react'
import { useState } from 'react'
function UseState() {
    const [text, setText] = useState("Hello");
    function handleChage(e) {
        setText(e.target.value);
    }
    function handleReset(){
        setText("Hello")
    }
  return (
    <div>
      <input value={text} onChange={handleChage}></input>
      <p>Enterred Text: {text}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default UseState
