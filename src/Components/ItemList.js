import React from 'react'

import { returnText } from './Helpers/TextFunctions'
import Item from './Item'

function ItemList({items}) {
    console.log(items)
    const headerKeys = Object.keys(items[0])

    return (
        <table>
            <thead>
                <tr>
                    {headerKeys.map((key, index) => {
                        return (
                            <th key={`${index}-${key}`}>{returnText(key)}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    return (
                        <Item 
                            item={item} 
                            key={`${index}-${items.id}`}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default ItemList