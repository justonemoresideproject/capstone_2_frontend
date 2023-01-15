import axios from 'axios' 

import { SET_CUSTOMERS, SET_ORDERS, SET_ADDRESSES, RESET, SET_ADMIN_INFO } from './types'
import { setError } from './Error'
import { setOrders } from './Order'
import { BASE_URL } from '../API/apiConfig'

import OrderApi from '../API/OrderApi'
import CustomerApi from '../API/CustomerApi'
import AddressApi from '../API/AddressApi'

function getAdminInfo(token) {
    return async function(dispatch) {
        try {
            const {orders} = await OrderApi.all(token)
            const {customers} = await CustomerApi.all(token)
            const {addresses} = await AddressApi.all(token)

            dispatch(setAdminInfo({orders, customers, addresses}))
        } catch(err) {
            dispatch(setError(err))
            return err
        }
    }
}

function getAllOrders(token) {
    return async function(dispatch) {
        try {
            const res = await OrderApi.all(token)
            console.log(res)

            dispatch(setOrders(res.orders))
        } catch(err) {
            dispatch(setError(err))
            return err
        }
    }
}

function getAllCustomers() {
    return async function(dispatch) {
        try {
            const res = await CustomerApi.all()

            dispatch(SET_CUSTOMERS(res))
        } catch(err) {
            dispatch(setError(err))
            return err
        }
    }
}

function getAllAddresses() {
    return async function(dispatch) {
        try {
            const res = await AddressApi.all()

            dispatch(SET_ADDRESSES(res))
        } catch(err) {
            dispatch(setError(err))
            return err
        }
    }
}

function setAdminInfo(adminInfo) {
    return { type: SET_ADMIN_INFO, payload: adminInfo }
}

export { getAdminInfo, getAllAddresses, getAllCustomers, getAllOrders }