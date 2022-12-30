import './ComponentCss/SuccessPage.css'

import React, { useEffect, useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { returnText } from './Helpers/TextFunctions'

function SuccessPage() {
    const dispatch = useDispatch()
    const [customerKeys, setCustomerKeys] = useState([])
    const recentOrder = useSelector(state => state.customers.recentOrder)
    console.log(recentOrder)
    const products = useSelector(state => state.products)
    const myProducts = recentOrder.items

    let total = 0
    
    return(
        <> 
        {recentOrder != null ?
        <table className='receiptTable'>
            <thead>
                <tr className='receiptTr'>
                    <td className='successTd' colSpan={2}>
                        Success!
                    </td>
                </tr>
                <tr id='bottomTheadTr' className='receiptTr'>
                    <td className='receiptTd' colSpan={2}>
                        Agletz Receipt
                    </td>
                </tr>
            </thead>
            <tbody>
                
                {Object.keys(recentOrder.customerInfo).map((key, index) => {
                    return(
                    <tr className='customerInfoRow' key={index}>
                        <td className='receiptLabel' id={`${returnText(key)}Label`} key={`${index}-1`}>
                            {returnText(key)}:
                        </td>
                        <td className='info' id={`${returnText(key)}Info`} key={`${index}-2`}>
                            {recentOrder.customerInfo[key]}
                        </td>
                    </tr>
                    )
                })}
            </tbody>
            <tfoot>
            {Object.keys(myProducts).map(
                    (key, index) => {
                        if(myProducts[key] > 0) {
                            total += products[key].price * myProducts[key]
                            return(
                                <>
                                <tr className='nameTr' key={`${index}-name`}>
                                    <td className='receiptLabel' key={`${index}-name-1`}>
                                        Name:
                                    </td>
                                    <td className='info' key={`${index}-name-2`}>
                                        {products[key].name} 
                                    </td>
                                </tr>
                                <tr className='quantityTr' key={`${index}-quant`}>
                                    <td className='receiptLabel' key={`${index}-quant-1`}>
                                        Quantity:
                                    </td>
                                    <td className='info' key={`${index}-quant-2`}>
                                        {myProducts[key]}
                                    </td>
                                </tr>
                                <tr className='priceTr' key={`${index}-price`}>
                                    <td className='receiptLabel' key={`${index}-price-1`}>
                                        Price Per Item:
                                    </td>
                                    <td className='info' key={`${index}-price-2`}>
                                        {products[key].price}
                                    </td>
                                </tr>
                                <tr className='totalTr' key={`${index}-total`}>
                                    <td className='receiptLabel' key={`${index}-total-1`}>
                                        Total:
                                    </td>
                                    <td className='info' key={`${index}-total-2`}>
                                        {products[key].price * myProducts[key]} 
                                    </td>
                                </tr>
                                </>)
                        }  
                    }
                )}
                <tr id='grandTotalTr' className='tfootTr'>
                    <td id='grandTotalTd' colSpan={2}>
                        Grand Total: {returnText(total)}
                    </td>
                </tr>
            </tfoot>
        </table> : <h1>Hmmmm... looks like something went wrong. <NavLink to='/'>Let's go back home</NavLink></h1>}
        </>
    )
}

export default SuccessPage