'use strict'
console.log('section-20')

// DOUBLY LINKED LIST - Intro

//Objective:
//-construct a doubly linked list
//-compare and contrast doubly and singly linked list
//-implement basic operations on a doubly linked list
//-
//-

// what is a doubly linked list?
//almost identical to single liked lists, except every node has another poiter, to the previous node
//aka all node point to the node ahead and behind
//we still have a head and tail, and still no index's
//becuase it points both way all inseting removing , traversing is different in code to achieve it
// ex. if we need the second to last node (in sinlgle linked list we wound have to traverse the whole list)
// while in doubly we can start from the tail/end and work our way backwards
// instead of taking length-1 it would only be 1

//Cons of doubly liked vs sigle 
// it requires more space/ memory




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Setting out node class

//node has a val aka the node the poiters of next and previous(prev)
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

//just like the singly linked list had a head and tail and we track its length
// class DoublyLinkedlist {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }
// }



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Push
//accepts a value and add a node to the end of our list


// //my push function
// //accepts value that becomes that value of the new Node
// push(val) {
//     //create and capture new node with val passed in
//     let newNode = new Node(val)
//     //checks if the list is empty
//     if (!this.head) {
//         //sets the head and tail property to both equal the new node (as nothing else exist)
//         this.head = newNode
//         this.tail = newNode
//     }
//     //else if the list is not empty
//     else {
//         //the old tail's .next value becomes the new node(aka beign that is the last value now and will become new tail)
//         this.tail.next = newNode
//         //the new nodes prev value(pointer back) is set to the 2nd to last node now (old tail)
//         newNode.prev = this.tail
//         //then we updtae the tail property to be the new node (as its now the last node in the list)
//         this.tail = newNode
//     }
//     //increment the list's length
//     this.length++
//     //then return the new list
//     return this
// }


//create a new node
//checke if list is empty
//if yes new node become the head and tail
//else set the currets tail.next to be the new node
//--also set the new node.prev to be the only tail (aka node before it)
//---then update tail to be the new node
//increment the length
//then return list
//see alot of node.next.prev as to refrence the currents nodes next , that nodes prev should be the current node



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Pop
//removes node from the end of the list


// //my pop function
// pop() {
//     //checks if list is empty, if so return undefined as there is nothing to be removed/return
//     if (!this.head) { return undefined }
//     //initial varible to capture the original tail and/or capture node removed to return later
//     let oldTail = this.tail
//     //check if only one element exist in the list
//     if (this.length === 1) {
//         //set head and tail to null
//         this.head = null
//         this.tail = null
//     }
//     //else if not empty
//     else {
//         //capture value to 2nd to last node(of the tail .prev)
//         let newTail = this.tail.prev
//         //severse the newtail connection to old (now points at null)
//         newTail.next = null
//         //severse the old tails connection to the new tail via .prev (now points at null)
//         this.tail.prev = null
//         //update the tail to the newTail
//         this.tail = newTail
//     }
//     //decrement the list length
//     this.length--
//     // return the node removed
//     return oldTail
// }
// //better version i think
// coltPop() {
//     if (!this.head) { return undefined }
//     let poopednNode = this.tail
//     if (this.length === 1) {
//         this.head = null
//         this.tail = null
//     } else {
//         //big dif is here
//         //of bat reasigns the tail to 2nd to last node(newTail)
//         this.tail = poopednNode.prev
//         //then we severe connectiong from the newTail to the old(.prev to null)
//         this.tail.next = null
//         //and severe connection from the oldTail to the newTail(.next to null)
//         poopednNode.prev = null

//     }
//     this.length--
//     return poopednNode
// }



//thinking all really have to do is
//grab 2nd to last to last node (or the current tail.prev) [ colt says that both connection show be severed not just the one]
//and set the current tail.prev.next to null severing the connection
// ---(dosent matter if tail is pointing back as its no longer part of whole)
//then we update the tail to be the 2nd last node aka now the last (or the originals tail.prev)

//if there is no head, return underfined
//store the current tail in a variable to reutnr later
//if the length is 1, set the head and tail to be null
//update the tail to be previous node
//set the newtail next to null
//decrement the length
//return node removed

//extra: the way we are able to shuffle vars and value is interesting and very usefull thing to learnd
// i notice that as long as whatever isn't on the left side of = still hold its original value
//--even if the var = to that has been changed (var = 1) var+1 var now 2 , but 1 stil 1
//----ex above the main property is updated of the bat before all else and guess as long as you have some refrence to original
//--dosent matter this case the poopedNode



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Shift
//removes a node from the beginning of the list

// //my shift funciton
// shift() {
//     if (!this.head) { return undefined }
//     let oldHead = this.head
//     if (this.length === 1) {
//         this.head = null
//         this.tail = null
//     } else {
//         this.head = oldHead.next
//         this.head.prev = null
//         oldHead.next = null
//     }
//     this.length--
//     return oldHead
// }


