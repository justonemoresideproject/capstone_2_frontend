const CommonApi = require('./CommonApi')

class CustomerApi {
    static async create(customerInfo) {
        const res = CommonApi.request(`customers/`, customerInfo, 'post')

        return res
    }

    static async get(id) {
        const res = CommonApi.request(`customers/${id}`)

        return res
    }

    static async all() {
        const res = CommonApi.request('customers/')

        return res
    }

    static async remove(id) {
        const res = CommonApi.request(`customers/${id}`,{}, 'delete')

        return res
    }
}

export default CustomerApi