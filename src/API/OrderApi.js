const CommonApi = require('./CommonApi')

class OrderApi {
    static async create(OrderInfo) {
        const res = await CommonApi.request('orders/', OrderInfo, 'post')

        return res.order
    }

    static async get(id) {
        const res = await CommonApi.request(`orders/${id}`)

        return res.order
    }

    static async all() {
        const res = await CommonApi.request('orders/')

        return res.orders
    }

    static async remove(id) {
        const res = await CommonApi.request(`orders/${id}`, {}, 'delete')

        return res.order
    }
}

module.exports = { OrderApi }