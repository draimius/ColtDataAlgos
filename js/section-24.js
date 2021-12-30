'use strict'
console.log('section-24')

// Binary Heaps - Intro

//Objectives
//-define what a binary head is
//-compare and contrast min and mac heaps
//-implement basic methods on heaps
//-understand where heaps are used inthe real world and what other data structures can be cunstructed from heaps

//what is a binary heap?
//very similar to a binary serch tree, but with some different rules
//in a MaxBinaryHeap, parent nodes are always larger than child nodes.
//in a MinBinaryHeap, parent nodes are always smaller than child nodes
//like a bst max number of children is 2
//and are in no particualer order, whats important is that wether max or min those's rules are followd for each node
//order dosen't matter metting cretiria of chossed heap does

//a binary heap is as compact as possible. all the children of each node are as full as they can be and left children are filled out first
//--aka created balanced tree every right and left is filled before moving down (left children always filled first)

//simple rule that (for maxheap) all chjildren node must be smaller in value to the parent
//that does not mean that parent will be the greatest value in the tree or child the smallest
// as long as the criteria is met for each node parent and child then all good
// criteria is relation between the parent and child not in resation to the entire tree

// why do  we need to know this?
// binary heaps are used to implement Priority Queues, which are very common used data structures
// - is just that a queue basec on its priority
// they are also used quite a bit, with graph traversal algorithms



//their are many types of head


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Storing Heaps

// can store heap in an existing data structure like and array
// 2n+1 / 2n+2
//storing heap flat in an arrry
// works same going from child to parent Math.floor((n-1)/2)





// ----------------------------------------------------------------------------------------------------------------------------------------------

// Heap: Insert - with nodes
// insert new value to heap - MaxHeap(then bubbole up any value thats greater then its parent till no longer greater than parent)

//heap using an array


// //my insert function
// //accepts value the will be added to the heaps values array
// insert(val) {
//     //start by pushing the new value to the array values
//     this.values.push(val)
//     //we capture the index value of the newly added element
//     let newIndex = this.values.length - 1
//     //we capture the index value of the parent to the new element
//     let parentIndex = Math.floor((newIndex - 1) / 2)
//     //we loop as long as the value passed in is greatere than its current parent value
//     //we also check the the value at parent index is valud (aka if new moves up enough threre may not be another value to eval with)
//     //prevent from eval with -1 or undefined if not valid element loop also stops there
//     while (val > this.values[parentIndex] && this.values[parentIndex]) {
//         //3 cup swap of value (parent becomse child and child the parent)
//         //caputer the value of parent
//         let temp = this.values[parentIndex]
//         //swaps the value paretn to the new value
//         this.values[parentIndex] = this.values[newIndex]
//         // and new value to the parent 
//         this.values[newIndex] = temp
//         //we reassign the index value of new node as its now in the previous parent index/position
//         //perant previous position/index bacome the new values index
//         newIndex = parentIndex
//         //we re calculate the value of parent index to get the new position element , new parent to eval again
//         parentIndex = Math.floor((newIndex - 1) / 2)
//     }
//     //then we return the array of values
//     return this
// }

// //colt used a helper function
// //accepts imput of the value/element we want to add to value array
// coltInsert(element) {
//     //we push value to valus array
//     this.values.push(element)
//     //then call helper function
//     this.coltBubbleUp()
//     //then return the values array
//     return this
// }
// //helper function
// coltBubbleUp() {
//     //capture the index of new added element
//     let index = this.values.length - 1
//     //captures value in the array values
//     const element = this.values[index]
//     //while loop continues as long as index remains above 0
//     //(basically breaks or gets to point that is in the index 0)
//     while (index > 0) {
//         //capture value of parent elemetn index
//         let parentIndex = Math.floor((index - 1) / 2)
//         //caputures the parent element in array 
//         let parent = this.values[parentIndex]
//         //check if the element value if less than parent value then we break
//         if (element <= parent) break
//         //swap the parent value with new element
//         this.values[parentIndex] = element
//         //then value in new index swaps with value of its parent
//         this.values[index] = parent
//         //reassign/update value of the new element index to now the parent index
//         index = parentIndex
//     }
// }


