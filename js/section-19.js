'use strict'
console.log('section-19')

// SINGLE LINKED LIST - Intro

// Objectives:
//-define what a singly linked list is
//-compare and contrast linked lists with array
//-implement insertion, removal, and traversal methods on singly linked lists


// Intro to Singly Linked Lists

// What is a liked list ??
// a data structure that consist of a head, tail, and length property
// linked lists consist of nodes, and each node has a value and pointer to another node or null (no indecies, but poiters)
// the node had it value as well as a refrence to the next node
// we only track the head and tail , plus length
// is we want to access an item we have to start at the head and move to next node and next till reached wanted node
// linked list is bunch of nodes pointing to the next
// tail always points at null and nothing come after nothing to point to
// 'its an building with no elevator you must take stairs to get to next floor'
// 'Singly' referece to fact that nodes all only point one way to the next node and nowhere else

// extra 'Doubly' linked list has node pointing both ways to the next node infront and to the one behind

// to search for value must traverse node till reach one wanted
// to inser we would have to do the same in traves one by one till reach location wanted

// List -
//do not have indecies
//connected via nodes with a next pointer
//random access is not allowed

// Array -
//indexed in order
//insertion and deletion can be expensive (ripple effect of everything having to be re-indexed into new order)
//can quickly be accessed at a specific index(randow access)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Starter Code and Push Intro
//push new value into the end of linked list

//Node class 
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
// //class of linked list that will utilize the Node class
// let first = new Node('first')
// //reassining the next originaly null now pointing to other node
// first.next = new Node('second')
// first.next.next = new Node('third')
// console.log(first)

// //list is initiated with no arguments
// class SingleLinkedList {
//     constructor() {
//         this.length = 0
//         this.head = null
//         this.tail = null
//     }
//     //my push function
//     push(val) {
//         let node = new Node(val)
//         if (!this.head) {
//             //hes to empty, not just = null as thats still a value
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node

//         }
//         this.length += 1
//         //return the linked list cleverly by -
//         return this
//         //not sure though what this does here cause i was able to still get whole list without this here
//     }
// }


//push psuedo code -
// adding a new node to the end of the liked list
//accept a value 
//create a new node using value passed into function
//--if there is no head property, then set the head and tail to be the newly created node
//--else if there is a head, set the next property on the tail to be the new node and 
// ---set the tail property on the list to be the newly created node
//and increment the length by one


// let list = new SingleLinkedList()
// list.push('Head')
// list.push('middle1')
// list.push('middle2')
// list.push('middle3')
// list.push('Tail')


// console.log(list) //works great



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Pop Intro
//remove value from the end of linked list
//to do so envols going through whoe list to find what node points to the tail
//-then remove tail and assignme node pointing to tail to now be the new tail
//-that new tial .next poits to null (thus disconnecting from oldtail) , then assign as new tail

//pop pseudo code-
//if there are no nodesin the list, return underdined
//loop through the list till reach the tail 
//set the next property of 2nd to last(new tail) to null
//set that 2nd to last to be new tail
//decrement the length
//return the value of the node removes


// class SingleLinkedList {
//     constructor() {
//         this.length = 0
//         this.head = null
//         this.tail = null
//     }

//     push(val) {
//         let node = new Node(val)
//         if (!this.head) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node

//         }
//         this.length += 1
//         return this
//     }//not actually using but good exercise
//     // traverse() {
//     //     let current = this.head
//     //     while (current) {
//     //         current = current.next
//     //         console.log(current)
//     //         console.log(current.val) //.val is an actual method gets that node's value (is no because was used in the push)
//     //         //or is it like property it now has becuase of push(though we changed name used in push and val still worked so yeah)
//     //     }
//     // }

