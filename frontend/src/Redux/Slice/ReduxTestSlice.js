import { createSlice } from '@reduxjs/toolkit'
import { ReduxActionTest } from '../Actions/ReduxTestActions'


const ReduxTestSlice = createSlice({
  name: 'Redux',
  initialState: {
    list:[], 
    status: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(ReduxActionTest.fulfilled, (state, action) => {
    
      state.list = action.payload
    })    
  },
})

export const ReduxTestReducer = ReduxTestSlice.reducer
