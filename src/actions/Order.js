import { ADD_ORDER, REMOVE_ORDER } from './types'

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

        res.orders.forEach(order => {
            addOrder(order)
        })
    }
}

function addOrder(order) {
    return {type: ADD_ORDER, payload: order}
}

function removeOrder(id) {
    return { type: REMOVE_ORDER, payload: id}
}

export { getOrderFromApi, getOrdersFromApi, addOrder, removeOrder}