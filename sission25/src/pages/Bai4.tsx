import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginBai3 from '../components/LoginBai3'
import Register from '../components/Register'

export default function Bai3() {
    return (
        <Routes>
            <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
    )
}
