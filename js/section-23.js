'use strict'
console.log('section-23')

// Tree Traversal - Intro

//tree with not sorted
//how do we traverse them?
//my idea is just moving from all left to all right (only way to do it if nothing is sorte)

//some common techniques (commonly take advantage of recursion)
//-Breadth-first Search - working a way across the tree(down one and all way across, then again and again till hit all nodes)
//-Depth-first Search - working our way down the tree
//---dfs - inOrder:goes from deepest and left and moving up and to the right
//------(kind seem in start search from the deppest left poisition)
//---dfs - PreOrder:goes from root all left then all right(start from root and working way down)(top all left going down)
//---dfs - PostOrder: start form deepest most left but hits all deepest in left side before moving up to its parent
//-----(then repeat on right side)

//which we use depends on what we want to accomplish


//---im assuming one refers to basically vertical movement first and other horizontal movement first(i was right )


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Breadth First Search
//we want to visit every node on the same level before moving on to any children(then when move down do it again)
//we are prioritizing visiting all nodes on the same level before checking anything else(aka moving further down)



// //my bfs function 
// bfs() {
//     //new queue to ustilize in our bfs search
//     let queue = new Queue()
//     // var that values of all nodes visited
//     let visited = []
//     //initial the queue with the root node
//     queue.in(this.root)
//     //while queue is not empty this will run
//     while (queue.size) {
//         //we capture the return node removed from queue(note return a node, aka not tree node or the value contained)
//         let capture = queue.out()
//         //we push the node 'value' only to the visitied array , val val becuase inques makes node and is node then to get to actually value well got to do twice
//         visited.push(capture.val.val)
//         //reassign value of current to check all node for left and right properties
//         //--note = capture.val becuase it returns a node w/ .val we get it to its treenode form what we can then 
//         //---pull its right and left properties else if didint , would only be able to access .next which we do not need here
//         let current = capture.val

//         //we check if the current node had a .left property
//         if (current.left) {
//             //if does we add that node to the queue(to then have that node left and right checked as less,working futher down tree)
//             queue.in(current.left)
//         }
//         //we check if the current node had a .right property
//         if (current.right) {
//             //we add it to queue to check later
//             queue.in(current.right)
//         }
//     }
//     //return an array containig values of all nodes that were visited (aka exist in the bst)
//     return visited
// }
// ColtBFS() {
//     let data = []
//     let queue = []
//     let node = this.root
//     queue.push(node)
//     while (queue.length) {
//         node = queue.shift()
//         data.push(node.val)
//         if (node.left) { queue.push(node.left) }
//         if (node.right) { queue.push(node.right) }
//     }
//     return data
// }


//his does use array so thing id have to confurm say i use a actual queue (specifically what returen Node Type)
//but over all very similar and clever


// **Note this works for all trees not just binary or search , the left and right can become first, sencong, thrid ect.. if multi children
//---or can just loop through all the children and get them that way ideal is still the same
// -----we take advantage of the queue and the pointers to traverse whole tree

//simply changing location of the capture and reassignment of current solved issue we were having
//may have to have current become curretn.val on iterations and goes from node, treenode, val  when 

// thing is that we dont need to reaccess the node once we have to node we just access if there is a right or left node and so forth

//it running on input coming in from the queue so somehow the queue must already contain the root node 
// then from there we can add and remove from the queue

// Creating BFS
//create a queue and a variable to store the values of nodes visited
//built up a list of data to then return (containing all values of nodes visited)
//loop as ong as there is a node in the queue
//-dq a node from the queue and push the value of the node into the variavle that stores the nodes (so in and out the same var???)
//if there is a lift property on the node dq - add it to the queue
//if there is a right prooperty on the node dq - add it to the queue
// /return the variable containig all values of nodes visited


//create a queueu
//create var to hold values 'visited'
//--loop through the tree adding any right and left property of node currently checking add to the queue (to then be checked and so forth)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Depth First - PreOrder

//any node visit the note add it ect...
//then exprore the entire left side and the entire right side (or 1st 2nd 3rd child ect... goes for all trees, not just binary)
//preorder - visite each node first on the left then the right
//--once you visited everyting on the left then you visit everythign on the right , then left again , then right
//----ect... till visited every node in the tree

//easier if done recursively


// //my dsfPreOrder function
// dfsPreOrder() {
//     //stores all values of nodes visited
//     let visited = []
//     //captures the starting node for traversal(this case starting with the root)
//     let current = this.root
//     //helper function to urilize for recursion
//     function helper(node) {
//         //reassign current to the new node passed in
//         current = node
//         //push the node .value of node passed in 
//         visited.push(node.val)
//         //checks if the node has a .left property
//         //if so we call helper function again passing in the .left node and continue till no more .left from said nodes
//         if (current.left) { helper(current.left) }
//         //reassign current to node passed in 
//         current = node
//         //check if a .right property exist in node passed in
//         if (current.right) { helper(current.right) }
//         //learned not needed but still works with it 
//         //if none above met we return the array containing all node values
//         else { return visited }
//     }
//     //invoce the helper function with the root node, to get recusrion started
//     helper(current)
//     //return array contaning node values
//     return visited
// }
// //lul was so close to cleaner still got it works just the same and greate
// // didint like the current 2x reassignmetn all had to do was pass in node.left/right instead of current lul
// coltPreOrder() {
//     let data = []
//     let current = this.root
//     function traverse(node) {
//         data.push(node.val)
//         if (node.left) { traverse(node.left) }
//         if (node.right) { traverse(node.right) }
//     }
//     traverse(current)
//     return data
// }
// // very similar pretty much the same, i pretty much matched it aside from the current reassignments


