import '../ComponentCss/ProductInfo.css'

import React from 'react' 

function ProductInfo({product, handleElementChange, handleSubmit, handleChange, quantity}) {

    return (
        <div 
            className={`productInfoContainer`}>
            <h5
                className='productName'
                style={{
                    "padding": "0px",
                    "margin": "0px"
                }}>{product.name}
            </h5>
            <div
                className='productInfo'>
                <div 
                    className='productDescription'>
                    {product.description}
                </div>
                <div
                    className='productPrice'>
                    Price: ${product.price}
                </div>
                <form
                    className='addToCartForm' 
                    onSubmit={handleSubmit}>
                    <div 
                        className='numItems'>
                        Number of Items                    
                    </div>
                    <button 
                        style={{
                            "width": "4vw",
                            "height": "3vh"
                        }}
                        className='button'
                        name="quantity"
                        value={+quantity - 1}
                        onClick={handleChange}>
                        -
                    </button>
                    <input 
                        style={{
                            "width": "2vw",
                            "height": "2vh",
                            "fontSize": "16px"
                        }}
                        type='number' 
                        className='input'
                        name='quantity'
                        onChange={handleChange}
                        value={+quantity} />
                    <button 
                        style={{
                            "width": "4vw",
                            "height": "3vh"
                        }}
                        className='button'
                        name="quantity"
                        value={+quantity + 1}
                        onClick={handleChange}>   
                        +
                    </button>
                    <br />                    
                    <button 
                        id='addToCartButton'
                        className='button'>
                        Add to Cart
                    </button>
                    <div>
                        Total: ${product.price * quantity}
                    </div>
                </form>
            </div>
            <button 
                className='button'
                onClick={handleElementChange}>
                Back
            </button>
        </div>
    )
}

export default ProductInfo