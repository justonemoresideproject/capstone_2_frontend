import axios from 'axios'

const containsUpperCase = (str) => {
    return Boolean(str.match(/[A-Z]/));
}

export const returnText = (propertyText) => {
    if(typeof(propertyText) !== 'string') return propertyText

    let arrayOfText = Array.from(propertyText)

    arrayOfText.forEach((key, index) => {
        if(key === '_') {
            arrayOfText.splice(index, 2, ` ${arrayOfText[index + 1].toUpperCase()}`) 
        }
        if(containsUpperCase(key) && arrayOfText[index - 1] !== ' ') {
            arrayOfText.splice(index, 0, ' ')
        }
    })

    

    arrayOfText[0] = arrayOfText[0].toUpperCase()

    return arrayOfText.join("")
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

export const returnType = (key) => {
    const lower = key.toLowerCase()
    if(lower.includes('name')) {
        return 'text'
    }

    if(lower.includes('id') || lower.includes('code')) {
        return 'number'
    }

    if(lower.includes('email')) {
        return 'email'
    }

    if(lower.includes('status') || lower.includes('type')) {
        return 'select'
    }

    const keyToTypeObj = {
        "firstName": "text",
        "first_name": "text",
        "last_name": "Last Name",
        "user_id": "User ID",
        "lastName": "Last Name",
        "addressType": "Address Type",
        "notDelivered": "Not Delivered",
        "email": "Email",
        "address": "Address",
        "phone": "Phone",
        "id": "ID",
        "customer_id": "Customer ID",
        "created_at": "Created At",
        "delivered_status": "Delivered Status",
        "address_id": "Address ID",
        "city": "City",
        "state": "State",
        "country": "Country",
        "street": "Street",
        "address_type": "Address Type",
        "postal_code": "Postal Code",
        "shipping_address": "Shipping Address"
    }
}

export const returnSelectOptions = ()