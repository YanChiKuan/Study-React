import { useState } from "react";

const BindInput=()=>{
  const [value,setValue]=useState('')
  return(
    <>
      <p>input value:{value}</p>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </>
  )
}
export default BindInput