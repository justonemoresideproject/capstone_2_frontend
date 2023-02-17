import React, { useState } from 'react'
import EditTable from './EditTable'

import { returnText } from '../TextFunctions'

function Item({headers, item, edit, selectItem}) {

    return (
        <tr>
            {headers.map((key, index) => {
                return (
                    <td key={`${key}-${index}`}>{returnText(item[key])}</td>
                )
            })}
            {edit ? 
            <td>
                <button className='button' onClick={() => selectItem(item)}>
                    Edit
                </button>
            </td> : null}
        </tr> 
    )
}

export default Item