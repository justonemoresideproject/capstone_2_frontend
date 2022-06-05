import { ADD_ADDRESS, REMOVE_ADDRESS } from './types'

import AddressApi from '../API/AddressApi'

function getAddressFromApi(id) {
    return async function(dispatch) {
        const res = await AddressApi.get(id)

        dispatch(addAddress(res.address))
    }
}

function getAddressesFromApi() {
    return async function(dispatch) {
        const res = await AddressApi.all()

        res.addresses.forEach(address => {
            dispatch(addAddress(address))
        })
    }
}

function addAddress(addressInfo) {
    return {type: ADD_ADDRESS, payload: addressInfo}
}

function removeAddress(id) {
    return {type: REMOVE_ADDRESS, payload: id}
}

export { getAddressFromApi, getAddressesFromApi, addAddress, removeAddress }