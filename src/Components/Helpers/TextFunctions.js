import axios from 'axios'

export const returnText = (propertyText) => {
    const propertyToTextObj = {
        "firstName": "First Name",
        "lastName": "Last Name",
        "addressType": "Address Type",
        "email": "Email",
        "address": "Address",
        "phone": "Phone",
        "id": "ID",
        "customer_id": "Customer ID",
        "created_at": "Created At",
        "delivered_status": "Delivered Status",
        "address_id": "Address ID"
    }

    if(propertyToTextObj[propertyText] != undefined) {
        return propertyToTextObj[propertyText]
    }
}

export const returnPrice = (number) => {
    const newNum = +number;

    return `$${newNum.toFixed(2)}`
}

export const isValidEmail = (email) => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailFormat)) {
        return true
    } else {
        return false
    }
}

export const isValidPhoneNumber = async (phoneNumber) => {
    const apiKey = `6urHN612uWorAcwcFdTLEeeHftRvzVhVzBHyUCdG`
    await axios.get(`https://api.numlookupapi.com/v1/validate/${phoneNumber}?apikey=${apiKey}`).then(res => {
        return res.valid ? true : false;
    })
}