import React, { useEffect, useState } from 'react';

import { returnText } from '../Helpers/TextFunctions'

function Order({order, selectItem}) {
    const unchangableItems = ["id", "createdAt"]
    return (
        <tr>
            {Object.keys(order).map((key, index) => {
                return unchangableItems.includes(key) ? 
                <td key={`${key}-${index}`}>
                    {returnText(order[key])}
                </td>
                :
                <td key={`${key}-${index}`}>
                    <button 
                        className='ItemListButton'
                        onClick={() => selectItem(order, key)}>
                        {key === "orderItems" ? 
                        "View Items" : returnText(order[key])}
                    </button>
                </td>
            })}
        </tr>
    )
}

export default Order