//beauty here is that this never requires reindexing as just swaping value so all remains constant the add and swap
//--though number of times swap will differ

//can be done all in one or can use helper function for the bubble up portion



//always filled from left to right
//not fan of using array and note nodes here as think show it better but it diff sure learn something good here
//notice when using this nothing is really connected it just location the children and parent no actuall pointer
//--maybe there's not supposed to be one? not sure but just look up via operation based on their index value

// we add to the end push to array "heap"
// we always add to the back aka lower end if were a tree
// --and the greater values will bubble their way up the node/index this case
// ---intul reaches end(aka index 0) or it reached parent node the has a greater value than itself

//we campare the newly inserted node value to its parent if less than do nothing
// -else if it is greater then we swap them (new becomes the parent and parent becomes child)
//and we continue till no londer true or hits end

//would we still need to bubble up if we're using a tree? would be a yes (but guess not bubble but just insert and shift others)
//-though maybe not as there would have to be a swap at some point (if its not staying same place inserted)
//---that means its appropriate position would have to take the position of some other node/value thats already in place

// based on the index of the insertion you would have access calc values for all other values/nodes you'd need
//--to campare with and or swap with

//in insertion its index value will always to that array.length before any insertion


//push the value in to values property on the headp
//bubble th value in to it correct spot


//inset pseudocode
//push the value into property on the heap
//bubble it up -
//-create a var called index which is the length of the values property -1
//create a var called parentindex which is the floor if (index-1)/2
//keep loopig as long and new value eolemtn at the parent index is less then the value elemtn at the child index
//(basicaly keep looping till new value is no longer greater than its parent value)
//swap the value of the value at parent index and new index
//wet the index to to be the parent index and start over


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Heap: Extract Max
//remove the root
//replace with the most recently adeded 
//adjust (bubble it down to met the maxheap criteria)


class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    // coltBubbleUp() {
    //     let index = this.values.length - 1
    //     const element = this.values[index]
    //     while (index > 0) {
    //         let parentIndex = Math.floor((index - 1) / 2)
    //         let parent = this.values[parentIndex]
    //         if (element <= parent) break
    //         this.values[parentIndex] = element
    //         this.values[index] = parent
    //         index = parentIndex
    //     }
    // }
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
    //check to see if any children end up out of bounds

    //my extract Max value function
    extractMax() {
        //off the bat 3 cup swap between the current root and last element in heap
        let temp = this.values[0]
        this.values[0] = this.values[this.values.length - 1]
        this.values[this.values.length - 1] = temp
        //we remove the root/max value/node (that was swap to back/bottom)
        let max = this.values.pop()
        //capture the index of the newRoot
        let newRootIndex = 0
        //capture the value of newRoot in the heap
        let newRoot = this.values[0]
        //have loop set to true, will run till param inside met to break out
        while (true) {
            //capture children index 
            let childIndex = Math.floor((newRootIndex * 2) + 1)
            //capture value in array for child 1 and 2 (not absolutly needed but for readability, could have just use index and array to pull)
            let child1 = this.values[childIndex]
            let child2 = this.values[childIndex + 1]
            //initialy var to caputer index of child we will swap the newRoot with
            let swap
            //check if it newRoot is less than both the children
            if (newRoot < child1 && newRoot < child2) {
                //if yes then we want to swap with the largest of the two
                // swap = a ternary pulling pulling only the largest of the two to swap with
                swap = (child1 > child2) ? childIndex : childIndex + 1
            }
            //else if newRoot is only less than the first child 
            else if (newRoot < child1) {
                //swap become index of the child
                swap = childIndex
            }
            //else if only less than the 2nd child 
            else if (newRoot < child2) {
                //swap become index of that 2nd child
                swap = childIndex + 1
                //else if none of those are true means the newRoot is in position 
            }
            else {
                //so we break out the root since we are done swapping (and skip all below logic and swaps)
                break
            }
            //3 cup swap between the newRjoot and the corresponding child 
            let temp = this.values[swap]
            this.values[swap] = this.values[newRootIndex]
            this.values[newRootIndex] = temp

            //the newRoot Index becomes the value/position of the child as they have swapped
            //this way we also calc the index for its new children to again eval against those
            newRootIndex = swap
        }
        //once all swap and looping done we return the heap
        return max
    }
    //colt used a helper function 
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

