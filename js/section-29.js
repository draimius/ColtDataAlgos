'use strict'
console.log('section-29')

// Dynamic Programming - Intro

//recursion is a big part of dynamic programmin
//---(to understand recursion bit better always remember your working with a stack, that alone helps lots)


//OBJECTIVES:
//what dynamic programming is
//explain what overlapping subproblems are
//understand what optimal substructure is
//solve more challenging problems using dynamic programming

//definition - a method for solving complex problem by breaking it down into a collection of simpler
//  --subproblems, solving each of thos subproblems just once, and storing their solutions.


// dynamic programming simply mean finding the optimal solution



//--------------------------------------------------------------------------------------------------------------------------------

// Overlapping Subproblems

//a problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

//ex fib sequence , we are using the same process each time just dif input


//we need overlapping subproblems or overlapping sub process using the same input??
// where we would use the same process and same in one slot and new input in the other
// (overlaps do to that input going through the same process more than once) and is also true for all others--
// --as the new input in previous is then use again with a new input in same proccess and this remains true for all
// so we see how we have that problem/function run overlapping/needed to be processed more than once

//merge sort though has sub problems does not overlap as the same input is never being passed into to be procced
//--in the same way , even if its shows up multiple time is not processed the same way????
// no repeat as we are sorting different input everytime


//--------------------------------------------------------------------------------------------------------------------------------

// Overlapping Substructure

// a problem is said to have optimal substructure if an optimal solution can be constructed from optimal
// -- solutions of its subproblems (if construct solution out of many solutions that makes it a optimal solution)

//like in the shortest path algo the path of path say from a to f
// that path is made up of several shortest path like from a to b, from a to c , a to d ect...
// we always have to shortest path of each vertex to the next till we reach our end vertex
// --where like said earlier its shortest path was constructed from several shortest paths combined





//--------------------------------------------------------------------------------------------------------------------------------

// Writing a Recursive Solution


let fib = function (n) {
    if (n <= 2) { return 1 }
    return fib(n - 1) + fib(n - 2)
}


// hit the base case to return appropriate number, when at fib(1 or 2) to only possible return is 1 
//it then takes that and begind to work backwards calculating all other fibs as was waiting on a return value
// console.log(fib(12))

// got to think as to what is being passed in and how is it being changed (base case is either short circut or where it should stop)
// sometime the base case return is used just to stop the recusion other time its apart of the actual calculation
// ---or else of the final solution be it number or anything else



//--------------------------------------------------------------------------------------------------------------------------------

// Time Complecity of Our Solution

//think its n log n in time complexity no its n ^2 i think
//--regardless it
//time complexity is actually O(2^n) actally worse then quadratic or O(n^2)
//--grow large very very quickly is very bad extremly bad worse then quadratic
// i wouldn even know how to make algo like that or havent ran into anything like that at all






//--------------------------------------------------------------------------------------------------------------------------------

// What's wrong with our solution??

//its that we are repeating things - we are doing the same input and function several time (constantly recalculation)
//--when it would not be needed if we just remembered the value after the first calculation
//-then return that value everytime that is called vs. going through the whole proccess again

//whole things is about remembering if we could do that makes thing much faster and effective

// ******
//what if we could remember the values of previous solutions
// Enter dynamic programming - using past knowledge to make solving a future problem easier




//--------------------------------------------------------------------------------------------------------------------------------

// Memoization
//storing the result of expensive function calls and returning the cached result when the same inputs occur again
//if same call we look in storage see if there if so use that result (if not the process as usual  ) 

//idea is to use some structure to store/log result to then be used in later function calls as to not repeat work

let memoFib = function (n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1
    memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo)
    return memo[n]
}


console.log(memoFib(100))

//the memo dosent always have to be an array could have been an object same way
//


//its crazy how much faster it is
//its stores everything array and we always have n so we have random access in constant time
//--so really all its doing it adding one number to another every time which is constant at well
//so yeah shit is fast and very clever something so simple of just storing the results to acess later calls
//may take up a bit more space but makes up for it more than enough in the speed of processing gained
//---think about doing this
// what about iterable how slow or fast is that do we run into the same issue we do with recursion??????
//iterable sounds like its be linear though not sure (something to test and look at )

// all it ends up doing is access array grab value + to again access array and grab value (then just adds them and done)
// once we have that first pair of values the 1, 1 after hit the return everything else is just
//-- cancading addition of values (no more needed to wait on return of anything after that first one)
//here basically only needed to get return twice for the whole function
// fact that we have result store short circut many calcuation
//we only have to do the work once, then never again no matter how many time you call the function with same input

//this shit is crazy was little scared but passed in 1000 as imput and not even a full second returned that's wild

//thats is legit wild how quickly it returns(crazy how something not crazy complex, compicated ect.. make such a drastice difference )
//my guess is that its O(log (n))

//--------------------------------------------------------------------------------------------------------------------------------

// Time Complexity of Memo Solution

//to store and pull values from the array or object aka memo used are all constant time
//time complexity of actual calculations done is O(n) grow linear
//though complexity on all function calls, i believe is different


//--------------------------------------------------------------------------------------------------------------------------------

// Tabulation: A Bottom Up Approach
//storing the result of a previous result in a table usually an array
//usually done using iteration
//better space complecity can be achieved using tabulation



// previously like in the fib we have been working from top to bottom
// like doing fib(7) then 6, 5, 4, 3, ect.. till base case and we begin to return
// aka starting with what we are trying to find then filling in all the gaps (top down)


// in fib a bottom up approach would be starting at fib 1 and 2 then add and go from there
//same result dif direction


//soung like here with fib we start at the base case still using stored result for calulatino
//--difference is we only loop(as it'll be iterable here) to the number passed in

let tabFib = function (n, tab = []) {
    if (n <= 2) return 1
    //this initialized the array where result will be store for later access
    let fibNums = [0, 1, 1]
    // start at 3 for multiple reasons i think, because the 0, 1, 2 indecies in fibNums have already been assigned 
    //also seems not so much about the actual value in index but simply about reaching and pulling from the correct index
    //--accessing correct index and following the pattern of previous two = the next ect...
    for (let i = 3; i <= n; i++) {
        //its like initializing for fib sequence9has a starting point to go from
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n]
}

//not using a function call but instead still operation but constantly pushhing in its result
//--till you reach the number wanted

//wicked fast as well think may be as fast if not faster then above and tried 10000 this gives me infinity and other stackoverflow
//so took note that well this version never used the stack or had function waitng on a return for theirs and that why it used less 
//--space no stack involved needed to track or wait for returns

console.log(tabFib(100))


//--------------------------------------------------------------------------------------------------------------------------------

// tabulation and memoization two diff strategies for dynamic programming
// memoization would take up more space (because it uses the stack, function call is waiting for return before its return)
//  --for memo its storing each result but also storing each function call aka the 2^n
// also depending on operation and function can run into a stack overflow ( someting that would never happend in tab version)

// time complexity of both tab and memo is
//  O(n)
//  however in space tab is best





//--------------------------------------------------------------------------------------------------------------------------------
