function flatten(oldArray) {
    let newArray = []

    for (let i = 0; i < oldArray.length; i++) {
        if (Array.isArray(oldArray[i])) {
            newArray = newArray.concat(flatten(oldArray[i]))
        } else {
            newArray.push(oldArray[i])
        }
    }

    return newArray
}

console.log(flatten([1, [2, 3], 4]))
