import '../ComponentCss/AddAddress.css'

import React, { useState } from 'react'

function AddAddress({formData, handleChange, buttonName='Add'}) {
    return (
        <table id='addAddressForm'>
            <tbody id='addAddressTbody'>
                <tr>
                    <td>
                        <label
                            htmlFor='country'
                            className='label'>
                                Country
                        </label>
                    </td>
                    <td>
                        <label
                            htmlFor='state'
                            className='label'>
                                State
                        </label>
                    </td>
                    <td>
                        <label
                            htmlFor='city'
                            className='label'>
                                City
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            type='text'
                            className='input'
                            name='country'
                            onChange={handleChange}
                            value={formData.country} />
                    </td>
                    <td>
                        <input
                            type='text'
                            className='input'
                            name='state'
                            onChange={handleChange}
                            value={formData.state} />
                    </td>
                    <td>
                        <input
                            type='text'
                            className='input'
                            name='city'
                            onChange={handleChange}
                            value={formData.city} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className='label'>
                            Address
                        </label>
                    </td>
                    <td>
                        <label 
                            htmlFor='addressType' 
                            className='label'>
                                Address Type
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input 
                            type='text' 
                            className='input'
                            name="street"
                            onChange={handleChange}
                            value={formData.street} />
                    </td>
                    <td>
                        <select 
                            className="selectInput"
                            id="addressType"
                            name="addressType"
                            onChange={handleChange}>
                            <option value="home">
                                Home
                            </option>
                            <option value="apartment">
                                Apartment
                            </option>
                            <option value="Business">
                                Business
                            </option>
                        </select>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td colSpan={3}>
                        <button
                            className='button'>
                                {buttonName}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        )
}

export default AddAddress