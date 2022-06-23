import { ADD_PRODUCT, SET_PRODUCTS, SET_QUERY_PRODUCTS, SET_PRODUCT_IDS, REMOVE_PRODUCT } from './types'

import ProductApi from '../API/ProductApi'

function getProductFromApi(id) {
    return async function(dispatch) {
        const product = await ProductApi.get(id)

        dispatch(addProduct(product))
    }
}

// function queryProductsFromApi(searchFilters) {
//     return async function(dispatch) {
//         const products = await ProductApi.query(searchFilters)
//     }
// }

/* Returns the full product table
    products = [{id, name, variant_sku, description, price, imageSrc, published}, ...]
 */
function getProductsFromApi() {
    return async function(dispatch) {
        const res = await ProductApi.all()

        dispatch(setProducts(res.products))
    }
}


/* Returns a list of products
    products = [ { id }, ...] */
function getProductIdsFromApi() {
    return async function(dispatch) {
        const searchFilters = { "select": ["id"] }
        const productIds = await ProductApi.query(searchFilters)

        dispatch(setProductIds(productIds))
    }
}

function sendQueryFromApi(searchFilters) {
    return async function(dispatch) {
        const products = await ProductApi.query(searchFilters)
    }
}

function setQueryProducts(products) {
    return { type: SET_QUERY_PRODUCTS, payload: products }
}

function addProductToApi(product) {
    return async function(dispatch) {
        const newProduct = await ProductApi.add(product)

        dispatch(addProduct(newProduct))
    }
}

function removeProductFromApi(id) {
    return async function(dispatch) {
        const product = await ProductApi.remove(id)

        dispatch(removeProduct(id))
    }
}

function addProduct(product) {
    console.log(product)
    return { 
        type: ADD_PRODUCT,
        product: {
            ...product
        }  
    }
}

function setProducts(products) {
    return {
        type: SET_PRODUCTS, payload: products
    }
}

function setProductIds(ids) {
    return {
        type: SET_PRODUCT_IDS,
        productIds: ids
    }
}

function removeProduct(id) {
    return {
        type: REMOVE_PRODUCT,
        productId: id
    }
}

export { removeProductFromApi, getProductFromApi, sendQueryFromApi, addProductToApi, getProductsFromApi, addProduct, setProductIds, removeProduct }