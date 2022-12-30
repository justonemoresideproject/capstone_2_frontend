import '../ComponentCss/Auth.css'

import { React, useState, useEffect } from 'react';
import { login, resetError } from '../../actions/Auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector(store => store.auth)
    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const [error, setError] = useState('')
    const [opacity, setOpacity] = useState('errorFadeIn')

    useEffect(function() {
        if(auth.error && auth.error != undefined) {
            setError(auth.error.response.data.error.message)
            setOpacity('errorFadeIn')
            dispatch(resetError())
        }
        if(auth.token) navigate('/')

        const timeOut = setTimeout(() => {
            setOpacity('errorFadeOut')
        }, 300)

        return () => clearInterval(timeOut)

    }, [auth])

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
            dispatch(login(formData))
        } catch(err) {
            console.log(err)
            setError(err)
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form 
                className='loginForm' 
                onSubmit={handleSubmit}>
                <table style={{
                    "marginLeft": "auto",
                    "marginRight": "auto"
                }}>
                    <tbody align="center">
                        <tr>
                            <td>
                                <label 
                                    htmlFor='username' 
                                    className='label'>
                                        Username:
                                </label>
                            </td>
                            <td>
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
                            <td>
                                <label 
                                    htmlFor='password'
                                    className='label'>
                                        Password:
                                </label>
                            </td>
                            <td>
                                <input 
                                    type='password' 
                                    className='input'
                                    name='password' 
                                    onChange={handleChange} 
                                    value={formData.password} 
                                />
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
                            <td>
                                <div className={opacity}>
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

export default Login