class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val)
        this.bubbleUp()
    }

    bubbleUp() {
        let childIndex = this.values.length - 1

        while (childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2)
            if (this.values[childIndex] <= this.values[parentIndex]) {
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

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
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
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
console.log(heap.insert(55))
console.log(heap.insert(1))
console.log(heap.insert(119))
