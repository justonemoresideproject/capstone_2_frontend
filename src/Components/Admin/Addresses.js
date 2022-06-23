import { React, useState, useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'

import { getAddressesFromApi } from '../../actions/Address'
import Address from './Address'

import ItemList from '../ItemList'

function Addresses() {
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.auth.addresses)
    // const addressKeys = Object.keys(addresses)

    useEffect(function() {
        dispatch(getAddressesFromApi)
    }, [addresses])

    if(addresses == undefined) {
        return (
            <h1>
                No addresses found...
            </h1>
        )
    }

    return(
        <ItemList items={addresses} />
        
        // <table>
        //     <thead>
        //         <th>ID</th>
        //         <th>Address</th>
        //         <th>Type</th>
        //         <th>Customer</th>
        //     </thead>
        //     <tbody>
        //         {addressKeys.map(key => {
        //             return (
        //                 <Address info={addresses[key]} />
        //             )
        //         })}
        //     </tbody>
        // </table>
    )
}

export default Addresses