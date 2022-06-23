import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomersFromApi } from '../../actions/Customer'

function Address(info) {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers)
    const infoKeys = Object.keys(info)

    useEffect(function() {
        dispatch(getCustomersFromApi)
    }, [customers])

    return(
        <tr>
            {infoKeys.map(key => {
                if(key == 'customerId'){
                    return (
                        <td>
                            {customers[info[key]]}
                        </td>
                    )
                }
                return (
                    <td>
                        {info[key]}
                    </td>
                )
            })}
        </tr>
    )
}

export default Address