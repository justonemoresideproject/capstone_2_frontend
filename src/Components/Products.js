import Product from './Product'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getProductsFromApi } from '../actions/Product';

/** Products function displays all products on the app
 * 
 * Authorization: None
 */

function Products() {
    const dispatch = useDispatch()
    const products = useSelector(store => Object.values(store.products))

    useEffect(function() {
        dispatch(getProductsFromApi)
    }, [products])

    if(products.length < 1) {
        return (
            <h1> ...No products here :( </h1>
        )
    }

    return (
        <>
            {products.map(product => {
                <Product product={product}/>
            })}
        </>
    )
}

export default Products