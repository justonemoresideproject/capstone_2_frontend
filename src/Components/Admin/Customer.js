import React from 'react'

function Customer(customer) {
    const infoKeys = Object.keys(customer)
    return (
        <tr>
            {infoKeys.map(key => {
                return (
                    <td>
                        {customer[key]}
                    </td>
                )
            })}
        </tr>
    )
}

export default Customer