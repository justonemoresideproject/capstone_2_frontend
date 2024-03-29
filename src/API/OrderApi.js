import CommonApi from './CommonApi'

class OrderApi {
    static async create(OrderInfo) {
        const res = CommonApi.request('orders/', OrderInfo, 'post')

        return res
    }

    static async get(id, token) {
        const res = CommonApi.request(`orders/${id}`, token)

        return res
    }

    static async update(token, orderInfo) {
        const id = orderInfo.id
        delete(orderInfo.id)
        delete(orderInfo.createdAt)
        const res = CommonApi.request(`orders/${id}`, orderInfo, 'patch', token)

        return res
    }

    static async all(token) {
        const res = CommonApi.request('orders/', {}, "get", token)

        return res
    }

    static async remove(id, token) {
        const res = CommonApi.request(`orders/${id}`, token, 'delete')

        return res
    }
}

export default OrderApi