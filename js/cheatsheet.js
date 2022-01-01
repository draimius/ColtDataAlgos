'use strict'

//Collection of Algorithms and Datastructures

//Build In Structure

// -Arrays
//   -pop - O(1)
//   -push - O(1)
//   -shift - O(n)
//   -unshift - O(n)
//   -all other like concat, slice, sort, ect... - O(n)
//   -access - O(1)

// -Objects
//   -insetion - O(1)
//   -removal - O(1)
//   -access - O(1)
//     -object.keys - O(n)
//     -object.values - O(n)
//     -object.entries - O(n)
//     -hasOwnProperty - O(1)



//------------------------------------------------------------------------------------------------------------------
//Problem Solving Approach

// -understand the problem - (how it should operate)
// -explore concrete ecamples - (what input and output expected)
// -break it down - (map out your steps)
// -solve/simplify - (work with what you know aware of the portion haven't yet figured out)
// -look bvack and refactor - (aim to better it in everyway possible)

// Problem Solving Patterns
// -frequency counter (use object to collect values and their frequencies and compares pieces of data)
// -multiple pointers (creating pointers/values that correspond to an index/position and move towards the beginning,
//                      end or middle based on condition/eval, very eff8icent for solving problems with minimal space)
// -sliding window (create a window from one position to another in structure, vary on condition/eval the window either
//                      increases, be captured and create new window, very useful for keeping track of a subset of dete
//                      in an array/string etc.)
// -divide and conquer (involves dividing a date set into smaller chuncks then repeating a process with a subset of data(binary search))
// -dynamic programming (optimal solution made up of several smaller optimal solution, think shortest path algo)
// -greedy algorithms (makes optimal choice at each step as it attempts to find the overall optimal way to solve the entire problem)
// -backtracking (It consists of building a set of all the solutions incrementally. Since a problem would have constraints,
//                  the solutions that fail to satisfy them will be removed)
// -two heap (split data in have one into maxheap other in min then both root creat a meadian)
// -when recursive call function is continuesly being added to call stack up Till the base case is met



//------------------------------------------------------------------------------------------------------------------
//Recursion Notes
// -Two key components of recursive function
//      -base case (a param/eval that stops the recursive calling)
//      -changing input (input passed into recursive call must change, like slice, -+ to value, ect...)
// -we take advantage of the call stack build in (for storage of function calls waiting for a return)
// -two ways seen recursion function:
//      -either have a container function with a helper that is recursivly called (used to have a accumilator)
//      -self contained function where whole is recursively called



//------------------------------------------------------------------------------------------------------------------
//Searching Algorithms
// -aside from the kn
// -linear search O(n) (iteration through data making comparison looking for a match or !match)
// -binary search O(log(n)) (works only with sorted data, used comparison and 3 pointers, to consistently cut data in half till reach target)
// -naive string search O(n^2) (looking from substring's withing whole) (every value in sub to every value in main string)
// -KNP O(n) (much more complex then others, involves looking for a prefix that is also a sufix,
//              to keep track of where its found in the main string to keep current substring portion found, and able to
//              jump to next portion in main string to continue comparison)



//------------------------------------------------------------------------------------------------------------------
//Sorting Algorithms
// Naive Sorting
// -build in javascript .sort(used for simply things often)
// -bubble sort O(n^2) (works by finding the largest value in structure and bubbling it up to the top,
//                          via constant pair eval and swaps)
function bubbleSort2(arr) {
    let start = 0
    let end = arr.length
    while (start < end) {
        let swap = false
        console.log(arr, arr[start], arr[start + 1])
        if (start + 1 >= end) {
            end--
            start = 0
        }
        if (arr[start] < arr[start + 1] || arr[start] == arr[start + 1]) {
            start++
        }
        else if (arr[start] > arr[start + 1]) {
            let temp = arr[start]
            arr[start] = arr[start + 1]
            arr[start + 1] = temp
            swap = true
            start++
        }
        if (start + 1 >= end && swap == false) {
            return arr
        }
    }
    return arr
}


