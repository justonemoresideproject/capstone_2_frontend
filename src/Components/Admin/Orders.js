import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllOrders, updateOrder } from '../../actions/Admin'
import Order from './Order'
import ItemList from '../Helpers/HelperComponents/ItemList'
import { updateOrderToApi } from '../../actions/Order'

/** Orders function displays all orders made on the application
 * 
 * Authorization: Admin
 */

function Orders() {
    const orders = useSelector(store => store.admin.orders)

    if(orders == undefined || orders.message != undefined) {
        return (
            <h1>Looks like you don't have any orders yet...</h1>
        )
    }

    return (
        <div className='baseElement'>
            <ItemList items={orders} edit={true} action={updateOrderToApi}/>
        </div>
    )
}

export default Orders