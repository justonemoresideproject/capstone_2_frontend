const CommonApi = require('./CommonApi')

class AddressApi {
    static async create(AddressInfo) {
        const res = await CommonApi.request('addresses/', AddressInfo, 'post')

        return res
    }

    static async get(id) {
        const res = await CommonApi.request(`addresses/${id}`)
    }

    static async all() {
        const res = await CommonApi.request(`addresses/`)

        return res
    }

    static async remove(id) {
        const res = await CommonApi.request(`addresses/${id}`, {}, 'delete')

        return res
    }
}

module.exports = { AddressApi }