// -selection sort O(n^2) (works by moving through structure one at time comparing current value and comparing it to all others
//                              looking forward for value less than it if found we capture that and eval that to all others,
//                              if on the way to end of structure reached find value less then current min that new become min
//                              else we keep current min once we reached end of structure we swap value being compared with the min,
//                              then we move 1 position up and so forth till all is sorted) the lowest value aways get swaped with
//                              current eval value)
function selectionSort(arr) {
    let start = 0
    let end = 1
    let hold = 0
    while (start < arr.length - 1) {
        hold = (arr[hold] > arr[end]) ? end : hold
        if (end === arr.length - 1) {
            if (arr[hold] !== arr[start]) {
                let temp = arr[start]
                arr[start] = arr[hold]
                arr[hold] = temp

            }
            start++
            end = start
            hold = start
        }
        end++
    }
    return arr
}


// -insertion sort O(n^2) (works by moving through value one at time evaluationg all other values in window to position it in correct
//                             position via eval if greater or less than, each iteration the window for eval increases by one, till
//                             all value are in correct position)
function insertionSort(arr) {
    let j, i;
    for (i = 0; i < arr.length; i++) {
        let current = arr[i]
        for (j = (i - 1); j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j]
            // console.log(arr)
        }
        arr[j + 1] = current
    }
    return arr
}



// -though all are O(n^2) this will vary based on how sorted the data is
// -when completly shuffled then remains O(n^2) hoever if data is almost sorted then sometime these can be faster the more complex algos
// -for example say already have all data sorted but adding new well selection sort can take that value and position it
//     --correctly with O(n) or less (while say like a merge sort where regardless new, partly sorted, shuffled it
//      ---will always be the same in time complexity)



//------------------------------------------------------------------------------------------------------------------
// Improved Sorting
//best time complexity possible for the moment is O(nlog(n)) using comparison sort(meaning comparing values to one another)

// -merge sort O(nlog(n)) space O(n)
function mergeSort(arr) {
    if (arr.length <= 1) { return arr }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


// -quick sort O(nlog(n)) space O(n)
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = helper(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

// -special algorithm that only works with integers, works by using characteristics of numbers and not a comparison
// -radix sort O(nk) (length of array * length of longest number)  (uses helper function to process inputs required)
//      return digit in number and positions wanted (helpers function)
function getDigit(num, i) {
    return Math.floor((Math.abs(num)) / Math.pow(10, i)) % 10
}
//      return value representing a numbers length or number of digits (helpers function)
function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1

}
//      returns value representing max number of iterations length of larges number (helpers function)
function maxDigit(list) {
    let max = 0
    for (let len of list) {
        max = (max > digitCount(len)) ? max : digitCount(len)
    }
    return max
}
//      main function
function radixSort(nums) {
    let max = maxDigit(nums)
    for (let k = 0; k < max; k++) {
        let buckets = Array.from({ length: 10 }, function () { return [] })

        for (let i = 0; i < nums.length; i++) {

            let digit = getDigit(nums[i], k)
            buckets[digit].push(nums[i])

        }
        nums = [].concat(...buckets)
    }
    return nums
}



//------------------------------------------------------------------------------------------------------------------
//Datastructures
// -all are made withing classes here with javascript
// -in javascript we also have build in datastructures(array and object)

// -so for of structure that utilize a node structure as well can also be modeled with arrays like
// --(trees, stack, queue, heaps, graphs) some use array as is others pass in a key value pair
// ---though usually not dont this way as typically node make things simpler plus array is only constant
// ----for insertion and removal if done from back(some way around that by swaping and such)
// -----but enless asked for like that recommend simply utilizing node structure (array if asked or just example else node)

// Node (structure is fairly simple, what gets passed in may vary on which structure its used in)
class Node {
    constructor(val) {
        this.val = val
    }
}
// Linked List 
// -Singly linked list (list of nodes where the first point to the next and so forth till the end) [contain a head and tail node]
//   --each node have connection to the node directly ahead of it)
//   ---typically consist of node structure and its list structure

//insertion O(n) - however if inserting only to the front then can achieve O(1) constant time complexity
//Removal O(n) - if we remove only from the front then can achieve O(1) constant time complexity
//Searching O(n) - as one way connection only you'd need to travers list one by one 
//Access O(n) - same thing with access only one way connection

// -used for:
// --are great alternative to array when insertion and removal from the beginning are frequently required
// --is skeleton(foundation) structure for stacks and queues

// Notice node structure contains a value and next property
// -and the list constain a head, tail, and size property
// -here included several methods (can have more methods then shown here as well have more properties for both structures)


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SingleLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node

        }
        this.length += 1
        return this
    }
    pop() {
        if (!this.head) { return null }
        let current = this.head
        let newTail = current
        if (current && !current.next) {
            this.head = null
            this.tail = null
            this.length -= 1
            return current
        }
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length -= 1
        return current
    }
    shift() {
        if (!this.head) { return null }
        let current = this.head
        this.head = current.next
        if (!this.head && this.tail) { this.tail = null }
        this.length -= 1
        return current
    }
    unshift(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.length += 1
        return this
    }
    get(num) {
        if (num <= this.length && num >= 0) {
            let current = this.head
            for (let i = 0; i <= num - 1; i++) {
                current = current.next
            }
            return current
        }
        else { return null }
    }
    set(num, item) {
        let selected = this.get(num)
        if (!selected) { return false }
        selected.val = item
        return true
    }
    insert(num, val) {
        if (num > this.length || num < 0) { return false }
        if (num === 0) { this.unshift(val) }
        else if (num === this.length) { this.push(val) }
        else {
            let node = new Node(val)
            let pre = this.get(num - 1)
            node.next = this.get(num)
            pre.next = node
            this.length += 1
        }
        return true
    }
    remove(num) {
        if (num > this.length || num < 0) { return false }
        if (num === 0) {
            return this.shift()
        }
        else if (num === this.length - 1) {
            return this.pop()
        }
        else {
            let current = this.get(num)
            let pre = this.get(num - 1)
            pre.next = current.next
            this.length -= 1
            return current
        }
    }
    reverse() {
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }
}