//     //my pop fucntion
//     pop() {
//         //if the even that the list is already empty aka head dont exist 
//         //we should short circut and return undefined
//         if (!this.head) { return undefined }
//         //flexibility use var also set to head to start from the begining of the list 
//         let current = this.head
//         //used to capture the 2nd to last node / to become the new tail
//         //used the var newtail to the assign to the this.tail 
//         let newTail = current
//         //resolves issue of pop when only one node 
//         //if the head exist but it points to nothing becuase it was popped 
//         if (current && !current.next) {
//             //we set both the tail and head to null
//             this.head = null
//             this.tail = null
//             //decrement length
//             this.length -= 1
//             //return node we popped off this case the head node
//             return current
//         }
//         //used when more than one node, onced passed above it its clear of the code 
//         //checkes if value of current .next dosent ===null or exist
//         while (current.next) {
//             //we set the new tail to current node(2nd to last)
//             newTail = current
//             //current again reassigned to move through loop /would be null if reached tail thus ending the loop
//             current = current.next
//         }
//         //reassign the tail to the newtail
//         this.tail = newTail
//         //sever connection to old tail by the next now pointing to null
//         this.tail.next = null
//         //decrement length
//         this.length -= 1
//         // return the node we removed
//         return current
//     }
//     //COLT REFACTORED
//     betterPop() {

//     }

// }



//function issue where can pop/remove everythign nodes but the Head node as it dosent meet param to be removed 
//fix with diff structure and or parameter/eval



// let list = new SingleLinkedList()
// list.push('Head')
// list.push('middle1')
// list.push('middle2')
// list.push('newTail')
// list.push('old Tail')

// console.log(list.pop())
// // list.pop()
// // console.log(list)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Shift Intro
// remove node from the from of the list 
// current head is removed and the 2nd node in list becomes the new head


//my shift funciton:

// shift() {
//     //checks if list is empty if so returns undefined
//     if (!this.head) { return undefined }
//     //var to hold way will be the old head node
//     let current = this.head
//     //reassigning the head to the 2nd node or the old head .next node
//     this.head = current.next
//     //check if head dosent exist but tail does if so set tail to null
//     //only runs when called on tail node as their is always a head till this spcified case
//     if (!this.head && this.tail) { this.tail = null }
//     //decrement length 
//     this.length -= 1
//     //return the node removed
//     return current
// }


// extra edge cases, could use length in evals instead but what i have now works just fine
// pseudocode
//if ther are no nodes, reutrn undefined
//store the current head property in a variable
//set the head property to be the current head next property
//decrement the length by 1
//return the value of the node removed 


// let list = new SingleLinkedList()
// list.push('Head')
// list.push('middle1')
// list.push('middle2')
// list.push('newTail')
// list.push('old Tail')
// // console.log(list.pop())
// // list.shift()
// // list.pop()
// // console.log(list)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Unshift Intro
//adding to the start of the list 

//my unshift:

// unshift(val) {
//     //create new node
//     let node = new Node(val)
//     //if the list is empty
//     if (!this.head) {
//         //set the head and tail to newly created node
//         this.head = node
//         this.tail = node
//         //else if list is not empty
//     } else {
//         //we set the new node.next to the current head
//         node.next = this.head
//         //the reassign the head to the new node
//         this.head = node
//     }
//     //we increment the list length
//     this.length += 1
//     //return list
//     return this
// }



//accepts a value
//create a new node using the value passed in 
//if there is no head property on the list, set head and tail to be new node
//else set new node .next as the old head 
//set node and new head
//increment length 
//return list




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Get Intro
//taks in number/position and returns item in that position
//take number and traverse the list that many times

//My get funciton

// //accespt input this beign an index/position of value wanting to 'get'
// get(num) {
//     //checks that number is not negative or greater than list length (value wouldn't exist)
//     if (num <= this.length && num >= 0) {
//         //use this to loop and start from the begining of the list
//         let current = this.head
//         //we loop over the list till we reach the index wanted
//         for (let i = 0; i <= num - 1; i++) {
//             //reassign current to next to contunue moving thruogh the list 
//             current = current.next
//         }
//         //we return node at index/position wanted's value 
//         return current.val
//     }
//     //else if if greater then list length or negative number we return undefined as wont exist in list
//     else { return undefined }
// }



