import './ComponentCss/CustomerInfo.css'

import React, { useEffect, useState } from 'react'

import { setCustomer } from '../actions/Customer'
import { isValidEmail, isValidPhoneNumber } from './Helpers/TextFunctions'
import { BASE_URL } from '../API/apiConfig'

import CustomError from './CustomError'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CustomerInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const store = useSelector(store => store);
    const cart = store.cart;

    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        country: '',
        addressType: 'home',
        phone: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [error, setError] = useState([])
    const [opacity, setOpacity] = useState('errorFadeIn')

    useEffect(function() {
        if(error.length >= 0) {
            const timeOut = setTimeout(() => {
                setOpacity('errorFadeOut')
            }, 5000)
    
            return () => clearInterval(timeOut)
        }
    }, [error])

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

        if(confirmValidInformation()) {
            dispatch(setCustomer(formData));
            navigate('/paymentForm')
        }
    }

    const confirmValidInformation = () => {
        const errors = []
        if(formData.firstName.length < 1) {
            errors.push('First Name must be at least 1 character long')
        }
        if(formData.lastName.length < 1) {
            errors.push('Last Name must be at least 1 character long')
        }
        if(!isValidEmail(formData.email)) {
            errors.push('Invalid Email Address')
        }
        
        if(errors.length !== 0) {
            // while(error.length > 0) {
            //     error.pop()
            // }
            // errors.forEach(err => error.push(err))
            setError(errors)
            console.log(errors)
            console.log(error)
            setOpacity('errorFadeIn')
            return false
        }
    }

    return (
        <form className='baseElement' id='customerInfoForm' onSubmit={handleSubmit}>
            <table>
                <tbody id='personalInfoTbody'>
                    <tr>
                        <td>
                            <label 
                                htmlFor='firstName' 
                                className='label'>
                                First Name
                            </label>
                        </td>
                        <td>
                            <label 
                                htmlFor='lastName' 
                                className='label'>
                                Last Name
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type='text' 
                                className='input' 
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange} />
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
                </tbody>
                <tbody id='contactInfoTbody'>
                    <tr>
                        <td>
                            <label 
                                htmlFor='email' 
                                className='label'>
                                    Email
                            </label>
                        </td>
                        <td>
                            <label 
                                htmlFor='phone' 
                                className='label'>
                                    Phone
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type='text' 
                                className='input' 
                                name='email' 
                                value={formData.email} 
                                onChange={handleChange} />
                        </td>
                        <td>
                            <input 
                                type='text' 
                                className='input' 
                                name='phone' 
                                value={formData.phone} 
                                onChange={handleChange}
                                error={formData.phone ? isValidPhoneNumber(formData.phone) ? '' : 'Invalid Phone Number' : 'Phone Number Required'} />
                        </td>
                    </tr>
                </tbody>
                <tbody id='addressInfoTbody'>
                    <tr>
                        <td>
                            <label
                                htmlFor='country' 
                                className='label'>
                                Country
                            </label>
                        </td>
                        <td>
                            <label className='label'>
                                State
                            </label>
                        </td>
                        <td>
                            <label className='label'>
                                City
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type='text'
                                className='input'
                                name='country'
                                onChange={handleChange}
                                value={formData.country} />
                        </td>
                        <td>
                            <input
                                type='text'
                                className='input'
                                name='state'
                                onChange={handleChange}
                                value={formData.state} />
                        </td>
                        <td>
                            <input
                                type='text'
                                className='input'
                                name='city'
                                onChange={handleChange}
                                value={formData.city} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>
                                Address
                            </label>
                        </td>
                        <td>
                            <label 
                                htmlFor='addressType' 
                                className='label'>
                                    Address Type
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type='text' 
                                className='input'
                                name="street"
                                onChange={handleChange}
                                value={formData.street} />
                        </td>
                        <td>
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
                        </td>
                    </tr>
                </tbody>
                <tbody id='submitButtonTbody'>
                    <tr>
                        <td id='noBorderTd' colSpan={2}>
                            <button 
                                style={{
                                    "width": "30%"
                                }}
                                className='button'
                                id='proceedButton'>
                                    Proceed To Payment
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ul id='errorUl' className={opacity}>
                {/* <CustomError errors={error} opacity={opacity} tag='li' /> */}
                {error.map(err => {
                    return <li>{err}</li>
                })}
            </ul>
        </form>
    )
}

export default CustomerInfo