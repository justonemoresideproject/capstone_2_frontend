import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../../ComponentCss/ItemList.css'
import EditTable from './EditTable'
import EditTables from './EditTables'
import Modal from './Modal'

import { returnText } from '../TextFunctions'
import Item from './Item'
import { updateOrderToApi } from '../../../actions/Order'
import { updateCustomerToApi } from '../../../actions/Customer'
import { updateAddressToApi } from '../../../actions/Address'
import { objHasNestedObj } from '../AlgFunctions'

function ItemList({admin, items, edit=false, action}) {
    const itemKeys = Object.keys(items)
    const headers = Object.keys(items[itemKeys[0]])

    const [selectedItem, setSelectedItem] = useState(null)
    const [currentAction, setCurrentAction] = useState(null)

    const selectItem = (item, key, keyTwo=null) => {
        switch(key) {
            case 'addressId':
                let address = admin.addresses[item[`${key}`]]
                setCurrentAction("address")
                setSelectedItem(address)
                break
            case 'customerId':
                let customer = admin.customers[item[`${key}`]]
                setCurrentAction("customer")
                setSelectedItem(customer)
                break
            case 'order':
                let order = admin.orders[item[`${key}`]]
                setCurrentAction("order")
                setSelectedItem(order)
                break
            case 'orderItems':
                let orderItems = item[`${key}`]
                setCurrentAction("orderItems")
                setSelectedItem(orderItems)
                break
            case 'deliveredStatus':
                setSelectedItem({"deliveredStatus": item[`${key}`]})
                break
        }
    }

    return (
        <>
            {selectedItem !== null ? 
            <Modal childElement={objHasNestedObj(selectedItem) ? <EditTables 
                objectBasedInfo={selectedItem} 
                action={currentAction} 
                showHeading={true} 
                selectItem={setSelectedItem}/> 
                : 
                <EditTable 
                objectBasedInfo={selectedItem} 
                action={action}
                showHeading={true} 
                selectItem={setSelectedItem} 
                />} setState={setSelectedItem}/>
            : null}
            <table className='ItemList'>
                <thead>
                    <tr>
                        {headers.map((key, index) => {
                            return (
                                <th key={`${index}-${key}`}>{returnText(key)}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {itemKeys.map((key, index) => {
                        return (
                            <>
                                <Item 
                                    headers={headers}
                                    item={items[key]} 
                                    key={`${index}-${items.id}`}
                                    edit={edit}
                                    selectItem={selectItem}
                                />
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ItemList

// const orders = {15: {"addressId": 1, "createdAt": "2023-05-16T19:23:30.357Z", "customerId": 5, "deliveredStatus": "notDelivered", "id": 15, "orderItems": {1: { "createdAt": "2023-05-16T19:29:01.557Z", "id": 1, "orderId": 15, "productId": 1, "quantity": 2}, 2 : {"createdAt": "2023-05-16T19:29:01.557Z", "id": 2, "orderId": 15, "productId": 2, "quantity": 6}, 3: {"createdAt": "2023-05-16T19:29:01.557Z", "id": 3, "orderId": 15, "productId": 3, "quantity": 4}}}}