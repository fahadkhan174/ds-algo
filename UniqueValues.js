// function to return unique values in a sorted array
function uniqueValues(arr) {
    // let counter = {}
    // for (let item of arr) {
    //     counter[item] = (counter[item] || 0) + 1
    // }
    // return Object.keys(counter).length

    // REFACTORED using multiple counter
    if (arr.length === 0) return 0

    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }

    return i + 1
}

console.log(uniqueValues([-2, -1, 0, 1, 1, 1, 1, 1, 4, 7, 7, 7]))
