import '../ComponentCss/ProductInfo.css'

import React, { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from '../../actions/Cart'

import { returnPrice } from '../Helpers/TextFunctions'

function ProductInfo({product, setSelectedProduct}) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)
    const quantity = cart[product.id] === NaN || cart[product.id] === `NaN` || cart[product.id] === undefined ? 0 : cart[product.id]

    const INITIAL_STATE = {
        id : product.id,
        quantity : quantity
    };

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        })) 
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addItemToCart(formData))
        setSelectedProduct(null)
    }

    return (
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
                                    id='enlargedInput'
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
    )
}

export default ProductInfo