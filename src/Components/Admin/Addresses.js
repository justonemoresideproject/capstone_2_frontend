import { React, useState, useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'

import { getAddressesFromApi, updateAddressToApi } from '../../actions/Address'

import ItemList from '../Helpers/HelperComponents/ItemList'

function Addresses() {
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.admin.addresses)

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
        <div className='baseElement'>
            <ItemList items={addresses} edit={true} action={updateAddressToApi} />
        </div>
    )
}

export default Addresses