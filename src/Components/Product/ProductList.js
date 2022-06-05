import '../ComponentCss/ProductList.css'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Product from './Product'
import { getProductsFromApi } from '../../actions/Product';

function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)
    const productKeys = Object.keys(products)

    useEffect(function(){
        dispatch(getProductsFromApi)
    }, [dispatch])

    return (
        <table className='productTable'>
                <tbody>
                    {productKeys.map((key, index) => {
                        console.log(key)
                        return (
                            <tr>
                                <Product product={products[key]} index={index} />
                            </tr>
                            )
                    })}
                </tbody>
            </table>
    )
}

export default ProductList