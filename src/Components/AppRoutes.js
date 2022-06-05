import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Products from './Product/Products'
import Customers from './Admin/Customers'
import Orders from './Admin/Orders'
import Profile from './Profile'
import Addresses from './Admin/Addresses'
import Checkout from './CheckOut'
import Login from './Auth/Login'
import Register from './Auth/Register'
import NotFound from './NotFound'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                >
                    <Route
                        index element={<Products />}
                        path='products'
                    />
                    <Route
                        path='orders'
                        element={<Orders />}
                    />
                    <Route
                        path='myProfile'
                        element={<Profile />}
                    />
                    <Route
                        path='customers'
                        element={<Customers />}
                    />
                    <Route
                        path="addresses"
                        element={<Addresses />}
                    />
                    <Route
                        path="login"
                        element={<Login />}
                    />
                    <Route
                        path="checkout"
                        element={<Checkout />}
                    />
                    <Route
                        path="register"
                        element={<Register />}
                    />
                </Route>
                <Route
                    path='*'
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes