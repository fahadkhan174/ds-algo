function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function pivot(arr, start = 0, end = arr.length) {
    let pivot = arr[start]
    let swapIdx = start
    for (let i = start; i < end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, swapIdx, start)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //rigth
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

console.log(quickSort([3, 6, 2, 1, 9]))
