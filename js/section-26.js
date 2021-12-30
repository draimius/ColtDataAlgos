'use strict'
console.log('section-26')

// Graphs - Intro

//very very commonly used datastructure


// Objectives:
//explain what a graph is
//compare and contrast different types of graphs and their use cases in the real world
//implement a graph using an adjecency list(there are several different way to implement a graph)
//traverse through a graph using bfs and dfs
//compare and contrast graph traversal algorithms

// What is a graph??
//a graph data structure consists of a finite (and possibly mutable - not sure what that mean look up)
//--set of vertices or nodes or points together with a set of unordered pairs of these vertices for an undirected
//---graph or a set of ordered pairs for a directed graph
//aka - graph = ('connected set of nodes') - placement dosent really matter, what matters is their connections
//all could be connected via different var's relations ect.... (structure used in any recomendation, social media ect..)
//different values that connect data or content and tail to you often (show what similar and know that based on though connections)


// Uses for graph:
//social networks
//location/mapping
//routing algorithms
//visual hierarchy
//file system optimizations
//everywhere

// Recommendations:
//'people also watched'
//'you might also like'
//'people you might know'
//'frequently bought with'

//connected by shared data points




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Types of graphs:
//several types of of graphs, they vary in structure, criteria, size, ect...
//just like trees (also tree's are a type of graph as well)


//vertex: a node
//edged: connection between nodes
//  Weighted/Unweighted: values assigned to the distance between vertices

//-weighted assigning a value to the connection
//-unweighted has NO value assigned to the connection
//----like in google maps the distance of the possible routes are weighted as to suggest only the best (calc shortest past, fastest)
//------an in maps some would be undirected(two ways road) and other directed(one way roads)


//Directed/Undirected: directions assigned to the distance between vertices

//-undirected means any one edge is at path both ways ( a to b , and b to a all in one edge)
//---no specified direction assosiated with edge (like FB if your someones friend , you are also that persons 'friend')

//-directed has specifid arrows or pointer to specified nodes (where a may point to b, but b does not point to a) (twitter follow)
//---where to go to some node you would have to travers via another to get to node wanted (travel to node that does have a connection)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Storing Graphs: Adjacency Matrix & List

//matrix 2d structure almost like a times table that list and provides boolean values showing wether there is or not a connectiong
//--between the existing nodes(stores the edges)

//adjecent list we use a array of nested array showing what connect uses the index to represnet the node
//--then the values in the nested array at the index represents the nodes the node have a connectiong to
//so we would look at the index of the node then see what other nodes it had a connectiong to(wont always be numbers)
//if its other data like a string, bool, not inorder, we use an Object/ HashTable
//--where we look up the node in hashMap and get back other nodes its connected to


//v = number of vertices
//e = number of edges

// OPERATION        ADJACENT LIST       ADJACENTCY MATRIX
//add vertex          O(1)                O(v^2)
//add edge            O(1)                O(1)
//remove vertex       O(v + e)            O(v^2)
//remove edge         O(e)                O(1)
//query               O(v + e)            O(1)
//storage             O(v + e)            O(v^2)

//in matric anytime add a vertix we have to create a new row and coulumn, same with remove have to remove both
//if only have a few connectiong avoid matrix as lot space and work even though lot of it will be false(aka no connection to show)
//matrix would have a lot of empty spaces




//Adjacency List
// only stores the actual connections
// can take up less space
// faster to iterate over all edges
// can be slower to lookup specific edges

//Adjacency Matrix
// stores all connection wether exist or not
// takes up more space
// slower to iterate over all edges (more edges exist longer will take)
// faster to lookup specific edge


//most data is real world is not all connected
//--thus adjacency list are very often used
//there are far more node with fewer connectiong that nodes with many connections




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Add & Edge - Intro


//so we did not need any nodes afterall
// class Vertex {
//     constructor(key, edge) {
//         this.key = null
//         this.edges = []
//     }
// }

class Graph {
    constructor() {
        this.list = {}
    }
    //takes key as input
    addVertex(key) {
        //check if does not exist before adding to list
        if (!this.list[key]) { this.list[key] = [] }
        //else lets know that already exist (prevents override, could give options to override)
        else {
            console.log('already exist')
        }

    }
    //takes in two inputs, two keys of vertex we'd like to link
    addEdge(vertex1, vertex2) {
        //insure that both keys passed in exist before pushing edge to array
        if (vertex1 && vertex2) {
            //push opposing vertex into the others edge list
            this.list[vertex1].push(vertex2)
            this.list[vertex2].push(vertex1)
        }
    }
    //take key as input
    removeVertex(key) {
        //captures array of edges corresponding to key
        let list = this.list[key]
        //we loop over that while list
        for (let i = 0; i < list.length; i++) {
            console.log(list.length)
            //call method to remove edges on the key passed in and edged in its list 
            this.coltRemoveEdge(key, list[i])
            console.log(key, list[i])
        }
        //we delete they key /vertex passed in from the main list
        delete this.list[key]
        //we return the while list
        return this
    }
    //accpets key of vertex you'd like to remove all refrence of in main list
    coltRemoveVertex(vertex) {
        //while the edge list for the vertex contains a value this loops
        while (this.list[vertex].length) {
            //
            const adjacentVertex = this.list[vertex].pop()
            this.coltRemoveEdge(vertex, adjacentVertex)
        }
        delete this.list[vertex]
        return this
    }
    //accepts two keys of vertecies you's like to unlike/remove connection from 
    coltRemoveEdge(vertex1, vertex2) {
        //we grab the 1st vertex edge list/connections  
        this.list[vertex1] = this.list[vertex1].filter(function (v) {
            // we return everything be anything matching the 2nd vertex (aka removes it)
            return v !== vertex2
        })
        //we grab the 2st vertex edge list/connections  
        this.list[vertex2] = this.list[vertex2].filter(function (v) {
            //we return everything be anything matching the 1st vertex (aka removes it)
            return v !== vertex1
        })
        //then we return the main list 
        return this
    }
}



//addVertex
//method which accepts a name of a vertex
//it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

//addEdge
//should accept two vertices
//should find in the adjacency list the key of vertex and push vetex2 to the array of each
//accessboth thier array and add each to the other 
//sounds like we are pushing the whole vertex not just the key

//removing egde
//accepts two vertex
//should them reassign array to be everything previous minus the vertecies passed in (done for both vertex)


//removing vertex
//accepts key
//means removing vertex and all related edgds contained
//should loop as long as there are any other vertices in the list for that vertex
//inside of loop call remove edge
//so we pass in key of vertex removing and pass in each edge contained in its array
//that will remove all edged from it and any connections


let graph = new Graph()




graph.addVertex('dallas')
graph.addVertex('washington D.C')
graph.addVertex('orlando')
graph.addVertex('houston')
graph.addVertex('new orleans')
graph.addVertex('aspin')
graph.addVertex('new jersey')
graph.addVertex('phoenix')
graph.addVertex('austin')

graph.addEdge('phoenix', 'new jersey')
graph.addEdge('aspin', 'orlando')
graph.addEdge('washington D.C', 'dallas')
graph.addEdge('austin', 'phoenix')
graph.addEdge('austin', 'dallas')
graph.addEdge('new jersey', 'austin')
graph.addEdge('new orleans', 'houston')


console.log(graph)






// ----------------------------------------------------------------------------------------------------------------------------------------------






