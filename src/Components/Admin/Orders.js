import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllOrders } from '../../actions/Admin'
import Order from './Order'
import ItemList from '../ItemList'

/** Orders function displays all orders made on the application
 * 
 * Authorization: Admin
 */

function Orders() {
    const orders = useSelector(store => store.admin.orders.orders)
    const token = useSelector(store => store.auth.token)
    const dispatch = useDispatch()

    if(orders == undefined || orders.message != undefined) {
        return (
            <h1>Looks like you don't have any orders yet...</h1>
        )
    }

    return (
        <ItemList items={orders} />
    )
}

export default Orders