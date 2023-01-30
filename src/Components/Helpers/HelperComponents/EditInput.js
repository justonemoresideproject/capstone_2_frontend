import React from 'react'

import { returnType, returnText, returnSelect } from '../TextFunctions'
import SelectComponent from './SelectComponent'

function EditInput({name, handleChange, value}) {
    const type = returnType(name)
    console.log(`Edit Input type: ${type}`)
    console.log(`Edit Input name: ${name}`)

    if(type === 'select') {
        console.log('SelectComponent Chosen')
        return <SelectComponent name={name} handleChange={handleChange} value={value}/>
    }

    return (
        <input
            type={type}
            className='input'
            name={name}
            onChange={handleChange}
            value={value} />
    )
}

export default EditInput