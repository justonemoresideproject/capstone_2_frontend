import { React, useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'

import { getAddressesFromApi } from '../../actions/Address'
import Address from './Address'

function Addresses() {
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.addresses)
    const addressKeys = Object.keys(addresses)

    useState(function() {
        dispatch(getAddressesFromApi)
    }, [addresses])

    if(addressKeys.length < 1) {
        return (
            <h1>
                No orders found...
            </h1>
        )
    }

    return(
        <table>
            <thead>
                <th>ID</th>
                <th>Address</th>
                <th>Type</th>
                <th>Customer</th>
            </thead>
            <tbody>
                {addressKeys.map(key => {
                    return (
                        <Address info={addresses[key]} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default Addresses