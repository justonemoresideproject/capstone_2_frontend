import axios from 'axios'

import { SET_TOKEN, SET_AUTH_INFO, RESET_AUTH, RESET_ADMIN, LOGOUT, RESET_USER, RESET_TOKEN, SET_ERROR, RESET_ERROR } from './types'
import { BASE_URL } from '../API/apiConfig'

import AuthApi from '../API/AuthApi'

function login(authInfo) {
    return async function(dispatch) {
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
                return err
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
                // dispatch(setError(err))
                return err
            })

            return res
        } catch(err) {
            // dispatch(setError(err))
            console.log(err)
            return err
        }
    }
}

// function logout(dispatch) {
//     console.log('Loggin out...')
//     return dispatch => {
//         console.log('Still loggin out...')
//         dispatch(resetAuth())
//         dispatch(resetAdmin())
//         dispatch(resetUser())
//     }
// }

function logout() {
    return { type: LOGOUT }
}

function resetError() {
    return { type: RESET_ERROR }
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

function resetAdmin() {
    return { type: RESET_ADMIN }
}

function resetUser() {
    return { type: RESET_USER }
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

export { login, register, logout, setAuthInfo, setToken, resetToken, setError, resetError }