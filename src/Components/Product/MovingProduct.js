import '../ComponentCss/MovingProduct.css'
import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { randomProducts, returnTable } from '../Helpers/AlgFunctions'
import ProductList from './ProductList'

/** Moving Products Component
 * 
 * Chooses three products
 */

function MovingProduct(selectedProducts) {
    const [products, setProducts] = useState([])
    const stateProducts = useSelector(state => state.products)

    useEffect(function() {
        const randProds = selectedProducts == null ? randomProducts(stateProducts) : selectedProducts
        
        setProducts(randProds)
    })

    return (
        <div className='productContainer'>
            <div className='rightCover' />
            <div className='topCover' />
            <div className='leftCover' />
            <div className='bottomCover' />
            <ProductList 
                products={products} 
                columns={3} />
        </div>
    )
}

export default MovingProduct;