//super similar to the pop only dif is its head and not tail then in else we swap .next and .prev

//take its current head
//find its .next
//make that the new head
//and sever connectiong
//-from the head to newHead (head.next = null)
//-and from the newHead to Oldhead(newHead.prev = null)
//decrement length
//return removed node
//--edge case of
//:list is empty
//:only one item within the list

//store current head property


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Unshift
//add a note to the beginning to of our list


// //my unshift function
// //accept value that becomes value in the new node
// unshift(val) {
//     //capture new node to work with
//     let newNode = new Node(val)
//     //if the list is empty newNode becomes the head and tail
//     if (!this.head) {
//         this.head = newNode
//         this.tail = newNode
//     }
//     //else if list is not empty
//     else {
//         //we set the oldheads .prev to point at the newNode/head
//         this.head.prev = newNode
//         //we set newNode/head .next to point at the old head
//         newNode.next = this.head
//         //update the head prop to be the newNode
//         this.head = newNode
//     }
//     // increment list lenght
//     this.length++
//     //return the new list
//     return this
// }


//kinda just do the reverse of the push trade tail for head and the .next to .prev

//we create a new node
//we reasign head to be new node
//we have node .next = old head
//we have node .prev = null
//we have the oldhead.prev = new node
//increment length
//return list
//---if list is empty
//-new node = the head and tail

//old head prev = newnode
//newnode.next = oldhead
//update .head to new node


//i notice that is our variable shifting there pattern when removing and one for when we add
// - when we remove we set the property or here head or tail right of the bat before anything else shifts
// - while when we add the property reassignment come last after all other shifting
//makes sense as they are doing opposite operation, find that usefull and interesting
// (sure exist and used oftern, aswell as other patterns exist we haven't seen)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Get
//takes a number as input and return the node in said position
//very similar to an array index


// //my get function
// //accepts number of position node wated (index of sorts)
// get(num) {
//     //short circut if number is greater then length= or is number is negative
//     if (num < 0 || num >= this.length) { return null }
//     //var to capture node and return
//     let selected
//     //var to start our loop of list from the start
//     let loop
//     //start search from the back/tail
//     if (num > Math.floor(this.length / 2)) {
//         loop = this.tail
//         //loop through all item in list till reach wanted
//         //we decremetn since start form "length - 1" coming donw
//         //i here = lenght -num -1 this calc to end up in correct position from starting at tail
//         for (let i = (this.length - num) - 1; i >= 0; i--) {
//             //capture value
//             selected = loop
//             //move to the next node
//             loop = loop.prev
//         }
//     }
//     //start search from the front/head
//     else if (num <= Math.floor(this.length / 2)) {
//         loop = this.head
//         //loop through all item in list till reach wanted
//         for (let i = 0; i <= num; i++) {
//             //capture value
//             selected = loop
//             //move to the next node
//             loop = loop.next
//         }
//     }
//     // return node in position selected
//     return selected
// }


// //does make sense to use while loop and just look for a match vs my for loop where i had to think about the calc
// // (though not hard but the whiles and looking for match reads easier)
// //like this solution more would change maybe like 1 to thing just preferance though i like this
// //the index passed in does decide what loop its goes to but is not involved in the actual looping at all
// //(only thing would defi current outside then just reasign in each loop to its corresponding loop, this way also only return once)
// //same thing with count(but not big deal just preference)
// coltGet(index) {
//     if (index < 0 || index >= this.length) { return null }
//     if (index <= this.length / 2) {
//         let count = 0
//         let current = this.head
//         while (count !== index) {
//             current = current.next
//             count++
//         }
//         return current
//     }
//     else if (index > this.length / 2) {
//         let count = this.length - 1
//         let current = this.tail
//         while (count !== index) {
//             current = current.prev
//             count--
//         }
//         return current
//     }
// }


//side note: better discernment of when to use a for vs while , get better at working with while loop

//becuase we can move from either end of the list
//thinking can optimize be checking wether the number is greater than or less than then list.lenghts mid point
//if it greater than (Math.floor(length/2)) then we start from the back
// else if its less than we start from the front (head)
// how should we traverse it :
// thinking simple loop cause whatever side start from still have to move from one to the other can jump right
// one loop incrementing and the other decrementing
// --we have outide var we can use and reasign to return node (reassign in each loop, as only one can run at a time)
//  --defined hold var outside loops
//---if the num passed in is negative or greater than list .length the we short circut and return null/undefined or false we see



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Set
//replacing a value of a selected node in list
//accept a index/positon value num and a value to reasign to node selected


