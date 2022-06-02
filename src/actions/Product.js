import { ADD_PRODUCT, REMOVE_PRODUCT } from './types'

const { all, get, add, remove } = require('../API/ProductApi')

function getProductFromApi(id) {
    return async function(dispatch) {
        const product = await get(id)

        dispatch(addProduct(product))
    }
}

function getProductsFromApi() {
    return async function(dispatch) {
        const products = await all()

        products.forEach(product => {
            dispatch(addProduct(product))
        })
    }
}

function addProductToApi(product) {
    return async function(dispatch) {
        const newProduct = await add(product)

        dispatch(addProduct(newProduct))
    }
}

function removeProductFromApi(id) {
    return async function(dispatch) {
        const product = await remove(id)

        dispatch(removeProduct(id))
    }
}

function addProduct(product) {
    return { 
        type: ADD_PRODUCT, 
        productId: product.id, 
        product: {
            name: product.name,
            description: product.description,
            price: product.price,
            currency: product.currency
        }  
    }
}

function removeProduct(id) {
    return {
        type: REMOVE_PRODUCT,
        productId: id
    }
}

export { removeProductFromApi, getProductFromApi, addProductToApi, getProductsFromApi, addProduct, removeProduct }