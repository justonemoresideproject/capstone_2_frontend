const CommonApi = require('./CommonApi')

class CustomerApi {
    static async create(customerInfo) {
        const res = await CommonApi.request(`customers/`, customerInfo, 'post')

        return res.customer
    }

    static async get(id) {
        const res = await CommonApi.request(`customers/${id}`)

        return res.customer
    }

    static async all() {
        const res = await CommonApi.request('customers/')

        return res.customers
    }

    static async remove(id) {
        const res = await CommonApi.request(`customers/${id}`,{}, 'delete')

        return res.customer
    }
}

export default CustomerApi