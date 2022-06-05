import { SET_TOKEN, SET_AUTH_INFO, RESET_TOKEN } from './types'

import AuthApi from '../API/AuthApi'

function login({username, password}) {
    return async function(dispatch) {
        const res = AuthApi.authenticate({username, password})

        if(res.token){
            dispatch(setAuthInfo({ userId: res.userId, isAdmin: res.isAdmin, token: res.token }))
        }
        return res
    }
}

function register({username, password, firstName, lastName, phone, email}) {
    return async function(dispatch) {
        const res = AuthApi.signUp({username, password, firstName, lastName, phone, email})

        if(res.token){
            dispatch(setToken(res.token))
            dispatch(setAuthInfo({ userId: res.userId, isAdmin: res.isAdmin }))
        }
        return res
    }
}

function setToken(token) {
    return { type: SET_TOKEN, payload: token }
}

function resetToken() {
    return { type: RESET_TOKEN }
}

function setAuthInfo(authInfo) {
    return { type: SET_AUTH_INFO, payload: authInfo}
}

export { login, register, setToken, resetToken }