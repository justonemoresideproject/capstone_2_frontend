import React from 'react'
import '../ComponentCss/ProductImage.css'


function ProductImage({product, handleElementChange}) {

    return (
        <div 
            onClick={() => handleElementChange()}
            className='productBackgroundImage'
            style={{
                "backgroundImage" : `url(${product.imageSrc})`
            }}>
            <div 
                className='productImageName'>
                {product.name}
            </div>
        </div>
    )
}

export default ProductImage