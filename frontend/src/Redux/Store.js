'use client'
import { configureStore } from "@reduxjs/toolkit"
import { DefaultReducer } from "./DefaultReducer/DefaultReducer"
import { ReduxTestReducer } from "./Slice/ReduxTestSlice"

const store  = configureStore({

    reducer:{
        DefaultReducer,       
        ReduxTestReducer
    }


})


export default store 