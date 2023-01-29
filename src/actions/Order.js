import { ADD_ORDER, SET_ORDERS, SET_ORDER, REMOVE_ORDER } from './types'

import OrderApi from '../API/OrderApi'

function getOrderFromApi(id) {
    return async function(dispatch) {
        const res = await OrderApi.get(id)
        dispatch(addOrder(res.order))
    }
}

function getOrdersFromApi() {
    return async function(dispatch) {
        const res = await OrderApi.all()
        dispatch(setOrders(res.orders))
    }
}

function sendOrderToApi(orderInfo) {
    return async function(dispatch) {
        const res = await OrderApi.create(orderInfo)
        dispatch(addOrder(res.order))
    }
}

function updateOrderToApi(token, orderInfo) {
    return async function(dispatch) {
        const res = await OrderApi.update(token, orderInfo)

        dispatch(setOrder(res.order))
    }
}

function addOrder(order) {
    return {type: ADD_ORDER, payload: order}
}

function setOrders(orders) {
    return {type: SET_ORDERS, payload: orders}
}

function setOrder(order) {
    return {type: SET_ORDER, payload: order}
}

function removeOrder(id) {
    return { type: REMOVE_ORDER, payload: id}
}

export { sendOrderToApi, getOrderFromApi, getOrdersFromApi, updateOrderToApi, addOrder, setOrders, removeOrder}