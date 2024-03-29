import '../ComponentCss/ProductList.css'

import React, { useState } from 'react'

import Product from './Product'
import EnlargedProduct from './EnlargedProduct';
import Modal from '../Helpers/HelperComponents/Modal';

import { returnTable } from '../Helpers/AlgFunctions'
import ProductInfo from './ProductInfo';

// Accepts an object of products and returns a grid of product images/information
function ProductList({products, columns=3, height=90, width=100}) {
    const productTable = returnTable(products, columns)
    console.log(productTable)

    const [selectedProduct, setSelectedProduct] = useState(null)

    return (
        <>
            {selectedProduct !== null && <Modal childElement={
            <ProductInfo 
                product={selectedProduct} 
                setSelectedProduct={setSelectedProduct}
            />
            }
            setState={setSelectedProduct}
            />
        }
            <table className='productTable' style={{
                "width": `${width}%`
            }}>
                <tbody>
                    {productTable.map((row, index) => {
                        const columnKeys = Object.keys(row[0])
                        return (
                            <tr className='productTableTr' key={`${index}`}>
                                {row.map((product, indexTwo) => {
                                    return(
                                        <Product 
                                            product={product} 
                                            row={columnKeys.length}
                                            key={`${index}-${indexTwo}`}
                                            width={Math.floor(width / columns)}
                                            setSelectedProduct={setSelectedProduct} />)
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