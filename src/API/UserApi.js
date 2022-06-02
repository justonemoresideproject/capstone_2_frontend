const CommonApi = require('./CommonApi')

class UserApi {
    static async getOrders(userId) {
        const res = await CommonApi.request(`users/orders/${userId}`)

        return res
    }

    static async getProfile(userId) {
        const res = await CommonApi.request(`users/${userId}`)

        return res
    }

    static async getAddresses(userId) {
        const res = await CommonApi.request(`users/addresses/${userId}`)

        return res
    }

    static async editProfile(userId, userInfo) {
        const res = await CommonApi.request(`users/${userId}`, userInfo, "patch")

        return res
    }
}

module.exports = { UserApi }