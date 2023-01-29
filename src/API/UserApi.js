import CommonApi from './CommonApi'

class UserApi {
    static async getOrders(token, userId) {
        const res = CommonApi.request(`users/orders/`, {userId}, "get", token)

        console.log(res)

        return res
    }

    static async getProfile(token, userId) {
        const res = CommonApi.request(`users/${userId}`, {}, "get", token)

        return res
    }

    static async getAddresses(token, userId) {
        const res = CommonApi.request(`users/addresses/${userId}`, {}, "get", token)

        return res
    }

    static async editProfile(token, userId, userInfo) {
        const res = CommonApi.request(`users/${userId}`, userInfo, "patch", token)

        return res
    }
}

export default UserApi