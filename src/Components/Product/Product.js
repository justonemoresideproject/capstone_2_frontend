import '../ComponentCss/Product.css'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import { addItemToCart } from '../../actions/Cart'

function Product({product}) {
    const dispatch = useDispatch();
    const INITIAL_STATE = { 
        id : product.id,
        quantity : 0 };

    const [formData, setFormData] = useState(INITIAL_STATE)

    const [dropDown, setDropDown] = useState(false)

    const handleElementChange = () => {
        setDropDown((prev) => !prev)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        })) 
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        // setFormData(formData => ({
        //     ...formData
        // }))

        dispatch(addItemToCart(formData))
    }

    if(product == undefined || null) {
        return (
            <td>hmmmm...something went wrong</td>
    )}
    
    return (
        <td className={`productTd${dropDown ? '-info' : ''}`} key={`${product.id}`} style={{
            "width": "100%",
            "height": "100%"
        }}>
            { dropDown ? <ProductInfo 
                product={product} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                handleElementChange={handleElementChange} 
                quantity={formData.quantity} /> : <ProductImage 
                product={product} 
                handleElementChange={handleElementChange} /> }
        </td>
    )
}

export default Product