//recursion recommended 8-7 lines
//main funciton takes no argument
//create a var to store the values of the node visited
//store the root in a var called current
//write a helper function which accepts a 'node'
//-push tha value of the node the variable that stores the values
//-if the node has a left property, call the helper funciton with the left property on the node
//-if the node has a right property, call the helper function with the right property on the node

//how it works:
// each left and right its like the previous check for right or left get put on hold till further calls are returned
// where if node has left add node then runs again with left(not checking that previous node for the right as recursive vall on left)
//--curently being resolved (that continew adds node value if left runs again not chekcing for a right)
//--when it reaches end of that left get returned and that previous node check can now contunie
//--so it did all the left could do so now check if right if yes (then add node then recursive call with right)
//---and continue(till hits end then returns)-this case the previous node (being higher in the tree)
//---check the node for a right nothing returns again to check next node
//---find somthing then recursive call with the right(then add and if that right node passed in has a left -----)
//----then on the left check again recursive call with that left node and this continues back and forth checking all node
// --till we've gone through all nodes and nothing else meet checks as nothing else exist to be checked 
//---then exists helper function and returns 'visited' - array containing all the node values 
//---bada bing bada bom - feel gettign actually good feel for recursion at least how the stack plays out 



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Depth First - PostOrder
//dsf combinations are fairly simple just small tweaks that then effect order of traversal and output
//we explore everything first but dont visit the node (appears like dfs but starting from the bottom node)
//--works its way all way down then visits node on the way back up
//--all way down left the allways down right then visit, we only visit a parent after we've already visited all children

// //my dsfPostOrder function
// dsfPostOrder() {
//     //pretty much same exact function as above only difference is where/when we push the node to array
//     //haapends after all the recursive call not before
//     //now with this traversal the last node to be visited and added to array is the root
//     let visited = []
//     let current = this.root
//     function helper(node) {
//         if (node.left) { helper(node.left) }
//         if (node.right) { helper(node.right) }
//         visited.push(node.val)
//     }
//     helper(current)
//     return visited
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Depth First - InOrder
//we travers one whole side then the other whole side

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    in(val) {
        let node = new Node(val)
        let current = this.first
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            while (current) {
                current = current.next
            }
            this.last.next = node
            this.last = node
        }
        this.size++
        return this.size
    }
    out() {
        if (!this.first) return undefined
        let current = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        }
        else {
            this.first = current.next
            current.next = null
        }
        this.size--
        return current
    }
}


class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new TreeNode(val)
        if (!this.root) {
            this.root = newNode
        }
        else {
            let current = this.root
            while (true) {
                if (newNode.val > current.val) {
                    if (!current.right) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                } else {
                    if (!current.left) {
                        current.left = newNode
                        return this
                    }
                    current = current.left
                }
            }
        }
    }
    find(target) {
        if (!this.root) { return null }
        let current = this.root
        while (current) {
            if (current.val === target) { return current }
            else if (target > current.val) {
                current = current.right
            } else {
                current = current.left
            }
        }
        return current
    }
    bfs() {
        let queue = new Queue()
        let visited = []
        let current = this.root
        queue.in(current)
        while (queue.size) {
            let capture = queue.out()
            visited.push(capture.val.val)
            current = capture.val
            if (current.left) { queue.in(current.left) }
            if (current.right) { queue.in(current.right) }
        }
        return visited
    }
    dfsPreOrder() {
        let visited = []
        let current = this.root
        function helper(node) {
            visited.push(node.val)
            if (node.left) { helper(node.left) }
            if (node.right) { helper(node.right) }
        }
        helper(current)
        return visited
    }
    dsfPostOrder() {
        let visited = []
        let current = this.root
        function helper(node) {
            if (node.left) { helper(node.left) }
            if (node.right) { helper(node.right) }
            visited.push(node.val)
        }
        helper(current)
        return visited
    }
    dfsInOrder() {
        let visited = []
        let current = this.root
        function helper(node) {
            if (node.left) { helper(node.left) }
            visited.push(node.val)
            if (node.right) { helper(node.right) }
        }
        helper(current)
        return visited
    }
}




let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(15)
bst.insert(6)
bst.insert(3)
bst.insert(8)
bst.insert(20)
bst.insert(11)
bst.insert(22)
bst.insert(7)
bst.insert(48)
bst.insert(89)
bst.insert(80)
bst.insert(18)


console.log(bst)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// When To Use DFS vs BFS
//all search types and version will have their own pros and cons
//also depends on the tree

//bsf also requires a queue important to know as if big tree creates big queue as well (the wider the tree the more space needed)
//only be same in space when very onesided tree (and we wont allow tree to be build that way so yeah, unless specified to)
//vs dsf we aren't storing any of the values or nodes

// time complexity for both bfs and dfs are the same only differ in the space utilized
// space will depend on the tree (depth , wide) ect...
//--if really deep dsf has to travel allway down before starts to visit node

//basically :
// if very deep not wide bfs
// if very wide and not so deep dfs

//dfs versions use cases:
// pre - good if you want to diplicate a tree, or flatten it out store in file, ect...(can take list and iterate and will diplicate)
// post -
// in - if bst returns data sorted if needed,
//no huge reasons to use one over the other(atleast not evident rn)

// ----------------------------------------------------------------------------------------------------------------------------------------------

// all dfs work down before across
//---dfs has mutiple orders/ways of achiving this
// bfs works across before down

//trees are non-linear data structures that contain a root and shild node
//binary trees can have values of any type but are limited to 2 children per perant
//binary search trees are bs but are in specified order follow rule, value less then appears on left and greter right(true for each node)
//we can search through tree using dfs 3version and/or bfs





// ----------------------------------------------------------------------------------------------------------------------------------------------


