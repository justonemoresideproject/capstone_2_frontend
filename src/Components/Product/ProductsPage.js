import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getProductsFromApi } from '../../actions/Product';
import ProductQueryForm from './ProductQueryForm'
import ProductList from './ProductList'

/** Products function displays all products on the app
 * 
 * Authorization: None
 */

function ProductsPage() {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)
    const queryProducts = useSelector(store => store.products.queryProducts)
    const productKeys = Object.keys(products)
    const store = useSelector(store => store)

    useEffect(function() {
        dispatch(getProductsFromApi())
    }, [dispatch, queryProducts])

    return (
        <>
            {productKeys.length < 1 ? <h1> ...No products here :(</h1> : 
                <>
                    <ProductQueryForm products={products} />
                    {queryProducts == undefined ? 
                        <ProductList products={products} rows={3}/> :
                        <ProductList products={queryProducts} rows={3} />
                    }
                </>
            }
        </>
    )
}

export default ProductsPage