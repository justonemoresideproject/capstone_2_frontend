import React from 'react'

function Product(product) {
    return (
        <>
            <h4>{Product.name}</h4>
            <div>{Product.description}</div>
            <span>{Product.price} {Product.currency}</span>
        </>
    )
}

export default Product