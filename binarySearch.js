function binarySearch(array, element) {
    // // recursive
    // function helper(arr, left, right, value) {
    //     if (right >= left) {
    //         let middle = Math.floor(left + (right - left) / 2)

    //         if (arr[middle] === value) {
    //             return middle
    //         }

    //         if (arr[middle] > value) {
    //             return helper(arr, left, middle - 1, value)
    //         }
    //         return helper(arr, middle + 1, right, value)
    //     }

    //     return -1
    // }

    // return helper(array, 0, array.length - 1, element)

    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end) / 2)

    while (array[middle] !== element && start <= end) {
        if (element < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }

    return array[middle] === element ? middle : -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))
