import { combineReducers } from "redux";

import admin from './AdminReducer'
import auth from './AuthReducer'
// import addresses from './AddressReducer'
import user from './UserReducer'
import cart from './CartReducer'
import customers from './CustomerReducer'
// import orders from './OrderReducer'
import products from './ProductReducer'
import queryReducer from './QueryReducer'
import error from './ErrorReducer'

export default combineReducers({
    admin,
    auth,
    cart,
    customers,
    products,
    user,
    queryReducer,
    error
})