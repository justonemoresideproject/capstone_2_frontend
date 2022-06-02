import { ADD_CUSTOMER, REMOVE_CUSTOMER } from './types'

const { create, remove, get, all } = require('../API/CustomerApi')

function getCustomerFromApi(id) {
    return async function(dispatch) {
        const res = await get(id)

        dispatch(addCustomer(res.customer))
    }
}

function getCustomersFromApi() {
    return async function(dispatch) {
        const res = await all()

        res.customers.forEach(customer => {
            dispatch(addCustomer(customer))
        })
    }
}

function addCustomerToApi(customerInfo) {
    return async function(dispatch) {
        const res = await create(customerInfo)

        dispatch(addCustomer(customerInfo))
    }
}

function removeCustomerFromApi(id) {
    return async function(dispatch) {
        const res = await remove(id)

        dispatch(removeCustomer(id))
    }
}

function addCustomer(customer) {
    return {type: ADD_CUSTOMER, payload: customer}
}

function removeCustomer(id) {
    return {type: REMOVE_CUSTOMER, payload: id}
}

export { getCustomerFromApi, getCustomersFromApi, addCustomerToApi, removeCustomerFromApi }