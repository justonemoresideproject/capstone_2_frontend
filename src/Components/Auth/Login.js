import { React, useState } from 'react';
import { login } from '../../actions/Auth'
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch()
    const auth = useSelector(store => store.auth)

    const INITIAL_STATE = {
        username: '', password: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    if(auth.token) {
        return (
            <h1>
                You're already logged in!
            </h1> 
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
        dispatch(login(formData))
        if(auth.token){
            return <Navigate to='/' />
        }
        console.log(auth)
    }

    return (
        <>
            <h1>Login</h1>
            <form 
                className='loginForm' 
                onSubmit={handleSubmit}>
                <label 
                    htmlFor='username' 
                    className='formLabel'>
                        Username:
                </label>
                <input 
                    type='text' 
                    name='username' 
                    onChange={handleChange} 
                    value={formData.username}
                />

                <label 
                    htmlFor='password'>
                        Password
                </label>
                <input 
                    type='password' 
                    name='password' 
                    onChange={handleChange} 
                    value={formData.password} 
                />

                <button 
                    className='formSubmitButton' 
                    onClick={handleSubmit}>
                        Submit
                </button>
            </form>
        </>
    )
}

export default Login