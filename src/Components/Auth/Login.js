import { React, useState } from 'react';
import { login } from '../../actions/Auth'
import { Navigate } from 'react-router-dom';

function Login() {
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
        let res = login({formData})
        if(res.token){
            return <Navigate to='/' />
        }
        console.log(res)
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' onChange={handleChange} value={formData.username}/>

                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={handleChange} value={formData.password} />

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Login