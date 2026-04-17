import React, { Component, useState } from "react";
let current = true;

const ToggleButton = () => {
  const [show, setShow] = useState("text");
  const [action, setAction] = useState("show");
  const [eyeClass, setEyeClass] = useState("fa-solid fa-eye");

    let handleShow = ()=>{
        setShow("text");
        setAction("Hide");
        setEyeClass("fa-solid fa-eye-slash");
        current = !current;
    }
    let handleHide = ()=>{
        setShow("password");
        setAction("Show");
        setEyeClass("fa-solid fa-eye");
        current = !current;
    }


  return (
    <div>
      <input type={show} />
      <button onClick={current ? handleShow : handleHide}>{action} <i className={eyeClass}></i></button>
    </div>
  )
}

export default ToggleButton