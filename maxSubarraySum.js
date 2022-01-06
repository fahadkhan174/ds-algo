function maxSubarraySum(array, num) {
    // add whatever parameters you deem necessary - good luck!

    if (num > array.length) return null
    let tempSum = 0
    let maxSum = 0
    for (let i = 0; i < num; i++) {
        tempSum += array[i]
    }

    maxSum = tempSum

    for (let i = num; i < array.length; i++) {
        tempSum = tempSum + array[i] - array[i - num]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}

console.log(maxSubarraySum([100, 200, 300, 100, 600, 500], 8))
