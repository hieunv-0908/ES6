import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginBai3 from '../components/LoginBai3'

export default function Bai3() {
    return (
        <Routes>
            <Route path='/login' element={<LoginBai3></LoginBai3>}></Route>
        </Routes>
    )
}
