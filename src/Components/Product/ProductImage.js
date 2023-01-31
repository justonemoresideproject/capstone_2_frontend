import React from 'react'
import '../ComponentCss/ProductImage.css'


function ProductImage({product, handleElementChange, setSelectedProduct}) {

    const selectProduct = () => {
        console.log('selectProduct')
        setSelectedProduct(product)
    }

    return (
        <div 
            onClick={() => selectProduct()}
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