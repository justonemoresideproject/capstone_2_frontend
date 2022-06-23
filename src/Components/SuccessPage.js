import './ComponentCss/SuccessPage.css'

import React, { useEffect, useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { returnText } from './Helpers/TextFunctions'

function SuccessPage() {
    const dispatch = useDispatch()
    const [customerKeys, setCustomerKeys] = useState([])
    const recentOrder = useSelector(state => state.customers.recentOrder)
    const products = useSelector(state => state.products)
    const myProducts = recentOrder.products 
    const customerInfo = recentOrder.customerInfo
    
    return(
        <> 
        {recentOrder != null ? <>
        <h1>Success!</h1>
        <h2>Customer Info</h2>
        <table className='customerInfoTable'>
            <tbody>
                {Object.keys(customerInfo).map((key, index) => {
                    return(
                    <tr key={index}>
                        <td key={`${index}-1`}>
                            {returnText(key)}:
                        </td>
                        <td key={`${index}-2`}>
                            {customerInfo[key]}
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table> 
        <h2>Products</h2>
        <table className='productInfoTable'>
            <tbody>
                {Object.keys(myProducts).map(
                    (key, index) => {
                        return(
                        <>
                        <tr key={`${index}-name`}>
                            <td key={`${index}-name-1`}>
                                Name:
                            </td>
                            <td key={`${index}-name-2`}>
                                {products[key].name} 
                            </td>
                        </tr>
                        <tr key={`${index}-quant`}>
                            <td key={`${index}-quant-1`}>
                                Quantity:
                            </td>
                            <td key={`${index}-quant-2`}>
                                {myProducts[key]}
                            </td>
                        </tr>
                        <tr key={`${index}-price`}>
                            <td key={`${index}-price-1`}>
                                Price:
                            </td>
                            <td key={`${index}-price-2`}>
                                {products[key].price}
                            </td>
                        </tr>
                        <tr key={`${index}-total`}>
                            <td key={`${index}-total-1`}>
                                Total:
                            </td>
                            <td key={`${index}-total-2`}>
                                {products[key].price * myProducts[key]} 
                            </td>
                        </tr>
                        </>)
                    }
                )}
            </tbody>
        </table>
        </> : <h1>Hmmmm... looks like something went wrong. <NavLink to='/'>Let's go back home</NavLink></h1>}
        </>
    )
}

export default SuccessPage