import '../ComponentCss/Auth.css'

import { React, useState, useEffect } from 'react';
import { register } from '../../actions/Auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector(store => store.auth)

    const INITIAL_STATE = {
        username: '', 
        password: '', 
        firstName: '', 
        lastName: '',
        email: '', 
        phone: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [error, setError] = useState('')

    useEffect(function() {
        // if(auth.error != undefined) setError(auth.error.response.data.error.message)
        if(auth.token) navigate('/')
    }, [auth])

    if(auth.token) {
        return (
            <h1>You're already logged in!</h1> 
        )
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(register(formData))
        } catch(err) {
            setError(err)
        }
    }

    if(auth.token) {
        return (
            <h1>You're already logged in!</h1>
        )
    }

    return (
        <>
            <h1>Register</h1>
            <form className='authForm'>
                <table>
                    <tbody align="center">
                        <tr>
                            <td className='labelTd'>
                                <label 
                                    className='label'
                                    htmlFor='username'>
                                        Username:
                                </label>
                            </td>
                            <td className='authInputContainer'>
                                <input 
                                    type='text' 
                                    className='input'
                                    name='username' 
                                    onChange={handleChange} 
                                    value={formData.username} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='labelTd'>
                                <label 
                                    className='label'
                                    htmlFor='firstName'>
                                        First Name:
                                </label>
                            </td>
                            <td className='authInputContainer'>
                                <input 
                                    type='text' 
                                    className='input'
                                    name='firstName' 
                                    onChange={handleChange} 
                                    value={formData.firstName} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='labelTd'>
                                <label 
                                    className='label'
                                    htmlFor='lastName'>
                                        Last Name:
                                </label>
                            </td>
                            <td className='authInputContainer'>
                                <input 
                                    className='input'
                                    type='text' 
                                    name='lastName' 
                                    onChange={handleChange} 
                                    value={formData.lastName} />
                            </td>
                        </tr>
                        <tr>
                            <td className='labelTd'>
                                <label 
                                    className='label'
                                    htmlFor='email'>
                                        Email:
                                </label>
                            </td>
                            <td className='authInputContainer'>
                                <input 
                                    className='input'
                                    type='text' 
                                    name='email' 
                                    onChange={handleChange} 
                                    value={formData.email} />
                            </td>
                        </tr>
                        <tr>
                            <td className='labelTd'>
                                <label 
                                    className='label'
                                    htmlFor='phone'>
                                        Phone:
                                </label>
                            </td>
                            <td className='authInputContainer'>
                                <input 
                                    className='input'
                                    type='number' 
                                    name='phone' 
                                    onChange={handleChange} 
                                    value={formData.phone} />
                            </td>
                        </tr>
                        <tr>
                            <td className='labelTd'>
                                <label 
                                    className='label'
                                    htmlFor='password'>
                                        Password:
                                </label>
                            </td>
                            <td className='authInputContainer'>
                                <input 
                                    className='input'
                                    type='password' 
                                    name='password' 
                                    onChange={handleChange} 
                                    value={formData.password} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button 
                                    className='button'
                                    onClick={handleSubmit}>
                                        Submit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className='error'>
                                    {`${error}`}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default Register