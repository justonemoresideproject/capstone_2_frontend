// Takes an object of products and the number of products per row. Returns 
/**
 * 
 * @param {products} object 
 * @param {rowCount} number of products per row  
 * @returns an array of arrays with number of product objects per array
 */
export const returnTable = (object, rowCount) => {
    const keys = Object.keys(object)

    const returnArr = []
    let innerArr = []

    let innerArrCount = 0;

    for(let key in keys) {
        if(innerArrCount >= rowCount) {
            returnArr.push(innerArr)
            innerArr = []
            innerArrCount = 0;
        }
        innerArr.push(object[keys[key]])
        innerArrCount++
    }
    returnArr.push(innerArr)

    return returnArr
}

/**
 * 
 * @param {products} object containing products
 * @param {numProducts} number of desired returning products
 * 
 * @returns an object of products
 */
export const randomProducts = (products, numProducts) => {
    const productKeys = Object.keys(products)
    const returnObj = {}

    let i = 0;

    while(i < numProducts) {
        const randomId = Math.ceil(Math.random() * productKeys.length)

        if(returnObj[randomId] == undefined) {
            returnObj[randomId] = products[randomId]
            i++
        }
    }

    return returnObj;
}

export const removeDecimal = (number) => {
    return number * 100
}

export const compareObjects = (objectOne, objectTwo) => {
    const objectOneKeys = Object.keys(objectOne)
    const objectTwoKeys = Object.keys(objectTwo)

    if(objectOneKeys.length !== objectTwoKeys.length) return false

    objectOneKeys.forEach(key => {
        if(objectOne[key] !== objectTwo[key]) return false
    })

    return true
}

export const createNewObject = (object) => {
    const newObj = {}

    Object.keys(object).forEach(key => {
        newObj[key] = object[key]
    })

    return newObj
}