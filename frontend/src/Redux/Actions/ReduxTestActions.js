import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequestGET } from "../Axios/config";



export const ReduxActionTest = createAsyncThunk('fetch/ReduxTest' , async ()=>{

  const  response =  await apiRequestGET('/');
  return response.data


})



