import React from "react";
import { useLocation } from "react-router-dom"
const Details = () => {
  const { state } = useLocation();
  
  return (
    <div> <video src=""></video>
    <p>{state.para}</p>
     </div>
  )
}

export default Details