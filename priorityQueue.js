class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let childIndex = this.values.length - 1
        const element = this.values[childIndex]

        while (childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2)
            let parent = this.values[parentIndex]

            if (element.priority >= parent.priority) {
                break
            } else {
                let temp = this.values[parentIndex]
                this.values[parentIndex] = this.values[childIndex]
                this.values[childIndex] = temp
                childIndex = parentIndex
            }
        }

        return this.values
    }

    dequeue() {
        const min = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return min
    }

    sinkDown() {
        let index = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIdx = 2 * index + 1
            let rightChildIdx = 2 * index + 2
            let leftChild
            let rightChild
            let swap = null
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }
            if (swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

let ER = new PriorityQueue()
ER.enqueue('common cold', 5)
ER.enqueue('gunshot wound', 1)
ER.enqueue('high fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass in foot', 3)
ER.enqueue('broken arm 2', 2)


console.log(ER)
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