// //my set function
// //accepts a index of node wanted and val to be reassined to node
// set(index, val) {
//     let selected = list.get(index)
//     //check if invalid input (aka negative num or greater than index exist) if so return null
//     if (!selected) { return false }
//     //else is valid
//     else {
//         //we capture node returned from .get() (node in index wanted)
//         //set that returned node.val = new val passed in
//         selected.val = val
//     }
//     //return true (reassging successful)
//     return true
// }



//use our get() methos
//have it return to us the node
//the reassign it val to whatever was passed in
//and done
//should not effect length or any .next .prev ect
//--just check that its a valid index(all else is good)




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Insert
//addign a node in a specified poisition within the list
//accepts index and value


// //my insert function
// //accept a index and value
// insert(index, val) {
//     //chekcing for invalid index negative or too large return null
//     if (index < 0 || index > this.length) { return false }
//     //captuer new node
//     let newNode = new Node(val)
//     //captures node at index wanted (requires at least one var for these shift cause else how do i even get to the node right)
//     let selected = list.get(index)
//     //adding to the very start of the list so use unshift method
//     if (index === 0) {
//         list.unshift(val)
//     }
//     //mean adding to the very back so we use push method
//     else if (index === this.length) {
//         //**notice here something in his he used this.push(val) while i use list
//         // wonder the implecations of this ?? of the bar could see the issues
//         //as this refrence specified defined list(version of the class) and not refrencing 'this' list being worked on
//         // where what is a had list nade something different like 'test' for example
//         //if we ran this instead of pushing node to 'test' list it would push it to 'list' list??????
//         //havent tested it but deff see issue and confution moving forward take note and fix */
//         lsit.push(val)
//     }
//     // this case where is valid and not any edge case
//     else {
//         //we set new node .next to right node (aka node in selected position)
//         newNode.next = selected
//         //set new node .prev to the node in position selected .prev
//         newNode.prev = selected.prev
//         //we set left node.next to = new node
//         selected.prev.next = newNode
//         // we set right node .prev to = new node
//         selected.prev = newNode
//         //increment length (edge cases have incrementation in their methods already)
//         this.length++
//     }
//     //return our list
//     return true
// }



//colt set var for the node before and after (though not nessesary i see why you would as that make it more readable at a glance)


//edge cases of end and start use push and unshift
//else if not though then its somewhere in the middle
//if middle then we need to take the left node and right node
//left node .next  = new node
//right node.prev = new node
//new node.next = right node and its .prev = left node
//now its just what order should we do that in and what needs to be captured in var
//--say the new node .next .prev dont really matter they dont effect anything




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Remove
//remove a node at specified index wanted
//pass in num/index


// //my remove function
// //accept index of node selected for removal
// remove(index) {
//     //checking that index is valid aka not nagative or greater = to length (if so return false cause dont exist brub)
//     if (index < 0 || index >= this.length) { return false }
//     //capture the selected node (can use for return and to grab the node left and right)
//     let current = this.get(index)
//     //captuer the prev node to current
//     let prevNode = current.prev
//     //captuer the node after the current
//     let afterNode = current.next
//     //edge case where removing the first node
//     if (index === 0) { return this.shift() }
//     //edge case where removing the last node
//     else if (index === this.length - 1) { return this.pop() }
//     //if valid and not edge case
//     else {
//         //cut the nodes connection both ways cut from list
//         current.next = null
//         current.prev = null
//         //set prev node .next to the after node (to bridge gap)
//         prevNode.next = afterNode
//         //set after node .prev to the prev node (to bridge gap)
//         afterNode.prev = prevNode
//         //decrement length
//         this.length--
//         //return removed node
//         return current
//     }
// }


//though we can accomplish same without settign all the node to a var makes much more readable at a glance this way
//another thing with the var's of node we only had to run get() once and from that one node we were able to get other
//--didnt have to call it for each var

//edge cases where either the end or start we use the pop  and shift
//also edge case where the length is = 1 (aka all shold = null)
//--maybe the methods already do that will have to check head tail and respective .next and .prevs of each (methods got it)
//also check that its a valid index
//if is valid and not an edge case
//--the thing is the connections of the prev and next where we have to brigde that gap
//--we need to sever connections from node selected all = null
//---then brigde gap from left node and right node .next and .prev
//** also small pattern here when adding it can = length,
//** but when removing it can not = the length



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Comparing Singly and Doubly Linked List

//insertion - O(1)
//removal - O(1)
//serching - O(n)
//access - O(n)

//linked excell in insetion



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Recap

//doubly linked list are lamost identical to singly linked lists except there is an additional poiter to previous nodes
//great when need to access data backwards
//better than singly for finding nodes and can be dont in half the time
//however, they do take up more memory considering the extra pointer




// ----------------------------------------------------------------------------------------------------------------------------------------------




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


let list = new DoublyLinkedlist()

list.push('zero')
list.push('one')
list.push('two')
list.push('three')
list.push('four')
list.push('five')
list.push('six')
list.push('seven')
list.push('eight')
list.push('nine')
console.log(list)

