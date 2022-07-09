import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import ItemList from '../ItemList'
import { getUserAddressesFromApi } from '../../actions/User'

/**
 * 
 * @returns List of user's addresses
 */

function MyAddresses() {
    const dispatch = useDispatch();
    const userId = useSelector(store => store.auth.userId)
    const myAddresses = useSelector(store => store.user.orders) 

    useEffect(function() {
        dispatch(getUserAddressesFromApi(userId))
    }, [dispatch])

    if(Object.keys(myAddresses).length < 1 || myAddresses == undefined) {
        return (
            <h1>
                Hmmmm... looks like you don't have any addresses yet
            </h1> 
        )
    }

    return (
        <ItemList items={myAddresses} />
    )
}

export default MyAddresses