import '../ComponentCss/Product.css'

import React from 'react'

function Product({product}) {
    console.log(product)
    return (
        <td className="productTd">
            <h4>{product.name}</h4>
            <img src={product.imageSrc}/>
            <div>{product.description}</div>
            <span>${product.price}</span>
        </td>
    )
}

export default Product