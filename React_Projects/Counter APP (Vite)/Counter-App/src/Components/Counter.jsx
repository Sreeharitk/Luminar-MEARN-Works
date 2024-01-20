import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementAmount, reset } from "../Redux/counterSlice"
import { useState } from "react"


function Counter() {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.cntSlice.count)
  const [amount,setAmount] = useState(0)

  const handleAmount = ()=>{
    if(amount>0){
      dispatch(incrementAmount(+amount))
      setAmount("")
    }else{
      alert("Enter a valid amount")
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"78svb"}}>
        <div className="text-center border p-5 border-danger rounded w-50">
            <h1 className="mb-5 text-danger">{count}</h1>
            <button onClick={()=>dispatch(decrement())} type="button" className="btn btn-primary me-2">Decrement</button>
            <button onClick={()=>dispatch(reset())} type="button" className="btn btn-danger me-2">Reset</button>
            <button onClick={()=>dispatch(increment())} type="button" className="btn btn-success me-2">Increment</button>
            <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
              <input type="text" onChange={(e)=>setAmount(e.target.value)} value={amount||""}  className="form-control w-75 text-center mb-3" placeholder="Enter the amount to increment by" />
              <button type="button" onClick={handleAmount} className="btn btn-warning me-2">Increment amount by</button>
            </div>
        </div>
    </div>
  )
}

export default Counter      