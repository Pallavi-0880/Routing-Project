import "./Css/App.css"
import { Link } from "react-router-dom"

import React from "react"
import Data from "./Data.json"


const App = () => {
  console.log(Data)
  return (
    <div>
      <h1>Javascript Topics</h1>
      <div className="box">
        <Link className="headings" to={`/details`} state={Data[0]} >Function Topic</Link>
        <Link className="headings" to={`/details`} state={Data[1]}>DOM Topic</Link>
        <Link className="headings" to={`/details`} state={Data[2]}>Event Topic</Link>
      </div>
    </div>
  )

}

export default App
