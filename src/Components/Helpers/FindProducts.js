// Accepts a products object, target price, and name
// Returns an object of matching products
export const findProducts = (products, price, name) => {
    const productKeys = Object.keys(products)
    const matchingProducts = {}

    for(let i = 0; i < productKeys.length; i++) {
        const product = products[productKeys[i]]
        if(product.price <= price && product.name.toLowerCase().includes(`${name}`.toLowerCase())) {
            matchingProducts[product.id] = product
        }
    }

    return matchingProducts;
}

const allProducts = {
    1 : {
        id: 1, 
        name: '#9FT Large Icing Piping Nozzles Russian Nozzles Pa…ecorating Tools Tips Cream Fondant Pastry Nozzles', 
        published: true, 
        description: 'Not Given', 
        price: '1.70',
        variantSku : "30703423-9ft"
        },
    2 : {
        id: 2, 
        name: '1pc 8CM White Wooden Letters English Alphabet DIY … Craft Wedding Home Decor letters room decoration', 
        published: false, 
        description: 'Not Given', 
        price: '1.74', 
        variantSku : "29103397-zm-g-8cm"
    },
    3 : {
        id: 3, 
        name: '20 Colors Mica Powder Epoxy Resin Dye Pearl Pigment Natural Mica Mineral Powder C63B', 
        published: true, 
        description: 'Not Given', 
        price: '18.48', 
        variantSku: "31980014"
    }
}