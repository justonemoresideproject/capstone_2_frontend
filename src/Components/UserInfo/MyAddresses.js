import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import ItemList from '../Helpers/HelperComponents/ItemList'
import { getUserAddressesFromApi } from '../../actions/User'
import AddAddress from '../Helpers/HelperComponents/AddAddress';

/**
 * 
 * @returns List of user's addresses
 */

function MyAddresses() {
    const dispatch = useDispatch();
    const {userId, token} = useSelector(store => store.auth)
    const myAddresses = useSelector(store => store.user.addresses) 

    const INITIAL_STATE = {
        country: '',
        state: '',
        city: '',
        address: '',
        addressType: 'home'
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    useEffect(function() {
        dispatch(getUserAddressesFromApi(token, userId))
    }, [dispatch])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        })) 
    }

    const addAddress = (e) => {
        e.preventDefault();
        alert('Added')
    }

    return (
        <div id='myAddresses' className='baseElement'>
            <form onSubmit={addAddress}>
                <AddAddress formData={formData} handleChange={handleChange} />
            </form>
            {myAddresses == undefined || Object.keys(myAddresses).length < 1 ? <h1>
                Hmmmm... looks like you don't have any addresses yet
            </h1> : <ItemList items={myAddresses} /> }
        </div>
    )
}

export default MyAddresses