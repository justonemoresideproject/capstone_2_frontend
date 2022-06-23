// Accepts a products object, target price, and name
// Returns an object of matching products
export const findProducts = (products, price, name) => {
    const productKeys = Object.keys(products)
    const matchingProducts = {}

    for(let i = 0; i < productKeys.length; i++) {
        const product = products[productKeys[i]]
        if(product.price <= price && product.name.contains(name)) {
            matchingProducts[product.id] = product
        }
    }

    return matchingProducts;
}