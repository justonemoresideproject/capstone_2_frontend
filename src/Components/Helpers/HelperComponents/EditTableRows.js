import React, { useEffect, useState } from 'react'

import '../../ComponentCss/EditTable.css'

import { useDispatch, useSelector } from 'react-redux';
import { isObject } from '../AlgFunctions';
import EditInput from './EditInput';
import EditTableColumns from './EditTableColumns';
import { returnText, returnFormValue } from '../TextFunctions';

import { updateOrderToApi } from '../../../actions/Order';
import { updateCustomerToApi } from '../../../actions/Customer';
import { updateAddressToApi } from '../../../actions/Address';
// import { updateOrderItemsToApi } from '../../../actions/Order';

const _ = require('lodash')

function EditTableRows({formData, setFormData, buttonClasses, setButtonClasses, selectItem, upperKey, token, action}) {
    console.log(formData)
    const dispatch = useDispatch()

    useEffect(() => {
         
    }, [formData[upperKey], buttonClasses[upperKey]])

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(formData => ({
            ...formData,
            [upperKey]: {...formData[upperKey], 
                [name]: returnFormValue(value, type)}
        }))

        setButtonClasses({...buttonClasses, 
            [upperKey]: 'button show'})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        switch(action) {
            case "address":
                dispatch(updateAddressToApi(token, formData[upperKey]))
            case "customer":
                dispatch(updateCustomerToApi(token, formData[upperKey]))
            case "order":
                dispatch(updateOrderToApi(token, formData[upperKey]))
            // case "orderItems":
            //     dispatch(updateOrderItemsToApi(token, formData[upperKey]))
            default:
                dispatch(action(token, formData[upperKey]))
        }
    }
    
    const unchangableItems = ["id", "createdAt"]

    return <tr>
        {Object.keys(formData[upperKey]).map((key, index) => {
            console.log(formData[upperKey])
            console.log(key)
            console.log(formData[upperKey][key])
            return <td>
                {unchangableItems.includes(key) ?  <button 
                    className='ItemListButton'
                    onClick={() => selectItem(formData, key)}>
                    {key === "orderItems" ? 
                    "View Items" : returnText(formData[upperKey][key])}
                </button>
                :
                <EditInput name={key} handleChange={handleChange} value={formData[upperKey][key]} key={index}/>}
            </td>
            })}
            <td>
                <button className={buttonClasses[upperKey]} onClick={() => handleSubmit()}>
                    {`Edit`}
                </button>
                {`Submit`}
            </td>
        </tr>
    
    // <form className='editTableForm'>
    //             <tr>
    //                 {Object.keys(formData[upperKey]).map((key, index) => {
    //                     console.log(formData[upperKey])
    //                     console.log(key)
    //                     console.log(formData[upperKey][key])
    //                     return <td>
    //                             {unchangableItems.includes(key) ?  <button 
    //                                 className='ItemListButton'
    //                                 onClick={() => selectItem(formData, key)}>
    //                                 {key === "orderItems" ? 
    //                                 "View Items" : returnText(formData[upperKey][key])}
    //                             </button>
    //                         :
    //                             <EditInput name={key} handleChange={handleChange} value={formData[upperKey][key]} key={index}/>}
    //                         </td>
    //                         })}
    //                         <td>
    //                             <button className={buttonClasses[upperKey]} onClick={() => handleSubmit()}>
    //                                 {`Edit`}
    //                             </button>
    //                             {`Submit`}
    //                         </td>
    //             </tr>
    //         </form>
}

export default EditTableRows