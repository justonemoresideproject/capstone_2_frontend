import { SET_FIRST_NAME, SET_LAST_NAME, SET_FULLNAME, SET_IS_ADMIN, SET_AUTH_INFO
    , SET_USER_ID, SET_USERNAME, SET_USER_INFO, SET_PHONE_NUM, SET_EMAIL, RESET_USER } from './types'
import { addOrder } from './Order'
import UserApi from '../API/UserApi'
// import { getOrders, getProfile, getAddresses, editProfile } from '../API/UserApi'

function getUserOrdersFromApi(id) {
    return async function(dispatch) {
        const res = await UserApi.getOrders(id)

        if(res.orders) {
            res.orders.forEach(order => {
                dispatch(addOrder(order))
            })
        }
        return res
    }
}

// function getAddressesFromApi(id) {
//     return async function(dispatch) {
//         const res = getAddresses(id)

//         if(res.addresses.length > 1) {
//             res.addresses.forEach(address => {

//             })
//         }
//     }
// }

function getUserProfileFromApi(id) {
    return async function(dispatch) {
        const res = await UserApi.getProfile(id)

        if(res.user) {
            dispatch(setUserInfo(res.user))
        }
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

function resetUser() {
    return { type: RESET_USER }
}

export { 
    resetUser, setUserInfo, setUserId, setIsAdmin, setAuthInfo, setPhoneNumber, setEmail, setFirstName, setLastName, setFullName 
}