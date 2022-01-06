function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false
    }

    let obj1 = {}
    let obj2 = {}
    for (let value of array1) {
        obj1[value] = (obj1[value] || 0) + 1
    }
    for (let value of array2) {
        obj2[value] = (obj2[value] || 0) + 1
    }
    // console.log(obj1, obj2)
    for (let key in obj1) {
        if (!(key ** 2 in obj2) || obj1[key ** 2] !== obj2[key]) {
            return false
        }
    }
    return true
}

console.log(same([1, 2, 1, 3], [1, 9, 1, 4]))
