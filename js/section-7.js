'use strict'
console.log('section-7')

// Recursion: a way of approching solutions
// two way we have: 
// recursive - (what learning now )
// iterable - (the way i've been solving challanges)

// taking one challenge and doing it over and on a progressivly smaller peice or changing peice until we hit some endpoint/base case

// Objectives:
// Define what recursion is and how it can be used 
// Understand the two essential components of a recursive function
// Visualize the call stack to better debug and understand recursive functions
// Use helper method recursion and pure recursion to solve more difficult challenges


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Why Use Recursion?

// what is recursion?
// --in short recursion is a function that calls itself

// why do we care?
// used all the time and everywhere
// powerful tool to solving challanges

// Ex.
// JSON.parse/ JSON.stringify
// document.getElementById and DOM traversal algorithms
// Object travelsal
// seen often in complex data structures 
// oftan cleaner alternative to iteration


// ----------------------------------------------------------------------------------------------------------------------------------------------

// The Call Stack

// when a function is being called recursively over n over what exactly is happening?

// in almost all program languages, there is a built in data structure taht manages what happends when function are invoked (aka in what order they run)
// the structure in charge of that is called the Call Stack (a 'STACK' data structure actual type)

// call stack can be though of as a stack of papers
// when a function is called/invoked it is place (pushed) on the top of the call stack
// then when javascript sees the return keyword or when the fucntion ends, the compliler will remove (pop) it from the call stack
// key note: that we add and we remove from the Top of the stack(of papers/ the structure)

// in source of chrome tools can set breakpoint and view/watch as things are added and removed from the call stack
// shows basically when call function in function move to things most recently added and complets that first to get return removes it the is able to 
// --continue to function previously called
// typically when working with function writen style of iteration that how stack will operate
// --things being added and removed when done 

// this however is not completely true for recursive method of probolem solving as the function is continuously invoking itself
// --aka continuously adding itself to the call stack (only once reaches end or base case, can function coclude and then be removed from stack)
// ----we keep pushing new functions onto the call stack (same function)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// First Recursive Function

// Game plan:
// for every recursive function there are 2 key elements
// -function calling itself
// -a base case (aka the stoping point)

// Essintion:
// *base case
// *different/changing input
// *function call

// Example - 
function countDown(num) {
    if (num <= 0) {
        console.log('all done')
        return
    }
    console.log(num)
    num--
    countDown(num)
}
// countDown(11)

// ex.2 me trying myself
function odd(arr) {
    console.log(arr[0])

    //change/decrement the input
    arr = arr.slice(1)

    //base case to break out of funciton
    //important to have that return there to stop break out the function
    if (arr.length <= 0) { return }

    //the location of where we call the function again is key like here before funciton was being called before the if param could be evaluate
    //--but if we call the function after well gets a chace to be evaluated and break out of the function
    //----though sure not always but seems that function calling itself would typicaly go at the very end of the function ******
    odd(arr)
}
// odd([132, 432, 724, 677])



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Our Second Recursive Function

// Example-
function sumRange(num) {
    if (num === 1) { return 1 }
    return num + sumRange(num - 1)
}
//returns 15 : but why?
//walking through it we have stating of 5
//--then run same function but num -1 so thats 4 
//--then same thing again but nom num is 4 so that 3
//----and so forth we cointinue till the base case of 1
//**output result of 5+4+3+2+1 = 15     just like that pretty kick ass and interesting */

// console.log(sumRange(5))

// this is an interesting one, base case is very similar
// but in the return is different where involves a operration but also operation with a function call aswell
// now only takes the input but addas that input to function call containing said input to run function agains ect... (its cool minute to wrap head around it)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Writing Factorial Iteratively

// 4! factorial (aka 4*3*2*1) (seems to mean decrementing multiplication in my words)


// Recursive--------------------------------------
function factorial(num) {
    if (num === 1) { return 1 }
    return num * factorial(num - 1)
}


