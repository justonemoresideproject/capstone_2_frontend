import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { isObject } from 'lodash'
import { getAllOrders, updateOrder } from '../../actions/Admin'
import Order from './Order'
import ItemList from '../Helpers/HelperComponents/ItemList'
import EditTable from '../Helpers/HelperComponents/EditTable'
import { updateOrderToApi } from '../../actions/Order'
import { returnText } from '../Helpers/TextFunctions'

import Modal from '../Helpers/HelperComponents/Modal'

/** Orders function displays all orders made on the application
 * 
 * Authorization: Admin
 */

/**
 * 
 * @returns list of orders
 */

function Orders() {
    const admin = useSelector(store => store.admin)
    const ordersInMemory = admin.orders

    const [selectedItem, setSelectedItem] = useState(null)

    if(ordersInMemory == undefined || ordersInMemory.message != undefined || ordersInMemory.length === 0) {
        return (
            <h1>Looks like you don't have any orders yet...</h1>
        )
    }

    // const selectItem = (item, key) => {
    //     switch(key) {
    //         case 'addressId':
    //             let address = admin.addresses[item[`${key}`]]
    //             setSelectedItem(address)
    //             break
    //         case 'customerId':
    //             let customer = admin.customers[item[`${key}`]]
    //             setSelectedItem(customer)
    //             break
    //         case 'orderItems':
    //             let order = admin.customer[item[`${key}`]]
    //             setSelectedItem(order)
    //             break
    //         case 'deliveredStatus':
    //             setSelectedItem({...order[`${key}`]})
    //             break
    //     }
    // }
    
    const iterableOrders = Object.keys(ordersInMemory)
    const headers = Object.keys(ordersInMemory[iterableOrders[0]])

    return (
        <div className='baseElement'>
            {selectedItem !== null ? 
            <Modal 
                childElement={
                    <EditTable 
                    objectBasedInfo={selectedItem} 
                    action={updateOrderToApi} 
                    showHeading={false} />
                } 
                setState={setSelectedItem}/> : null}
            {/* <table className='ItemList'>
                <thead>
                    <tr>
                        {headers.map((header, index) => {
                            return (
                                <th key={`${index}-header`}>
                                    {returnText(header)}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {iterableOrders.map((key, index) => {
                        return (
                            <Order order={ordersInMemory[key]} key={`${index}-order`} selectItem={selectItem}/>
                        )
                    })}
                </tbody>
            </table> */}
            <ItemList admin={admin} items={admin.orders} edit={true} action={updateOrderToApi}/>
        </div>
    )
}

export default Orders

// const admin = { addresses: { 1 : { addressType: "home", city: "Joplin", country: "United States of America", customerId: 1, id: 1, postalCode: 12345, state: "Missouri", street: "123 Fake Street" }}}

// const recursiveObjectReturn = (obj) => {
//     let objKeys = Object.keys(obj)

//     objKeys.forEach((key) => {
//         if(isObject(obj[key])) {
//             Object.keys(obj[key]).forEach(secondKey => {
//                 if(isObject(obj[key][secondKey])) objKeys.push(recursiveObjectReturn(obj[key])[0])
//             })

//         }
//     })

//     return objKeys
// }

// Make a function that returns all keys up to but not including the lowest object

// function consLogObj(obj, id, key) {console.log(obj[id][key])}