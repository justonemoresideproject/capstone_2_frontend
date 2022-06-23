import CommonApi from './CommonApi'

class AuthApi {
    static async authenticate(userInfo) {
        const res = CommonApi.request('auth/token', userInfo, 'post')
        
        return res
    }

    static async signUp(userInfo) {
        const res = CommonApi.request('auth/register', userInfo, 'post')

        return res
    }
}

export default AuthApi