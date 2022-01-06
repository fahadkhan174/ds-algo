function same(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let counter1 = {}
    // let counter2 = {}

    // for (let char of str1) {
    //     counter1[char] = (counter1[char] || 0) + 1
    // }
    // for (let char of str2) {
    //     counter2[char] = (counter2[char] || 0) + 1
    // }

    // for (let key in counter1) {
    //     if (!counter2[key] || counter1[key] !== counter2[key]) {
    //         return false
    //     }
    // }
    // return true

    // REFACTORED VERSION

    for (let char of str1) {
        counter1[char] = (counter1[char] || 0) + 1
    }

    for (let char of str2) {
        if (!counter1[char]) {
            return false
        } else {
            counter1[char] = counter1[char] - 1
        }
    }
    return true
}

console.log(same('text', 'extt'))
