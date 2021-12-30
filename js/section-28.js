'use strict'
console.log('section-28')

// Dijkastra's - Intro
// (dikestras)
//algo searches across a graph using a priority queue(binary heap)

// Objectives:
//understand the importance of dijkstra's algo
//implement a weighted graph
//walk through the steps of dijkstra
//implement dijkstra using a naive priority queue
//implement dijkstras using a binary heap priority queue


//What Is Dijkstra's Algorithm?
//one of the most famous and widely used algorithms around(used very often)
//finds the shortest path between two verticies on a graph
//what the fastest way to get from point a to point b?


//Who Was Dijkstra?
//edsger dijkstra was a dutch programmer physicist, essayint
//he helped to advance the field of computer science from an 'art' to an academic discipline
//many of his descoveries and algotithms are still commonly used today


//Why Is It Useful?
//gps - finding fastest route
//Nerwork Routing - finds open shortest path for data
//Biology - used to model the spread of viruses among humans
//Airline - finding cheapest route to your destination(duration, time, distance)
//Biology - used to model the spread of viruses among humans (projections)
//And many more...



//--------------------------------------------------------------------------------------------------------------------------------

// Writing A Weighted Graph


// class WGraph {
//     constructor() {
//         this.list = {}
//     }
//     addVertex(vertex) {
//         //if it doesn't already exist we initialize it to an empty array
//         if (!this.list[vertex]) { this.list[vertex] = [] }
//     }
//     addEdge(vertex1, vertex2, weight) {
//         //this return in array structure but still in key value pair format (interesting not sure create issue, or just adjust algo)
//         // this.list[vertex1][vertex2] = weight
//         // this.list[vertex2][vertex1] = weight

//         this.list[vertex1].push({ node: vertex2, weight: weight })
//         this.list[vertex2].push({ node: vertex1, weight: weight })

//     }
// }




// let wGraph = new WGraph()


// wGraph.addVertex('A')
// wGraph.addVertex('B')
// wGraph.addVertex('C')
// wGraph.addVertex('D')
// wGraph.addVertex('E')
// wGraph.addVertex('F')


// wGraph.addEdge('A', 'B', 4)
// wGraph.addEdge('A', 'C', 2)
// wGraph.addEdge('B', 'E', 3)
// wGraph.addEdge('C', 'D', 2)
// wGraph.addEdge('C', 'F', 4)
// wGraph.addEdge('D', 'F', 1)
// wGraph.addEdge('D', 'E', 3)
// wGraph.addEdge('F', 'E', 1)


// console.log(wGraph)


//weight is only set when a connection/path between two verticies is created else dosen't exist





//--------------------------------------------------------------------------------------------------------------------------------

// Walking Through The Algoritm

//The Approuach:
//every time we look to visit a new node, we pick the node with the smalles known destace to visit first (from starting point??)
//---distance from it self to itself (aka always or would think always 0)
//once we've moved to the node we're going to visit, we look at each of its neighbors
//for each neighboring node, we calculate the distance by summing the total edges that lead to
// --the node we're checking from the starting node
//if the new total distance to a node is less than the previous total, we store the new shorter distance for that node






//structure for this
//we start by initializing all to infinity as we do not know yet shortest distante to go to any
// ---(all but a as distance from a to a is 0)

//after every new check/vertex passed in we again use this to choose the smallest number aka vertex path to look at
// Vertex   Shortest Dist From A
//    A             0
//    B             infinity, 4,
//    C             infinity, 2,
//    D             infinity,    4,
//    E             infinity,        7,  6,
//    F             infinity,            5,
//we only update the path if its less than else we ignore it as we already have one for that total distance


//keep track of what vertecies we have visited
//we only move to the unexplored verticies
//visited [A, C, B, D, F]



//helps us keep track of the path we are taking (where did we come from ?)
// let previous {
//     'A': null,
//     'B': null, 'A'
//     'C': null, 'C'
//     'D': null,     'C'
//     'E': null,          'F'
//     'F': null,     'C'  'D'
// }

//this is all assuming graph is undirected(if directed think be very diff or many not maybe just more checks to insure path)
//its constantly calculating the total distance it moves forward one and add up all previous to cal path
//and choosing the smallest of possible path

