import CommonApi from './CommonApi'

class OrderApi {
    static async create(OrderInfo) {
        const res = CommonApi.request('orders/', OrderInfo, 'post')

        console.log(res)

        return res
    }

    static async get(id) {
        const res = CommonApi.request(`orders/${id}`)

        return res
    }

    static async all() {
        const res = CommonApi.request('orders/')

        return res
    }

    static async remove(id) {
        const res = CommonApi.request(`orders/${id}`, {}, 'delete')

        return res
    }
}

export default OrderApi