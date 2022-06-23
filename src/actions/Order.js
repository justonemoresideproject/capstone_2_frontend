import { ADD_ORDER, SET_ORDERS, REMOVE_ORDER } from './types'

const { create, remove, get, all } = require('../API/OrderApi')

function getOrderFromApi(id) {
    return async function(dispatch) {
        const res = await get(id)

        dispatch(addOrder(res.order))
    }
}

function getOrdersFromApi() {
    return async function(dispatch) {
        const res = await all()
        dispatch(setOrders(res.orders))
    }
}

function addOrder(order) {
    return {type: ADD_ORDER, payload: order}
}

function setOrders(orders) {
    return {type: SET_ORDERS, payload: orders}
}

function removeOrder(id) {
    return { type: REMOVE_ORDER, payload: id}
}

export { getOrderFromApi, getOrdersFromApi, addOrder, removeOrder}