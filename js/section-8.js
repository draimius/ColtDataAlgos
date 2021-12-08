"use strict";
console.log("section-8");
//RECURSION CHALLANGES

// Power - write a function which accepts a base and an exponent. Should return the power of the hbase to the exponent.
// --function should mimic the functionnality of Math.pow() - dont worry about negatives base or exponents

// *iterable*
// let power = function (base, x) {
//     let total = base;
//     for (let i = x; i > 0; i--) {
//         total *= base;
//     }
//     return total;
// };

// *Helper recursion style*
// let power = function (base, x) {
//     let total = 1

//     function helper(helperBase) {   //thinking the base is gonna be based upon the x value (aka number of times the base should be multiplied by itself)
//         if (x == 0) { return 1 }
//         //we know there has to be a base case
//         total = total * helperBase
//         //we know the function must call itself
//         x--
//         helper(base)
//     }
//     helper(base)
//     return total
// };
//note helper function calls we write calling self not only in function but have to again outside of it before the return to actually get it started
//also great way to get idea for the pure recurstion function



// *Pure Recursion*
let power = function (base, x) {
    if (x === 0) { return 1 }
    return base * power(base, x - 1)
};
//nailed it




// *Pure Recursion* - would say one that usually takes the most thinking


// console.log(power(20, 3));


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Factorial - write a function which accepts a number and returns the factorial of that number.
// --factorial is the product of int's and all int below it decremeting from start int

// *iterable*
// let factorial = function (num) {
//     let total = 0
//     for (let i = num; i > 0; i--) {
//         total *= i
//     }
//     return total
// };



// *helper*
// let factorial = function (num) {
//     let total = 0
//     let helper = function (helperNum) {
//         if (num === 0) {
//             return
//         }
//         total *= helperNum
//         num--
//         helper(num)
//     }
//     helper(num)
//     return total
// }
//thinkin in this case either iterable or pure recursive is better or maybe i just wrote complex/when not needed but feel ended up more complex then need (helper not needed)




// *pure recursion*
let factorial = function (num) {
    if (num === 0) { return 1 }
    return num * factorial(num - 1)
}

//nailed it
//here colt added 'if (x < 0) return 0' guess as curcit break in event less then zero, negatives  (we passed test just fine without it but good to note)


// console.log(factorial(4))


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Product Of Array - write function  which takes in an array of numbers and return the product of them all (aka sum of all)

// *iterable*
// let productOfArray = function (arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total
// }

// **do the helper only when we can clearly see the pure recursion else dont bother */


// *pure recursion*
let productOfArray = function (arr) {
    if (arr.length === 0) { return 1 }
    return arr[0] * productOfArray(arr.slice(1))

}
//always got to think about the operation and the base case return (and that last go around)
//depending what we are doing lot times return from base case is often not need(though sure that's not always true)
//return of base case has to make sense to the operatin but also in sense be null as to not effect the already returned result we want 


// console.log(productOfArray([1, 2, 3, 10]))
// got it so we multiply now add, instruction not very secific there but used ex to get there



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Recursive Range - function which accepts a number and adds up all the numbers from 0 to the number passed to the (sound lot like factorial??)

// *iterable*
// let recursiveRange = function (num) {
//     let total = 0
//     for (let i = num; i > 0; i--) {

//         total += i
//     }
//     return total
// }



// *pure recursion*
let recursiveRange = function (num) {
    if (num === 0) { return 0 }
    return num + recursiveRange(num - 1)
}

// console.log(recursiveRange(10)) //55
// console.log(recursiveRange(6)) //21
//feel like basically did this earlier regedless starting to see some simple pattern nailing these easy ones



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Fib - function which accepts a number and returns the nth number in the Fibonacci sequence. (fib is ints only where every num after is equal to the sum of previous two)

// *iterable*
let fib = function (num) {
    let total = 0
    let sum = 1
    let previousSum = 0
    for (let i = 1; i < num; i++) {
        total = previousSum + sum
        previousSum = sum
        sum = total
    }
    return total
}
//got it with iterable was bit more then initially expected , want to clean this up for i move on (how can i make this simpler)
//think we do need the three var's as one can't hold all as we need each to hold diff values at diff time in iteration
//--however suspect there is a way to return same result without having to declare all something having to do with math's equation here somewhere haven't seen just yet





//we peak at solution this one is a tricky one can't say would have though of that 
// *pure recursion*

let fib1 = function (num) {
    if (num <= 2) { return 1 }
    return fib(num - 1) + fib(num - 2)
}



// super interesting we've return function call , value plus function call , i however didn't think to return funcitn call plus function call
// very clever and interesting , powerful 
// ***also not that the base case takes advantage of one value meeting param both dont meet, but if one meets it returns and stop there dont care if other dosent meet param
// --interesting though process go through to figure this one out
// ----also using the input genius ofcourse we use it be how its used is awesome


// console.log(fib(4)) //3
// console.log(fib(10)) //55


// 0   0+1  1+1  2+1  3+2  5+3 8+5 13+8
// 0   1   2   3   5   8   13  21
//math here again where next will = previous sum plus next - previous number  



// ----------------------------------------------------------------------------------------------------------------------------------------------

//take aways:
// different returns- from just function call , to value + call, or call + call , ect.... dependent on return needed
// what is returned from the base case matters very much
// --remember that base case is that last iteration 
// --often what returns from base is strategic to be null/void to what has already been returned as to not effect, or change it
// ----though sure that not always the case but seem to be common patter at least for now
// use the other styles to gian insight and idea, from iterable to helper to the pure recursion





