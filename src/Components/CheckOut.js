import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CheckOut() {
    const dispatch = useDispatch();
    const store = useSelector(store => store)
    const products = store.products
    const cartItems = store.cartItems
    const cartKeys = Object.keys(store.cartItems)

    let total = 0;

    return (
        <>
            <h1>Checkout</h1>
            <table>
                <thead>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price Per</th>
                </thead>
                <tbody>
                    {cartKeys.map(key => {
                        total += products[key].price * cartItems[key]
                        return (
                            <tr>
                                <td>
                                    {products[key].name}
                                </td>
                                <td>
                                    {cartItems[key]}
                                </td>
                                <td>
                                    {products[key].price}
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>
                            Total: {total}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CheckOut