import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getOrdersFromApi } from '../../actions/Order'
import Order from './Order'

/** Orders function displays all orders made on the application
 * 
 * Authorization: Admin
 */

function Orders() {
    const orders = useSelector(state => state.orders)
    const orderKeys = Object.keys(orders)
    const dispatch = useDispatch()

    useEffect(function() {
        dispatch(getOrdersFromApi)
    }, [orders])

    console.log(orders)
    console.log(orderKeys)

    if(orderKeys.length < 1) {
        return (
            <h1>Looks like you don't have any orders yet...</h1>
        )
    }

    return (
        <table>
            <thead>
                <td></td>
            </thead>
            <tbody>
                {orders.map(order => {
                    return (
                        <Order order={order}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Orders