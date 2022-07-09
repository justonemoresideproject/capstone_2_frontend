import './ComponentCss/PaymentForm.css'

import React, { useState } from 'react';

import {useNavigate, useParams} from 'react-router-dom'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import { useSelector, useDispatch } from 'react-redux'

import { addRecentOrder, setCustomer } from '../actions/Customer'
import { resetCart } from '../actions/Cart'

const { TOKEN, BASE_URL } = require('../API/apiConfig.js')

// import StatusMessages, {useMessage} from './StatusMessages'

function PaymentForm() {
    const { clientSecret } = useParams();
    const elements = useElements();
    const stripe = useStripe();
    const store = useSelector(store => store)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [error, setError] = useState('')

    const cartKeys = Object.keys(store.cart)
    let total = 0
    cartKeys.forEach(key => total += store.cart[key].price)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        //Create payment intent on the server
        // const {error: backendError, clientSecret} = await fetch('/create-payment-intent', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         amount: total,
        //         paymentMethodType: 'card',
        //         currency: 'usd'
        //     })
        // }).then(r => r.json());

        // if(backendError) {
        //     return;
        // }

        //Confirm the payment on the client
        const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }
        )

        if(stripeError) {
            return;
        }
        
        const cartItems = {}
        cartKeys.forEach(key => {
            cartItems[key] = store.cart[key].quantity
        })

        await fetch({
            method: 'post',
            url: `${BASE_URL}/orders`,
            headers: {Authorization: `Bearer ${TOKEN}`},
            data: {
                "customerInfo": store.customer,
                "products": cartItems
            }
        }).then(function(res) {
            const recentOrder = {
                "products": store.cart, 
                "customerInfo": store.customer, 
                "order": res
            }
            dispatch(addRecentOrder(recentOrder))
            dispatch(resetCart())
            console.log('dispatching...')
        }).then(function() {
            navigate(`/successPage`)
        }).catch(function(res) {
            console.log('FAILED...')
            setError(`${res}`)
        })
    }

    const CARD_ELEMENT_OPTIONS = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#aab7c4",
            },
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
          },
        },
      };

    return (
        <>
            <h1>Card</h1>
            <form 
                id="payment-form" 
                onSubmit={handleSubmit}>
                {/* <label 
                    htmlFor="card-element">
                        Card Details
                </label> */}
                <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />
                <button className='payButton'>
                    Pay
                </button>
            </form>
            <div>{error}</div>
        </>
    )
}

export default PaymentForm;