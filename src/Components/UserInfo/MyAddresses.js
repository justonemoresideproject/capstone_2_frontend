import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import ItemList from '../ItemList'
import { getUserAddressesFromApi } from '../../actions/User'
import AddAddress from './AddAddress';

/**
 * 
 * @returns List of user's addresses
 */

function MyAddresses() {
    const dispatch = useDispatch();
    const userId = useSelector(store => store.auth.userId)
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
        dispatch(getUserAddressesFromApi(userId))
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
        <div id='myAddressesDiv' className='baseElement'>
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