function merge(arr1, arr2) {
    let results = []

    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }

    return results
}

function mergeSort(array) {
    if (array.length <= 1) return array
    let middle = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle))

    return merge(left, right)
}

console.log(mergeSort([12, 1, 4, 9, 3, 5]))
