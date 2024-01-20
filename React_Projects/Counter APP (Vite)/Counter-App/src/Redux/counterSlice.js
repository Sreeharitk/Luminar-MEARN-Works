import { createSlice } from "@reduxjs/toolkit";

const cntSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
        reset:(state)=>{
            state.count = 0
        },
        incrementAmount:(state,action)=>{
            state.count += action.payload
        }
    }
})

export const {increment,decrement,reset,incrementAmount} = cntSlice.actions
export default cntSlice.reducer