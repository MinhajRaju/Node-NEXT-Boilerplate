'use client'
import Image from "next/image";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReduxActionTest } from "../Redux/Actions/ReduxTestActions";


export default function Home() {

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(ReduxActionTest())

  })

 return(
  
   <main>
        Hello world  fron next app

   </main>
 )
}
