import CommonApi from './CommonApi'

class AddressApi {
    static async create(AddressInfo) {
        const res = CommonApi.request('addresses/', AddressInfo, 'post')

        return res
    }

    static async get(id) {
        const res = CommonApi.request(`addresses/${id}`)

        return res
    }

    static async all() {
        const res = CommonApi.request(`addresses/`)

        return res
    }

    static async remove(id) {
        const res = CommonApi.request(`addresses/${id}`, {}, 'delete')

        return res
    }
}

export default AddressApi