import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { addProductToApi } from '../../actions/Product'

function NewProduct() {
    const INITIAL_STATE = {}
    const navigate = useNavigate()
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = addProductToApi(formData)
        if(res.token) {
            console.log(res)
        }
        console.log(res)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="price">Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} />

            <label htmlFor="picture">Photo:</label>
            <input type="file" name="photo" value={formData.photo} onChange={handleChange} />

            <button>Submit</button>
        </form>
    )
}

export default NewProduct