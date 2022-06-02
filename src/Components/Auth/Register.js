import { React, useState } from 'react';
import AuthApi from '../../API/AuthApi';
import { Navigate } from 'react-router-dom';

function Register() {
    const INITIAL_STATE = {}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = AuthApi.register(formData)
        if(res.token){
            return <Navigate to='/' />
        }
        console.log(res)
    }

    return (
        <>
            <h1>Register</h1>
            <form>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' onChange={handleChange} value={formData.username} />

                <label htmlFor='firstName'>First Name:</label>
                <input type='text' name='firstName' onChange={handleChange} value={formData.firstName} />

                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' name='lastName' onChange={handleChange} value={formData.lastName} />

                <label htmlFor='email'>Email:</label>
                <input type='text' name='email' onChange={handleChange} value={formData.email} />

                <label htmlFor='phone'>Phone:</label>
                <input type='number' name='phone' onChange={handleChange} value={formData.phone} />

                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' onChange={handleChange} value={formData.password} />

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Register