// Iterable--------------------------------------
// function factorial(num) {
//     let total = 1
//     for (let i = num; i > 0; i--) {
//         total *= i
//     }
//     return total
// }

// console.log(factorial(5))

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Common Recursion Pitfalls

// -forgetting a base case
// -incorrect base case parameters
// -forgetting to change input on recursion call
// -incorrect return on base case
// -
// -

// all above are interconnected and rely on eachother

// ps - call stack exceeded (aka a stack overflow)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Helper Method Recursion

// commonly used design patter with recursion
// so far recursive function we've writen have been stand alone
// they only call themselves from start to finish

// with helper method recursion we have two function 
// -we have our Main outer function we'd call and pass something in
// -then inside that another function a recursive funciton that calls itself
// --commonly done when need to complide data (like array, list, ect...)

// reason we do this, do to the issue that arises when we declare or assign variables
// if we assign varialbes in a recursive function (will constantly be RESET back to whatever was originally set)
// we cant capture data to var within a recursive function 
// --easy solution to this is to define var outside the recursive function (aka in the outer main/parent function)

// Example - 
function collectEvenValues(arr) {
    let result = []


    //actual recursive function
    function helper(helperInput) {
        //base case to exist recursion
        if (helperInput.length == 0) {
            return
        }
        //params checking for even's , checking only the first value each time
        if (helperInput[0] % 2 == 0) {
            result.push(helperInput[0])
        }
        //recursive call with changing input
        helper(helperInput.slice(1))
    }
    //however recursive function has been defined but not called 
    // so we do that outside of it as well to get it started first go around
    // this makes inside function run recusivly till base case collecting all values then, the main function finishing up and returning results 
    helper(arr)


    //only returns results after all recursing has been complete, as never get to that line code till after (as function call goes to stack and its recursion)
    return result
}


// console.log(collectEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))
// returns [2, 4, 6, 8, 10, 12, 14]
// this pretty kick ass its like a loop without a loop recusion that is 


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Pure Recursionv :
// -meaning function is totaly self contained no helper, parent ect.. only one function

// no helper methods
// pure recursion not nessesarily better or worse will vary


// Example - same challenge as before this time with pure recursion
// though shorter bit more conviluded not as clear (yet will learn more) as to what exactly is happening or how it works
function collectOddValues(arr) {
    //array to collect data 
    // in this case acts more like a temp container for each iteration
    // that then get added to the next and next temp container 
    // in the end have the full array of values wanted (genius)
    let newArr = []

    //base case to stop recursion
    if (arr.length === 0) {
        //important bit here as array is empty
        //it actually returns a empty array which in this case is basically null to the newArr as it should be
        //not only that but also gets us out this function to then , collect all returned values up and reutrn newArr
        return newArr
    }

    //checking for odd value if true add to newArr
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    // this here is the key like a += adding to array calling its self till reaches base case ( aka never get to below return till this reaches its end)
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    // once all collected and reaches base case we return are newArr
    return newArr
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))


// first though while aiming to understand it here in the newArr = , that the key i think
// like before where we did the adding of num + function(num-1) ect...
// --we we're basically able to follow with number as return one then next and so forth till base case
// ----believe here is the same thing only this time its an array building up , like so ([1, function(arr)] => [1, 3, function(arr)] => ect...)
// ------or atleast that's what i believe is happening essentially (thnk im right)

// cause we have what already has been added plus the next iteration = those two together + the next iteration ect.... ( think i got it)
// *its the fact its reasigning the value of var using the var (vary similar to collecting a total summing number ect...)
// *collection a total like usually would, its like a += differece is the kind and using recursino as a loop instead of a declared one


//Genius Shit Dawg Bruv

//Helpful Methods For Pure Recursion - 
// -slice
// -spread
// -operator
// -concat
// -make copies of array as to not mutate original

// rememvber that strings are immutable so use methods like slice, substr, or substring to make copies
// copies of objcets use Object.assign, or the spread operator
