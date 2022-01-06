function reverse(str) {
    if (str.length === 0) {
        return ''
    } else {
        return str[str.length - 1] + reverse(str.slice(0, -1))
    }
}

console.log(reverse('hello'))
