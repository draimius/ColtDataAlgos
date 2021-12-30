'use strict'
console.log('section-25')

// Graph Traversal - Intro

//very often used real applications

// Traversal:
//visiting 
//updating
//cheching
//-each vertext in graph


//with graphs there is no evident starting point as there are multiple paths 
//-mean we have to set and decide our starting point

//Grapth Traversal Uses:
//peer to peer networking
//web crawlers
//finding 'closest' matches / recommendations
//shortest path problems 
//---gps navigation
//---solving mazed
//---AI (shotest path to win a game) 

//traversing a graph vs tree
//with trees there is only one path to get to a node 
//-vs in graphs there could be multiple path to reach a node(sometime visiting a node more then once to reach other)

//TWO OPTIONS FOR TRAVERSAL
// DFS(depth first search) - works all the way down first then to the right
// BFS(breadth first search) - works left to right then down

//however for graphs work a bit different as with a graph there is not a clear starting point
//to show moving left to right or from top to bottom(will depende on how the structure is drawn)

//With will be less about how the strucuture looks effecting traversal(though in reality not effecting it)
//---becuase like in trees and here with graphs its based on how we choose to move between the parent and children nodes
// BFS - mean visitng all the nieghbors first before visiting any of thier children 
// DFS - mean visiting all of the children first before visiting any of thier neighbors

//we will have to remeber where we have already been withing the graph, what nodes we've already visited 
// --(otherwise could just end up traversing in circles endlessly)
//if we find that we have already visited node and nothing there to visit then we have to work our way back
//-in its list if we're at the node we can make note that we've already benn there in the adjecents nodes edge/connection list
//looping through the list seeing what hasent been marked as 'visited' 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// DFS (Depth First Search)



//whole issue originally was that i could not access the this.list withing the helper function
//--kept return undefined as if it didnt exist to it, I'd like to know why that is??????????????
// A:issue with the 'this' keyword as in the helper function its meaning has changed
//--we tryed pre difining the list prio to helper function so then can use in there (but couldnt change it)
//--we trying this.list[vertex] but like said would only return undefined
//---so solution we use was not storing/caputuring the list of vertex by (instead capture the ability to access this.list)
//so there could simply [vertex] add at end of var and was able to access values of anything existing within
//accpets vertex to set starting point ( its like tree dfs kinda like placed in queue and lond as it hasn't been visited)


// //my dfs functions
// //accepts a key as input
// dfsRecursive(vertex) {
//     //capture all vertex/nodes visited and make true(aka visited)
//     let visited = {}
//     //capture each vertex traved to 
//     let results = []
//     //**capture the main object holding all keys and values(caputure access to data) */
//     let accessList = this.list
//     //helper function for recusion (above defined outside as accumulator for data)
//     //takes one input vertex('key')
//     function dfs(helperInput) {
//         //we capture the vertex passed in values (aka array of edge connections) [also give ability to change]
//         let edgeList = accessList[helperInput]
//         //checks if the vertex value is empty, if so return 
//         if (!edgeList) { return }
//         //we set visited [vertex] to true (to track what vertex has been visited)
//         visited[helperInput] = true
//         //we push vertex to results array to provide later in return of all nodes in grapth
//         results.push(helperInput)
//         //we loop over the vertex (edge's list)
//         for (let edge of edgeList) {
//             //we check if the edge/connection vertex has NOT been visited(thus ignoring any vertex that has already been visited)
//             if (!visited[edge]) {
//                 //if has not been visited recursive call using the vertex as the new input 
//                 // --(aka about to check its edged aka its connectiong, provided not connections to check each time)
//                 dfs(edge)
//             }
//         }
//     }
//     //we initiate the recursive call of the helper function
//     dfs(vertex)
//     //return the array results containint all the vertex withing the graph
//     return results
// }
// //like recursive also accepts a vertex/key
// dfsIterable(vertex) {
//     //used to capture all nodes visited
//     let results = []
//     //used to eval and mark vertex as visited
//     let visited = {}
//     //keeps track
//     let stack = [] //could use an actual stack
//     //initialize the stack for loop starting
//     stack.push(vertex)
//     //loop continues to run as long as a value exist withing the stack
//     while (stack.length) {
//         //capture value removed from stack (always removed from the back aka last in first out)
//         let current = stack.pop()
//         //we check if that vertex has not been visited
//         if (!visited[current]) {
//             //if not we push its to results array
//             results.push(current)
//             //also mark it as visited in the visited object
//             visited[current] = true
//             //then we loop over its edgeList/neighbors
//             this.list[current].forEach(function (neighbor) {
//                 //we add all neighbors to the call stack (thus increasing length continuing the loop)
//                 stack.push(neighbor)
//             })
//         }
//     }
//     //return result array with all vertex in grapsh
//     return results
// }
// //in iterable we are working right to left with the edge list vs in recursive was right to left
// coltIDFS(start) {
//     //diff here instead of adding then removing in loop we just initialize to start (now dont have to add it)
//     const stack = [start]
//     const results = []
//     const visited = {}

//     visited[start] = true
//     while (stack.length) {
//         let currentVertex = stack.pop()
//         results.push(currentVertex);
//         this.list[currentVertex].forEach(neighbor => {
//             if (!visited[neighbor]) {
//                 visited[neighbor] = true;
//                 stack.push(neighbor)
//             }
//         });
//     }
//     return results
// }
// //Colt Version Methods
// coltRDFS(start) {
//     const results = []
//     const visited = {}
//     //interting in this function must have ; or else dont work(its cuase below function odd way to call it just havent seen that)
//     //but if i dont exicitly make end of this line with ; it thing function call is starting here or above(which not case)
//     const adjacencyList = this.list;
//     (function dfs(vertex) {
//         if (!vertex) { return null }
//         visited[vertex] = true
//         results.push(vertex)
//         adjacencyList[vertex].forEach(neighbor => {
//             if (!visited[neighbor]) {
//                 return dfs(neighbor)
//             }
//         });
//     })(start);
//     return results
// }





