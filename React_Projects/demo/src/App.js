import { useState } from "react";
import './App.css';
import Demo1 from "./Demo1";

function App() {
  //state creation
  const [user,setUser] = useState("Hari")
  //function without argmnt
  function changeData(){
    setUser("Sreehari")
  }
  //function with argmnt
  function changeUnknown(data){
    setUser(data)
  }
  //Event with target value
  function changeInput(e){
    setUser(e.target.value)
  }

  return (
    <div className="App">
      <h1 id="d">My First React App {user}</h1>
      <button onClick={changeData}>Change</button>
      <button onClick={()=>changeUnknown("Unknown")}>Change as unknown</button>
      <input onChange={(e)=>changeInput(e)} type="text" placeholder="Enter Name" />
      <p style={{color:"green",backgroundColor:"yellow"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem porro numquam error atque. Excepturi, earum enim deserunt fugit sed quas et facere maxime, est qui, ipsum porro nisi molestiae quod.</p>
      <Demo1 data={user} data1={100}/>
    </div>
  );
}

export default App;
