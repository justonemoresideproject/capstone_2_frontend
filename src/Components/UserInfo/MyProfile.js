import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getUserProfileFromApi, changeProfileFromApi } from '../../actions/User'
import EditUserProfile from '../Helpers/HelperComponents/EditUserProfile'

/**
 * 
 * @returns User Profile
 */

function MyProfile() {
    const dispatch = useDispatch()
    const {token, userId} = useSelector(store => store.auth) 
    const myProfile = useSelector(store => store.user.myProfile)
    
    useEffect(function() {
        dispatch(getUserProfileFromApi(token, userId))
    }, [dispatch])

    return (
        <>
            {myProfile === undefined || Object.keys(myProfile).length < 1 ? 
            <h1>
                Looks like something went wrong. Have you logged in successfully?
            </h1> : 
            <EditUserProfile profile={myProfile} token={token}/>
            }
        </>
    )
}

export default MyProfile