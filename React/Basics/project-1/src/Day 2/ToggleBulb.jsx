import React, { useState } from 'react'
import off_img from "../Assets/image1.jpg"
import on_img from "../Assets/image2.jpg"

let curr = true;
const ToggleBulb = () => {
    const [state, setState] = useState("Turn On");
    const [source, setSource] = useState(off_img)

    let toggle = ()=>{
        if(curr){
            setState("Turn Off");
            setSource(on_img)
            curr = !curr;
        }else{
            setState("Turn On");
            setSource(off_img);
            curr = !curr;
        }
    }
  return (
    <div>
        <img src={source} alt="image" style={{width:"100px", height:"100px"}}/>
        <button onClick={toggle}>{state}</button>
    </div>
  )
}

export default ToggleBulb