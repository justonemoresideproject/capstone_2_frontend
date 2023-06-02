import React, { useState } from 'react'

import '../../ComponentCss/EditTable.css'

import { isObject } from '../AlgFunctions'
import EditInput from './EditInput'
import EditTableColumns from './EditTableColumns'
import { useDispatch, useSelector } from 'react-redux';
import { returnText, returnFormValue } from '../TextFunctions';

import { updateOrderToApi } from '../../../actions/Order'
import { updateCustomerToApi } from '../../../actions/Customer'
import { updateAddressToApi } from '../../../actions/Address'

const _ = require('lodash')

function EditTableRow({formData, setFormData, action, selectItem, buttonClass, setButtonClass, dispatch, token}) {
    Object.keys(formData).map((key, index) => {

    // const [formData, setFormData] = useState(objectBasedInfo)
    // const [buttonClass, setButtonClass] = useState('button hide')
    
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        console.log(action)
        setFormData(formData => ({
            ...formData,
            [name]: returnFormValue(value, type)
        }))
        setButtonClass('button show')
        e.cancelBubble = true
        if(e.stopPropogation) e.stopPropogation()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        switch(action) {
            case "address":
                dispatch(updateAddressToApi(token, formData))
            case "customer":
                dispatch(updateCustomerToApi(token, formData))
            case "order":
                dispatch(updateOrderToApi(token, formData))
            default:
                dispatch(action(token, formData))
        }
    }

    const unchangableItems = ["id", "createdAt"]
    
    return (
        <tr key={index}>
            <EditTableColumns handleChange={handleChange} formData={formData} />
            <td>
                <button className={buttonClass} onClick={() => handleSubmit()}>
                    {`Edit`}
                </button>
            </td>
        </tr>
    )
    })

    // return (
    //     <tr>
    //         <EditTableColumns objectBasedInfo={objectBasedInfo} handleChange={handleChange} formData={formData} buttonClass={buttonClass} />
    //         <td>
    //             <button
    //                 className={`${buttonClass}`}>
    //                 Submit
    //             </button>
    //         </td>
    //     </tr>
    // )

    // Object.keys(objectBasedInfo).map((key, index) => {
    //     return isObject(objectBasedInfo[key]) ? 
    //     <EditTableRow objectBasedInfo={objectBasedInfo[key]} handleChange={handleChange} formData={formData} buttonClass={buttonClass} /> 
    //     : 
    //     <tr>
    //         <td key={`${key}-${index}`}>
    //             <EditInput name={key} handleChange={handleChange} value={formData[key]} />
    //         </td>
    //         <td>
    //             <button
    //                 className={`${buttonClass}`}>
    //                 Submit
    //             </button>
    //         </td>
    //     </tr>
    // })
}

export default EditTableRow