//i used the vertex edge list for quick return while he used the actual vertex
//  (guess both would return the same but dif in value checked) would there be a bug possible in my version of the check and not his


// dfsRecursive:
//accepts a vertex to start
//base case is vertex is empty (return)
//add vertex to list results list (what does this mean)
//mark vertex as visited (we create another hash table??? and mark key to true)
//for each neighbor in vertex neighbors
//--if not visited (recursively call dfs on neighbor)
// else skip

//sholud accept a starting node
//create a list to store veisited vetices
//creat an object to store visited veticies
//create a helper function - 
//-helper function should return early if the vertex is empty
//-------(sounds like it dosent want to vertice but its value (edge list))
//helper function should place the vertex it accepts into the visited object and push into the results array
//loop over all of the velues in the adjacency list for that vertex
//if any of those values have not been visited, recursively invoke the helper function with that vertex


//basically work where only vertex bieng passed through to have its connections check are the ones we have not yet visited
// ignoring all the have been visited we constantly looping and checking diff vertex provide diff list of connectiong 
// so list may only have visited and get skipped others have connectiong that are new so we recurse call with them passed in
// then add it to visited and checks its connection list for new one and soo forth goes the recursive loop till there is 
// --either all vertex are have been visited and no recursive call (and those that may provide a empty list are skipped pretty much)
// --with an early return and if every nothing gets passed into helper as vertex return the as well 
//in end return accumilator aka array result of all nodes inside the graph
//--like if current dosent meet NOT visited criteria we move to next connection in list and check that (when that reutns if another 
//-- connection in that previos list well we check that list assosiated as well ect.. and contiues till done)


//every time we call a recursive call its like pushing it to a call stack(that exactly what it is LUL)




// ----------------------------------------------------------------------------------------------------------------------------------------------

// BFS (Breadth First Search)

//instead of left to right before down like tree we are still doing this in practice but with graph not seen easy as to path
//-however its still build in layers and we use this(start node visit all its direct connections, then move to first 
//--of those connections visited  and visit all of it direct connections, then move to 2nd visited in previou move
//and check all of it direct connection and so forth, only moving a layer down once all direct connection have been explored)


//my bfs function - seem example seen are mostly iterable not lot of recursive one (and if is lot var being passed in)

//same as dfs iterable only dif is we shift(remove from beginning) vs pop(removing from the back)
// bfsIterable(vertex) {
//     let results = []
//     let visited = {}
//     let queue = []
//     queue.push(vertex)
//     while (queue.length) {
//         let current = queue.shift()
//         if (!visited[current]) {
//             results.push(current)
//             visited[current] = true
//             this.list[current].forEach(function (neighbor) {
//                 queue.push(neighbor)
//             })
//         }
//     }
//     return results
// }


//seems basically have to exhaust the edge/connection list of each vertex before we move onto the next vertex
//still storing visited and results(the exhaust of list is where we differ from dfs)
//**with BFS we use a queue(first in first out) vs in DFS we use a stack(last in first out)
//so we would operato as array unshift to pull the first value each time 
//----(ex uses array but we'd want actual queue for the O(1) time of removal) [which not case with array as reindex]




//we have been moving just from first node and so forth we havent implemented any evealuation like < or > to maybe decide
//-which node should we visit first like bfs but start with lowest value ect...




// ----------------------------------------------------------------------------------------------------------------------------------------------


class Graph {
    constructor() {
        this.list = {}
    }
    addVertex(key) {
        if (!this.list[key]) { this.list[key] = [] }
        else {
            console.log('already exist')
        }
    }
    addEdge(vertex1, vertex2) {
        if (vertex1 && vertex2) {
            this.list[vertex1].push(vertex2)
            this.list[vertex2].push(vertex1)
        }
    }
    removeVertex(key) {
        let list = this.list[key]
        for (let i = 0; i < list.length; i++) {
            this.removeEdge(key, list[i])
        }
        delete this.list[key]
        return this
    }
    removeEdge(vertex1, vertex2) {
        this.list[vertex1] = this.list[vertex1].filter(function (v) {
            return v !== vertex2
        })
        this.list[vertex2] = this.list[vertex2].filter(function (v) {
            return v !== vertex1
        })
        return this
    }
    dfsRecursive(vertex) {
        let visited = {}
        let results = []
        let accessList = this.list
        function dfs(helperInput) {
            let edgeList = accessList[helperInput]
            if (!edgeList) { return }
            visited[helperInput] = true
            results.push(helperInput)
            for (let edge of edgeList) {
                if (!visited[edge]) {
                    dfs(edge)
                }
            }
        }
        dfs(vertex)
        return results
    }

    dfsIterable(vertex) {
        let results = []
        let visited = {}
        let stack = []
        stack.push(vertex)
        while (stack.length) {
            let current = stack.pop()
            if (!visited[current]) {
                results.push(current)
                visited[current] = true
                this.list[current].forEach(function (neighbor) {
                    stack.push(neighbor)
                })
            }
        }
        return results
    }
    bfsIterable(vertex) {
        let results = []
        let visited = {}
        let queue = []
        queue.push(vertex)
        while (queue.length) {
            let current = queue.shift()
            if (!visited[current]) {
                results.push(current)
                visited[current] = true
                this.list[current].forEach(function (neighbor) {
                    queue.push(neighbor)
                })
            }
        }
        return results
    }
}







let graph = new Graph()



graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')


graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph)



// ----------------------------------------------------------------------------------------------------------------------------------------------