// every time through we picked the current smallest distant (to current vertex) that has not been visited
// we explore each of its neighbors and we calc the new shortest distance to each neighbor
//--if smaller updata in short distance strucuter and update its round in previsou strucure(where it came from )
// the previous now leaves up with the shortest path to get to any vertex from starting vertex (this case "A")
//---all left in refrence


//--------------------------------------------------------------------------------------------------------------------------------

// Simple Priority Queue 

// if thousand of nodes we cant just compare all to find the smalles thats where the priority queue comes in
//where instead of comparring all prio level the min heap will do it for us in the backgroud upon every insertion to it
//this way we always have access to the smalles in prio value (aka highest priority) - or at least that my thinking

//simplified prio queue simply for example (preferably we'd want a real queue, binary heap)
//example using array not defined queue with node's
class PriorityQueue {
    constructor() {
        this.values = []
    }
    enQueue(val, prio) {
        //instead of node with val and prio list we just push object with those values
        this.values.push({ val, prio }) //new sytac stuff is the same as below ( when key is same name as thing want to store)
        // this.values.push({ val: val, prio: prio })
        this.sort()
    }
    deQueue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort(function (a, b) {
            return a.prio - b.prio
        })
    }
}

// let prioList = new PriorityQueue()

// prioList.enQueue('A', 2)
// prioList.enQueue('B', 3)
// prioList.enQueue('C', 1)
// prioList.enQueue('D', 5)
// prioList.enQueue('D', 0)

// console.log(prioList)


//--------------------------------------------------------------------------------------------------------------------------------

// Dijkstra's Algorithms


//graph we will be traversing
// wGraph
//prio queue we will use
// let prioList = new PriorityQueue()


class WGraph {
    constructor() {
        this.list = {}
    }
    addVertex(vertex) {
        //if it doesn't already exist we initialize it to an empty array
        if (!this.list[vertex]) { this.list[vertex] = [] }
    }
    //accepts 3 input the two vertecies you'd like to link and the weight of their edge
    addEdge(vertex1, vertex2, weight) {
        //this return in array structure but still in key value pair format (interesting not sure create issue, or just adjust algo)
        // this.list[vertex1][vertex2] = weight
        // this.list[vertex2][vertex1] = weight

        this.list[vertex1].push({ node: vertex2, weight: weight })
        this.list[vertex2].push({ node: vertex1, weight: weight })

    }
    //my own function to print out the shortest route (actually taken to provide shortest path, the vertex traversal)
    //though what i use as input is not great for this or the function it comes from
    route(route) {
        let routeDistances = route[0]
        let routePrevious = route[1]
        let routeEnd = route[2]

        let visited = {}
        let order = new PriorityQueue()
        let shortestRoute = []

        for (let item in routeDistances) {
            order.enQueue(item, routeDistances[item])
        }
        for (let item in routePrevious) {
            if (routePrevious[item]) {
                visited[routePrevious[item]] = true
            }
        }
        for (let item in order.values) {
            if (visited[order.values[item].val]) {
                shortestRoute.push(order.values[item].val)
            }
        }
        //push end onto array
        shortestRoute.push(routeEnd)
        //return shotest Route array showing traversal of nodes from start to end point
        return shortestRoute
    }
    //accepts two values the wanted starting point and end point
    shortestPath(start, end) {
        //keeps track of what vertecies we have visited, where we have explored(simply a accumilator)
        let visited = []
        //keeps track of the vertex the current one came from, and the weight of its path
        let previous = {}
        //keeps track and in order the shortest path from any one node to another(from each vertex)
        // --used to pull the vertex child with shotest weight in path to end vertex
        let prioQ = new PriorityQueue()
        //keep track of the shortest accumilated weight of start to other vertex on way to end
        let distances = {}
        //we loop over all key to initialize thier value to infinity
        for (let vertex in this.list) {
            //check if the vertex = the start vertex passed in 
            if (vertex === start) {
                //we initialize its distance to 0 (as distance from start to start is 0/no movement) 
                distances[vertex] = 0
                //adding start to queue(to initiate later loop)
                prioQ.enQueue(vertex, distances[vertex])
            }
            else {
                //initialize thier vertex/key to infinity(to later eval and add in shortest distance)
                distances[vertex] = Infinity
                //add vertex/key and initialize its previous vertex to null(store for later eval and remove hihgest prio, aka shortest)
                prioQ.enQueue(vertex, Infinity)
                //add vertex/key and initialize its previous vertex to null(as no movement yet)
            }
            //initiates all vertex previous value to null(as no movement yet)
            previous[vertex] = null
        }
        let routeAccess = this

        //looping continues while the queue is Not empty
        while (prioQ.values.length) {
            //capture prio list vertex with shortest weight/highest prio removed from queue(change to next vertex with shortest weight)
            let currentVertex = prioQ.deQueue()
            //base case/short circut if our current vertex = end vertex we return as no more movement needed
            if (currentVertex.val === end) {
                // console.log(visited)
                // we return distance as no more movement needed 
                let capture = [distances, previous, end]
                return routeAccess.route(capture)
            }
            //if the current vertex is not = to end vertex
            else {
                //we push the current vertex key/val to visited array 
                visited.push(currentVertex.val)
                //we capture the list of neighbor corresponding to the current vertex
                let vertexNeighbors = this.list[currentVertex.val]
                //we loop over all neighbors in the list
                for (let item of vertexNeighbors) {
                    //initialy sum to the weight/distance of the current vertex
                    let sum = distances[currentVertex.val]
                    //then we add the distance or item/neighbor's weight to it 
                    //--creates total weight/distance getting from current vertex to this neighbor
                    // -----(this includes distance traveled prev as would be stored in the distance structure)
                    sum += item.weight
                    //check if the sum is less than the item's/neighbor curret distance(accumilated weights)
                    if (sum < distances[item.node]) {
                        //we update that item/neighbor's distance to the weight/distance sum
                        distances[item.node] = sum
                        //we update that item/neighbor's previous vertex(where it came from) to the current vertex
                        previous[item.node] = currentVertex.val
                        //we add that item/neighbor into the prio queue with its new accumilated distance(sum)
                        prioQ.enQueue(item.node, sum)
                    }
                }
            }
        }
    }
}

