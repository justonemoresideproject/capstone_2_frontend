import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Customer from './Customer'

import { getCustomersFromApi, updateCustomerToApi } from '../../actions/Customer'
import ItemList from '../Helpers/HelperComponents/ItemList'

function Customers() {
    const dispatch = useDispatch()
    const customers = useSelector(store => store.admin.customers)

    useEffect(function() {
        dispatch(getCustomersFromApi)
    }, [customers])

    if(customers == undefined) {
        return (
            <h1> ...No customers here </h1>
        )
    }

    return (
        <ItemList items={customers} edit={true} action={updateCustomerToApi} />
    )
}

export default Customers