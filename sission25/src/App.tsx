import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Bai1 from './pages/Bai1'
import Bai2 from './pages/Bai2'
import Bai3 from './pages/Bai3'
import Bai6 from './pages/Bai6'

export default function App() {
  return (
    <div className='w-[100%] h-[100%] items-center justify-center flex'>
      {/* <Bai1></Bai1> */}
      {/* <Bai2></Bai2> */}
      {/* <Bai3></Bai3> */}
      <Bai6></Bai6>
    </div>
  )
}
