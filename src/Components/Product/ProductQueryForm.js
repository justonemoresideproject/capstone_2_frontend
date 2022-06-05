import '../ComponentCss/ProductQueryForm.css'

import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { sendQueryFromApi } from '../../actions/Product'

function ProductQueryForm() {
    const dispatch = useDispatch();
    const INITIAL_STATE = {};

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        })) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendQueryFromApi(formData))
    }

    return (
        <table 
            className="productQueryForm" 
            onSubmit={() => handleSubmit()}>
            <tr>
                <td>
                    <label className='radioLabel' htmlFor="lessThan">
                        &#60;
                    </label>
                    <input 
                        className='radioInput'
                        type="radio" 
                        id="lessThan" 
                        name="lessThan" 
                        onChange={handleChange} 
                        value={formData.lessThan = true}
                    />
                    <label 
                        className='radioLabel'
                        htmlFor="greaterThan"
                    >
                        &#62;
                    </label>
                    <input 
                        className='radioInput'
                        type="radio" 
                        id="lessThan" 
                        name="lessThan" 
                        onChange={handleChange} 
                        value={formData.lessThan = false}
                    />

                    <br />

                    <label 
                        className='radioLabel'
                        htmlFor="descOrder"
                    >
                        &#8595;
                    </label>
                    <input 
                        className='radioInput'
                        type='radio' 
                        id="descOrder" 
                        name="descOrder" 
                        onChange={handleChange} 
                        value={formData.descOrder = true} 
                    />
                    <label 
                        className='radioLabel'
                        htmlFor="ascOrder">
                        &#8593;
                    </label>
                    <input 
                        className='radioInput'
                        type='radio' 
                        id="ascOrder" 
                        name="descOrder" 
                        onChange={handleChange} 
                        value={formData.descOrder = false} 
                    />
                </td>
                <td>
                    <label 
                        className='textLabel'
                        htmlFor="targetPrice">
                            Price:
                    </label>
                    <input 
                        className='textInput'
                        type="text" 
                        name="targetPrice" 
                        id='targetPriceInput' 
                        onChange={handleChange} 
                        value={formData.target} 
                    />
                    <button 
                        onClick={() => handleSubmit()}>
                            Search
                    </button>
                </td>
            </tr>
        </table>
    )
}

export default ProductQueryForm