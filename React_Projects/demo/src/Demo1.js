import React from 'react'
import "./Demo1.css"
import Demo2 from "./Demo2"
              //props = {data:user,data1:100}
const Demo1 = ({data,data1}) => { //here the {} in parameter is called destructuring curly brackets and inside functon we dont use props anymore
  return (
    <div className="main">
        <h1>The shared data is {data} {data1}</h1>  
        <h1>Demo1 Component</h1>
        <Demo2/>
    </div>
  )
}

export default Demo1