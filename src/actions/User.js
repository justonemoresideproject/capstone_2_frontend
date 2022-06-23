import { SET_FIRST_NAME, SET_LAST_NAME, SET_FULLNAME, SET_IS_ADMIN, SET_USER_ADDRESSES, SET_AUTH_INFO, SET_USER_ID, SET_USERNAME, SET_USER_INFO, SET_PHONE_NUM, SET_EMAIL, RESET_USER, SET_USER_ORDERS } from './types'
import { addOrder } from './Order'
import UserApi from '../API/UserApi'
// import { getOrders, getProfile, getAddresses, editProfile } from '../API/UserApi'

function getUserOrdersFromApi(id) {
    return async function(dispatch) {
        const res = await UserApi.getOrders(id)

        dispatch(setUserOrders)
        
        return res
    }
}

function getUserAddressesFromApi(id) {
    return async function(dispatch) {
        const res = await UserApi.getAddresses(id)

        dispatch(setUserAddresses(res))
    }
}

function getUserProfileFromApi(id) {
    return async function(dispatch) {
        const res = await UserApi.getProfile(id)

        dispatch(setUserInfo(res.user))

        return res
    }
}

function changeProfileFromApi(id, info) {
    return async function(dispatch) {
        const res = await UserApi.editProfile(id, info)

        dispatch(setUserInfo(res))
        
        return res
    }
}

function setUserInfo(info) {
    return { type: SET_USER_INFO, payload: info }
}

function setUserId(id) {
    return { type: SET_USER_ID, payload: id }
}

function setIsAdmin(isAdmin) {
    return { type: SET_IS_ADMIN, payload: isAdmin }
}

function setAuthInfo(authInfo) {
    return { type: SET_AUTH_INFO, payload: authInfo }
}

function setUserAddresses(addresses) {
    return { type: SET_USER_ADDRESSES, payload: addresses }
}

function setUsername(username) {
    return { type: SET_USERNAME, payload: username }
}

function setFirstName(firstName) {
    return { type: SET_FIRST_NAME, payload: firstName }
}

function setLastName(lastName) {
    return { type: SET_LAST_NAME, payload: lastName }
}

function setFullName(fullName) {
    return { type: SET_FULLNAME, payload: fullName}
}

function setPhoneNumber(phoneNumber) {
    return { type: SET_PHONE_NUM, payload: phoneNumber }
}

function setEmail(email) {
    return { type: SET_EMAIL, payload: email }
}

function setUserOrders(orders) {
    return { type: SET_USER_ORDERS, payload: orders}
}

function resetUser() {
    return { type: RESET_USER }
}

export { 
    resetUser, setUserInfo, setUserOrders, setUserId, setIsAdmin, setAuthInfo, setPhoneNumber, setEmail, setFirstName, setLastName, setFullName, getUserOrdersFromApi, getUserProfileFromApi,
    getUserAddressesFromApi,
    changeProfileFromApi
}