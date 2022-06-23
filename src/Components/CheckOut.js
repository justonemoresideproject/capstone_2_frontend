import './ComponentCss/Checkout.css'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

import Product from './Product/Product'
import { setTotal } from '../actions/Cart'

const { TOKEN, BASE_URL } = require('../API/apiConfig.js')

function CheckOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useSelector(store => store);
    const products = store.products;
    const cartItems = store.cart;
    const cartKeys = [];

    console.log(products);

    const proceedToPayment = (total) => {
        dispatch(setTotal(total))
        navigate('/customerInfo')
    }

    if(cartItems != null && cartItems != undefined) {
        Object.keys(cartItems).forEach(key => {
            cartKeys.push(key)
        })
    };

    console.log(cartKeys);

    const total = [];

    return (
        <>
        <h1>Checkout</h1>
        {cartKeys.length > 0 ?
            <table 
                style={{
                    "width": "100vw",
                    "height": "100%"
                }}
                className='checkoutTable'>
                <thead>
                        <td>
                            <th>Item</th>
                        </td>
                        <td>
                            <th>Quantity</th>
                        </td>
                        <td>
                            <th>Price Per</th>
                        </td>
                        <td>
                            <th>Total</th>
                        </td>
                </thead>
                <tbody>
                    {cartKeys.map((key, index) => {
                        total.push(products[key].price * cartItems[key])
                        return (
                            <tr className='checkoutRow' key={`checkoutRow-${index}`}>
                                <Product product={products[key]}  />
                                <td>
                                    {cartItems[key]}
                                </td>
                                <td>
                                    {products[key].price}
                                </td>
                                <td>{products[key].price * cartItems[key]}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            Grand Total: {total.reduce((prev, curr) => {
                                return ( prev + curr)
                            })}
                        </td>
                        <td>
                            <button 
                                className='button' 
                                onClick={() => proceedToPayment(total)}>
                                    Purchase
                            </button>
                        </td>
                    </tr>

                </tfoot>
            </table> : <h1>No Items in your cart :(</h1> }
        </>
    )
}

export default CheckOut