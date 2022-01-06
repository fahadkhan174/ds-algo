function productOfArray(array) {

    function helper(newArray) {
        if (newArray.length === 0) {
            return 1
        } else {
            return newArray[0] * helper(newArray.slice(1))
        }
    }

    return helper(array)
}

console.log(productOfArray([1, 2, 1, 4]))
