import React from 'react'

import Item from './Item'

function ItemList(items) {
    const itemKeys = Object.keys(items)
    const headerKeys = Object.keys(items[itemKeys[0]])

    return (
        <table>
            <thead>
                <tr>
                    {headerKeys.map((key, index) => {
                        return (
                            <th key={index}>{key}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {itemKeys.map((key, index) => {
                    return (
                        <Item 
                            item={items[key]} 
                            key={index}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default ItemList