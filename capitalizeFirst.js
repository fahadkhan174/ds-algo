// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(array) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substring(1)]
    }

    const result = capitalizeFirst(array.slice(0, -1))
    const string =
        array.slice(array.length - 1)[0][0].toUpperCase() +
        array.slice(array.length - 1)[0].substring(1)
    result.push(string)
    return result
}

console.log(capitalizeFirst(['car', 'taco', 'banana']))
