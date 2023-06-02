import './App.css';
import './Components/ComponentCss/Base.css'

import React, { useEffect } from 'react'

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import AppRoutes from './Components/AppRoutes'
import NavigationBar from './Components/Nav/Navbar'
import { BrowserRouter } from 'react-router-dom'

import { getProductsFromApi } from './actions/Product'
import { getAdminInfo } from './actions/Admin'


function App() {
  const dispatch = useDispatch()
  const isAdmin = useSelector(store => store.auth.isAdmin)
  const token = useSelector(store => store.auth.token)

  useEffect(function() {
    dispatch(getProductsFromApi())
    if(isAdmin === true && token) { 
      dispatch(getAdminInfo(token))
    }
  }, [dispatch])

  // try{

  // } catch (e) {
  //   return (
  //     <BrokenApp />
  //   )
  // }
  return (
    <div id="App">
      <header id="App-header">
          <BrowserRouter>
            <NavigationBar />
            <AppRoutes />
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;