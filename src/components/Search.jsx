import { useState } from "react"
import "../styles/Search.scss"

function Search(){
  const [keyword, setKeyword] = useState('')

  const handleSearch = () => {
    console.log("Key Word:",keyword)
  }
  return(
    <>
      <input type="text" placeholder="Input keyword" className="input" />
      <button onClick={handleSearch}>Search</button>
    </>
  )
}

export default Search