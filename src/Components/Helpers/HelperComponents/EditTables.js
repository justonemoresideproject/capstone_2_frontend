import React, { useState, useRef } from "react";

import '../../ComponentCss/EditTable.css'

import { useDispatch, useSelector } from 'react-redux';
import { returnText, returnFormValue } from '../TextFunctions';
import { updateOrderToApi } from '../../../actions/Order'
import { updateCustomerToApi } from '../../../actions/Customer'
import { updateAddressToApi } from '../../../actions/Address'

import EditTableRows from "./EditTableRows";
import { objHasNestedObj } from "../AlgFunctions";
import EditTableRow from "./EditTableColumns";

const _ = require('lodash')

/**
 * returns a Table that can edit a given object and dispatch the new formed object to update api information.
 * 
 * @param {object} objectBasedInfo 
 * @param {function} action
 * @param {boolean} showHeading
 * @param {SetStateAction} selectItem
 * @returns <table>
 */
function EditTables({objectBasedInfo, action, showHeading=true, selectItem}) {
    const initialButtonClasses = {}
    Object.keys(objectBasedInfo).forEach(key => {
        initialButtonClasses[key] = 'button hide'
    })

    const dispatch = useDispatch()
    const token = useSelector(store => store.auth.token)
    const keys = Object.keys(objectBasedInfo)

    const [formData, setFormData] = useState(objectBasedInfo)
    const [buttonClasses, setButtonClasses] = useState(initialButtonClasses)
    
    // const handleChange = (e) => {
    //     const { name, value, type } = e.target;
    //     console.log(action)

    //     _.isObjectLike(name) ? setFormData(formData => ({
    //         ...formData,
    //         [JSON.parse(name)]: returnFormValue(value, type)
    //     })) :
    //         setFormData(formData => ({
    //         ...formData,
    //         name: returnFormValue(value, type)
    //     }))

    //     setButtonClass('button show')
    //     e.cancelBubble = true
    //     if(e.stopPropogation) e.stopPropogation()
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(_.isEqual(formData, objectBasedInfo)) return 
    //     switch(action) {
    //         case "address":
    //             dispatch(updateAddressToApi(token, formData))
    //         case "customer":
    //             dispatch(updateCustomerToApi(token, formData))
    //         case "order":
    //             dispatch(updateOrderToApi(token, formData))
    //         case "orderItems":
    //             dispatch(updateOrderItemsToApi(token, formData))
    //         default:
    //             dispatch(action(token, formData))
    //     }
    // }

    return (
        <form className="editTableForm">
        <table className='editTables'>
            {showHeading ?
            <thead>
                <tr>
                    {Object.keys(objectBasedInfo[keys[0]]).map((key, index) => {
                        return (
                            <th key={`${index}-${key}`}>
                                {returnText(key)}
                            </th>
                        )
                   })}
                </tr>
            </thead>
            : null }
            <tbody>
                {Object.keys(objectBasedInfo).map((key, index) => {
                return (<EditTableRows 
                        formData={formData} 
                        setFormData={setFormData}
                        buttonClasses={buttonClasses}
                        setButtonClasses={setButtonClasses}
                        // handleSubmit={handleSubmit} 
                        selectItem={selectItem}
                        upperKey={key}
                        token={token}
                        action={action}
                         />)
                })}
            </tbody>
        </table>
        </form>)
}

export default EditTables