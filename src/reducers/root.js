import { combineReducers } from "redux";

import auth from './AuthReducer'
import cart from './CartReducer'
import customers from './CustomerReducer'
import orders from './OrderReducer'
import products from './ProductReducer'

export default combineReducers({
    auth,
    cart,
    customers,
    orders,
    products
})