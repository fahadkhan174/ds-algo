// function to return max sum of consecutive n numbers in an array

// function maxSum(arr, num) {
//     if (num > arr.length === 0) return null

//     let max = -Infinity

//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let temp = 0
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j]
//         }
//         if (temp > max) {
//             max = temp
//         }
//     }
//     return max

// }

//REFACTOR using sliding window

function maxSum(arr, num) {
    if (num > arr.length === 0) return null

    let maxSum = -Infinity
    let tempSum = 0

    for (let i = 0; i < num; i++) {
        tempSum += arr[i]
    }

    maxSum = tempSum

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}

console.log(maxSum([1, 2, 3, 4, 8, 6, 7, 4, 4], 2))
