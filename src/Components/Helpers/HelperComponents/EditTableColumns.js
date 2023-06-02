import React from 'react'

import EditInput from './EditInput'

function EditTableColumns({handleChange, formData}) {
    console.log(formData)

    Object.keys(formData).map((key, index) => {
        return <td>
            <EditInput name={key} handleChange={handleChange} value={formData[formData][key]} />
        </td>
    })
}

export default EditTableColumns