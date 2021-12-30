'use strict'
console.log('section-21')

// STACKS - Intro

//Objective
//-define what a stack is
//-understand use cases for a stack
//-implement operations on a stack data strucutre

// What is a stack?
//datastructure
//collection of data that must abied but a rule
//LIFO "last in first out"
//last elemtns added to a stack is the first to be removed (we pull from the top)

//just like the 'Call Stack'

// Where are stacks are used
//-managing function invocations
//-undo/redo
//-routing (hidtory object) is treated like a stack
//-store history of things , history of action taken or to be taken (order or actions done or requested/ step and restrace steps)

//there are multiple way to implement a stack (its now just a structure but a concept)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Creating Stack w/Array
//sort of just getting feet wet with stacks
//stack is a concept (store data in a way that the last thing in will be the first thing removed) 
// (first = last out/ last = first out)
//*javascript dosent come with its own stack structure like other languages


let stack = []

stack.push('google.com')
stack.push('github.com')
stack.push('youtube.com')

// remove in we get the last first (aka pop)
// using push and pop we insense have created a stack  (this removes from the end)
//or use shift and unshift can also create a stack (this removes from the start)
//its not so much about the methods used to achieve the FIFO
//but about achiving FIFO regardless of the methods used

//the issue with using an array as stack is the indicies
//where one of above examples is more effective then other
//as in array removing from the end is more efficient than removing from the front(as have to reindex everything)

//also knowing we only need the LIFO then indecies dont really matter so wound't use an array in first place unless needed that random access
//need to preserve order but aside from that dont need much else

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Creating Stack From Scratch
//using a linked list
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
    newPush(val) {
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
        //learned the this can be done in one line, like so : return ++this.size   (guessing means increment then return in sense)
    }
    newPop() {
        if (!this.first) return undefined
        let current = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        }
        else {
            // this.first.next = null
            this.first = current.next
            current.next = null
        }
        this.size--
        return current
    }
}
//issue with this approch like a linked list is the we have to loop through to find node 
//--aka its not constant time (and we need that in a stack so dif approach is needed)

//we use instead the shift and unshirt methods like in liked list but (name that pop and push)
//thing is the becuase we only move one way in this singly linked list
//meaning that to remove from end and reassign new last property it takes us looping through the whole list
//which we do not want so instead we constantly work with the start (remove and add from front)
//becuase here to pull all that well its always at front we already have access to everyting there
//--the node returning and its replacement (head.next) we have everything right off bat without looping lookin for it
//very interesting and clever



// push(val) {
//     let node = new Node(val)
//     let current = this.first
//     if (!this.first) {
//         this.first = node
//         this.last = node
//     } else {
//         while (current) {
//             current = current.next
//         }
//         this.last.next = node
//         this.last = node
//     }
//     this.size++
//     return this.size
// }
// pop() {
//     if (!this.first) return undefined
//     let current = this.first
//     if (this.size === 1) {
//         this.first = null
//         this.last = null

//     } else {
//         let newlast = current
//         while (current.next) {
//             newlast = current
//             current = current.next
//         }
//         newlast.next = null
//         this.last = newlast
//     }
//     this.size--
//     return current
// }



let list = new Stack()

list.newPush('five')
list.newPush('four')
list.newPush('three')
list.newPush('two')
list.newPush('one')
list.newPush('zero')



//some algos make use of a stack to know what has been processed and has yet to be precessed

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Big O of Stacks
//Insertion - O(1) **
//Remove - O(1) **
//Searching - O(n)
//Access - O(n)

//important here are the insertion and removal
//we dont care for serching or random access in this case (are focus is the above two)

// Recap:
//-stacks are a LIFO(last in first out) data structures where the last value in is always the first one out
//-stack are used to handle function invocations (the call stack), for operation like undo, redo and for routing
//---(remember pages visited and go back and forward ) and more
//-not a built in structure in javascript


// ----------------------------------------------------------------------------------------------------------------------------------------------

// QUEUES - Intro
//im thinking its adding and removing frmo oppisite end, like a line we romve from the front but add in the back
//works of the FIFO (first in first out)

//Objextive:
//-define whta a queue is
//-understand use cases for a queus
//-implement operations on a queue data structure

//what is a queue?
//data structure just like stack focus is insertion and removal of data no much else
//though it differce in how it does that
//Queues work under the rule of FIFO (first in first our)
//have tons of use cases (like a game queue, background task on pc, whatever was first invocte is the first completed)\
//task processing  in order



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Creating Queus w/Arrays

// in senses create queue by having working on opposing side
// like array and only using push to add and unshift to remove them 
// or the conunter part with pop and shift  
//and like before just to note issue with array is indicies (not needed with focus on insertion and removal)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Creating Queue From Scratch


// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }
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

// typicall naming conventions for queue if 'enqueue' for in q or adding,  and dequeue for out of q or removing

//the queue and stack use all basice "array" methods right use some if not all (push, pop, shift, unshift) just under diff names
//and in different combination depending what the goal 'rule' and how you'd like to go about it 

let queue = new Queue()

queue.inQ('zero')
queue.inQ('one')
queue.inQ('two')
queue.inQ('three')
queue.inQ('four')
queue.inQ('five')





// ----------------------------------------------------------------------------------------------------------------------------------------------

// Big O of Queus

//Insertion - O(1) **
//Remove - O(1) **
//Searching - O(n)
//Access - O(n)


//same as the stack difference is simple that rule, convention used
//being stack LIFO vs queue FIFO



// ----------------------------------------------------------------------------------------------------------------------------------------------

// stacks and queues very similar
// just a convention of how to utilize a linked list basically
// just depends of course chanllange at hand or focus chosen as to what structure convention and method we be defined and used