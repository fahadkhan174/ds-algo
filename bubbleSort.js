function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function bubbleSort(array) {
    let noSwaps = true
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(array, array[j], array[j + 1])
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                noSwaps = false
            }
        }
        if (noSwaps) {
            break
        }
    }
    return array
}

console.log(bubbleSort([1, 2, 3, 4, 5, 9]))
