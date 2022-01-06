function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowest = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            console.log(array)
            swap(array, i, lowest)
        }
    }

    return array
}

console.log(selectionSort([2, 6, 3, 90, 4]))
