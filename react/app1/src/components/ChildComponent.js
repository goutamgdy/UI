import React from 'react'

function ChildComponent(props) {
  
  return (
    <div>
      <button onClick={()=>props.greetHandler('Goutam')}>Greet Perent !</button>
    </div>
  )
}
export default ChildComponent