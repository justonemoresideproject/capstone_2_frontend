import React, { useState } from 'react'
import EditTable from './EditTable'

import { returnText } from '../TextFunctions'
import EditInput from './EditInput'

function Item({headers, item, edit, selectItem}) {
    const unchangableItems = ["id", "createdAt"]
    const selectableItems = ["deliveredStatus"]

    return (
        <tr key={`${item}-row`}>
            {headers.map((key, index) => {
                return unchangableItems.includes(key) ? 
                <td key={`${key}-${index}`}>
                    {returnText(item[key])}
                </td>
                :
                <td key={`${key}-${index}`}>
                    <button 
                        className='ItemListButton'
                        onClick={() => selectItem(item, key)}>
                        {key === "orderItems" ? 
                        "View Items" : returnText(item[key])}
                    </button>
                </td>
                }
            )}
            {edit && 
            <td>
                <button className='button' onClick={() => selectItem(item)}>
                    Edit
                </button>
            </td>}
        </tr> 
    )
}

export default Item