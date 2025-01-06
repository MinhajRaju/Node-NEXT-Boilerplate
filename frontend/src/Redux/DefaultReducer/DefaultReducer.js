import { createSlice } from "@reduxjs/toolkit";


const DefaultSlice = createSlice({

    name:"DefaultSlice",
    initialState:{
        start:"StartApp"
    },
    reducers:{

    }

})

export const DefaultReducer = DefaultSlice.reducer