import React from 'react'
import { useState } from 'react';
function UseStateCheckBox() {
    const [liked, setLiked] = useState(false);
    // function handleChange(e){
    //     setLiked(e.target.checked);
    // }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={(e)=>{setLiked(e.target.checked)}}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  )
}

export default UseStateCheckBox
