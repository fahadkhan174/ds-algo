const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz',
                    },
                },
            },
        },
    },
}

function collectStrings(obj) {
    let array = []

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            array.push(obj[key])
        } else if (typeof obj[key] === 'object') {
            array = array.concat(collectStrings(obj[key]))
        }
    }

    return array
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
