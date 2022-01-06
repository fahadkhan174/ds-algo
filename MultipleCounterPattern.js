// finds first pair where sum 0 , remember it is a sorted array here

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum < 0) {
            left++
        } else if (sum > 0) {
            right--
        }
    }

    return 'NOT FOUND'
}

console.log(sumZero([-3, -2, -1, 0, 4, 5, 10]))
