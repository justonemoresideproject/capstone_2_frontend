import React, { useState, useEffect } from 'react'

import '../../ComponentCss/Profile.css'

import { useDispatch, useSelector } from 'react-redux'
import { changeProfileFromApi } from '../../../actions/User'

/**
 * Accepts a profile object and returns a table within a form that can be edited and changed
 * @param {object} profile 
 */
function EditUserProfile({profile, token}) {
    const dispatch = useDispatch()
    const INITIAL_STATE = profile

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
        dispatch(changeProfileFromApi(token, profile.id, formData))
    }

    return (
        <form className='editUserProfileForm' onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <label
                                htmlFor='username'
                                className='label'>
                                Username
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input 
                                type="text"
                                className='input'
                                name='username'
                                onChange={handleChange}
                                value={formData.username} />
                        </td>
                    </tr>
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
                                name='firstName'
                                className='input'
                                onChange={handleChange}
                                value={formData.first_name} />
                        </td>
                        <td>
                            <input
                                type='text'
                                name='firstName'
                                className='input'
                                onChange={handleChange}
                                value={formData.last_name} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                htmlFor='phone'
                                className='label'>
                                    Phone
                            </label>
                        </td>
                        <td>
                            <label
                                htmlFor='email'
                                className='label'>
                                    Email
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type='number'
                                name='phone'
                                className='input'
                                onChange={handleChange}
                                value={formData.phone} />
                        </td>
                        <td>
                            <input
                                type='email'
                                name='email'
                                className='input'
                                onChange={handleChange}
                                value={formData.email} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button className='button'>
                                Change Profile
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default EditUserProfile