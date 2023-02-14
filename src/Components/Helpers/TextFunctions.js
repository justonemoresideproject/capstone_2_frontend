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
    const lower = `${key}`.toLowerCase()

    // console.log(`returnType lower: ${lower}`)

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
        "last_name": "text",
        "user_id": "number",
        "lastName": "text",
        "addressType": "select",
        "email": "email",
        "address": "text",
        "phone": "number",
        "id": "number",
        "customer_id": "number",
        "created_at": "date",
        "delivered_status": "select",
        "address_id": "number",
        "city": "text",
        "state": "text",
        "country": "text",
        "street": "text",
        "address_type": "select",
        "postal_code": "number",
        "shipping_address": "text"
    }

    return keyToTypeObj[key] || "text"
}

export const returnCorrectData = (formData) => {
    const formKeys = Object.keys(formData)

    const keyToTypeObj = {
        "firstName": "string",
        "first_name": "string",
        "last_name": "string",
        "user_id": "number",
        "lastName": "string",
        "addressType": "string",
        "email": "string",
        "address": "string",
        "phone": "number",
        "id": "number",
        "customer_id": "number",
        "created_at": "string",
        "delivered_status": "string",
        "address_id": "number",
        "city": "string",
        "state": "string",
        "country": "string",
        "street": "string",
        "address_type": "string",
        "postal_code": "number",
        "shipping_address": "string",
        "addressId": "number",
        "address_id": "number"
    }

    // key => determine what key data should be => convert form data

    formKeys.forEach(key => {
        // key to type object, returns type, translates key data to type

        const type = keyToTypeObj[key]
        switch(type) {
            case "string":
                formData[key] = String(formData[key])

            case "number":
                formData[key] = Number(formData[key])
        }
    })

    console.log(formData)
    return formData
}

export const returnCorrectValue = (name, value) => {
    const keyToTypeObj = {
        "firstName": "string",
        "first_name": "string",
        "last_name": "string",
        "user_id": "number",
        "lastName": "string",
        "addressType": "string",
        "email": "string",
        "address": "string",
        "phone": "number",
        "id": "number",
        "customer_id": "number",
        "created_at": "string",
        "delivered_status": "string",
        "address_id": "number",
        "city": "string",
        "state": "string",
        "country": "string",
        "street": "string",
        "address_type": "string",
        "postal_code": "number",
        "shipping_address": "string",
        "addressId": "number",
        "address_id": "number"
    }

    const type = keyToTypeObj[name]

    switch(type) {
        case "string":
            return String(value)

        case "number":
            return Number(value)
    }
}