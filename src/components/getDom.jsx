import { useRef } from "react";

const GetDom=()=>{
  const inputRef = useRef(null);

  return(
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => console.log(inputRef.current)}>Console</button>
    </>
  )
}

export default GetDom