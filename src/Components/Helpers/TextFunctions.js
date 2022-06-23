export const returnText = (propertyText) => {
    const propertyToTextObj = {
        "firstName": "First Name",
        "lastName": "Last Name",
        "addressType": "Address Type",
        "email": "Email",
        "address": "Address",
        "phone": "Phone"
    }

    if(propertyToTextObj[propertyText] != undefined) {
        return propertyToTextObj[propertyText]
    }
}

export const returnPrice = (number) => {
    const newNum = +number;

    return newNum.toFixed(2)
}