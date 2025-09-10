import React from 'react'
import HomeBai1 from '../components/HomeBai1'
import AboutBai1 from '../components/AboutBai1'
import { Route, Routes } from 'react-router-dom'

export default function Bai1() {
    return (
        <Routes>
            <Route path='/' element={<HomeBai1></HomeBai1>}></Route>
            <Route path='/about' element={<AboutBai1></AboutBai1>}></Route>
            <Route path='/about' element={<></>}></Route>
        </Routes>
    )
}
