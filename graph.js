class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            (vertex) => vertex !== v2
        )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            (vertex) => vertex !== v1
        )
    }

    removeVertex(vertex) {
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    DFSRecursive(start) {
        let result = []
        let visited = {}
        let adjacencyList = this.adjacencyList

        function helper(vertex) {
            if (!vertex) {
                return null
            }

            if (!adjacencyList[vertex]) {
                return null
            }

            visited[vertex] = true
            result.push(vertex)

            adjacencyList[vertex].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    return helper(neighbour)
                }
            })
        }

        helper(start)
        return result
    }

    BFS(start) {
        const queue = [start]
        const result = []
        const visited = {}
        visited[start] = true
        
        let currentVertex

        while (queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })
        }

        return result
    }
}

// let graph = new Graph()
// graph.addVertex('Tokyo')
// graph.addVertex('Dallas')
// graph.addVertex('Aspen')
// graph.addVertex('Hong Kong')

// graph.addEdge('Tokyo', 'Dallas')
// graph.addEdge('Aspen', 'Dallas')
// graph.addEdge('Aspen', 'Hong Kong')
// graph.addEdge('Tokyo', 'Hong Kong')
// console.log(graph)
// graph.removeEdge('Tokyo', 'Dallas')
// console.log(graph)
// graph.removeVertex('Hong Kong')
// console.log(graph)

let g1 = new Graph()
g1.addVertex('A')
g1.addVertex('B')
g1.addVertex('C')
g1.addVertex('D')
g1.addVertex('E')
g1.addVertex('F')

g1.addEdge('A', 'B')
g1.addEdge('A', 'C')
g1.addEdge('B', 'D')
g1.addEdge('C', 'E')
g1.addEdge('D', 'E')
g1.addEdge('D', 'F')
g1.addEdge('E', 'F')

console.log(g1)
console.log(g1.DFSRecursive('A'))
console.log(g1.BFS('A'))