//i notice my previous structure is correct and finding shortest path, ok but questiong is what do we return here 
//if its the visited then my code is not quite right (or should have i marked the visited as that to avoid any repeats
//though is pseudo its said to be a array not a object where we could use to compare, mentioned as more of storage then use??)

//so we return the distance, guess just wants to know shortes path possible in weight not so much the actual vertex to follw
// though feel that might be something we want to return or log as well challange to our selfs thinks that usefull

//also in hindsight for all the object and when passing key value pairs in array aswell, we want to have a standard
// accross all of them though may vary dependent on whats needed but for same data on types of data 
// have all the same keys to refrence to as to avoid confusion and having to look back
// --ex. where in some wether array or object some we used .node to refrence vertex and in other .val
//---though they both refrenced the same things being the vertex key this way less likely to be passing in underfines via 
//-----refrencing a value that dosent exist ect...

//rn im not really sure the purpose of the visited array get it collects the vertex visited but for what as we dont use 
//--it in any evals we dont return it as far as i know so aside from collecting visited vertecies does nothing else


//overall think i did greate, took some liberties to return not only the distances but the acutal path taken vertex to vertex
//--from start to finish (thought that be handy thing to return)


//so turn's out does want the array of traversal to be returned i already have that noice, though not a huge fan of how i got there
//def better way and prob one where its all contained in one method

let wGraph = new WGraph()


wGraph.addVertex('C')
wGraph.addVertex('E')
wGraph.addVertex('B')
wGraph.addVertex('A')
wGraph.addVertex('F')
wGraph.addVertex('D')


wGraph.addEdge('A', 'B', 4)
wGraph.addEdge('A', 'C', 2)
wGraph.addEdge('B', 'E', 3)
wGraph.addEdge('C', 'D', 2)
wGraph.addEdge('C', 'F', 4)
wGraph.addEdge('D', 'E', 3)
wGraph.addEdge('D', 'F', 1)
wGraph.addEdge('F', 'E', 1)


// console.log(wGraph)
//all return is fine aside the things actually want right the route fix
// console.log(wGraph.shortestPath('A', 'F'))
//so our route , return of the path is broken dosent hold up


