import { ADD_CUSTOMER, ADD_RECENT_ORDER, SET_CUSTOMER, SET_CUSTOMERS, REMOVE_CUSTOMER, SET_SECRET } from './types'

import CustomerApi from '../API/CustomerApi'
const { create, remove, get, all, update } = CustomerApi

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

function updateCustomerToApi(token, customerInfo) {
    return async function(dispatch) {
        console.log(customerInfo)
        const res = await update(token, customerInfo)

        dispatch(setCustomer(res.customer))
    }
}

function removeCustomerFromApi(id) {
    return async function(dispatch) {
        const res = await remove(id)

        dispatch(removeCustomer(id))
    }
}

function addRecentOrder(order) {
    return {type: ADD_RECENT_ORDER, payload: order}
}

function addCustomer(customer) {
    return {type: ADD_CUSTOMER, payload: customer}
}

function setCustomer(customer) {
    return {type: SET_CUSTOMER, payload: customer}
}

function setCustomers(customers) {
    return {type: SET_CUSTOMERS, payload: customers}
}

function setSecret(secret) {
    return {type: SET_SECRET, payload: secret}
}

function removeCustomer(id) {
    return {type: REMOVE_CUSTOMER, payload: id}
}

export { getCustomerFromApi, addRecentOrder, getCustomersFromApi, addCustomerToApi, updateCustomerToApi, setCustomer, setSecret, removeCustomerFromApi }