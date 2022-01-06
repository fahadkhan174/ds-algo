function findLongestSubstring(str) {
    // add whatever parameters you deem necessary - good luck!
    let counter = {}
    let longest = 0
    let start = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (counter[char]) {
            start = Math.max(start, counter[char])
        }
        longest = Math.max(longest, i - start + 1)

        console.log(i, start, longest, counter[char])
        counter[char] = i
    }

    return longest
}

console.log(findLongestSubstring('thisisawesome'))
