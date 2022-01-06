function areThereDuplicates(...arr) {
    // good luck. (supply any arguments you deem necessary.)
    let counter = {}
    for (let item of arr) {
        if (counter[item + '']) {
            return true
        } else {
            counter[item + ''] = (counter[item + ''] || 0) + 1
        }
    }
    return false
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'))
