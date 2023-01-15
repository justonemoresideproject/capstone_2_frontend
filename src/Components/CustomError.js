import React from 'react'

function CustomError({errors, opacity, tag='div'}) {
    const CustomTag = `${tag}`;
    console.log(CustomTag)

    if (typeof(errors) === 'object') {
        if(Array.isArray(errors)) {
            errors.map(error => {
                return (
                    // <CustomTag className={opacity}>
                    //     {error}
                    // </CustomTag>
                    <li>
                        {error}
                    </li>
                )
            })
        } else {
            const keys = Object.keys(errors)
            keys.map(key => {
                return (
                    <CustomTag className={opacity}>
                        {errors[key]}
                    </CustomTag>
                )
            })
        }
    } else {
        return (
            <CustomTag className={opacity}>
                `${errors}`
            </CustomTag>
        )
    }
}

export default CustomError