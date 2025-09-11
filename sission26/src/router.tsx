import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Student from './pages/Student'
import StudentDetail from './pages/StudentDetail'
import ChangeUrl from './pages/ChangeStudent'
import PrivateRouter from './pages/PrivateRoute'
import Account from './pages/Account'
import Login from './pages/Login'

export const router = createBrowserRouter([
    {
        path: '/', element: <App></App>, children: [
            // {index:true,element:<Home></Home>},
            {
                path: 'product', element: <Product></Product>, children: [
                    { path: ':id', element: <ProductDetail></ProductDetail> }
                ]
            },
            {
                path: 'student', element: <Student></Student>, children: [
                    { path: ':name', element: <StudentDetail></StudentDetail> }
                ]
            },
            { path: "/login", element: <Login /> },
            {
                path: "/account",
                element: (
                    <PrivateRouter>
                        <Account />
                    </PrivateRouter>
                ),
            },
        ]
    }
])
