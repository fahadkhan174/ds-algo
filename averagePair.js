function averagePair(arr, target) {
    // add whatever parameters you deem necessary - good luck!
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let average = (arr[left] + arr[right]) / 2
        if (average === target) {
            return true
        } else if (average > target) {
            right -= 1
        } else if (average < target) {
            left += 1
        }
    }

    return false
}

//sorted array
console.log(averagePair([1, 2, 3, 4, 5], 6))
