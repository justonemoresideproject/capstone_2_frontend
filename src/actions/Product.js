import { ADD_PRODUCT, SET_PRODUCT_IDS, REMOVE_PRODUCT } from './types'

import ProductApi from '../API/ProductApi'

function getProductFromApi(id) {
    return async function(dispatch) {
        const product = await ProductApi.get(id)

        dispatch(addProduct(product))
    }
}

/* I considered adding a query action but had trouble figuring out how to store it. Leaving this here in hopes of advice on how to do it correctly */

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
        const products = await ProductApi.all()

        console.log('getProductsFromApi')
        console.log(products)

        if(products.length > 1) {
            products.forEach(product => {
                dispatch(addProduct(product))
            })
        } else {
            dispatch(addProduct(products))
        }
    }
}


/* Returns a list of products
    products = [ { id }, ...] */
function getProductIdsFromApi() {
    return async function(dispatch) {
        const searchFilters = { "select": ["id"] }
        const productIds = await ProductApi.query(searchFilters)

        
    }
}

function sendQueryFromApi(searchFilters) {
    return async function(dispatch) {
        const products = await ProductApi.query(searchFilters)


    }
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