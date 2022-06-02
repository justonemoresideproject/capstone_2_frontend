import { SET_FIRST_NAME, SET_LAST_NAME, SET_FULLNAME, SET_USER_ID, SET_USERNAME, RESET_USER } from './types'
import { addOrder } from './Order'
import { getOrders, getProfile, getAddresses, editProfile } from '../API/UserApi'

function getUserOrdersFromApi(id) {
    return async function(dispatch) {
        const res = getOrders(id)

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

//         if(res.addresses) {
            
//         }
//     }
// }

function getUserProfileFromApi(id) {
    return async function(dispatch) {
        const res = getProfile(id)

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
    return { type: RESET_USER, payload: {} }
}

export { setUserInfo, setUserId, setPhoneNumber, setEmail, setFirstName, setLastName, setFullName}