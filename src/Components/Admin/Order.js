import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getCustomerFromApi } from '../../actions/Customer'
import { getAddressFromApi } from '../../actions/Address'

function Order(order) {
    const dispatch = useDispatch()
    const orderKeys = Object.keys(order)
    const customers = useSelector(store => store.customers)
    const addresses = useSelector(store => store.addresses)

    useEffect(function() {
        dispatch(getCustomerFromApi(order.customerId))
        dispatch(getAddressFromApi(order.addressId))
    }, [customers, addresses])

    return (
        <tr>
            {orderKeys.map(key => {
                if(key == "customerId"){
                    return (
                        <td>
                            {customers[order[key]].firstName} {customers[order[key]].lastName}
                        </td>
                    )
                }
                if(key == "addressId"){
                    return (
                        <td>
                            {addresses[order[key]].address}
                        </td>
                    )
                }
                return (
                    <td>=
                        {order[key]}
                    </td>
                )
            })}
        </tr>
    )
}

export default Order