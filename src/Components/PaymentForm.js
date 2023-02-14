import './ComponentCss/PaymentForm.css'

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import { useSelector, useDispatch } from 'react-redux'

import { addRecentOrder, setCustomer } from '../actions/Customer'
import { sendOrderToApi } from '../actions/Order'
import { resetCart } from '../actions/Cart'
import Modal from './Helpers/HelperComponents/Modal';

const { TOKEN, BASE_URL } = require('../API/apiConfig.js')

// import StatusMessages, {useMessage} from './StatusMessages'

function PaymentForm() {
    // const { clientSecret } = useParams();
    const elements = useElements();
    const stripe = useStripe();
    const store = useSelector(store => store)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [error, setError] = useState(null)

    const cartKeys = Object.keys(store.cart)
    let total = 0
    cartKeys.forEach(key => total += +store.products[key].price)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        // const {error: backendError, clientSecret} = async () => await axios.post(`${BASE_URL}/payment/create-payment-intent`, {
        //     amount: total * 100,
        //     paymentMehtodType: 'card',
        //     currency: 'usd'
        // }).then(r => r.data)

        // Create payment intent on the server
        const {error: backendError, clientSecret} = await fetch(`${BASE_URL}/payment/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: total * 100,
                paymentMethodType: 'card',
                currency: 'usd'
            })
        }).then(r => r.json());

        if(backendError) {
            setError(backendError.message)
            return;
        }

        //Confirm the payment on the client
        const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }
        )

        if(stripeError) {
            setError(stripeError.message)
            return;
        }
        
        const cartItems = {}
        cartKeys.forEach(key => {
            cartItems[key] = store.cart[key]
        })

        const order = {
            "customerInfo": store.customers,
            "products": cartItems
        }

        dispatch(sendOrderToApi(order))
        dispatch(addRecentOrder(order))
        dispatch(resetCart())
        navigate(`/successPage`)

        // await fetch({
        //     method: 'post',
        //     url: `${BASE_URL}/orders/`,
        //     headers: {Authorization: `Bearer ${TOKEN}`},
        //     data: {
        //         "customerInfo": store.customer,
        //         "products": cartItems
        //     }
        // }).then(function(res) {
        //     const recentOrder = {
        //         "products": store.cart, 
        //         "customerInfo": store.customers, 
        //         "order": res
        //     }
        //     dispatch(addRecentOrder(recentOrder))
        //     dispatch(resetCart())
        // }).then(function() {
        //     navigate(`/successPage`)
        // }).catch(function(res) {
        //     ('FAILED...')
        //     setError(`${res}`)
        // })
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
        {error !== null && <Modal title={error} setState={setError} backgroundColor={'red'}/>}
            <form 
                id="payment-form" 
                onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <h1>
                                Credit Card Information
                            </h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id='payButton' className='button'>
                                Pay
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default PaymentForm;