//pseudo -
//function shold accepts a starting and ending vertex
//create an objecty(distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the
//--starting vertx which should have a value of 0
//after setting a value in the distances object, add each vertex, which should have a priotity of 0 becuase that were we begin
//create another object called previous set each key to be every vertex in the adjacency list with valus of null
//start looping as long as there is anything in the priority queue
//-dequeue a vertex from the prioirity queue
//-if that vertex is the same as the ending vertex - we are done
//-else loop through each value in the adjacency list at that vertex
//--calculate the distance to that vertex from the starting vertex
//--if the distance is less than what is currently stored in our distances object
//----update the distances object with new lower distance
//----update the previous object to countain that vertex
//----enqueue the vertex with that total distance from the start node





//--------------------------------------------------------------------------------------------------------------------------------

class ColtGraph {
    constructor() {
        this.list = {}
    }
    addVertex(vertex) {
        //if it doesn't already exist we initialize it to an empty array
        if (!this.list[vertex]) { this.list[vertex] = [] }
    }
    //accepts 3 input the two vertecies you'd like to link and the weight of their edge
    addEdge(vertex1, vertex2, weight) {
        //this return in array structure but still in key value pair format (interesting not sure create issue, or just adjust algo)
        // this.list[vertex1][vertex2] = weight
        // this.list[vertex2][vertex1] = weight

        this.list[vertex1].push({ node: vertex2, weight: weight })
        this.list[vertex2].push({ node: vertex1, weight: weight })

    }
    // colt shortest path function 
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let smallest
        let path = []

