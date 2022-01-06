class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value) {
        let newNode = new Node(value)

        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.last
            newNode.next = temp
            this.last = newNode
        }

        return ++this.size
    }

    pop() {
        if (!this.first) return null

        let temp = this.last
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.last = temp.next
            temp.next = null
        }

        this.size--
        return temp.val
    }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
