import CommonApi from './CommonApi'

class UserApi {
    static async getOrders(userId) {
        const res = CommonApi.request(`users/orders/${userId}`)

        return res
    }

    static async getProfile(userId) {
        const res = CommonApi.request(`users/${userId}`)

        return res
    }

    static async getAddresses(userId) {
        const res = CommonApi.request(`users/addresses/${userId}`)

        return res
    }

    static async editProfile(userId, userInfo) {
        const res = CommonApi.request(`users/${userId}`, userInfo, "patch")

        return res
    }
}

export default UserApi