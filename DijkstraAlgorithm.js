const PriorityQueue = require('./priorityQueue')

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight })
        this.adjacencyList[v2].push({ node: v1, weight })
    }

    dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let smallest
        let path = []

        //build initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }

            previous[vertex] = null
        }

        //as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val

            if (smallest === finish) {
                // we are done, build the path
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbour in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbour]
                    // calculate new distance to neihbouring node
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbour = nextNode.node
                    if (candidate < distances[nextNeighbour]) {
                        //updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate
                        //updating previous - how we got to neighbour
                        previous[nextNeighbour] = smallest
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbour, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

let graph = new WeightedGraph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

console.log(graph.dijkstra('A', 'E'))
