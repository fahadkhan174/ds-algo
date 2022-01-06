function isPalendrome(str) {
    // function reverse(newStr) {
    //     if (newStr.length === 0) {
    //         return ''
    //     } else {
    //         return newStr[newStr.length - 1] + reverse(newStr.slice(0, -1))
    //     }
    // }

    // let reverseStr = reverse(str)
    // return str === reverseStr

    // through pure recursion

    if (str.length === 1) return true
    if (str.length === 2) return str[0] === str[1]
    if (str[0] === str.slice(-1)) return isPalendrome(str.slice(1, -1))
    return false
}

console.log(isPalendrome('hell'))