//function should accepts index
//if index is negative of greater then legnth return undefined or null
//loop through the list till reach index and return val of said node



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Set Intro
// update a value at specified position to whatever value is wanted
// we pass in a position and a value
// -does not remove or add node / no effect to length 
// -doesn't effect that node next / or anything else 
// --simply changes the value stored withing the node

//my set function 

// //pass in the index/number represent the position , then the value/item that will replace
// set(num, item) {
//     //sets the result of our get funciton 
//     let selected = this.get(num)
//     //short circut, is get return undefined the now possible so return false 
//     if (!selected) { return false }
//     //if it does exist we change that nodes value to the one passed in
//     selected.val = item
//     //then return true
//     return true
// }


//function accepts a index and value/item 
//--note can use get function to help get node in position wanted
//if the node not found (aka dont exist) return false
//else set the value of the at node to be the new passed in value/item and return true



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Insert Intro
//add a node at a specifed position 
//function accepts
//we need to set the node just before the position we want
//its .next to the new node then that new .next point to node that was in the position originally (order not specified)
//have new node point to node in position passed in the have node just before position .next point to new node

//My insert function

// //pass in two inputs one in index where want inserted node and other the value/item wanted in said position
// insert(num, val) {
//     //short circut if num outside wanted range aka negative or greater then list length
//     if (num > this.length || num < 0) { return false }
//     //edge case where inseting to start of list 
//     if (num === 0) { this.unshift(val) }
//     //edge case where inseting to end of list 
//     else if (num === this.length) { this.push(val) }
//     else {
//         //capture new node
//         let node = new Node(val)
//         //capture the the node just before position wanted
//         let pre = this.get(num - 1)
//         //connect new node to node in position selected
//         node.next = this.get(num)
//         //connect pre node to new node (thus making them all inline now new list )
//         pre.next = node
//         this.length += 1
//     }
//     //increment list length
//     //return true
//     return true
// }


//if the index is negative or greater than length return false
//if the index is the same as length, use push method to add it 
//if the idex is 0 use the unshift method to add to list
//else use the get to access node at position-1 wanted node just before  
//once got pre note we set its .next property pointing to new node
//then connect the new node.next to the node previously in the position 
//increment length 
//return true
//take return value of unshirt and push make boolean on return in inset 


//extra random note learned that with ! and !! can convert thing to boolean with their respective truthy and falsy value


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Remove Intro
//removes a node in spcified position from the list
//accept a index/number as input 


//My remove function 

// //accepts index/position number of node that will be removed
// remove(num) {
//     //short circut checking for negative and num greater then lsit length
//     if (num > this.length || num < 0) { return false }
//     //edge case if removing from the start we call method shift 
//     if (num === 0) {
//         //return node removed
//         return this.shift()
//     }
//     //edge case if removing from the end of list we call method pop
//     else if (num === this.length - 1) {
//         //return node removed
//         return this.pop()
//     }
//     //if not an edge case of short circut do this
//     else {
//         //capture node in position for removal
//         let current = this.get(num)
//         //capture node previous to removal node
//         let pre = this.get(num - 1)
//         //reassign the next value of pre to value of the removal nodes.next value (bridging gap and removing it)
//         pre.next = current.next
//         //decrement the length
//         this.length -= 1
//         //return the node removed
//         return current
//     }

// }



//use get to grab node beign removed
//grab node previous to that one as well and the node after chosed
//we then connet the pre node .next to the  removed nodes .next
//thus removing node and bridging gap between them
//-thinking like the insert we have edge cases like the length and 0 
//--where we make use of other methods this case (shift and pop)
//if index is greater than length or less then 0 return undefined
//decrement length 
//return the removed node 

// let list = new SingleLinkedList()


// list.push('zero')
// list.push('one')
// list.push('two')
// list.push('three')
// list.push('four')
// list.push('five')
// list.push('six')
// list.push('seven')

// console.log(list)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Reverse Intro
//reversing linked list in place
//thinking start from tail set that.next to previous node loop over doing that to whole list
//--ahh so we are NOT flipping it but simply reversing the direction it move aka its connection or pointer
//--that for the build backwords method

