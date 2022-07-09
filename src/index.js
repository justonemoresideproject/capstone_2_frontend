import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import { store, persistedStore } from "./store"
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'

import { BASE_URL } from './API/apiConfig'

const root = ReactDOM.createRoot(document.getElementById('root'));

// const getPromise = async () => {
//   const {publishableKey} = await fetch('/config').then(r => r.json())
//   console.log(publishableKey)
//   return loadStripe(publishableKey)
// }


// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistedStore}>
//           <App />
//         </PersistGate>
//     </Provider>,
//   </React.StrictMode>)

(async () => {
  const { publishableKey } = await axios(`${BASE_URL}/payment/config`).then(r => r.data)
  const stripePromise = loadStripe(publishableKey)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <PersistGate loading={null} persistor={persistedStore}>
            <App />
          </PersistGate>
        </Elements>
      </Provider>,
    </React.StrictMode>
  );
})()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
