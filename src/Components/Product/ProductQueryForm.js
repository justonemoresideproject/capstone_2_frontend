import '../ComponentCss/ProductQueryForm.css'

import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { sendQueryFromApi, setQueryProducts } from '../../actions/Product'
import ProductApi from '../../API/ProductApi'
import { findProducts } from '../Helpers/FindProducts'

function ProductQueryForm({products}) {
    const dispatch = useDispatch();

    const INITIAL_STATE = {
        "name": '',
        "price": Infinity,
        "descOrder": true
    };
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        })) 
    }

    const handleSubmit = (e) => {
        if(e !== undefined && e.preventDefault !== undefined) { 
            e.preventDefault() 
        }
        setIsLoading(true)
        console.log(products)
        const matchingProducts = findProducts(products, formData.price, formData.name)
        console.log(matchingProducts)
        dispatch(setQueryProducts(matchingProducts))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='queryWrapper'>
                <select 
                    className='selectInput' 
                    id="price" 
                    name="price" 
                    onChange={handleChange}>
                    <option value={Infinity}>
                        All
                    </option>
                    <option value={5}>
                        Under 5
                    </option>
                    <option value={10}>
                        Under 10
                    </option>
                    <option value={20}>
                        Under 20
                    </option>
                    <option value={50}>
                        Under 50
                    </option>
                </select>
                <select 
                    className='selectInput'
                    id="order" 
                    name="order">
                        <option value={formData.descOrder = true}>
                            Descending
                        </option>
                        <option value={formData.descOrder = false}>
                            Ascending
                        </option>
                    </select>
                <input 
                    type='text' 
                    className='textInput'
                    name='name'
                    onChange={handleChange}
                    value={formData.name} />
                <button
                    className='queryButton'>
                    Search                    
                </button>
            </div>
        {/* <table className='formWrapper'>
            <tbody>
            <tr>
                <td className='queryTd'>
                    <select 
                        className='selectInput' 
                        id="price" 
                        name="price" 
                        onChange={handleChange}>
                        <option value={Infinity}>
                            All
                        </option>
                        <option value={5}>
                            Under 5
                        </option>
                        <option value={10}>
                            Under 10
                        </option>
                        <option value={20}>
                            Under 20
                        </option>
                        <option value={50}>
                            Under 50
                        </option>
                    </select>
                </td>
                <td className='queryTd'>
                    <select 
                    className='selectInput'
                    id="order" 
                    name="order">
                        <option value={formData.descOrder = true}>
                            Descending
                        </option>
                        <option value={formData.descOrder = false}>
                            Ascending
                        </option>
                    </select>
                </td>
                <td colSpan={2} className='queryTd'>
                    <input 
                        type='text' 
                        className='textInput'
                        name='name'
                        onChange={handleChange}
                        value={formData.name} />
                </td>
                <td className='queryTd'>
                    <button
                        className='queryButton'>
                        Search                    
                    </button>
                </td>
            </tr>
            </tbody>
        </table> */}
        </form>
    )

    return (
        <table className='formWrapper'>
            <tbody>
            <tr className='radioRow'>
                <td>
                    <label 
                        className='label'
                        htmlFor="targetPrice">
                            Price
                    </label>
                    <br/>
                    <label 
                        className='label' 
                        htmlFor='ascOrDesc'>
                            Price Order
                    </label>
                </td>
                <td>
                    <select 
                        className='selectInput' 
                        id="price" 
                        name="price" 
                        onChange={handleChange}>
                        <option value={Infinity}>
                            All
                        </option>
                        <option value={5}>
                            Under 5
                        </option>
                        <option value={10}>
                            Under 10
                        </option>
                        <option value={20}>
                            Under 20
                        </option>
                        <option value={50}>
                            Under 50
                        </option>
                    </select>
                    <br />
                    <select 
                        className='selectInput'
                        id="order" 
                        name="order">
                        <option value={formData.descOrder = true}>
                            Descending
                        </option>
                        <option value={formData.descOrder = false}>
                            Ascending
                        </option>
                    </select>
                </td>
                <td className='queryTd'>
                    <span className='queryWrapper'>
                        <input 
                            type='text' 
                            className='textInput'
                            name='name'
                            onChange={handleChange}
                            value={formData.name} />
                        <button
                            className='queryButton'
                            onClick={() => handleSubmit()}>
                            Search                    
                        </button>
                    </span>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default ProductQueryForm