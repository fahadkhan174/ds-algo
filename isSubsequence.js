function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let i = 0
    let j = 0
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++
        if (i === str1.length) return true
        j++
    }
    return false
}

console.log(isSubsequence('hello', 'helloo there'))
