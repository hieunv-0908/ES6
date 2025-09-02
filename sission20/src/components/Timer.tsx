import React,{useState,useEffect} from 'react'

export default function Timer() {
    const [state,setState]= useState(0)
    useEffect(()=>{
        const idInterval = setInterval(()=>{
            setState((state)=>state+1);
        },1000);
        return ()=>{
        clearInterval(idInterval)
    }
    },[state])
  return (
    <>
    <span>{state}</span>
    </>
  )
}
