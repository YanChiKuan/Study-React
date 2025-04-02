import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'
import List from './components/List'
import BindInput from './components/bindInputData'
import GetDom from './components/getDom'
import GridLayout from './components/gridLayout'

function App() {
  const [count, setCount] = useState(0) //简单类型的状态变量
  const [person, setPerson] = useState({ name: 'zhangsan', age: 18 })

  const handleNameChange = () => {
    setPerson({ ...person, name: 'lisi' })
  }
  const handleAgeChange = () => {
    setPerson({ ...person, age: 20 })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <hr />
      <h3>2.复杂类型的状态变量</h3>
      <p>Name:{person.name}</p>
      <p>Age:{person.age}</p>
      <button onClick={handleNameChange}>change name</button>
      <button onClick={handleAgeChange}>change age</button>
      <hr />
      <h3>3.组件练习</h3>
      <Search />
      <hr />
      <h3>4.列表练习</h3>
      <List />
      <hr />
      <h3>5.受控组件练习</h3>
      <BindInput />
      <hr />
      <h3>6.获取dom练习</h3>
      <GetDom />
      <hr />
      <h3>7.栅格布局练习</h3>
      <GridLayout />
    </>
  )
}

export default App
