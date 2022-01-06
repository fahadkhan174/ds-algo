class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined

        let temp = this.head
        let pre = temp

        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return temp
    }

    shift() {
        if (!this.head) return undefined

        let currentHead = this.head
        this.head = currentHead.next
        this.length--

        if (this.length === 0) {
            this.tail = null
        }

        return currentHead
    }

    unshift(value) {
        if (!this.head) return this.push(value)

        let newHead = new Node(value)
        newHead.next = this.head
        this.head = newHead
        this.length++

        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }

        return current
    }

    set(index, value) {
        let node = this.get(index)
        if (node) {
            node.val = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false

        if (index === this.length) return !!this.push(value)

        if (index === 0) return !!this.unshift(value)

        let newNode = new Node(value)
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next
        prevNode.next = newNode
        newNode.next = nextNode
        this.length++

        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined

        if (index === this.length - 1) return this.pop()

        if (index === 0) return this.shift()

        let prevNode = this.get(index - 1)
        let removedNode = prevNode.next
        prevNode.next = removedNode.next
        this.length--

        return removedNode
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next = null

        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }
}

let list = new SinglyLinkedList()
list.push(1)
list.push(2)
console.log(list.push(3))
console.log(list.pop())
console.log(list.shift())
console.log(list.shift())
console.log(list)
console.log(list.unshift(10))
console.log(list.unshift(50))
console.log(list.unshift(100))
console.log(list.get(1))
console.log(list.set(1, 'second'))
console.log(list.insert(1, 'new second'))
console.log(list.remove(1))
console.log(list.reverse())