//both the insert and the extracMax could both use some refactoring

//remove the root
//replace with the most recently adeded 
//adjust (bubble it down to met the maxheap criteria)

//we remove but the have to adjust the heap back to meeting the max/min heap criteria
//takes the root then take whatever elemtn was inserted last previously and makes that the new root

//aside from the initail removal of the root and replacement with the most recently added
//- its very similar to the helper function first used just now in opposite insteda of swapping upward we are swapping downward
//--this time parent to a child ect and repeate till no longer true (newRoot < rootchild1, and rootchild2)
//we alwyas swap to the child that is the greatest(aka could maybe first check between the two which is greater)
//---then compare the root or parent only to the greates child and that's where it would swap values

//extracMax -  psuedo code (writing this after alright implement, nice to see getting pretty spot on in though process)
//swap the first value in the values property with last one
//pop form the values property, so you can reutrn the value at the end, 
//have the new roo 'sink donw' to the corrent spot
//--your parent index staert at - 
//find the indes of the lft child 1
//find the index of the right child 2
//if the left or right child is greate than the element swap , if both , swap with th largest child
//the child index you swapped to now becomes the new parent index
//keep looping and swapping until neither child is largeer than the element
// return the old root


let heap = new MaxBinaryHeap()


// heap.insert(1)
// heap.insert(14)
// heap.insert(44)
// heap.insert(3)
// heap.insert(15)
// heap.insert(2)
// heap.insert(313)
// heap.insert(333)
// heap.insert(5)
// heap.insert(7)
// heap.insert(700)
// console.log(heap)

// console.log(heap.extractMax())


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Priority Queue Intro
//is a data structure where each element has a priority
//--elements with higher prioriites are served before elements with lower priorities
//--importance level dictates the order
//---priority queue is abstract concept , and not a specified datastructure
// (like a queue and stack ect.. more about the set of rules of methods needed )
//--though of course their are struture more geared to it then others

//instead of having everythng store with associated priority but not oder by it
//--then we have to go through whole structure to find highest priority
//----instead we store data based on the priority level (aka we use a heap great way to do so)


//all we care about is the minimum or the maximum
//-and reorder when anything is added and or remove
//--as to maintain that min or max to be next to be served
//we always pull from the top
//pulling the min or max is constant
//then reorder could be O(n) in worst case think so

//we will implement a minHeap here


// class Node {
//     constructor(val, prio) {
//         this.val = val
//         this.prio = prio
//     }
// }

// class PriorityQueue {
//     constructor() {
//         this.values = []
//     }
//     //accept two inputs the value of node and the priority level assigned
//     inQ(val, prio) {
//         let newNode = new Node(val, prio)
//         this.values.push(newNode)
//         const length = this.values.length

//         if (length === 1) { return this.values }

//         let childIndex = length - 1
//         while (true) {
//             let child = this.values[childIndex]
//             let parentIndex = Math.floor((childIndex) / 2)
//             let parent = this.values[parentIndex]
//             if (parent) {
//                 if (child.prio >= parent.prio) {
//                     break
//                 }
//             }
//             this.values[childIndex] = parent
//             this.values[parentIndex] = child
//             childIndex = parentIndex
//         }
//         return this.values
//     }
//     outQ() {
//         let removed = this.values[0]
//         let parent = this.values.pop()
//         if (this.values.length < 1) { return removed }
//         this.values[0] = parent
//         let parentIndex = 0
//         while (true) {
//             let child1Index = (parentIndex * 2) + 1
//             let child2Index = (parentIndex * 2) + 2
//             let child1 = this.values[child1Index]
//             let child2 = this.values[child2Index]
//             let test = Infinity
//             let swap = Infinity
//             if (child1) {
//                 if (parent.prio > child1.prio) {
//                     swap = child1Index
//                     test = child1.prio
//                 }
//             }
//             if (child2) {
//                 if (parent.prio > child2.prio) {
//                     swap = (test < child2.prio) ? swap : child2Index
//                 }
//             }
//             if (swap === Infinity) break
//             this.values[parentIndex] = this.values[swap]
//             this.values[swap] = parent
//             parentIndex = swap
//         }
//         console.log(this.values)
//         return removed
//     }
//     //insure eval using the prio level and not node value
//     coltInQ(val, prio) {
//         let newNode = new Node(val, prio)
//         this.values.push(newNode)
//         this.bubbleUp()