// -Doubly linked list (connection in both direction forward and back)
//  (same as a singly linked list however every node has a connection to the nodes directly infront and behind it)

// doubly comepared to single:
// --doubly list will use more memory/space as contains more connection aka the backwards connections
// big O for just about everything is the same but doubly can be constant when from either edge insert n removal
// doubly is better in searching for node can be done in half the time

//insertion - O(n) (unless removed only from the edges then O(1) would be constant time)
//removal - O(n) (unless removed only from the edges then O(1) would be constant time)
//serching - O(n) (search also optimize O(n/2) but we focus worst case so O(n))
//access - O(n) (access would be same as searching)

//Uses:
// -foundation for other structures
// -good when need to access data backwards as well

// Notice node structure contain a value, next and previous property
// -list structure contains a head, tail and length/size property 
// -notice that the single and doubly linked list properties are identical
// --but the node properties in doubly vs single, the doubly has one more property the connection back (previous property)
// --in this exmple methods are also simlilar to single but in this one we take into account the .prev connection

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedlist {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) { return undefined }
        let oldTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = oldTail.prev
            this.tail.next = null
            oldTail.prev = null
        }
        this.length--
        return oldTail
    }
    shift() {
        if (!this.head) { return undefined }
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) { return null }
        let current
        if (index <= this.length / 2) {
            current = this.head
            let count = 0
            while (count !== index) {
                current = current.next
                count++
            }
        }
        else if (index > this.length / 2) {
            current = this.tail
            let count = this.length - 1
            while (count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }
    set(index, val) {
        let current = this.get(index)
        if (!current) { return false }
        else {
            current.val = val
        }
        return true
    }
    insert(index, val) {
        if (index < 0 || index > this.length) { return false }
        let prevNode = this.get(index - 1)
        let newNode = new Node(val)
        let afterNode = this.get(index)
        if (index === 0) { this.unshift(val) }
        else if (index === this.length) { this.push(val) }
        else {
            newNode.next = afterNode
            newNode.prev = prevNode
            prevNode.next = newNode
            afterNode.prev = newNode
            this.length++
        }
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) { return false }
        let current = this.get(index)
        let prevNode = current.prev
        let afterNode = current.next
        if (index === 0) { return this.shift() }
        else if (index === this.length - 1) { return this.pop() }
        else {
            current.next = null
            current.prev = null
            prevNode.next = afterNode
            afterNode.prev = prevNode
            this.length--
            return current
        }
    }
}





// Stacks and Queues
// -these aren't so much a structure as their own they use other
// -these both are more or an idea/criteria a rule applyed to a a structure
// -criteria on how that data structure will be used

// -Stack (operate on a last in first out rule, the last element added will be the first to be removed)
//    -typically utilize a linked list to achieve this 
//    -stack is focused on insetiong and removal (searching and random access are not the focuse aka complexity not great) 
//    -this is a singly linked list, what makes it a stack is the Methods withing the linkes list
//    -there are multiple way to implement a stack (its now just a structure but a concept)

