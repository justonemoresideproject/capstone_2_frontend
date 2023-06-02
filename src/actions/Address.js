import { ADD_ADDRESS, REMOVE_ADDRESS } from './types'

import AddressApi from '../API/AddressApi'

function getAddressFromApi(token, id) {
    return async function(dispatch) {
        const res = await AddressApi.get(id)

        dispatch(addAddress(res.address))
    }
}

function getAddressesFromApi(token) {
    return async function(dispatch) {
        const res = await AddressApi.all(token)

        res.addresses.forEach(address => {
            dispatch(addAddress(address))
        })
    }
}

/**
 * Accepts an addressInfo object and sends the information to the backend to be added to the database.
 * 
 * @param {object} addressInfo 
 * addressInfo object must contain the following:
 * -country
 * -state
 * -city
 * -address
 * -address type
 * -postal code
 * -customer Id (must be valid)
 * 
 * @returns res.address to dispatch
 */

function addAddressToApi(addressInfo) {
    return async function(dispatch) {
        const res = await AddressApi.create(addressInfo)

        dispatch(addAddress(res.address))
    }
} 

function updateAddressToApi(token, addressInfo) {
    return async function(dispatch) {
        const res = await AddressApi.update(token, addressInfo, addressInfo.id)
    
        dispatch(addAddress(res.addressInfo))
    }
}

function addAddress(addressInfo) {
    return {type: ADD_ADDRESS, payload: addressInfo}
}

function removeAddress(id) {
    return {type: REMOVE_ADDRESS, payload: id}
}

export { getAddressFromApi, getAddressesFromApi, addAddressToApi, updateAddressToApi, addAddress, removeAddress }