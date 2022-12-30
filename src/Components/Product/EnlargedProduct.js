import '../ComponentCss/EnlargedProduct.css'
import { returnPrice } from '../Helpers/TextFunctions'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from '../../actions/Cart'

function EnlargedProduct({product, setEnlargedProduct}) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)
    const quantity = cart[product.id] === NaN || `NaN` ? 0 : cart[product.id]
    const INITIAL_STATE = { 
        id : product.id,
        quantity : quantity
    };

    const [formData, setFormData] = useState(INITIAL_STATE)
    console.log(formData)

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        if(value >= 0) {
            setFormData(formData => ({
                ...formData,
                [name]: value
            })) 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addItemToCart(formData))
    }

    return (
    <div className='enlargedBackground'>
        <table
            className='enlargedProduct'
            style={{
                "backgroundImage" : `url(${product.imageSrc})`
            }}>
                <thead>
                    <tr>
                        <th className='enlargedNameContainer'>
                            <h3 className='enlargedName'>
                                {product.name}
                            </h3>
                            <button 
                                onClick={() => setEnlargedProduct(false)}
                                className='enlargedCloseButton'>
                                Close
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className='enlargedTbody'>
                    <tr className='containerOfContainer'>
                        <td className='cartFormContainer'>
                            <form
                                className='addToCartForm' 
                                onSubmit={handleSubmit}>
                                <div className='productPrice'>
                                    Price: {returnPrice(product.price)}
                                </div>
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
                                    value={+formData.quantity - 1}
                                    onClick={handleChange}>
                                    -
                                </button>
                                <input 
                                    type='number' 
                                    className='input'
                                    name='quantity'
                                    onChange={handleChange}
                                    value={+formData.quantity} />
                                <button 
                                    style={{
                                        "width": "4vw",
                                        "height": "3vh"
                                    }}
                                    className='button'
                                    name="quantity"
                                    value={+formData.quantity + 1}
                                    onClick={handleChange}>   
                                    +
                                </button>
                                <br />                    
                                <button 
                                    id='addToCartButton'
                                    className='button'
                                    onClick={handleSubmit}>
                                    Add to Cart
                                </button>
                                <div>
                                    Total: {returnPrice(product.price * formData.quantity)}
                                </div>
                            </form>
                        </td>
                    </tr>
                </tbody>
        </table>
    </div>
    )
}

export default EnlargedProduct