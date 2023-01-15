import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ItemList from '../ItemList'
import { getUserOrdersFromApi } from '../../actions/User'

/**
 * 
 * @returns List of user's orders
 */


function MyOrders() {
    const dispatch = useDispatch()
    const userId = useSelector(store => store.auth.userId)
    const myOrders = useSelector(store => store.user.orders)

    useEffect(function() {
        dispatch(getUserOrdersFromApi(userId))
    }, [dispatch])

    if(myOrders == undefined) {
        return (
            <h1>
                Hmmmm... looks like you don't have any orders yet
            </h1> 
        )
    }

    return (
        <ItemList items={myOrders} />
    )
}

export default MyOrders