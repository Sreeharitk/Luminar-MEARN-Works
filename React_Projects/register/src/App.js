import { useState } from "react";
import './App.css';

function App() {
  const [inputs,setInputs] = useState({
    username:"",email:"",password:""
  })

  const[unameValid,setUnameValid] = useState(false)
  const[emailValid,setEmailValid] = useState(false)
  const[pswordValid,setPswordValid] = useState(false)

  const setData = (e)=>{
    const{name,value}=e.target
    if(name === "username"){
      if(value.match(/^[a-zA-Z ]+$/)){
        setUnameValid(false)
      }else{
        setUnameValid(true)
      }
    }

    if(name === "email"){
      if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        setEmailValid(false)
      }else{
        setEmailValid(true)
      }
    }

    if(name === "password"){
      if(value.match(/^[a-zA-Z0-9]+$/)){
        setPswordValid(false)
      }else{
        setPswordValid(true)
      }
    }

    setInputs({...inputs,[name]:value})
  }

  console.log(inputs);

  return (
    <div className="App">
      <div style={{margin:"auto"}}>
        <form action="">
          <input onChange={(e)=>setData(e)} type="text"  name="username" placeholder="username"/><br />
          {unameValid && 
          <div>
            <p>invalid username</p>
          </div>}
          <input onChange={(e)=>setData(e)} type="email" name="email" id="" placeholder="email" /><br />
          {emailValid && 
          <div>
            <p>invalid email</p>
          </div>}
          <input onChange={(e)=>setData(e)} type="password" name="password" placeholder="password"/><br />
          {pswordValid && 
          <div>
            <p>invalid password format</p>
          </div>}
          <button>sumbit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
