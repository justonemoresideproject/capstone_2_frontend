import React, { useState } from 'react'

import '../../ComponentCss/EditTable.css'

import { useDispatch, useSelector } from 'react-redux';
import { returnText, returnFormValue } from '../TextFunctions';
import EditTableRow from './EditTableRow';
import EditInput from './EditInput';
import { updateOrderToApi } from '../../../actions/Order'
import { updateCustomerToApi } from '../../../actions/Customer'
import { updateAddressToApi } from '../../../actions/Address'

const _ = require('lodash')

/**
 * returns a Table that can edit a given object with no nested objects and dispatch the new formed object to update api information based on the given action. As opposed to to EditTables which will edit an object with a nested object.
 * 
 * @param {object} objectBasedInfo 
 * @param {function} action
 * @param {boolean} showHeading
 * @param {SetStateAction} selectItem
 * @returns 
 */
function EditTable({objectBasedInfo, action, showHeading=true, selectItem}) {
    const dispatch = useDispatch()
    const token = useSelector(store => store.auth.token)

    const [formData, setFormData] = useState(objectBasedInfo)
    const [buttonClass, setButtonClass] = useState('button hide')
    
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        console.log(action)

        _.isObjectLike(name) ? setFormData(formData => ({
            ...formData,
            [JSON.parse(name)]: returnFormValue(value, type)
        })) :
            setFormData(formData => ({
            ...formData,
            name: returnFormValue(value, type)
        }))

        setButtonClass('button show')
        e.cancelBubble = true
        if(e.stopPropogation) e.stopPropogation()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(_.isEqual(formData, objectBasedInfo)) return 
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

    let reducerInfo = {}

    const unchangableItems = ["id", "createdAt"]

    return (
        <form className='editTableForm' onSubmit={handleSubmit}>
            <table>
                {showHeading ?
                <thead>
                    <tr>
                        {Object.keys(objectBasedInfo).map((key, index) => {
                            return (
                                <th key={`${index}-${key}`}>
                                    {returnText(key)}
                                </th>
                            )
                        })}
                    </tr>
                </thead> : 
                null
                }
                <tbody>
                    {action==="orderItems" ?
                    Object.keys(objectBasedInfo).map((key, index) => {
                        return <tr key={index}>
                            {Object.keys(objectBasedInfo[key]).map((keyTwo, indexTwo) => {
                            return <td key={`${index}-${indexTwo}`}>
                                {unchangableItems.includes(keyTwo) ?  <button 
                                    className='ItemListButton'
                                    onClick={() => selectItem(objectBasedInfo, key, keyTwo)}>
                                    {keyTwo === "orderItems" ? 
                                    "View Items" : returnText(objectBasedInfo[key][keyTwo])}
                                </button>
                                :
                                <EditInput name={keyTwo} nestedKey={key} handleChange={handleChange} value={formData[key][keyTwo]} key={index}/>}
                            </td>
                        })}
                            <td>
                                <button className={buttonClass} onClick={() => handleSubmit()}>
                                    {`Edit`}
                                </button>
                            </td>
                        </tr>
                    }) :
                    <tr>
                        {Object.keys(objectBasedInfo).map((key, index) => {
                            return <td key={index}>
                                {unchangableItems.includes(key) ?  <button 
                                    className='ItemListButton'
                                    onClick={() => selectItem(objectBasedInfo, key)}>
                                    {key === "orderItems" ? 
                                    "View Items" : returnText(objectBasedInfo[key])}
                                </button>
                                :
                                <EditInput name={key} handleChange={handleChange} value={formData[key]} key={index}/>}
                            </td>
                        })}
                        <td>
                            <button className={buttonClass} onClick={() => handleSubmit()}>
                                {`Edit`}
                            </button>
                            {`Submit`}
                        </td>
                    </tr> }
                </tbody>
            </table>
        </form>
    )
}

export default EditTable

let objOne = {'a': 1, 'b': 2, 'c': 3}
let objTwo = {'firstItems': {'d': 4, 'e': 5, 'f': 6}, 'secondItems': {'g': 7, 'h': 8, 'i': 9}, 'thirdItems': {'j': 10, 'k': 11, 'l': 12}}

function bleh(obj) {
    Object.keys(obj).forEach(key => {
        console.log(obj[key])
    })
}