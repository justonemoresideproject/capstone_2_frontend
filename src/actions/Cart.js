import { SET_CART_ITEM, REMOVE_CART_ITEM, SET_TOTAL, RESET_CART } from './types'

function addItemToCart(item) {
    return { type: SET_CART_ITEM, payload: item }
}

function setTotal(total) {
    return { type: SET_TOTAL, payload: total}
}

function removeItemToCart(id) {
    return { type: REMOVE_CART_ITEM, payload: id }
}

function resetCart() {
    return { type: RESET_CART }
}

export { addItemToCart, removeItemToCart, setTotal, resetCart }