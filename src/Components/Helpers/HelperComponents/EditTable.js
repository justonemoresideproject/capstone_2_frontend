import React, { useState } from 'react'

import '../../ComponentCss/EditTable.css'

import { useDispatch, useSelector } from 'react-redux';

import { changeProfileFromApi } from '../../../actions/User';
import { returnText } from '../TextFunctions';
import { compareObjects, createNewObject } from '../AlgFunctions'
import EditInput from './EditInput';

const _ = require('lodash')

function EditTable({objectBasedInfo, action, showHeading=true}) {
    const dispatch = useDispatch()
    const token = useSelector(store => store.auth)

    const INITIAL_STATE = createNewObject(objectBasedInfo)

    const [formData, setFormData] = useState(INITIAL_STATE)
    const [buttonClass, setButtonClass] = useState('button hide')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
        _.isEqual(formData, INITIAL_STATE) ? setButtonClass('button hide') : setButtonClass('button show')
        e.cancelBubble = true
        if(e.stopPropogation) e.stopPropogation()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(_.isEqual(formData, INITIAL_STATE)) return 
        dispatch(action(formData))
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
                            console.log(`Edit Table key: ${key}`)
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