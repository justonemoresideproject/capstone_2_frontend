import React from 'react'

import { returnType, returnText, returnSelect } from '../TextFunctions'
import EditTable from './EditTable'
import SelectComponent from './SelectComponent'

function EditInput({name, handleChange, value}) {
    const type = returnType(name)

    if(type === 'select') {
        console.log('SelectComponent Chosen')
        return <SelectComponent name={name} handleChange={handleChange} value={value}/>
    }
    return <input
            type={type}
            className='input'
            name={name}
            onChange={handleChange}
            value={value} />
}

export default EditInput