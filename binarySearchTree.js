class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (true) {
                if (val < current.val) {
                    if (!current.left) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (val > current.val) {
                    if (!current.right) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                } else {
                    return undefined
                }
            }
        }
    }

    find(val) {
        if (!this.root) return false

        let current = this.root
        let found = false

        while (current && !found) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }
        return found
    }

    bfs() {
        let data = []
        let queue = []
        let current = this.root
        queue.push(current)

        while (queue.length) {
            current = queue.shift()
            data.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }

        return data
    }

    dfsPreOrder() {
        let data = []

        function traverse(current) {
            data.push(current.val)
            if (current.left) traverse(current.left)
            if (current.right) traverse(current.right)
        }

        let current = this.root
        traverse(current)

        return data
    }

    dfsPostOrder() {
        let data = []

        function traverse(current) {
            if (current.left) traverse(current.left)
            if (current.right) traverse(current.right)
            data.push(current.val)
        }

        let current = this.root
        traverse(current)

        return data
    }

    dfsInOrder() {
        let data = []

        function traverse(current) {
            if (current.left) traverse(current.left)
            data.push(current.val)
            if (current.right) traverse(current.right)
        }

        let current = this.root
        traverse(current)

        return data
    }
}

let tree = new BST()

console.log(tree.insert(10))
console.log(tree.insert(11))
console.log(tree.insert(19))
console.log(tree.insert(1))
console.log(tree.insert(10))
console.log(tree.find(1))
console.log(tree.bfs())
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInOrder())
