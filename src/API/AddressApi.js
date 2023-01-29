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

    static async all(token) {
        const res = await CommonApi.request(`addresses`, {}, "get", token)
        
        return res
    }

    static async update(token, addressInfo) {
        const res = CommonApi.request(`addresses/${addressInfo.id}`, addressInfo, "patch", token)

        return res
    }

    static async remove(id) {
        const res = CommonApi.request(`addresses/${id}`, {}, 'delete')

        return res
    }
}

export default AddressApi