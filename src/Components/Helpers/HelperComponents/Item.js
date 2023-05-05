import React, { useState } from 'react'
import EditTable from './EditTable'

import { returnText } from '../TextFunctions'

function Item({headers, item, edit, selectItem}) {

    return (
        <tr>
            {headers.map((key, index) => {
                return key === "id" ? 
                <td key={`${key}-${index}`}>
                    {returnText(item[key])}
                </td>
                :
                <td key={`${key}-${index}`}>
                    <button 
                        className='ItemListButton'
                        onClick={() => selectItem({key: item[key]})}>
                        {key === "orderItems" ? "Edit Items" : returnText(item[key])}
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