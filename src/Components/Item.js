import React from 'react'

function Item({item}) {
    const itemKeys = Object.keys(item)
    console.log(item)
    console.log(itemKeys)

    return (
        <tr>
            {itemKeys.map((key, index) => {
                return (
                    <td>{item[key]}</td>
                )
            })}
        </tr>
    )
}

export default Item