import axios from 'axios'

import { SET_TOKEN, SET_AUTH_INFO, RESET_AUTH, RESET_TOKEN, SET_ERROR } from './types'
import { BASE_URL } from '../API/apiConfig'

import AuthApi from '../API/AuthApi'

function login(authInfo) {
    return async function(dispatch) {
        // const res = await AuthApi.authenticate(authInfo).then(function(res) {
        //     console.log(res)
        //     console.log('Auth Action')
        //     dispatch(setAuthInfo({ userId: res.userId, isAdmin: res.isAdmin, token: res.token }))
        // }).catch(function(err) {
        //     dispatch(setError(err)) 
        // })

        // console.log(res)

        console.log(authInfo)

        try {
            const res = await axios(`${BASE_URL}/auth/token`, {
                method: 'post',
                data: {
                    username: authInfo.username,
                    password: authInfo.password
                }
            })
            .then(function(res) {
                console.log(res)
                const {userId, isAdmin, token} = res.data
                dispatch(setAuthInfo({ userId, isAdmin, token }))})
            .catch(function(err) {
                dispatch(setError(err))
            })

            return res
        } catch(err) {
            dispatch(setError(err))
            return err
        }
    }
}

function register(userInfo) {
    return async function(dispatch) {
        // const res = await AuthApi.signUp(userInfo)

        // dispatch(setAuthInfo({ userId: res.userId, isAdmin: res.isAdmin, token: res.token }))

        // return res

        try {
            const res = await axios('/auth/register', {
                method: 'post',
                body: JSON.stringify(userInfo)
            })
            .then(function(res) {
                dispatch(setAuthInfo({ userId: res.userId, isAdmin: res.isAdmin, token: res.token }))})
            .catch(function(err) {
                dispatch(setError(err))
            })

            return res
        } catch(err) {
            dispatch(setError(err))
            return err
        }
    }
}

function setToken(token) {
    return { type: SET_TOKEN, payload: token }
}

function setError(error) {
    return { type: SET_ERROR, payload: error}
}

function resetToken() {
    console.log('resetToken')
    return { type: RESET_TOKEN }
}

function resetAuth() {
    return { type: RESET_AUTH }
}

function setAuthInfo(authInfo) {
    return { type: SET_AUTH_INFO, payload: authInfo}
}

// function successfulAuth(status) {
//     return { type: LOGGIN_SUCCESS, payload: status }
// }

// function failureAuth(status) {
//     return { type: LOGGIN_FAILURE, payload: status }
// }

export { login, register, setAuthInfo, setToken, resetToken, setError }