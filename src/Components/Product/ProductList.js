import '../ComponentCss/ProductList.css'

import React, { useState } from 'react'

import Product from './Product'
import EnlargedProduct from './EnlargedProduct';

import { returnTable } from '../Helpers/AlgFunctions'

// Accepts an object of products and returns a grid of product images/information
function ProductList(products, columns=3, height=90, width=100) {
    const productTable = returnTable(products, columns)

    const [enlargedProduct, setEnlargedProduct] = useState(false)

    return (
        <>
        {enlargedProduct && <EnlargedProduct product={enlargedProduct} setEnlargedProduct={setEnlargedProduct}/> }
            <table className='productTable' style={{
                "width": `${width}`
            }}>
                <tbody>
                    {productTable.map((row, index) => {
                        const columnKeys = Object.keys(row[0])
                        return (
                            <tr className='productTableTr' key={`${index}`}>
                                {columnKeys.map((id, indexTwo) => {
                                    return(
                                        <Product 
                                            product={row[0][id]} 
                                            row={columnKeys.length}
                                            key={`${index}-${indexTwo}`}
                                            setEnlargedProduct={setEnlargedProduct} />)
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ProductList