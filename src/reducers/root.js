import { combineReducers } from "redux";

import auth from './AuthReducer'
// import addresses from './AddressReducer'
import user from './UserReducer'
import cart from './CartReducer'
import customers from './CustomerReducer'
// import orders from './OrderReducer'
import products from './ProductReducer'
// import query from './QueryReducer'
import error from './ErrorReducer'

export default combineReducers({
    auth,
    cart,
    customers,
    products,
    user,
    error
})