        for (let vertex in this.list) {
            if (vertex === start) {
                distances[vertex] = 0
                nodes.enQueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enQueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        //****************************  begins to differ here  ************************
        //realy like the logic behind creating path array(wicked)

        while (nodes.values.length) {
            //here made things little cleaner by using .val at end something i didint in mine then had to use .val all elsewhere
            smallest = nodes.deQueue().val
            //checks if the curret smalles/vertex is equal to the finish vertex
            if (smallest === finish) {
                //we loop over all previous values (starting from the vertex matching finish)
                while (previous[smallest]) {
                    //we push vertex key into path array
                    path.push(smallest)
                    //update smalles key to its previous value inside previous object
                    smallest = previous[smallest]
                } break
            }

            //checkes that value for smallest/currentVertex or if the its value in distances structure is NOT = to Infinity
            //why? initail insure valid value, or that its distance value has been changed ok
            //but why both ((id like to make and try different variations of this , each one , just an else ect..)
            //--and compare all the )
            if (smallest || distances[smallest] !== Infinity) {
                // looping over the main list to access each vertecies list of connections
                for (let neighbor in this.list[smallest]) {
                    //capture then neighboring/connected node/vertex
                    let nextnode = this.list[smallest][neighbor]
                    //calc new distance to neighboring node from current vertex
                    let candidate = distances[smallest] + nextnode.weight
                    //capture actual key of neighbor
                    let nextNeighbor = nextnode.node
                    //check in the new calc'ed distance is shorter than what's store in that vertex distance structure
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor (aka replace its infinity or larger distance with this smaller one)
                        distances[nextNeighbor] = candidate
                        //updating previous - how we got to neighbor(aka replace null to current/smalles vertex than got us to neighbors)
                        previous[nextNeighbor] = smallest
                        //enqueue to prio Q with new prio, new prio being that new shortest distance
                        nodes.enQueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        //we return path traversal from start to finish and reverse it (as build from end to start)
        return path.concat(smallest).reverse()
    }
}


// ****GENIUS in bulding the route array showing traversal from start to finish instead of all function loop ect.. 
// --i did in out route function all we have to do is WORK BACKWARD IN THE PREVIOUS structure starting AT THE FINISH    
//---cuase it only give on one full path to follow from start to fininsh and finish to start 
//----so we start at end vertex pass in get its value in previous pass that in get its previous and so forth looping 
//-- and pushing them to array (and can either add from the front or simply reverse it at end)
//its genius we know theres only one full path to it so we works backwards no need to eveal between vertex based on prio
//-non on that matters here just follow it frrom the back to front 
// (we even have our loop stop with first vertex previous set to null as nothing left)





let coltGraph = new ColtGraph()


coltGraph.addVertex('C')
coltGraph.addVertex('E')
coltGraph.addVertex('B')
coltGraph.addVertex('A')
coltGraph.addVertex('F')
coltGraph.addVertex('D')


coltGraph.addEdge('A', 'B', 4)
coltGraph.addEdge('A', 'C', 2)
coltGraph.addEdge('B', 'E', 3)
coltGraph.addEdge('C', 'D', 2)
coltGraph.addEdge('C', 'F', 4)
coltGraph.addEdge('D', 'E', 3)
coltGraph.addEdge('D', 'F', 1)
coltGraph.addEdge('F', 'E', 1)


console.log(coltGraph)

console.log(coltGraph.Dijkstra('A', 'F'))







//--------------------------------------------------------------------------------------------------------------------------------

//previous queue used - here for comparison
// class PriorityQueue {
//     constructor() {
//         this.values = [] //still an array that doesnt change
//     }
//     enQueue(val, prio) {
//         this.values.push({ val, prio })
//         this.sort()
//     }
//     deQueue() {
//         return this.values.shift()
//couldn't we still have done the same things here that we did with the nodes where removal pop capture and swap the bubble????
//     }
//     sort() {
//         this.values.sort(function (a, b) {
//             return a.prio - b.prio
//         })
//     }
// }



//--------------------------------------------------------------------------------------------------------------------------------

// Upgraded Prio Q
//actually feel its cleanner


class UNode {
    constructor(val, prio) {
        this.val = val
        this.prio = prio
    }
}
//using a binary min heap
class UQueue {
    constructor() {
        this.values = []
    }
    enQueue(val, prio) {
        let newNode = new UNode(val, prio)
        this.values.push(newNode)
        const length = this.values.length

        if (length === 1) { return this.values }

        let childIndex = length - 1
        while (true) {
            let child = this.values[childIndex]
            let parentIndex = Math.floor((childIndex) / 2)
            let parent = this.values[parentIndex]
            if (parent) {
                if (child.prio >= parent.prio) {
                    break
                }
            }
            this.values[childIndex] = parent
            this.values[parentIndex] = child
            childIndex = parentIndex
        }
        return this.values
    }
    deQueue() {
        let removed = this.values[0]
        let parent = this.values.pop()
        if (this.values.length < 1) { return removed }
        this.values[0] = parent
        let parentIndex = 0
        while (true) {
            let child1Index = (parentIndex * 2) + 1
            let child2Index = (parentIndex * 2) + 2
            let child1 = this.values[child1Index]
            let child2 = this.values[child2Index]
            let test = Infinity
            let swap = Infinity
            if (child1) {
                if (parent.prio > child1.prio) {
                    swap = child1Index
                    test = child1.prio
                }
            }
            if (child2) {
                if (parent.prio > child2.prio) {
                    swap = (test < child2.prio) ? swap : child2Index
                }
            }
            if (swap === Infinity) break
            this.values[parentIndex] = this.values[swap]
            this.values[swap] = parent
            parentIndex = swap
        }
        return removed
    }
}

class UGraph {
    constructor() {
        this.list = []
    }
    addVertex(vertex) {
        if (!this.list[vertex]) { this.list[vertex] = [] }
    }
    addEdge(vertex1, vertex2, weight) {

        this.list[vertex1].push({ node: vertex2, weight: weight })
        this.list[vertex2].push({ node: vertex1, weight: weight })

    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let smallest
        let path = []

        for (let vertex in this.list) {
            if (vertex === start) {
                distances[vertex] = 0
                nodes.enQueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enQueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
        while (nodes.values.length) {
            smallest = nodes.deQueue().val
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                } break
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.list[smallest]) {
                    let nextnode = this.list[smallest][neighbor]
                    let candidate = distances[smallest] + nextnode.weight
                    let nextNeighbor = nextnode.node
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate
                        previous[nextNeighbor] = smallest
                        nodes.enQueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

let uGraph = new UGraph()


uGraph.addVertex('C')
uGraph.addVertex('E')
uGraph.addVertex('B')
uGraph.addVertex('A')
uGraph.addVertex('F')
uGraph.addVertex('D')


uGraph.addEdge('A', 'B', 4)
uGraph.addEdge('A', 'C', 2)
uGraph.addEdge('B', 'E', 3)
uGraph.addEdge('C', 'D', 2)
uGraph.addEdge('C', 'F', 4)
uGraph.addEdge('D', 'E', 3)
uGraph.addEdge('D', 'F', 1)
uGraph.addEdge('F', 'E', 1)


console.log(uGraph)

console.log(uGraph.Dijkstra('A', 'E'))





//--------------------------------------------------------------------------------------------------------------------------------



