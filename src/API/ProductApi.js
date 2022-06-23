import CommonApi from './CommonApi'

class ProductApi {
    static async add(productInfo) {
      const res = CommonApi.request('products/create', productInfo, 'post')

      return res
    }

    static async query(searchFilters) {
      const res = CommonApi.request(`products/query`, searchFilters, 'post')

      return res
    }

    static async get(id) {
      const res = CommonApi.request(`products/${id}`)

      return res
    }

    static async all() {
      const res = CommonApi.request(`products/`)

      return res
    }

    static async remove(id) {
      const res = CommonApi.request(`products/${id}`, {}, 'delete')
    
      return res
    }
}

export default ProductApi