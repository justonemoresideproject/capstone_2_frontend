import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import ProductsPage from './Product/ProductsPage'
import Customers from './Admin/Customers'
import Orders from './Admin/Orders'
import Addresses from './Admin/Addresses'
import MyOrders from './MyStuff/MyOrders'
import MyAddresses from './MyStuff/MyAddresses'
import MyProfile from './MyStuff/MyProfile'
import CustomerInfo from './CustomerInfo'
import PaymentForm from './PaymentForm'
import SuccessPage from './SuccessPage'
import Checkout from './CheckOut'
import Login from './Auth/Login'
import Register from './Auth/Register'
import NotFound from './NotFound'

function AppRoutes() {
    return (
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    element={<ProductsPage />}
                    path='products'
                />
                <Route
                    path='orders' 
                    element={<Orders />}
                />
                <Route
                    path='myOrders'
                    element={<MyOrders />}
                />
                <Route 
                    path='customerInfo'
                    element={<CustomerInfo />}
                />
                <Route
                    path='paymentForm'
                    element={<PaymentForm />}
                />
                <Route
                    path='successPage'
                    element={<SuccessPage />}                   
                />
                <Route
                    path='myAddresses'
                    element={<MyAddresses />}
                />                    
                <Route
                    path='myProfile'
                    element={<MyProfile />}
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
                <Route
                    path='*'                      
                    element={<NotFound />}
                />
        </Routes>
    )
}

export default AppRoutes