//we start at head , head becomes the tail 
//its next .next elemtn now point to this tail or previous node 
//--note that before reassining its .next we want to capture what it previously was to then connect back to this one
//and so forth till reach the end and set what was previously the tail to be the head now



//my reverse function 
// reverse() {
//     for (let i = this.length - 1; i >= 0; i--) {
//         //other vars to capture and reassign
//         let test = list.get(i)
//         test.next = list.get(i - 1)
//         console.log(test)
//     }
//     let current = this.head
//     this.head = this.tail
//     this.tail = current
//     this.length -= 1
//     return this
// }

// //COLT REVERSE
// //clever as its more effective and efficient to simple loop one and use reasignment vs. multiple loop with the list.get() method
// coltReverse() {
//     //temp varible for 3 cup swap , also for loop starting at the beging of the list
//     let node = this.head
//     //reassign head node to = tail
//     this.head = this.tail
//     //and tail node to = head node captured by node varible
//     this.tail = node
//     //capture the previous node to the current 'node'
//     let prev = null
//     //captuer the next node to the current 'node
//     let next
//     //loop thorugh each node in the list 
//     for (let i = 0; i < this.length; i++) {
//         //here we defined 'next' to = the current 'node'next / node the current is poitig to
//         next = node.next
//         //(feel this line is key -  the only line where somthing not prevously define in variabler is bing reassigned)
//         //here the current node.next property/ pointer becomes the value of of prev
//         node.next = prev
//         //here prev is reassigned to the value of node/or current 'node'
//         prev = node
//         //node is reassigned to the next (node.next)  this way we move on to the next node in list 
//         node = next
//     }
//     //return the newly ordered/reversed list
//     return this
// }



//wanted to note there inside the loop the varibles completly shuffel where each becomes the value or the other before reassignment 
//--then does same thing repeatedly if we had repeating list you'd notice varible move from right side of = to left everytime
//---some type of technique or strategy there that is usefull
//----also note that there is just one line in there where the left side of = is not previously defined in a varible 
//--that line is the key while the other are reassinig value to be used
//--that actual is what is creating the pointer to the previous (aka changing direction of its pointer from right to left)
//the keys are all but major one are that line and the last where we move onto the next node in list allowig for all to shift
//----while all other they only use varible predefined
//they move like a sliding block:
//      1       2       3       4        5
//prev  node    next
//      prev    node    next
//              prev    node    next
//                      prev    node    next
//                              prev    node    next

//think we have to work with the ral ones/direct chanhgge with tose 
//and only use the vars to pull info needed other then that or other side on = (here) we dont use them
//that way can re

//swap the head and the tail 
//create var capture head node
//create var capture its next
//create var capture the next .next
// loop through the list

//my solution would i beieve be O(n^2) as we in sense have a loop withing a loop 
//while colt solution original i attepted to creat only the main loop and just swaping value/reassigning which is constant  O(n)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Singly Linked List: Big O Complexity
//insertion O(1)
//Removal O(1) or O(n) but we only want the worst so === O(n)
//Searching O(n)
//Access O(n)

//singly linked list win in insertion and deletion compared to arrays
//if you need to access data only in order (think like all or nothing)  and not just the 5thmillion value
//then singly linked list better for that
//if you care more about insertion and deletion and no so mush 'random access'


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Recap
//single linked list are greate alternative to arays when insertion and deletion at the beginnig area frequently required
//array contain a build in index whereas liked list do not
//the idea of a list data structure that consist of nodes is the foundationnfor other data structures like stacks and queues


// ----------------------------------------------------------------------------------------------------------------------------------------------

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



let list = new SingleLinkedList()


// list.push('zero')
// list.push('one')
// list.push('two')
// list.push('three')
// list.push('four')
// list.push('five')
// list.push('six')
// list.push('seven')
// console.log(list)

// list.reverse()
// list.coltReverse()
// console.log(list)
