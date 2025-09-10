import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactBai2 from '../components/ContactBai2'

export default function Bai2() {
  return (
    <Routes>
        <Route path='/contact' element={<ContactBai2></ContactBai2>}></Route>
    </Routes>
  )
}
