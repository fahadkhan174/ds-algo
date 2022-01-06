function someRecursive(array, callback) {
    if (array.length === 0) {
        return false
    } else if (callback(array[0])) {
        return true
    } else {
        return someRecursive(array.slice(1), callback)
    }
}

console.log(someRecursive([1, 3, 3], (item) => item % 2 === 0))
