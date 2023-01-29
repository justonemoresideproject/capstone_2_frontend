import React from 'react'
import { returnType, returnText } from '../TextFunctions'

function EditInput({key, handleChange, value}) {
    const type = returnType(key)

    if(type === 'select') {
        return (
            <select>
                <option>
                    
                </option>
            </select>
        )
    }

    return (
        <input
            type={type}
            className='input'
            name={key}
            onChange={handleChange}
            value={value} />
    )
}

export default EditInput