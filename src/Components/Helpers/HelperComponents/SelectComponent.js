import React from 'react' 

function SelectComponent ({name, handleChange, value}) {
    if(name === "address_type" || name === "addressType") {
        return (
            <select
                className="selectInput"
                name="addressType"
                onChange={handleChange}>
                <option value="home">
                    Home
                </option>
                <option value="apartment">
                    Apartment
                </option>
                <option value="business">
                    Business
                </option>
            </select>
        )
    }

    if(name === "deliveredStatus" || name === "delivered_status") {
        return (
            <select
                className="selectInput"
                name={name}
                onChange={handleChange}>
                    <option value="notDelivered">
                        Not Delivered
                    </option>
                    <option value="delivered">
                        Delivered
                    </option>
            </select>
        )
    }
}

export default SelectComponent