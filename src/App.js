import './App.css';

import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import AppRoutes from './Components/AppRoutes'
import NavigationBar from './Components/Nav/Navbar'
import { BrowserRouter } from 'react-router-dom';

import { getProductsFromApi } from './actions/Product'


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
