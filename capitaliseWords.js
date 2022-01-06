function capitalizeWords(array) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 1) {
        return [array[0].toUpperCase()]
    }

    let result = capitalizeWords(array.slice(0, -1))
    result.push(array.slice(array.length - 1)[0].toUpperCase())
    return result
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(capitalizeWords(['hello', 'world']))
