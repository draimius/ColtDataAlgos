'use strict'
console.log('section-22')

// TREES - Intro

//Objective:
//-define what a tree is
//-compare and contrast trees and list
//-explain the differences between trees, binary trees, and (binary search trees) - the focus
//-implement operations on binary search trees
//-


// What is a tree
//data structure that consists of nodes in a parent/child relationship
//nodes in layers and multiple pointers working its way down(node can have mutiple pointers and pointees)

// list are linear (just the next and next, ect... and the node are in a line)
// trees are nonlinears (they can branch, there can be many paths to follow, multiple branching lines connecting nodes)
//what is tree multiple linked list combined that share a node??

//Tree Rules:
// tree nodes can only point to another child
// they can Not point to another sibiling
// they can Not point to a parent
// only point to children
// every node is moving away from the ROOT Node
// --(aka in common visual from one node with pointers only going down from there node to node)

//Tree Terminology:
// ROOT - the top node in tree
// CHILD - a node directly connected to another node when moving aray from the root (moving down)
// PARENT - the converse of a child, node connected to another moving towards the Root (moving up 'the down pointer')
// SIBLINGS - a group of nodes with the same parent
// LEAF - is a node with no children
// EDGE - the connection or pointer in visual

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Use For Trees:

// html DOM
// Network Rounting
// Abstract syntax tree
// Artificail intelligence (disicion tree, ect...)
// Folders in operation system
// Any JSON
// and many many more....


//there are sever types and version of trees each with their areas where they excell


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Binary Trees - Intro

// what makes a tree binary
// they can have a maximum of two childre
// can be 0, 1 chindren but at max 2
// they are also sorted in a particular way (always sorted)
// stores data that can be compared (and can be sorted)

// Taking any node:
// any child node to its left will be less then it
// and any child to the right will be greater then that node
// and that is repeated on all nodes

// How BSTS Work:
//every parent node has at most two children
//every node to that left of parent node is less than parent
//and every node to the right of parent node in greater than parent


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Searching A Binary Search Tree

// reason for the order/sort and structure
// is makes searching finding a value efficient
// and makes insertion efficient and can find its place very quickly as its all sorted
// its structure lends to just that a binary decisino 
// ---its either left or right, then again left or right till get where you want or dont exist

//its binary search we constanly cut in half the data we are looking through to find our value wanted 



// ----------------------------------------------------------------------------------------------------------------------------------------------

// class Node {
//     constructor(val) {
//         this.val = val
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
// }




// let tree = new BinarySearchTree()
// tree.root = new Node(22)
// tree.root.right = new Node(33)
// tree.root.left = new Node(13)
// tree.root.left.right = new Node(15)

// ----------------------------------------------------------------------------------------------------------------------------------------------

// BST - insert


// //my insert function
// //accepts a val to be in, in creating of new node
// insert(val) {
//     //captures new node
//     let newNode = new Node(val)
//     //checks if the tree is empty
//     if (!this.root) {
//         //if so the root node property become the new created node
//         this.root = newNode
//         //else if the tree is not empty
//     } else {
//         //caputure root for eval and to start loop from root node then  moving down
//         let current = this.root
//         //while loop set to true meaning gonna run till reaches position where it will be assigned/added
//         while (true) {
//             //check if the new node value is greater then the root's node value
//             if (newNode.val > current.val) {
//                 //checks the a root.right node exist
//                 if (current.right) {
//                     //if so the root become the next node to right (this way we move down the tree eval to new val to find op position)
//                     current = current.right
//                     //else if it dosent exist
//                 } else {
//                     //we assignt the current nodes.right  to = new node
//                     current.right = newNode
//                     // retunrns the tree and exists loop
//                     return this
//                 }
//                 //else if new node value is not greater (aka less than or = to) the current nodes value
//             } else {
//                 //checks if current node.left exist
//                 if (current.left) {
//                     //if does we move to the next left node to eval again
//                     current = current.left
//                 }
//                 //else if node.left does not exist
//                 else {
//                     //the node.left property (edge/pointer) = the new node
//                     current.left = newNode
//                     // retunrns the tree and exists loop
//                     return this
//                 }
//             }
//         }
//     }
// }


//there is something in this solution that can be done diff where we may not need all the else's ect.. 
//but ok not big deal feel all read ez anyways

//solution for repeat value:
//can keep how i have it where we just defautl it to the left
//can completely ingore it and just not add it (if node.val === current.val) return this  - and just return the tree or false, null ect..
//or if we wanted to keep track of it appearing more than once we can add a frequency counter with each node (if ====) this.count++ (in node struct)


//can be done recursively or iterably
//create new node 
//start at root
//-check if root exist else the node becomes root
//else there is a root
//--we check if the value of the new node is greater than or less than the value of the root
//-----if greater
//-check if a right node exist 
//if yes, move to that node and repeat the steps 
//else add that node as the right property
//-----if lesser
//-check if a left node exist 
//if yes move to that node repeat process
//else add that node as the left property
///use some type of loop if iteraly
//----return tree at the end




// ----------------------------------------------------------------------------------------------------------------------------------------------

// BST - find
//search to see if a value exist withing the tree
// ???? do we return said node or simply return a true or false?? is the question


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
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
    //accepts value/target value we are looking for 
    find(target) {
        //check if tree is empty if so return null as nothing to search
        if (!this.root) { return null }
        //capture node and start loop from start/root node
        let current = this.root
        //while a node we are moving to are checking exist we continue to loop
        while (current) {
            //if are current nodes .val === the target looking for return that node
            if (current.val === target) { return current }
            //else if the target if greater then the value of current node
            else if (target > current.val) {
                //current move to next node to the right for check
                current = current.right
                //if not = or greater mean less than only other
            } else {
                //current move to next node to the left for check
                current = current.left
            }
        }
        //we always return current representing the node ending loop on 
        //here if this runs will always be null(mean loop ended and there was never a match)
        return current
    }
}

//we go until no node exist aka return the last (wait that, no yes it does)
//we either get to point where no node exist or we find node with match value (bada bing bada boom)




let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(7)
tree.insert(2)
tree.insert(8)
tree.insert(6)
tree.insert(1)
tree.insert(12)
tree.insert(17)
tree.insert(19)
tree.insert(0)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Big O of Binary Search Trees
// Insertion - O(log n)
// Searching - O(log n)
// ---best and avg case so because you say that i assume then :
// assume O(n) for both above (side note idk why give me that if its not the worst case when big O is based on the worst case not best or even avg my friend)
//---changes based on the tree structure though not common and really should not happend is a one sided tree where everything is just goin one side
//so we can say O(log n ) as you should never allow a tree like that, can fix by setting new root, or just having it pick diff path, rework, ect...

//these were not mention and we also did not implement them (might try to do so myself, figure be very similar to a linked list really)
// Removal - O()
// Access - O()



//key basic algo more effictive when data is sorted



//note:
// binary tree - referce to each node only having a max of two children
// BST is that but then have the attribute of having data sorted on storing of said data



// ----------------------------------------------------------------------------------------------------------------------------------------------

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
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
}



let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(7)
tree.insert(2)
tree.insert(8)
tree.insert(6)
tree.insert(1)
tree.insert(12)
tree.insert(17)
tree.insert(19)
tree.insert(0)

