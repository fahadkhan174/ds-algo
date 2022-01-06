class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined

        let removedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removedNode.prev
            this.tail.next = null
        }
        removedNode.prev = null
        this.length--

        return removedNode
    }

    shift() {
        if (!this.head) return undefined

        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
        }
        oldHead.next = null
        this.length--

        return oldHead
    }

    unshift(val) {
        if (!this.head) return this.push(val)

        let newNode = new Node(val)
        let oldHead = this.head
        newNode.next = oldHead
        oldHead.prev = newNode
        this.head = newNode
        this.length++

        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        if (index <= Math.floor(this.length / 2)) {
            let counter = 0
            let currentNode = this.head
            while (counter !== index) {
                currentNode = currentNode.next
                counter++
            }
            return currentNode
        } else {
            let counter = this.length - 1
            let currentNode = this.tail
            while (counter !== index) {
                currentNode = currentNode.prev
                counter--
            }
            return currentNode
        }
    }

    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false

        if (index === 0) return !!this.unshift(val)

        if (index === this.length) return !!this.push(val)

        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode

        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined

        if (index === 0) return this.shift()

        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)
        let prevNode = removedNode.prev
        let nextNode = removedNode.next
        prevNode.next = nextNode
        nextNode.prev = prevNode

        removedNode.next = null
        removedNode.prev = null

        this.length--
        return removedNode
    }

    reverse() {
        let temp = null
        let current = this.head

        while (current) {
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }

        if (temp) {
            this.head = temp.prev
        }

        return this
    }
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
console.log(list.push(3))
console.log(list.pop())
console.log(list.get(1))
