import './ComponentCss/CustomerInfo.css'

import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setCustomer } from '../actions/Customer'

import { BASE_URL } from '../API/apiConfig'


function CustomerInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const store = useSelector(store => store);
    const cart = store.cart;

    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        addressType: '',
        phone: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        })) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let total = 0;
        Object.keys(cart).forEach(key => {
            total += +store.products[key].price
        })
        console.log(total)

        // const createPayment = async () => {
        //     const {error: backendError, clientSecret} = await fetch(`${BASE_URL}/payment/create-payment-intent`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             amount: total,
        //             paymentMethodType: 'card',
        //             currency: 'usd'
        //         })
        //     }).then(r => r.json());
    
        //     if(backendError) {
        //         console.log(backendError)
        //         setError(`${backendError.message}`)
        //         return;
        //     }
        //     navigate(`/paymentForm/${clientSecret}`)
        // }

        dispatch(setCustomer(formData));
        navigate('/paymentForm')
    }

    return (
        <form className='customerInfoForm' onSubmit={handleSubmit}>
            <table>
                <tbody className='formTBody'>
                    <tr className='customerInfoRow'>
                        <td>
                            <label 
                                htmlFor='firstName' 
                                className='label'>
                                First Name
                            </label>
                        </td>
                        <td>
                            <input 
                                type='text' 
                                className='input' 
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className='customerInfoRow'>
                        <td>
                            <label 
                                htmlFor='lastName' 
                                className='label'>
                                Last Name
                            </label>
                        </td>
                        <td>
                            <input 
                                type='text' 
                                className='input' 
                                name='lastName' 
                                value={formData.lastName} 
                                onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className='customerInfoRow'>
                        <td>
                            <label 
                                htmlFor='email' 
                                className='label'>
                                Email
                            </label>
                        </td>
                        <td>
                            <input 
                                type='text' 
                                className='input' 
                                name='email' 
                                value={formData.email} 
                                onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className='customerInfoRow'>
                        <td>
                            <label 
                                htmlFor='phone' 
                                className='label'>
                                    Phone
                            </label>
                        </td>
                        <td>
                            <input 
                                type='text' 
                                className='input' 
                                name='phone' 
                                value={formData.phone} 
                                onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>
                                Address
                            </label>
                        </td>
                        <td>
                            <input 
                            type='text' 
                            className='input'
                            name="address"
                            onChange={handleChange}
                            value={formData.address} />
                        </td>
                    </tr>
                    <tr id='addressTypeRow' className='customerInfoRow'>
                        <td>
                            <div>
                                <label 
                                    htmlFor='addressType' 
                                    className='label'>
                                        Address Type
                                </label>
                            </div>
                            {/* <div>
                                <select>
                                    <option value="home">
                                        Home
                                    </option>
                                    <option value="apartment">
                                        Apartment
                                    </option>
                                    <option value="Business">
                                        Business
                                    </option>
                                </select>
                            </div> */}
                        </td>
                        <td>
                            <div>
                                <select 
                                    className="selectInput"
                                    id="addressType"
                                    name="addressType"
                                    onChange={handleChange}>
                                    <option value="home">
                                        Home
                                    </option>
                                    <option value="apartment">
                                        Apartment
                                    </option>
                                    <option value="Business">
                                        Business
                                    </option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr className='formSubmitButtonTr'>
                        <div className='submitButtonWrapper'>
                            <button 
                                style={{"width": "100%"}}
                                className='button'>
                                    Proceed To Payment
                            </button>
                        </div>
                    </tr>
                </tbody>
            </table>
            <div>{error}</div>
        </form>
    )
}

export default CustomerInfo