//Insertion - O(1) **
//Remove - O(1) **
//Searching - O(n)
//Access - O(n)

// Used:
// -managing function invocations
// -undo/redo
// -routing (history object) is treated like a stack
// -store history of things , history of action taken or to be taken 
// -order or actions done or requested/ step and restrace steps


// -notice node structure is identical to that of a singly linked list only differ in the methods contained
//     -constains a value and next property
// -stack structure contains a first, last and size property (pretty much same as linked list just dif names, still head, tail....)
// -stack structure methods differ here as we only insert and remove from the front only this way(last in is the first out)
// -also known as LIFO last in first out


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    insertNode(val) {
        let node = new Node(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            node.next = this.first
            this.first = node
        }
        this.size++
        return this.size
    }
    removeNode() {
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

// -Queues (operates on a first in first out criterai/rule also know as FIFO)
//    -queue like stack can be inplemented in several way
//    -again like stacks what make it a queue is not the structure but the methods contained within
//    -just like stack we can remove and insert in constant time complexity (those two are the focus for both)

// Used:
// -data structure just like stack focus is insertion and removal of data no much else
// -like stack though its different in how it does that
// -have tons of use cases (like a game queue, background task on pc, whatever was first invocte is the first completed)\
// -task processing in order
// -they keep order

//Insertion - O(1) 
//Remove - O(1) 
//Searching - O(n)
//Access - O(n)

// -notice node structure again is the same as stack as singly linked list
// -contain a value and next property
// -the list contains a first/head, last/tail and a size/length property like stack like singly linked list


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
    inQ(val) {
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
    outQ() {
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




//------------------------------------------------------------------------------------------------------------------
// Trees
// -data structure that consists of nodes in a parent/child relationship
// -trees are non-linear unlike list which are linear
// -there are several types of tress like(binary tree, binary search tree,)
// -trees are foundation for several other structures like (graphs, min and max heaps)
// -all variations and structure buld from trees can differn in design and used, and rules they operate by
// -like others structure tress make use of the node structure aswell

// Tree Terminology:
// -ROOT - the top node in tree
// -CHILD - a node directly connected to another node when moving aray from the root (moving down)
// -PARENT - the converse of a child, node connected to another moving towards the Root (moving up 'the down pointer')
// -SIBLINGS - a group of nodes with the same parent
// -LEAF - is a node with no children
// -EDGE - the connection or pointer in visual

// Tree Rules:
// -parent nodes can only point to child
// -they can Not point to another sibiling
// -they can Not point to a parent
// -only point to children
// -every node is moving away from the ROOT Node
// ---(aka in common visual from one node with pointers only going down from there node to node)

// Use For Trees:
// -html DOM
// -Network Rounting
// -Abstract syntax tree
// -Artificail intelligence (disicion tree, ect...)
// -Folders in operation system
// -Any JSON
// -and many many more....

// Big O of Binary Search Trees  (TIME COMPLEXITY WILL VARY DEPENDENT ON STRUCTURE, CRITERIA, AND DATA(aka if sorted or not))
// Insertion - O(log n)
// Searching - O(log n)
// Removal - O(log n)
// Access - O(log n)

//*************in a completly random tree with a variable number of children possible for each parent, data unsorted,
//--and let say no rules (so mean want random access, removal , insertion search ect...) all would be O(n) as would travers everything

// -notice we make use of the node structure with properties of value, right and left 
//   -(as bst every parent can only have max 2 children nodes)
// -in the binary search tree structure there is only one property the root 
//   -(aka parent of all parent, the starting point for the tree where all other node move aways from)

//example of a binary search tree (binary search tree mean the nodes are always sorted and the each parent can only have 2 children)
// (not all trees are sorted, in this case search is simpler as its based on the node value however not always the case)
// (some trees are not sorted so we have to direction on where to go in that case we must search the whole tree)

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

// Enter Tree Traversals
// -with tree traversal there are two very common stratagies/techniques use often these are
// (meaning they visite every node in tree)
// -BFS (breadth first search) - this focuses on approach working its way left to right first then down
//    -visits all nodes on the same level(sibling) first before moving down a layer to then work again
//     --left to right thorugh siblings intell its has visited the last node and no further layers down exist
//      ---in this search the root node would be the first visited

// -how its writen in code:
//   -bfs utilizes a queue strucutre to store what node/connection it should visite next and is usually dont iterably
//   -note important to note that this utilizes a queue structure(and that queue a node structre)
//   -tree would also have its own node strucutuer to utilize each with their dif and respective properties for task


function bfs() {
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


// -DFS (depth first search) - differs from bfs as this technique work its way down first then left to right
// -this technique also have different variation know as (post, pre, and in order)
//   --small variasion in code however effect the order in how we travers move and visit node across the tree
//   --pre(root, left , right) , inorder( left, root, right) , post(left, right , root)
//     --if preorder begint visiting right away, if inorder start visiting when reaches deepest node to left(and so forth in order)
//     --and post order begins visiting
//      -(also when deepest left node) but visite sibling then parent, befor reaching node and moving again all way down that sub tree)

// -how its writen in code:
//   -dfs can be done iterably or purely recursivly and unlike bfs does NOT utilize a queue structure
//   -these are typically writen as methods withing the tress structure/class


function dfsPreOrder() {
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

function dsfPostOrder() {
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

function dfsInOrder() {
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



//------------------------------------------------------------------------------------------------------------------
// Binary Heaps
// (is a type of binary tree with a set of rules as to how things should always be sorted within it, a rule)
// -two most common types of heap are:
// -MaxHeap: where all parent node must have a value greater than its children
// -MinHeap: all parent nodes must have a value less than its children ( and for both these, it must be true across whole tree/heap)
// -note this does not mean will be ordered in accendig or deccending order, could be but not the rule
// -could be shuffles but as long as the rule is met for each parent and child then we are good to go
// -heaps are always filled left to right and fill every slot before moving to a level below
// -with just a little math can use and array to represent a heap
//   -when using array (going from parent to children 2n+1 / 2n+2)
//   -when using array (children to parent Math.floor((n-1)/2) )

// Big O of Binary Heap
//insertion O(logn)
//removal O(logn)
//search O(n)

//Uses:
// -benary heaps are very useful data structures for sorting data
// -also for implementing other data structures like priority queues
// -great for keeping data ordered

//example of a max heap using array (this ex uses single function for insertion, and two for extraction a helper function)
// -notice max binary heap only contains one property in this example baing  values (aka an array)
// -can be done but not reccommended is pass in keyvalue pair to array to store more data then just a value(like a priority, ect...)
// --below will also show an example using nodes
// --also not that min and max heap are identical (exempt in eval where instead of looking say for < other would ve >)

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(val) {
        //i want to refactor this to be as efficient consice short as possible
        this.values.push(val)
        let newIndex = this.values.length - 1
        let parentIndex = Math.floor((newIndex - 1) / 2)
        while (val > this.values[parentIndex] && this.values[parentIndex]) {
            let temp = this.values[parentIndex]
            this.values[parentIndex] = this.values[newIndex]
            this.values[newIndex] = temp
            newIndex = parentIndex
            parentIndex = Math.floor((newIndex - 1) / 2)
        }
        return this
    }
    coltExtracMax() {
        //capture value of the root removed
        const max = this.values[0]
        //we capture and remove the last element
        const end = this.values.pop()
        //check if the heap is empty
        if (this.values.length > 0) {
            //set the root the value of the last element previously removed
            this.values[0] = end
            //call helper function to bubble down to root to meet maxheap criteria
            this.bubbleDown()
        }
        //return the value /root node removed
        return max
    }
    //heplper function to bubble down rearrange the heap
    //didn't think about edge case where we remove the last value or remove when length only 1
    bubbleDown() {
        //se index to 0 ( will use in getting children index and values)
        let index = 0
        //capture the heap length to use else where
        const length = this.values.length
        //capture value of new Root node
        const element = this.values[0]
        //loop continues to run till broken out of 
        while (true) {
            //capture and set index of children nodes
            let leftChildIndex = (2 * index) + 1
            let rightChildIndex = (2 * index) + 2
            // initialize var to capture values of the children
            let leftChild, rightChild
            //initialize and set swap value to null ( used for element swap later, also serves to break out of loop)
            let swap = null
            // checks first if child index is less than length (aka checking if its a valid element)
            if (leftChildIndex < length) {
                //set left child value to its value in the heap 
                leftChild = this.values[leftChildIndex]
                //checks if the value of left node is greater then the root
                if (leftChild > element) {
                    // if so sets swap to index and the left child
                    swap = leftChildIndex
                }
            }
            // checks if the index of right child corrensponds to a valid element
            if (rightChildIndex < length) {
                //sets right child to = its value in the heap
                rightChild = this.values[rightChildIndex]
                //i am not a fan of this (though has some good logic behind good think can make good solution combinen his and mine)
                //check if swap is null (aka first if not met) and that the right chlild value is greater than root
                if ((swap === null && rightChild > element) ||
                    //also checks if swap is not null (aka first if did meet) and the right child is greater than the left child 
                    //aka right is larger so we should swap with that one (if only left greater then this never runs, no swap change)
                    (swap !== null && rightChild > leftChild)) {
                    //swap = the index of the right child
                    swap = rightChildIndex
                }
            }
            //check if swap still = null ( aka none of the above if's were met) and we break out of the loop 
            if (swap === null) { break }
            //the root is set = to the child
            this.values[index] = this.values[swap]
            // child is set to the root
            this.values[swap] = element
            //update the root/or current elements index to the child was swapped with
            index = swap
        }
    }
}

// -Priority Queue
// (almost identical to heap, only difference is What the evaluations are based on, in this case its priotiry level)
// -notice here we use 2 structure a node and a priority queue(heap)
// -note that the node structure has two properties a value and a priority level 
// -and like the heaps prior here we just have array
// ---(here thinking though havent done but will try is not having an array at all and just have a root node like bst, surely can be done )

class Node {
    constructor(val, prio) {
        this.val = val
        this.prio = prio
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    //accept two inputs the value of node and the priority level assigned
    inQ(val, prio) {
        let newNode = new Node(val, prio)
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
    outQ() {
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
        console.log(this.values)
        return removed
    }
}




//------------------------------------------------------------------------------------------------------------------
// Hash Tables(Hash Maps)
// equivilante to javascript object(just build in, same thing)

// -hash tables are used to store key value pairs
// -similar to array but dont have inherite order
// -hash table are fast for all of the following: seaching, adding, and removing values (sounds pretty darn ideal)
// -becuase of thier speed the are used very commonly

// -nearly every programming language has a sort of hash table data structure (javascript object??)
// -some hash table in dif languages ( py has dictionaries, JS has object and maps, java, go, scala have maps, ruby has hashes, ect...)
// -js objects have some restriction but aside from that work in the same way
// -hash function are used in everything crytography, crypto, big in security, resposible for log ins ect... they are everywhere
// -literal countries,  team, ect... work to create and better hash functions


// -hash table's have to order, no indiece just a key corresposign to its value
// -often good enough just to use the build in hash table unless specified needed own version (this is do to the hash function)

// Hash Table Big O Complexity
// -insertion O(1)
// -deletion O(1)
// -access O(1)
// -searching O(n) - say know value looking for but dont have key so gotta go through them all till find match or dont exist

// -Hash Functions:
//    -hash function generate a location based on the key passed in (where that pair will be stored)
//    -prime number are often used in hash function to avoid collisions (prime is used to generate its position, in our example)
//    -collusion are when one or more key value pairs get stored in the same position/'slot'/location

// -What makes a good hash function?
// -fast must be constant time (interesting)
// -must not cluster inputs at specific indices, but distributes uniformly
// -must be consistent, same input should yeild the same output

// -Handling Collisions
// -even with a leage arrray and a great hash function, collisions are inevitable.
// -there are many stategies for dealing with collisions, but we'll focus on two :

// -Separate Chining
// -chining at each index in our array we staore values using a more sophisticated data structure(like likned list, array)
// -this allows us to store multiple key value parirs at same index
// -basically for example becomes an array withing that one index in the array (nested array)
// -one benefit to this type of strategy is that we will have more space than the inintial array length as we have nested arrays

// -Linear Probing
// -we store only one value in each position only
// -when we find a collision, we search through the array/ect.. to find the next empty slot (i like this)
// -looks ahead or backward to look for the next empty slot to store value

// example here is a build hash table using chainig to handle collution and very simple hash function 
// -notice it property keymap = to an array with a set size(prime number) 
//    -size difined in constructor argument(if not specified when passed in will defuel to that size)
//    -so array that size and hash generate where in that array the key will correspond to where its value is stored
//    -and implement chiainig where if we have a collition instead of reassigment or issue we simply
//      --have each slot be an array so if multiple get assigned same position all just store in array each key and value pair
//          --this also allow for more spaces then the keymap array length


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
    hash(key) {
        let total = 0
        let prime = 31
        for (let i = 0; i < key.length; i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total + prime + value) % this.keyMap.length
        }
        return total
    }
    set(key, value) {
        let pair = [key, value]
        let position = this.hash(key)
        if (!this.keyMap[position]) {
            this.keyMap[position] = []
        }
        this.keyMap[position].push(pair)
        return true
    }
    get(key) {
        let position = this.hash(key)
        let list = this.keyMap[position]
        if (list) {
            for (let item of list) {
                if (item[0] === key) {
                    return item[1]
                }
            }
        }
        return undefined
    }
    //should return all keys in the hashTable
    keys() {
        //create array where all keys will be stored
        let keys = []
        //loop over the main array and pull each slot
        for (let slot of this.keyMap) {
            //check if the slot is not empty
            if (slot) {
                //if yes then in that slot we loop over each one to access each nested array within
                for (let nested of slot) {
                    //them access the [0] value aka keys(and push to array for return later)
                    keys.push(nested[0])
                }
            }
        }
        //return the array with collectiong of all the keys
        return keys
    }
    //should return all values in the hashTable
    values() {
        //array to store all values from hashTable
        let values = []
        //loop over the main array and pull each slot
        for (let slot of this.keyMap) {
            //check if the slot is not empty
            if (slot) {
                //if yes then in that slot we loop over each one to access each nested array within
                for (let nested of slot) {
                    //them access the [1] value aka values(and push to array for return later)
                    values.push(nested[1])
                }
            }
        }
        //eliminate duplicate data (though this easy way sure more effective way in actual algo to filter them out)
        return [...new Set(values)]
        // return values
    }
}

//Recap:
//hash tables are collections of key value pairs
//hash tables can find values quickly given a key
//hash table can add new values quickly
//hash tables store data in a large array, and work by hashing the keys
//a good hash should be fast O(1), distribute keys uniformly and be deterministic(aka consistent and accurate)




//------------------------------------------------------------------------------------------------------------------
// Graphs
// -a graph data structure consists of a finite (and possibly mutable - not sure what that mean look up)
// -set of vertices or nodes or points together with a set of unordered pairs of these vertices for an undirected
// -aka a graph = ('set of connected nodes') - placement dosent really matter, what matters is their connections
// -all could be connected via different data point relations ect.... (structure used in any recomendation, social media ect..)
// -different values that connect data or content

// -several types of of graphs, they vary in structure, criteria, size, ect...
// -just like trees (also tree's are a type of graph as well)
// -grapth can be whats cann wieghted or unweighted (measured and unmesured connections)
//    -weighted mean their is a value associated or assigned to the edge/connection between two vertecie
//    -while unweighted mean there is no value assigned to the verticies edges

// -also can be what called directed or undirected (one way connection and two way connection)
//  -undirected means any one edge is at path both ways ( a to b , and b to a all in one edge)
//    ---no specified direction assosiated with edge (like FB if your someones friend , you are also that persons 'friend')
//  -directed has specifid arrows or pointer to specified nodes (where a may point to b, but b does not point to a) (twitter follow)
//    ---where to go to some node you would have to travers via another to get to node wanted (travel to node that does have a connection)


// graphs are made up of
// -vertex: a node
// -edged: connection between nodes
// -Weighted/Unweighted: values assigned to the distance between vertices(its edge connecting them)

// Uses for graph:
// -social networks
// -location/mapping
// -routing algorithms
// -visual hierarchy
// -file system optimizations

// Recommendations:
//'people also watched'
//'you might also like'
//'people you might know'
//'frequently bought with'
//connected by shared data points


//Adjacency List (an array of the other nodes that current node/vertex ahs connections to, an array of connection to vertex)
// only stores the actual connections
// can take up less space
// faster to iterate over all edges
// can be slower to lookup specific edges

//Adjacency Matrix (2d structure like times table with all node on x and y axis then a boolean value for wether those
//                      two nodes have a connection or not)
// stores all connection wether exist or not (aka may end up with lot of empty slot, slot with no valur/connetion)
// takes up more space
// slower to iterate over all edges (more edges exist longer will take)
// faster to lookup specific edge

// -most data is real world is not all connected
// ---thus adjacency list are very often used
// -there are far more node wit h fewer connectiong that nodes with many connections


// Big O complecities
//v = number of vertices
//e = number of edges

// OPERATION        ADJACENT LIST       ADJACENTCY MATRIX
//add vertex          O(1)                O(v^2)
//add edge            O(1)                O(1)
//remove vertex       O(v + e)            O(v^2)
//remove edge         O(e)                O(1)
//query               O(v + e)            O(1)
//storage             O(v + e)            O(v^2)

//complexities here can bit cryptic to wrap your head around at first 


// Traversing A Graph
//very often used real applications
// Traversal:
// -visiting
// -updating
// -checking

//Grapth Traversal Uses:
//peer to peer networking
//web crawlers
//finding 'closest' matches / recommendations
//shortest path problems
//---gps navigation
//---solving mazed
//---AI (shotest path to win a game)

// -traversing a graph vs tree
// -with trees there is only one path to get to a node, from root down
// -however in graphs there could be multiple path to reach a node
// -sometime visiting a node more then once to reach other, as there is no inherite starting and ending point
// -like trees its the same things just now can use directional to visualize as graph could be any shape
// -Intead we foucuse on the parent child relationship for clear dfs and bfs

//TWO OPTIONS FOR TRAVERSAL:
// DFS(depth first search) - mean visitng all the nieghbors first before visiting any of thier children
// BFS(breadth first search) - mean visiting all of the children first before visiting any of thier neighbors

//beacuse it could be any shape important to utilize a way to know where you've already benn this way we dont
//--go around in endless circles traversing graph (meaning well need to define a starting point)

// here in this example we have multiple methods contained as well and variations for some 
// -notice the Graph structure only has one property baing a list = a object/hashtable (for key value pairs )
// -this example we uses several object and array where things are nested and passing in key value pair to several structures
// --where some of the nested (aka efficiency can be betteren by using othre structures, like a node structure)


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




//------------------------------------------------------------------------------------------------------------------
// Famous Algorithms
// -Dijkstra's (shortest path) Algorithm
// -makes use a a weighted graph (difference there will be adding in a argument space, value when passed in aka edge add)

//What Is Dijkstra's Algorithm?
//one of the most famous and widely used algorithms around(used very often)
//finds the shortest path between two verticies on a graph
//what the fastest way to get from point a to point b?

//Why Is It Useful?
//gps - finding fastest route
//Nerwork Routing - finds open shortest path for data
//Biology - used to model the spread of viruses among humans
//Airline - finding cheapest route to your destination(duration, time, distance)
//Biology - used to model the spread of viruses among humans (projections)
//And many more...


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

//then to return the shortest path that was taken after calculation we utilize our previous struture strting from the end point/vertex
//--and work our way backward to the start point the simply return it reverse giving us exact node traverse of shortest path


//Structure used in algorithm
// -makes use of several array and object to store info inside methods
// -make special use of the node, and priority queue structures to store and access information
// -like in other structure, previous grapth can be modles with No node or priority qeueu and just array(mean nested data)

// Note in this example its a total of three structures, we have a node, priority queueu and a graph structure
// -the node constains a value and priority property 
// -the queue constans a values(aka list) property = an array (note that only the qeueu interacts with the node structure)
// -then the graph constains a adjecencyList(list) property that also = an array


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

//in the algorithm makes use of 3 key structure that store and provided different data to achieve this
// in the algo above you see a 'previou' and 'ditances' object and a 'node' priority queueu
// -node job is to always give us the vertex corresponding to the shorts path (to the check its neighbors for the next)
//      -will look at neighbor and give us the vertext with shortest path to them become curretn and view its neighbors
// -distances stores the actual smalls total weight/distance it takes to get from the starting point to current vertex
//      --if at anypoint we find distance that shortes it will replace whatever was there before for the node
//      ---this will return to us all weight/value of distance it would take to get from the start to all othre node visited
// -previous serves to keep track 'how we got to the current node' 'where we came from to get to the current vertex'
//      --this structure is what gives us the actual shortest path we can take to get from the start to end node

// and in making the weighted graph similar to unweight, difference is a 3 value passed in when adding edges a number associated to distance, or else..
// algo takes in 2 argument (startNode, endNode)




// Big O's
// v represent the number of verticies
// e represent number of edges

// Time Complexity of Dijkstra's Algorithm is O(v^2)
// but with min-priority queue like implemented above it drops down to O(v + e log(v))
// ideal always write with a min heap priority queue can always to time of O(v + e log(v))

//O(#verticies + #edged * log(#verticies))

//------------------------------------------------------------------------------------------------------------------