//     }
//     //colts logic is the same as previous only difference is the we swap the eval instead of > we do <
// }



//ok so ideal is to use a helper functino to reorder,
//since the inQ yes we creater new node but always starts insertion at the root
//and outQ we remove and in place we have new value in root
//so both start at the root and we use that to then eval and reoder based on the priority of elements
//wont work as intended as the adding to queue should be done to back or (does it have to be like that )
//---i mean as long as end in corrent position and we can make it constant i'd say that ok
// yeah it wont as adding in this case mean the back aka push , though removing from front and done constant via swap a replace
//is a way to add from front aswell and have it be constatn as well and still be a queue its just the reorder that would not be
//though think here because we are using an array its not the same or may it is as the add and remove can and are constatn
//----its just the reoder like we said amybe its the same just done diff if we were using a say a tree or queue i think liked list


//with enqueue will still start at root and move down diff here will be that if the pr level matches we still want whatever
//--was there first to remain first so if they and greater(minHeap) than or ==== we still want to move it down the queue
//the dequeue be similar to what we already had, we will always remove the root and have it replaced with whatever was last added
//--aka its last node, then from there bubble it down as needed

//add then compare pr
//remove then compare pr
//becuase thinking here we are always starting at the root if we add its at the root if we remove (though from the end)
//its the root we are removing
//so maybe way we see we can make helper function for both were it takes the root and the reorders as needed





// let prioList = new PriorityQueue()
// prioList.inQ('seven', 7)
// prioList.inQ('six', 6)
// prioList.inQ('five', 5)
// prioList.inQ('four', 4)
// prioList.inQ('three', 3)
// prioList.inQ('two', 2)
// prioList.inQ('one', 1)
// prioList.inQ('one', 1)
// prioList.inQ('zero', 0)
// console.log(prioList)

// console.log(prioList.outQ())

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Big O of Binary Heap
//insertion O(logn)
//removal O(logn)
//search O(n)

//insert and removal log n and not constant may have to bubble up into correct position
// base 2 to what exponent = the number of element in the heap

//heap can never get overweight on one side and has to fill before moving to next level
//heap not focused on searching (bst better) heap would have to travers whole heap as no inheriat order (just min or max criteria)


// ----------------------------------------------------------------------------------------------------------------------------------------------

//Recap -
//binary heap (type of a heap and heap being a type of tree)
//benary heaps are very useful data structures for sorting, and implementing other data structures like priority queues
//binary heaps are either min or max heaps (criteris) either parent always less then children or other where oppisite parent greanter then children always
//--note we also always fill them out left to right (we always fill any empty child slots before moving to next layer)
//with just a little math can use and array to represent a heap , rules that we follow make its easy
//--though easier to do soo guess depending how use could have to usual arrays draw back but again depends what using it for right
//---wether tree or array will vary on the application of said structure needed







// ----------------------------------------------------------------------------------------------------------------------------------------------

//Extras:
//refactored heap with using array






// ----------------------------------------------------------------------------------------------------------------------------------------------

//Extras:

// Heap: Insert - with nodes
// Heap: extactMax - with nodes

//may be possible will try again but all examples i see all use array maybe that common thing
//and just best practice as is simple and get already have all the beneficial time complexities you'd want
//and get from using trees guess dosent matter much here then though still think be good practice to create