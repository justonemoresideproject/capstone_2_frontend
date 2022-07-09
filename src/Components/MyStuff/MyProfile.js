import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserProfileFromApi, changeProfileFromApi } from '../../actions/User'

/**
 * 
 * @returns User Profile
 */

function MyProfile() {
    const dispatch = useDispatch()
    const userId = useSelector(store => store.auth.userId) 
    const myProfile = useSelector(store => store.user.addresses)
    const INITIAL_STATE = myProfile
    const profileKeys = []

    if(myProfile != null && myProfile != undefined) {
        profileKeys.concat(Object.keys(myProfile))
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    useEffect(function() {
        dispatch(getUserProfileFromApi(userId))
    }, [dispatch])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeProfileFromApi())
    }

    return (
        <>
        {profileKeys.length > 0 ?
        <form>
            <ul>
                {profileKeys.map((key, index) => {
                    return (
                        <li>
                            <label 
                                className="formLabel">{key}
                            </label>
                            <input 
                                type="text" 
                                name={`${key}`} 
                                onChange={handleChange} 
                                value={formData[key]} />
                        </li>
                    )
                })}
            </ul>
            <button>Submit Changes</button>
        </form> : <h1>
            Looks like something went wrong. Have you logged in successfully?</h1>
        }
        </>
    )
}

export default MyProfile