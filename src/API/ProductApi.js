import CommonApi from './CommonApi'

class ProductApi {
    static async add(productInfo) {
      const res = await CommonApi.request('products/create', productInfo, 'post')

      return res
    }

    static async query(searchFilters) {
      const res = await CommonApi.request(`products/query`, searchFilters, 'post')

      return res
    }

    static async get(id) {
      const res = await CommonApi.request(`products/${id}`)

      return res.product
    }

    static async all() {
      const res = await CommonApi.request(`products/`)

      console.log('Product Api all function')
      console.log(res)

      return res.products
    }

    static async remove(id) {
      const res = await CommonApi.request(`products/${id}`, {}, 'delete')
    
      return res.product
    }
}

export default ProductApi