import React, { useState } from 'react'

import '../../ComponentCss/EditTable.css'

import { useDispatch, useSelector } from 'react-redux';

import { changeProfileFromApi } from '../../../actions/User';
import { updateCustomerToApi } from '../../../actions/Customer';
import { returnText, returnFormValue } from '../TextFunctions';
import { compareObjects, createNewObject } from '../AlgFunctions'
import EditInput from './EditInput';

const _ = require('lodash')

function EditTable({objectBasedInfo, action, showHeading=true}) {
    const dispatch = useDispatch()
    const token = useSelector(store => store.auth.token)

    // const INITIAL_STATE = createNewObject(objectBasedInfo)

    const [formData, setFormData] = useState(objectBasedInfo)
    const [buttonClass, setButtonClass] = useState('button hide')
    console.log(formData)

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: returnFormValue(value, type)
        }))
        _.isEqual(formData, objectBasedInfo) ? setButtonClass('button hide') : setButtonClass('button show')
        e.cancelBubble = true
        if(e.stopPropogation) e.stopPropogation()
    }

    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault();
        if(_.isEqual(formData, objectBasedInfo)) return 
        dispatch(action(token, formData))
    }

    return (
        <form id='editTableForm' onSubmit={handleSubmit}>
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
                    <tr>
                        {Object.keys(objectBasedInfo).map((key, index) => {
                            // console.log(`Edit Table key: ${key}`)
                            return (
                                <td key={`${key}-${index}`}>
                                    <EditInput name={key} handleChange={handleChange} value={formData[key]} />
                                    {/* <input 
                                        type='text'
                                        className='input'
                                        name={`${key}`}
                                        onChange={handleChange}
                                        value={returnText(formData[key])} /> */}
                                </td>
                            )
                        })}
                        <td>
                            <button
                                className={`${buttonClass}`}>
                                    Submit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default EditTable