import Product from './Product'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getProductsFromApi } from '../../actions/Product';
import ProductQueryForm from './ProductQueryForm'
import ProductList from './ProductList'

/** Products function displays all products on the app
 * 
 * Authorization: None
 */

function Products() {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)
    const productKeys = Object.keys(products)
    let currKeyIdx = 0
    const store = useSelector(store => store)

    console.log(store)

    useEffect(function() {
        // if(products == undefined) {
        //     dispatch(getProductsFromApi())
        // }
        dispatch(getProductsFromApi())
    }, [dispatch])

    

    return (
        <>
            {productKeys.length < 1 ? <h1> ...No products here :(</h1> : 
                <>
                    <h1>Products</h1>
                    <ProductQueryForm />
                    <ProductList />
                </>
            }
        </>
    )
}

export default Products