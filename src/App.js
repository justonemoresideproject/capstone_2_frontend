import './App.css';

import React, { useEffect } from 'react'

import axios from 'axios'

import { useDispatch } from 'react-redux'

import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

import AppRoutes from './Components/AppRoutes'
import NavigationBar from './Components/Nav/Navbar'
import { BrowserRouter } from 'react-router-dom'

import { getProductsFromApi } from './actions/Product'

import { BASE_URL } from './API/apiConfig'


function App() {
  const dispatch = useDispatch()
  

  useEffect(function() {
    dispatch(getProductsFromApi())
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <NavigationBar />
            <AppRoutes />
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
