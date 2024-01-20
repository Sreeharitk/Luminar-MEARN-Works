import { configureStore } from "@reduxjs/toolkit";
import cntSlice from "./counterSlice";

const store = configureStore({
    reducer:{
        cntSlice    
    }
})

export default store