import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Customer from './Customer'

import { getCustomersFromApi } from '../../actions/Customer'
import ItemList from '../ItemList'

function Customers() {
    const dispatch = useDispatch()
    const customers = useSelector(store => store.auth.customers)
    // const customerKeys = Object.keys(customers)

    useEffect(function() {
        dispatch(getCustomersFromApi)
    }, [customers])

    if(customers == undefined) {
        return (
            <h1> ...No customers here </h1>
        )
    }

    return (
        <ItemList items={customers} />
        // <table>
        //     <thead>
        //         <th>ID</th>
        //         <th>Created At</th>
        //         <th>First Name</th>
        //         <th>Last Name</th>
        //         <th>Email</th>
        //         <th>Phone</th>
        //     </thead>
        //     <tbody>
        //         {customerKeys.map(customer => {
        //             return ( <Customer customer={customer}/> )
        //         })}
        //     </tbody>
        // </table>
    )
}

export default Customers