import { SET_TOKEN } from './types'

import { authenticate, signUp } from '../API/AuthApi'

function login({username, password}) {
    return async function(dispatch) {
        const res = authenticate({username, password})

        if(res.token){
            dispatch(setToken(res.token))
        }
        return res
    }
}

function register({username, password, firstName, lastName, phone, email}) {
    return async function(dispatch) {
        const res = signUp({username, password, firstName, lastName, phone, email})

        if(res.token){
            dispatch(setToken(res.token))
        }
        return res
    }
}

function setToken(token) {
    return { type: SET_TOKEN, payload: token }
}

export { login, register, setToken }