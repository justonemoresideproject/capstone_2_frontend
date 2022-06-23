import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getOrdersFromApi } from '../../actions/Order'
import Order from './Order'
import ItemList from '../ItemList'

/** Orders function displays all orders made on the application
 * 
 * Authorization: Admin
 */

function Orders() {
    const orders = useSelector(state => state.auth.orders)
    const dispatch = useDispatch()

    useEffect(function() {
        dispatch(getOrdersFromApi)
    }, [orders])

    if(orders == undefined) {
        return (
            <h1>Looks like you don't have any orders yet...</h1>
        )
    }

    return (
        <ItemList items={orders} />
        // <table>
        //     <thead>
        //         <td></td>
        //     </thead>
        //     <tbody>
        //         {orders.map(order => {
        //             return (
        //                 <Order order={order}/>
        //             )
        //         })}
        //     </tbody>
        // </table>
    )
}

export default Orders