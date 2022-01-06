function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i]
        for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = currentValue
        console.log(array)
    }

    return array
}

console.log(insertionSort([2, 4, 1, 7, 9, 3]))
