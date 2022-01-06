function recursiveRange(num) {
    function helper(newNum) {
        if (newNum > 0) {
            return newNum + helper(newNum - 1)
        } else {
            return 0
        }
    }

    return helper(num)
}

console.log(recursiveRange(3))
